interface ChildProps {
  message: string;
  bucket: string[];
}

export const Child = (props: ChildProps) => {
  console.log(props);
  return (
    <div>
      <h2>Hello from Child</h2>
      <p>{props.message}</p>
    </div>
  );
};
