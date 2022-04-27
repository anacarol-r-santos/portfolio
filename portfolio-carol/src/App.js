import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => (
  <div className="App">
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/about" component={ About } />
      <Route path="/contacts" component={ Contact } />
      <Route path="/home" component={ Home } />
      <Route path="/projects" component={ Projects } />
    </Switch>
  </div>
);

export default App;
