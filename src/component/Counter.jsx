import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => this.setState((preNum) => ({ count: preNum.count++ }));
  decrementCount = () => this.setState((preNum) => ({ count: preNum.count-- }));
  resetCount = () => this.setState(() => ({ count: 0 }));

  render() {
    return (
      <div>
        <div className="clicker">
          <div className="startClicker">Counter: {this.state.count}</div>
          <div>
            <button onClick={this.incrementCount} className="btn btn-success">
              Add Counter
            </button>
            <button onClick={this.resetCount} className="btn btn-danger">
              Reset Counter
            </button>
            <button onClick={this.decrementCount} className="btn btn-success">
              Reduce Counter
            </button>
          </div>
        </div>
      </div>
    );
  }
}
