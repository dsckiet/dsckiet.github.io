import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Static from "./Static";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Static />
      </div>
    );
  }
}
