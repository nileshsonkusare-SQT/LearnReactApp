import React, { Component } from "react";

export default class DemoClass extends Component {
  render() {
    return (
      <div>
        <ContentOne></ContentOne>
        <ContentTwo></ContentTwo>
      </div>
    );
  }
}

class ContentOne extends Component {
  render() {
    return (
      <div>
        <h1>This is Content One Class</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt tempora architecto? Eum omnis reprehenderit deleniti dolore
          et quae nisi ab quibusdam accusamus! Ea placeat omnis enim quaerat
          blanditiis excepturi.
        </p>
      </div>
    );
  }
}

class ContentTwo extends Component {
  render() {
    return (
      <div>
        <h1>This is Content Two Class</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          incidunt tempora architecto? Eum omnis reprehenderit deleniti dolore
          et quae nisi ab quibusdam accusamus! Ea placeat omnis enim quaerat
          blanditiis excepturi.
        </p>
      </div>
    );
  }
}
