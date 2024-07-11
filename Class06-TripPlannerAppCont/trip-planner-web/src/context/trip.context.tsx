import { createContext, ReactNode, useState, useEffect } from "react";
import { DraftTrip, Trip } from "../types/trip";
import {
  deleteTrip,
  fetchTrips,
  getTripDetails,
} from "../services/trip.service";
import { createTrip } from "../services/trip.service";

interface TripContext {
  plannedTrips: Trip[];
  isLoading: boolean;
  handleCreateTrip: (draftTrip: DraftTrip) => Promise<void>;
  handleDeleteTrip: (tripId: string) => Promise<void>;
  handleGetTripById: (tripId: string) => Promise<Trip | undefined>;
}

const defaultContextValues: TripContext = {
  plannedTrips: [],
  isLoading: false,
  handleCreateTrip: async () => {},
  handleDeleteTrip: async () => {},
  handleGetTripById: async () => ({} as Trip),
};

createContext(defaultContextValues); // This is the context object that we will use in our components

export const TripContext = createContext(defaultContextValues);

interface TripContextProviderProps {
  children: ReactNode; // Same as React.ReactNode
}

export const TripContextProvider = ({ children }: TripContextProviderProps) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [formErrors, setFormErrors] = useState({
    destination: undefined,
    notes: undefined,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchTrips = async () => {
    setIsLoading(true);
    // Fetch the data
    if (isLoading) return;
    const trips = await fetchTrips();

    // Set the trips
    console.log(trips);
    setTrips(trips);
    setIsLoading(false);
  };

  const handleCreateTrip = async (draftTrip: DraftTrip) => {
    setIsLoading(true);

    try {
      if (isLoading) return; // if a request is already ongoing - exit the function

      const response = await createTrip(draftTrip);
      console.log(response);

      handleFetchTrips();
    } catch (error) {
      console.log(error);
      // TODO: Handle error if it happens
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTrip = async (tripId: string) => {
    setIsLoading(true);

    try {
      const data = await deleteTrip(tripId);
      // OPTION 1 - Refetch the updated trips from the server
      // await handleFetchTrips();

      // OPTION 2 - Update the state locally (without refetching the data from the server)
      const remaining = trips.filter(trip => trip.id !== tripId);
      setTrips(remaining);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetTripById = async (tripId: string) => {
    setIsLoading(true);

    try {
      const tripDetails = await getTripDetails(tripId);

      return tripDetails;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  // 1. Komponentata se ragja - vtor argument e prazna niza
  useEffect(() => {
    handleFetchTrips();
  }, []);

  // This effect will execute whenever the trips state prop changes
  //   useEffect(() => {
  //     console.log("I will execute when change on Trip state prop happens");
  //     handleFetchTrips();
  //   }, [trips]);

  return (
    <TripContext.Provider
      value={{
        plannedTrips: trips,
        handleCreateTrip,
        isLoading,
        handleDeleteTrip,
        handleGetTripById,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};
