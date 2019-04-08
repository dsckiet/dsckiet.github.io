import React, { Component } from "react";

export default class Featured extends Component {
  render() {
    return (
      <div className="featured">
        <div className="container pt-4 pb-4">
          <h5 className="title" style={{ color: "#444444" }}>
            Our Success Story
          </h5>
          <div className="col-lg-12" style={{ padding: "0" }}>
            <div className="card mt-4 p-4">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <img
                    src="./assets/images/front_illustration.png"
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="col-md-9 col-sm-12">
                  <h5 className="title" style={{ color: "#1A73E8" }}>
                    Success Title
                  </h5>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo accusamus veritatis quisquam magni sed cumque
                    delectus animi beatae, accusantium provident?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, et!
                  </p>

                  <a href="" className="btn btn-primary prime_btn">
                    some link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
