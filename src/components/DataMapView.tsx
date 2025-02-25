'use client';

import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import VectorSource from 'ol/source/Vector';
import { Vector as VectorLayer } from 'ol/layer';
import WKT from 'ol/format/WKT';
import { Style, Stroke, Fill } from 'ol/style';
import { Extent } from 'ol/extent';

interface SparqlBinding {
  geometry?: { value: string };
  hasgeometry?: { value: string };
  name?: { value: string };
}

interface SparqlData {
  results: {
    bindings: SparqlBinding[];
  };
}

interface Props {
  data: SparqlData;
}

const DataMapView: React.FC<Props> = ({ data }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const popupContainer = document.createElement('div');
    popupContainer.className =
      'relative bg-white text-gray-800 text-sm p-2 border border-gray-300 rounded shadow-md';

    const arrowDiv = document.createElement('div');
    arrowDiv.className =
      'absolute -bottom-1 left-5 w-0 h-0 ' +
      'border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent ' +
      'border-t-[5px] border-t-white';
    popupContainer.appendChild(arrowDiv);

    const popupOverlay = new Overlay({
      element: popupContainer,
      autoPan: true,
    });

    const map = new Map({
      target: mapRef.current,
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
      layers: [
        // new TileLayer({
        //   source: new XYZ({
        //     url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        //   }),
        // }),
        new TileLayer({
          source: new OSM(),
        }),
      ],
      overlays: [popupOverlay],
    });

    const handleMapClick = (evt: any) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (feat) => feat);
      if (feature) {
        const label = feature.get('label') || 'No name';
        popupContainer.innerHTML = `<p class="m-0">${label}</p>`;
        popupContainer.appendChild(arrowDiv);
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

    const features = data.results.bindings
      .map((item) => {
        const wkt = item.geometry?.value || item.hasgeometry?.value;
        if (!wkt) return null;

        const label = item.name ? item.name.value : 'No name';
        const feature = wktFormat.readFeature(wkt, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        });
        feature.set('label', label);
        return feature;
      })
      .filter(Boolean) as any;

    vectorSource.addFeatures(features);

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        stroke: new Stroke({
          color: '#0066ff',
          width: 2,
        }),
        fill: new Fill({
          color: 'rgba(0, 102, 255, 0.1)',
        }),
      }),
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
