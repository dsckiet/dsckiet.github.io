import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import EventsPage from "./components/EventsPage/EventsPage";
import About from "./components/About/About";
import TeamPage from "./components/TeamPage/TeamPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/about" component={About} />
        <Route path="/team" component={TeamPage} />
      </div>
    );
  }
}

export default App;
