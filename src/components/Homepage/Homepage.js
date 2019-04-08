import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Static from "./Static";
import Footer from "../Footer/Footer";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Static />
        <Footer />
      </div>
    );
  }
}
