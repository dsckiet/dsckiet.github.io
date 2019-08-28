import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import EventsPage from "./components/EventsPage/EventsPage";
import About from "./components/About/About";
import TeamPage from "./components/TeamPage/TeamPage";
import * as websiteAPI from "./utils/websiteApi";
import Ideas from "./components/Ideas/Ideas";
import IdeaSharing from "./components/IdeaSharingPage/IdeaSharing";
import coc from "./components/COC/coc";
import NotFound from "./components/404/NotFound";
import Leaderboard from "./components/Leaderboard/Leaderboard.";
import Gallery from "./components/Gallery/Gallery";
import Form from "./components/StudyJamForm/Form";

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
        <Switch>
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
          <Route path="/code-of-conduct" component={coc} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/study-jam" component={Form} />

          <Route path="*" component={NotFound} />
          {/* <Route path="/solution-challenge" component={SolutionChallenge} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
