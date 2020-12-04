import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ArrayMainScreen from "./screens/ArrayMainScreen";
import ArrayClassificationMainScreen from "./screens/ArrayClassificationMainScreen";
import StringSearchScreen from "./screens/StringMainScreen";
import React from "react";

function App() {
  return (
  <BrowserRouter>
    <body className="d-flex flex-column min-vh-100 bg-color">
      <header className="header text-sm-center">
        <h1 className="font-weight-bold">Algorithms</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#content">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="content">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ArrayMainScreen">Array Searching</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ArrayClassificationMainScreen">Array Classification</NavLink>
            </li>
            <li>
              <NavLink to="/StringMainScreen">String Search</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/ArrayMainScreen" component={ArrayMainScreen} />
        <Route path="/ArrayClassificationMainScreen" component={ArrayClassificationMainScreen} />
        <Route path="/StringMainScreen" component={StringSearchScreen} />
      </Switch>
    </body>
  </BrowserRouter>
  )
}

export default App;
