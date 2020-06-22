import React, { Component } from "react";

class AboutState extends Component {
  //REVIEW
  /**
   * State keyword in react,
   * State is part constructor
   * state is object (key and value)
   */

  constructor() {
    super();
    this.state = this.initialState; //object that hold local data
  }

  initialState = {
    brand: "Tesla",
    model: "Model x",
    color: "Red",
  };

  changeTheModel = () => {
    this.setState({ model: "Model 3" });
  };

  changeTheColor = () => {
    this.setState({ color: "Green" });
  };

  render() {
    return (
      <div>
        <h1>Car brand is: {this.state.brand}</h1>
        <p>
          This brand and model such as {this.state.model} and color{" "}
          {this.state.color}
        </p>
        <button onClick={this.changeTheModel}>Show me Model 3</button>
        <button onClick={this.changeTheColor}>Show the Green color</button>
      </div>
    );
  }
}

export default AboutState;
