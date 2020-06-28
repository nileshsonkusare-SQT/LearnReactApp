import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import DemoClass from "./component/DemoClass";
// import AboutState from "./component/AboutState";
// import AboutFunction from "./component/AboutFunction";
// import Counter from "./component/Counter";
// import CounterFunction from "./component/CounterFunction";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UserList from "./component/UserCRUD/UserList";
import UserAdd from "./component/UserCRUD/UserAdd";
import UserEdit from "./component/UserCRUD/UserEdit";

function App() {
  return (
    <div className="App">
      {/* <h1>This is Sample React Application</h1> */}
      {/* <Header /> */}
      {/* <DemoClass></DemoClass> */}
      {/* <AboutState></AboutState>
      <AboutFunction /> */}
      {/* <Counter /> */}
      {/* <CounterFunction /> */}
      {/* <Footer /> */}

      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/user/add'} className="nav-link">Add New User</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/user/list'} className="nav-link">User List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path="/" component={UserList}></Route>
            <Route exact path="/user/list" component={UserList}></Route>
            <Route exact path="/user/add" component={UserAdd}></Route>
            <Route exact path="/user/edit/:id" component={UserEdit}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

function getInfo() { }

export default App;

//TODO
// 1. Function and Class component
// 2. How to pass args between each component
