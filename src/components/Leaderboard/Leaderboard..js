import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./style.css";
import LeaderCard from "./LeaderCard";
import * as websiteAPI from "../../utils/websiteApi";

class Leaderboard extends Component {
  state = {
    leaderboard: []
  };

  componentDidMount() {
    websiteAPI.gscpLeaderboard().then(data => {
      this.setState({ leaderboard: data.leaderboard });
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container pt-5">
          <h2 className="title mt-4">
            Leaderboard
            <hr />
          </h2>
          <div className="row">
            <div className="pt-2 col-lg-4 col-12">
              <h6>
                <b>Getting Started With CP</b>
              </h6>
              <span style={{fontSize: '12px'}}>HackerRank</span>
              <br/><br/>
              {this.state.leaderboard.map(data => {
                return <LeaderCard key={data.hacker} data={data} />;
              })}
            </div>
            <div className="pt-2 col-lg-8 col-12">
              More contests coming soon!
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Leaderboard;
