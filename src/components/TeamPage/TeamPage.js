import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Member from "../Member/Member";

export default class TeamPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="about_kiet">
          <div class="container pt-4 pb-4">
            <h5 class="title" style={{ color: "white" }}>
              Core Team
            </h5>
            <br />
            <div class="row">
              <Member />
              <Member />
              <Member />
            </div>
            <br />
            <h5 class="title" style={{ color: "white" }}>
              Active Community Members
            </h5>
            <br />
            <div class="row">
              <Member />
              <Member />
              <Member />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
