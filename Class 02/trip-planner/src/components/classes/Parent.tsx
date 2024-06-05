import { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR PARENT");

    this.state = {
      message: "Initial message from parent.",
    };
  }

  // Executes after the render
  componentDidMount(): void {
    console.log("COMPONENT DID MOUNT PARENT");
    // Logic that can execute on this moment of this lifecycle of the component. Often used to fetch data from an API.
    // fetch('some_url')
  }

  // Executes when a state of the component is changed or a prop is received.
  componentDidUpdate(prevProps: any, prevState: any): void {
    console.log("COMPONENT DID UPDATE PARENT");
  }

  changeMessage = () => {
    this.setState({
      message: "Updated message parent.",
    });
  };

  componentWillUnmount(): void {
    console.log("COMPONENT WILL UNMOUNT");
  }

  render() {
    console.log("RENDER PARENT");
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Click Me!</button>
      </div>
    );
  }
}

export default Parent;
