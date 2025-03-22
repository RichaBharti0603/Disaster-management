export async function fetchDisasterAlerts() {
    try {
        const response = await fetch(
            "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10"
        );
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging log
        return data.features || []; 
    } catch (error) {
        console.error("Error fetching disaster alerts:", error);
        return [];
    }
}
