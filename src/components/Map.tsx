'use client';

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for Leaflet marker icons in Next.js
const MarkerIcon = () => {
  useEffect(() => {
    // @ts-expect-error - Leaflet's Icon.Default has incomplete typings
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    });
  }, []);

  return null;
};

// Create default icon once outside of component
const defaultIcon = new L.Icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type Location = {
  name: string;
  coordinates: [number, number];
  description: string;
};

type MapProps = {
  locations: Location[];
};

export default function Map({ locations }: MapProps) {
  return (
    <MapContainer 
      center={[41.3775, 64.5853]} 
      zoom={6} 
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <MarkerIcon />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker 
          key={location.name} 
          position={location.coordinates}
          icon={defaultIcon}
        >
          <Popup>
            <div>
              <h3 className="font-bold text-lg">{location.name}</h3>
              <p>{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
