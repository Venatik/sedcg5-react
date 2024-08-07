import { useContext } from "react";
import { TripContext } from "../../context/trip.context";
import "./Trips.css";
import { TripCard } from "./components/TripCard";

export const Trips = () => {
  const context = useContext(TripContext);

  const { plannedTrips } = context;

  return (
    <section className="tripsContainer">
      {plannedTrips.map(trip => (
        <TripCard
          key={trip.id}
          notes={trip.notes}
          destination={trip.destination}
          id={trip.id}
        />
      ))}
    </section>
  );
};
