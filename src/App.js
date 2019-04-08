import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import EventsPage from "./components/EventsPage/EventsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/events" component={EventsPage} />
      </div>
    );
  }
}

export default App;
