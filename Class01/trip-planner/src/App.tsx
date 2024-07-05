import MyInformation from "./components/MyInformation";
import Header from "./components/Header";
import { Parent } from "./components/Parent";

function App() {
  // I can still have some JS logic here
  const subjectName = "ReactJS";
  console.log(`Hello from ${subjectName}.`);

  const todayDate = new Date().toDateString();

  return (
    /**
     * React JSX expression can have only 1 parent element
     * We can wrap it using div or another HTML element or we can use REACT.FRAGMENT
     *
     * <> </> is a shorthand for <React.Fragment> </React.Fragment>
     * Important => React Fragment cannot be styled
     */
    <>
      <Header />

      <main>
        <h1>Hello from React.</h1>
        <p>Today is our first {subjectName} class.</p>

        <p>Today's date is: {todayDate}.</p>

        <MyInformation />

        <hr />
        <Parent />
      </main>
    </>
  );
}

export default App;
