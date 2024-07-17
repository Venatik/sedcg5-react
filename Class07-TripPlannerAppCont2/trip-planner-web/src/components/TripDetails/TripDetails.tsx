import { useParams } from "react-router-dom";
import "./TripDetails.css";
import { useContext, useEffect, useState } from "react";
import { TripContext } from "../../context/trip.context";
import { Trip } from "../../types/trip";
import { EditTripForm } from "./components/EditTripForm";

export const TripDetails = () => {
  const { handleGetTripById } = useContext(TripContext);
  const [tripDetails, setTripDetails] = useState<Trip | undefined>(undefined);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEnableEdit = () => {
    setIsEditing(true);
  };

  const handleDisableEdit = () => {
    setIsEditing(false);
  };

  const shouldAllowEdit = isEditing && tripDetails;

  return (
    <div className="wrapper">
      {tripDetails ? (
        <div className="detailsContainer">
          <div className="detailsHeading">
            <h2>{tripDetails.destination}</h2>
            <button onClick={handleEnableEdit}>
              {isEditing ? "Editing" : "Edit"}
            </button>
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

      {shouldAllowEdit && (
        <EditTripForm
          tripDetails={tripDetails}
          handleDisableEdit={handleDisableEdit}
        />
      )}
    </div>
  );
};
