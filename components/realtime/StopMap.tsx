"use client";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useCityStore } from "@/store/cityStore";
const StopMap = () => {
  const { centerPosition, zoom, MarkerTag } = useCityStore();

  return (
    <MapContainer
      className="w-full h-full"
      key={centerPosition?.toString()}
      center={centerPosition}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={centerPosition as [number, number]}>
        <Popup>{MarkerTag}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default StopMap;
