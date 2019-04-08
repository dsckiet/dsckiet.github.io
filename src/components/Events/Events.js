import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Events extends Component {
  render() {
    return (
      
      <div className="row">
            {/* Repeat */}
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card" style={{ padding: "16px" }}>
                <h5 className="title">Cloud Study Jam</h5>
                <span className="event_date">
                  April
                  <br />
                  <span style={{ fontSize: "18px" }}>6</span>
                  <br />
                  2019
                </span>
                <p className="description">
                  <i className="fa fa-clock" /> 09:30
                  <br />
                  <i className="fa fa-map-marked-alt" /> CSE Lab-2
                </p>
                <Link to="/" className="btn-more text-center">
                  See More
                </Link>
              </div>
            </div>
            {/* Repeat End */}
          </div>
    );
  }
}
