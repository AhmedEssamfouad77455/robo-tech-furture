import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

export default function ContactMap() {
const position = [31.204035304185954, 29.905788451991192];

  return (
    <div className="mt-52  flex justify-center items-center p-6">
      <div className="w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Robo  Tech Future Headquarters</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
