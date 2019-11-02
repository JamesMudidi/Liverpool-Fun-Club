import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/home";
import Contact from "./Contact/contact";
import Certificate from "./Certificate/certificate";
import About from "./About/about";
import Membership from "./Membership/membership";

export default function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/about" component={About} />
          <Route path="/membership" component={Membership} />
        </Switch>
      </div>
    </Router>
  );
}
