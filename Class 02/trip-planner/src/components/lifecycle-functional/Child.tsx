import { useEffect } from "react";

interface ChildProps {
  message: string;
}

export const Child = (props: ChildProps) => {
  useEffect(() => {
    console.log("COMPONENT DID MOUNT CHILD");
  }, []);

  console.log("FROM CHILD");
  return (
    <div>
      <h1>Child Component</h1>
      <p>{props.message}</p>
    </div>
  );
};
