import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Statistics from "./components/Statistics/Statistics"
import AboutUs from "./components/InfoPage/AboutUs"
import LineGraph from "./components/Graphs/LineGraph"
import Dashboard from "./components/Dashboard/Dashboard"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/statistics" component={Dashboard} />
        </div>
      </Router>
    );
  }
}
export default App;