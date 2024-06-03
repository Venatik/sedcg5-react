import { Child } from "./Child";

export const Parent = () => {
  const bucketList = ["banana", "apple", "orange"];
  return (
    <div>
      <h1>Hello from Parent</h1>
      <Child message="I am a prop passed from Parent." bucket={bucketList} />
    </div>
  );
};
