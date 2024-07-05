import { EventsExample } from "./components/EventsExample";
// import Parent from "./components/classes/Parent";
import Parent from "./components/lifecycle-functional/Parent";

function App() {
  return (
    <>
      <EventsExample />

      {/* Lifecycle Examples */}
      <Parent />
    </>
  );
}

export default App;
