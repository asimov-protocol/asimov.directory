'use client';

import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import HeatmapLayer from 'ol/layer/Heatmap';
import WKT from 'ol/format/WKT';
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import Polygon from 'ol/geom/Polygon';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import { Style, Stroke, Fill } from 'ol/style';
import { Extent, getCenter } from 'ol/extent';
import { MapBrowserEvent } from 'ol';

import { exportJSON } from '@/utils';
import { SparqlBinding, LabelInfo, DataMapViewProps } from '@/types/dataset';
import ModeControl from './ModeControl';

enum Mode {
  OBJECTS = 'objects',
  HEATMAP = 'heatmap',
}

const defaultStyle = new Style({
  stroke: new Stroke({
    color: '#0066ff',
    width: 2,
  }),
  fill: new Fill({
    color: 'rgba(0, 102, 255, 0.1)',
  }),
});

const highlightStyle = new Style({
  stroke: new Stroke({
    color: '#f37021',
    width: 3,
  }),
  fill: new Fill({
    color: 'rgba(243, 112, 33, 0.2)',
  }),
});

/**
 * Helper to get the centroid of a Polygon / MultiPolygon.
 * If geometry is not a polygon, returns null.
 */
function getPolygonCentroid(geom: Geometry): Point | null {
  if (!(geom instanceof Polygon) && !(geom instanceof MultiPolygon)) {
    return null;
  }
  const extent = geom.getExtent();
  const center = getCenter(extent);
  return new Point(center);
}

