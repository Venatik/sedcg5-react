import { createContext, ReactNode, useState, useEffect } from "react";
import { Trip } from "../types/trip";
import { fetchTrips } from "../services/trip.service";

interface TripContext {
  plannedTrips: Trip[];
}

const defaultContextValues: TripContext = {
  plannedTrips: [],
};

createContext(defaultContextValues); // This is the context object that we will use in our components

export const TripContext = createContext(defaultContextValues);

interface TripContextProviderProps {
  children: ReactNode; // Same as React.ReactNode
}

export const TripContextProvider = ({ children }: TripContextProviderProps) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleFetchTrips = async () => {
    // Fetch the data
    const trips = await fetchTrips();

    // Set the trips
    console.log(trips);
    setTrips(trips);
  };

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  // 1. Komponentata se ragja - vtor argument e prazna niza
  // 2. Kompononentata se updateira
  // 3. Komponentata umira
  useEffect(() => {
    handleFetchTrips();
  }, []);

  // This effect will execute whenever the trips state prop changes
  //   useEffect(() => {
  //     console.log("I will execute when change on Trip state prop happens");
  //     handleFetchTrips();
  //   }, [trips]);

  return (
    <TripContext.Provider value={{ plannedTrips: trips }}>
      {children}
    </TripContext.Provider>
  );
};
