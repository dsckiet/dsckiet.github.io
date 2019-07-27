import React, { Component } from "react";

class LeaderCard extends Component {
  state = { rank: "", level: "", score: "", hacker: "" };
  componentDidMount() {
    console.log(this.props);
    let { score, level, rank, hacker } = this.props.data;
    this.setState({ rank, score, level, hacker });
  }
  render() {
    let { score, level, rank, hacker } = this.state;
    return (
      <div className="col-lg-12 leadercard card p-2">
        <div className="row">
          <div className="col-6">
            <span className="rank">Rank {rank}</span>
            <br />
            <a href={`https://hackerrank.com/profile/${hacker}`} className="name">{hacker}</a>
          </div>
          <div className="col-3">
            <span style={{ fontSize: "0.8em" }}>
              Score
              <br />
              <span className="score">{score}</span>
            </span>
          </div>
          <div className="col-3">
            <span style={{ fontSize: "0.8em" }}>
              Level
              <br />
              <span className="level">{level}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderCard;
