import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import DemoClass from "./component/DemoClass";
import AboutState from "./component/AboutState";
import AboutFunction from "./component/AboutFunction";
import Counter from "./component/Counter";
function App() {
  return (
    <div className="App">
      <h1>This is Sample React Application</h1>
      <Header />
      {/* <DemoClass></DemoClass> */}
      <AboutState></AboutState>
      <AboutFunction />
      <Counter />
      <Footer />
    </div>
  );
}

function getInfo() {}

export default App;

//TODO
// 1. Function and Class component
// 2. How to pass args between each component
