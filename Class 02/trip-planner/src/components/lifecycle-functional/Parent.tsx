import { useState, useEffect } from "react";
import { Child } from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("Initial message from parent.");
  const [userInput, setUserInput] = useState("");

  // COMPONENT DID MOUNT
  // Will execute once after the component is mounted
  useEffect(() => {
    console.log("COMPONENT DID MOUNT PARENT");
  }, []);

  // COMPONENT DID UPDATE
  // Will execute after the component is initiated and after every update (state change)
  useEffect(() => {
    console.log("COMPONENT DID UPDATE PARENT w/o DEPS ARRAY");
  });

  // COMPONENT DID UPDATE
  useEffect(() => {
    console.log("COMPONENT DID UPDATE WITH userInput DEPS ARRAY");
  }, [userInput]);

  const changeMessage = () => {
    setMessage("Updated message from parent.");
  };

  const changeUserInput = (value: string) => {
    setUserInput(value);
  };

  return (
    <>
      <div>
        <h1>{message}</h1>
        <p>{userInput}</p>

        <button onClick={changeMessage}>Change Parent Message</button>
        <input
          type="text"
          onChange={event => changeUserInput(event.target.value)}
        />
      </div>

      <Child message="Message that came from parent" />
    </>
  );
};

export default Parent;
