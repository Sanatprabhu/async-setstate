import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meaningOfLife: 47,
    };
  }
  handleCLick = () => {
    this.setState((prevState, prevProps) => {
      return {
        meaningOfLife: prevState.meaningOfLife + prevProps.increment,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleCLick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
