import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Events from "../Events/Events";

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div className="container ">
            <h2 className="title mt-4">DSC KIET's Events</h2>
            <p className="description">
              Questions? Please contact dsckiet@gmail.com.
            </p>
          </div>

          <div>
            <div className="container pt-4 pb-4">
              <h4 className="title">Upcoming Events</h4>
              <p className="description">
                Our events are open to newbies, students and developers who are
                interested in cutting-edge technologies or use them as part of
                their projects.
              </p>
              <br />
              <Events />
            </div>
          </div>

          <div className="featured">
            <div className="container pt-4 pb-4">
              <h5 className="title" style={{ color: "#444444" }}>
                Directory of Past Events
              </h5>
              <p className="description">
                Events are listed in reverse chronological order by date.
                <br />
                Here are the recent 10 events. To know more about the past
                events let us know at dsckiet@gmail.com.
              </p>
              <Events />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
