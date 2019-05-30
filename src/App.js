import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import EventsPage from "./components/EventsPage/EventsPage";
import About from "./components/About/About";
import TeamPage from "./components/TeamPage/TeamPage";
import * as websiteAPI from "./utils/websiteApi";
import Ideas from "./components/Ideas/Ideas";
import IdeaSharing from "./components/IdeaSharingPage/IdeaSharing";

class App extends Component {
  state = {
    message: "",
    story: {},
    events: []
  };

  componentDidMount() {
    websiteAPI.getIndex().then(res => {
      this.setState({
        message: res.message,
        story: res.story,
        events: res.events
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <Homepage story={this.state.story} events={this.state.events} />
          )}
        />
        <Route path="/events" component={EventsPage} />
        <Route
          path="/about"
          render={() => <About story={this.state.story} />}
        />
        <Route path="/team" component={TeamPage} />
        <Route path="/ideas" component={Ideas} />
        <Route path="/add-idea" component={IdeaSharing} />
        {/* <Route path="/solution-challenge" component={SolutionChallenge} /> */}
      </div>
    );
  }
}

export default App;
