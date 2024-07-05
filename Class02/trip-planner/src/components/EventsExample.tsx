import { useEffect, useState } from "react";

export const EventsExample = () => {
  // [name of variable, name of function to update the variable] = useState(initial value)
  const [count, setCount] = useState(0); // The value in useState is the initial value of the variable
  const [tripDestination, setTripDestination] = useState<string>("");
  const [trips, setTrips] = useState<string[]>(["London", "Madrid", "Paris"]);
  const [shouldShow, setShouldShow] = useState(false);

  const handleIncrement = () => {
    console.log("Button increment is clicked.");
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = (message: string) => {
    console.log("Button decrement is clicked." + message);
    setCount(count - 1);
    console.log(count);
  };

  const handleChange = (value: string) => {
    console.log(value);
    setTripDestination(value);
  };

  const addTrip = () => {
    setTrips([...trips, tripDestination]);
    setTripDestination("");
  };

  const toggleShow = () => {
    setShouldShow(!shouldShow);
  };

  // useEffect(() => {
  //   if (!shouldShow) {
  // do this
  //     alert("from false to true");
  //     return;
  //   }
  //   alert("from false to true");
  // different logic here
  // }, [shouldShow]);

  useEffect(() => {
    console.log("new trip added");
  }, [trips.length]);

  return (
    <section>
      <h2>Events Example</h2>
      <p>The current count is: {count}</p>
      {/* First approach */}
      <button onClick={handleIncrement}>Increment</button>
      {/* Second approach */}
      <button onClick={() => handleDecrement("decrement message")}>
        Decrement
      </button>

      <hr />

      <h2>{tripDestination}</h2>

      <div>
        <input
          type="text"
          placeholder="Add trip destination"
          value={tripDestination} // Controlled input
          onChange={event => handleChange(event.target.value)}
        />
        <button onClick={addTrip}>Add Trip</button>
      </div>

      <ul>
        {trips.map(trip => (
          <li key={trip}>{trip}</li>
        ))}
      </ul>

      <hr />

      {/* Do not use this approach. State changes should be done with functions, not directly in the JSX! */}
      {/* <button onClick={() => setShouldShow(!shouldShow)}>Toggle Show</button> */}
      <button onClick={() => toggleShow()}>Toggle Show</button>

      {/* If shouldShow is true the below section will be shown. Conditional rendering. */}
      {shouldShow && (
        <section>
          <div
            style={{
              backgroundColor: "red",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "magenta",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "green",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
        </section>
      )}
    </section>
  );
};
