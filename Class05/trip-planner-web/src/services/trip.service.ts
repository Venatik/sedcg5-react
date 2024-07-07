import { Trip } from "../types/trip";

export const fetchTrips = async () => {
  // Axios is a promise-based HTTP client for the browser and Node.js
  const response = await fetch("http://localhost:3000/trip");

  const data: Trip[] = await response.json();

  return data;
};
