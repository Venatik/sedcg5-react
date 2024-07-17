import { useState, useCallback } from "react";
import { CounterControls } from "./CounterControls";

// useCallback is used to memoize a function so that it is not recreated on every render.

export const UseCallBackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // WITHOUT USECALLBACK
  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };

  //   const handleDecrement = () => {
  //     setCount(count - 1);
  //   };

  // WITH USECALLBACK
  const handleIncrement = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(count => count - 1);
  }, []);

  const handleSetText = (value: string) => {
    setText(value);
  };

  return (
    <div>
      <h2>Use callback example</h2>
      <p>{count}</p>

      <CounterControls
        increment={handleIncrement}
        decrement={handleDecrement}
      />

      <hr />

      <p>{text}</p>
      <input type="text" onChange={e => handleSetText(e.target.value)} />
    </div>
  );
};
