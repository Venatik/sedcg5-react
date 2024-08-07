import "./AddTrip.css";
import { DraftTrip, Currency, Status } from "../../types/trip";
import { useState } from "react";

export const AddTrip = () => {
  const [draftTrip, setDraftTrip] = useState<DraftTrip>({
    destination: "",
    notes: "",
    imageUrl: "",
    amount: "",
    currency: Currency.MKD,
    startDate: "",
    endDate: "",
    status: Status.PLANNING,
  });

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string
  ) => {
    const value = event.target.value;
    console.log(value);

    setDraftTrip({
      ...draftTrip,
      [key]: value,
    });
  };

  return (
    <form className="createTripForm">
      <input
        type="text"
        placeholder="Destination"
        value={draftTrip.destination}
        onChange={e => handleChangeInput(e, "destination")}
      />

      <input
        type="text"
        placeholder="Notes"
        value={draftTrip.notes}
        onChange={e => handleChangeInput(e, "notes")}
      />

      <div className="dueDateInput">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={draftTrip.startDate}
          onChange={e => handleChangeInput(e, "startDate")}
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          value={draftTrip.endDate}
          onChange={e => handleChangeInput(e, "endDate")}
        />
      </div>

      <input
        type="text"
        placeholder="Image URL"
        value={draftTrip.imageUrl}
        onChange={e => handleChangeInput(e, "imageUrl")}
      />

      <input
        type="text"
        placeholder="Amount"
        value={draftTrip.amount}
        onChange={e => handleChangeInput(e, "amount")}
      />

      <select
        value={draftTrip.currency}
        onChange={e => handleChangeInput(e, "currency")}
      >
        <option value="MKD">Macedonian Denar</option>
        <option value="EUR">Euro</option>
        <option value="USD">US Dollar</option>
      </select>

      <button>Save</button>
    </form>
  );
};
