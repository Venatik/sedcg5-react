import "./App.css";
// import { UseCallBackExample } from "./components/UseCallback";
import { UseMemoExample } from "./components/useMemo";

function App() {
  return (
    <>
      {/* <UseCallBackExample /> */}
      <UseMemoExample />
    </>
  );
}

export default App;

// useCallback is used to memoize functions
// useMemo is used to memoize values
