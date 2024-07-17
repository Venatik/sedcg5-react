import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  // Children are the elements/components that we specify/include in between the opening and closing <Main> tags in App.tsx

  return (
    <div className="mainContainer">
      {children}
      {/* {props.children} is also acceptable */}
    </div>
  );
};
