import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Static from "./Static";
import Footer from "../Footer/Footer";
import * as websiteAPI from "./../../utils/websiteApi";
export default class Homepage extends Component {
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
      <div>
        <Navbar />
        <Static story={this.state.story} events={this.state.events} />
        <Footer />
      </div>
    );
  }
}
