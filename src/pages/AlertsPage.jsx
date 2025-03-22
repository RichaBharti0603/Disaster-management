import React, { useEffect, useState } from "react";

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await fetch(
          "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5"
        );
        const data = await response.json();
        console.log("Fetched Alerts:", data);
        setAlerts(data.features || []);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    }

    fetchAlerts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Live Disaster Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts available.</p>
      ) : (
        <ul className="list-group">
          {alerts.map((alert, index) => (
            <li key={index} className="list-group-item">
              <strong>{alert.properties.place}</strong> - {alert.properties.mag} magnitude
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsPage;