const MapView: React.FC<DataMapViewProps> = ({ data }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<OlMap | null>(null);
  const selectedFeatureRef = useRef<Feature<Geometry> | null>(null);
  const objectsSourceRef = useRef(new VectorSource());
  const heatmapSourceRef = useRef(new VectorSource());

  const objectsLayerRef = useRef(
    new VectorLayer({
      source: objectsSourceRef.current,
      style: defaultStyle,
    }),
  );

  const heatmapLayerRef = useRef(
    new HeatmapLayer({
      source: heatmapSourceRef.current,
      blur: 15,
      radius: 8,
      weight: () => 1,
    }),
  );

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const popupContainer = document.createElement('div');
    popupContainer.className =
      'relative bg-white text-gray-800 text-sm p-6 border border-gray-300 rounded-lg shadow-md';

    const arrowDiv = document.createElement('div');
    arrowDiv.className =
      'absolute -bottom-1 left-5 w-0 h-0 ' +
      'border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent ' +
      'border-t-[5px] border-t-white';

    const closeBtn = document.createElement('button');
    closeBtn.className =
      'absolute top-1 right-1 p-1 text-gray-500 hover:text-gray-800';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => {
      popupContainer.innerHTML = '';
      popupOverlay.setPosition(undefined);
      if (selectedFeatureRef.current) {
        selectedFeatureRef.current.setStyle(defaultStyle);
        selectedFeatureRef.current = null;
      }
    };

    popupContainer.appendChild(arrowDiv);
    popupContainer.appendChild(closeBtn);

    popupContainer.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (
        target instanceof HTMLButtonElement &&
        target.ariaLabel === 'Export data'
      ) {
        if (selectedFeatureRef.current) {
          const featureClone = selectedFeatureRef.current.clone();
          const labels: LabelInfo[] = featureClone.get('labels') || [];
          const result: Record<string, unknown> = {};
          labels.forEach((item) => {
            result[item.key] = item.value;
          });
          exportJSON(result);
        }
      }
    });

    const popupOverlay = new Overlay({
      element: popupContainer,
      autoPan: true,
    });

    // Create the map
    const map = new OlMap({
      target: mapRef.current,
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
      layers: [new TileLayer({ source: new OSM() })],
      overlays: [popupOverlay],
    });
    mapInstanceRef.current = map;

    const modeControl = new ModeControl({
      defaultMode: 'objects',
      onChange: (mode) => {
        map.removeLayer(objectsLayerRef.current);
        map.removeLayer(heatmapLayerRef.current);

        if (mode === Mode.HEATMAP) {
          map.addLayer(heatmapLayerRef.current);
        } else {
          map.addLayer(objectsLayerRef.current);
        }
      },
    });
    map.addControl(modeControl);

    const handleMapClick = (evt: MapBrowserEvent<UIEvent>) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (f) => f) as
        | Feature<Geometry>
        | undefined;
      if (selectedFeatureRef.current) {
        selectedFeatureRef.current.setStyle(defaultStyle);
        selectedFeatureRef.current = null;
      }

      if (feature) {
        feature.setStyle(highlightStyle);
        selectedFeatureRef.current = feature;

        const labels: LabelInfo[] = feature.get('labels') || [];
        let labelsHtml = '';
        labels.forEach((label) => {
          let valueHtml: string;
          switch (label.type) {
            case 'uri': {
              const urlLiteral = label.value.split('/').pop();
              valueHtml = `<a href="${label.value}" target="_blank" class="text-blue-500 hover:text-blue-700">${urlLiteral}</a>`;
              break;
            }
            case 'literal':
              if (label.datatype) {
                valueHtml = `<button class="text-blue-500 hover:text-blue-700" aria-label="Export data">Export</button>`;
                break;
              }

            default:
              valueHtml = label.value.slice(0, 15);
              break;
          }
          labelsHtml += `<p class="m-0"><span class="capitalize font-semibold">${label.key}</span>: ${valueHtml}</p>`;
        });

        popupContainer.innerHTML = labelsHtml;
        popupContainer.appendChild(arrowDiv);
        popupContainer.appendChild(closeBtn);
        popupOverlay.setPosition(evt.coordinate);
      } else {
        popupOverlay.setPosition(undefined);
      }
    };

    map.on('singleclick', handleMapClick);

    return () => {
      map.un('singleclick', handleMapClick);
      map.setTarget(undefined);
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    objectsSourceRef.current.clear();
    heatmapSourceRef.current.clear();

    const wktFormat = new WKT();

    data.results.bindings.forEach((item: SparqlBinding) => {
      const wktValue = Object.keys(item)
        .map((key) => {
          if (item[key].datatype) return item[key].value;
          return null;
        })
        .filter(Boolean)
        .find((value) => value !== null);

      if (!wktValue) return;

      const polyFeature = wktFormat.readFeature(wktValue, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857',
      }) as Feature<Geometry> | null;
      if (!polyFeature) return;

      // Store labels on the feature
      const labels: LabelInfo[] = Object.keys(item).map((key) => ({
        key,
        type: item[key].type,
        value: item[key].value,
        datatype: Boolean(item[key].datatype),
      }));
      const label = item.name ? item.name.value : 'No name';

      polyFeature.set('label', label);
      polyFeature.set('labels', labels);
      polyFeature.setStyle(defaultStyle);
      objectsSourceRef.current.addFeature(polyFeature);

      // Also create a centroid feature for heatmap
      const geom = polyFeature.getGeometry();
      if (geom) {
        const centroidPoint = getPolygonCentroid(geom);
        if (centroidPoint) {
          const centroidFeature = new Feature<Point>(centroidPoint);
          centroidFeature.set('label', label);
          centroidFeature.set('labels', labels);
          heatmapSourceRef.current.addFeature(centroidFeature);
        }
      }
    });

    // Zoom to first feature
    const features = objectsSourceRef.current.getFeatures();
    if (features.length > 0 && mapInstanceRef.current) {
      const geom = features[0].getGeometry();
      if (geom) {
        const extent: Extent = geom.getExtent();
        mapInstanceRef.current.getView().fit(extent, {
          duration: 1000,
          padding: [50, 50, 50, 50],
          maxZoom: 14,
        });
      }
    }
  }, [data]);

  return <div ref={mapRef} className="w-full h-[500px] relative" />;
};

export default MapView;
