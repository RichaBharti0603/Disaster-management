import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const [disasterData, setDisasterData] = useState([]);

  // Fetch disaster alerts (Dummy API for now)
  useEffect(() => {
    fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10")
      .then((response) => response.json())
      .then((data) => {
        setDisasterData(data.features);
      })
      .catch((error) => console.error("Error fetching disaster data:", error));
  }, []);

  return (
    <div>
      <h2 className="text-center my-3">Live Disaster Map</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
        {/* OpenStreetMap Tile Layer */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Disaster markers */}
        {disasterData.map((disaster) => (
          <Marker
            key={disaster.id}
            position={[
              disaster.geometry.coordinates[1],
              disaster.geometry.coordinates[0],
            ]}
          >
            <Popup>
              <b>{disaster.properties.place}</b> <br />
              Magnitude: {disaster.properties.mag}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
