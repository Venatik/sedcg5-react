import { useParams } from "react-router-dom";
import "./TripDetails.css";
import { useContext, useEffect, useState } from "react";
import { TripContext } from "../../context/trip.context";
import { Trip } from "../../types/trip";

export const TripDetails = () => {
  const { handleGetTripById } = useContext(TripContext);
  const [tripDetails, setTripDetails] = useState<Trip | undefined>(undefined);

  const params = useParams();
  const id = params.id;

  // console.log(tripDetails);

  useEffect(() => {
    if (!id) return;
    // API REQUEST => GET TRIP BY ID

    handleGetTripById(id).then(trip => {
      if (trip) {
        setTripDetails(trip);
      }
    });
  }, [id]);

  return (
    <div className="wrapper">
      {tripDetails ? (
        <div className="detailsContainer">
          <div className="detailsHeading">
            <h2>{tripDetails.destination}</h2>
            <button onClick={() => console.log("edit")}>Edit</button>
          </div>

          <p>{tripDetails.notes}</p>
          <p>
            Available budget: {tripDetails.budget.amount}{" "}
            {tripDetails.budget.currency}
          </p>
          <p>
            From: {new Date(+tripDetails.startDate).toDateString()} to:{" "}
            {new Date(+tripDetails.endDate).toDateString()}
          </p>
          <img src={tripDetails.imageUrl} alt={tripDetails.destination} />
        </div>
      ) : (
        <div>No trip found.</div>
      )}
    </div>
  );
};
