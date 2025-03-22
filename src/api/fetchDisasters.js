import axios from "axios";

const API_URL = "https://eonet.gsfc.nasa.gov/api/v3/events";

export const fetchDisasters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.events; // Returns array of disasters
  } catch (error) {
    console.error("Error fetching disaster data:", error);
    return [];
  }
};
