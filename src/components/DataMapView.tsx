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
import WKT from 'ol/format/WKT';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Stroke, Fill } from 'ol/style';
import { Extent } from 'ol/extent';
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import { MapBrowserEvent } from 'ol';
import { exportJSON } from '@/utils';
import {
  SparqlBinding,
  LabelInfo,
  DataMapViewProps,
  GeoDataMap,
} from '@/types/dataset';

const defaultStyle = new Style({
  stroke: new Stroke({
    color: '#0066ff',
    width: 2,
  }),
  fill: new Fill({
    color: 'rgba(0, 102, 255, 0.1)',
  }),
});

/** Highlight style for a selected feature. */
const highlightStyle = new Style({
  stroke: new Stroke({
    color: '#f37021',
    width: 3,
  }),
  fill: new Fill({
    color: 'rgba(243, 112, 33, 0.2)',
  }),
});

const DataMapView: React.FC<DataMapViewProps> = ({ data }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<OlMap | null>(null);
  const geoDataMapRef = useRef<GeoDataMap>(new Map());

  const selectedFeatureRef = useRef<Feature<Geometry> | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const popupContainer = document.createElement('div');
    popupContainer.className =
      'relative bg-white text-gray-800 text-sm p-4 border border-gray-300 rounded-lg shadow-md';

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
      }
    };

    popupContainer.appendChild(arrowDiv);
    popupContainer.appendChild(closeBtn);

    popupContainer.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target instanceof HTMLButtonElement) {
        const wkt = geoDataMapRef.current.get(target.value);
        if (wkt) {
          const wktFormat = new WKT();
          const geojsonFormat = new GeoJSON();

          const feature = wktFormat.readFeature(wkt, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857',
          });
          if (feature) {
            const geojsonObject = geojsonFormat.writeFeatureObject(feature, {
              featureProjection: 'EPSG:3857',
              dataProjection: 'EPSG:4326',
            });
            exportJSON(geojsonObject, `${target.value}.json`);
          }
        }
      }
    });

    const popupOverlay = new Overlay({
      element: popupContainer,
      autoPan: true,
    });

    const map = new OlMap({
      target: mapRef.current,
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      overlays: [popupOverlay],
    });

    const handleMapClick = (evt: MapBrowserEvent<UIEvent>) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (feat) => feat) as
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
                valueHtml = `<button class="text-blue-500 hover:text-blue-700" value="${feature.get(
                  'label',
                )}">Export</button>`;
                break;
              }
            default: {
              valueHtml = label.value.slice(0, 15);
              break;
            }
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
    mapInstanceRef.current = map;

    return () => {
      map.un('singleclick', handleMapClick);
      map.setTarget(undefined);
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;
    const vectorSource = new VectorSource();
    const wktFormat = new WKT();

    const features: Feature<Geometry>[] = data.results.bindings
      .map((item: SparqlBinding) => {
        // Find a property that has a "datatype" indicating geometry WKT
        const wktValue = Object.keys(item)
          .map((key) => {
            if (item[key].datatype) {
              // Save WKT in our geoDataMap so we can export later
              if (item.name && item.name.value) {
                geoDataMapRef.current.set(item.name.value, item[key].value);
              }
              return item[key].value;
            }
            return null;
          })
          .filter(Boolean)
          .find((value) => value !== null);

        if (!wktValue) return null;

        // Convert the WKT to a Feature
        const feature = wktFormat.readFeature(wktValue, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        }) as Feature<Geometry> | null;

        if (!feature) return null;

        // Create label info for each property
        const labels: LabelInfo[] = Object.keys(item).map((key) => ({
          key,
          type: item[key].type,
          value: item[key].value,
          datatype: Boolean(item[key].datatype),
        }));

        const label = item.name ? item.name.value : 'No name';
        feature.set('label', label);
        feature.set('labels', labels);
        feature.setStyle(defaultStyle);

        return feature;
      })
      .filter((f): f is Feature<Geometry> => f !== null);

    vectorSource.addFeatures(features);

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: defaultStyle,
    });

    map.addLayer(vectorLayer);

    if (features.length > 0) {
      const firstFeature = features[0];
      const geom = firstFeature.getGeometry();
      if (geom) {
        const extent: Extent = geom.getExtent();
        map.getView().fit(extent, {
          duration: 1000,
          padding: [50, 50, 50, 50],
          maxZoom: 14,
        });
      }
    }

    return () => {
      map.removeLayer(vectorLayer);
    };
  }, [data]);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default DataMapView;
