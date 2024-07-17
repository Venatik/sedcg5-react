import { memo } from "react";

interface CounterControlsProps {
  increment: () => void;
  decrement: () => void;
}

export const CounterControls = memo((props: CounterControlsProps) => {
  console.log("COUNTER CONTROLS COMPONENT");
  const { increment, decrement } = props;
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
});
