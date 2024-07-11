import { useContext } from "react";
import "./TripCard.css";
import { TripContext } from "../../../context/trip.context";

interface TripCardProps {
  id: string;
  notes: string;
  destination: string;
}

export const TripCard = (props: TripCardProps) => {
  const { handleDeleteTrip } = useContext(TripContext);
  const { id, notes, destination } = props;
  return (
    <div className="tripCard">
      <h2>{destination}</h2>
      <p>{notes}</p>

      <div className="operations">
        <button
          onClick={() => {
            handleDeleteTrip(id);
          }}
        >
          Remove
        </button>
        <button>View Details</button>
      </div>
    </div>
  );
};
