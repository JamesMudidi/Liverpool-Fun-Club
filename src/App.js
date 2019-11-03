import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Home from "./Home/home";
import Contact from "./Contact/contact";
import Certificate from "./Certificate/certificate";
import About from "./About/about";
import GreenCampaign from "./GreenCampaign/green";
import NotFound from "./404";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
});

export default function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/certificate" component={Certificate} />
                  <Route path="/about" component={About} />
                  <Route path="/green-campaign" component={GreenCampaign} />
                  <Route component={NotFound} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </div>
        )}
      />
    </Router>
  );
}
