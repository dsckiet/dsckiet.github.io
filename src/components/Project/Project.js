import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class Project extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div class="fluid-container" style={{ paddingBottom: "0" }}>
          <div class="container ">
            <h2 class="title mt-4 mb-4">Projects</h2>
          </div>
          <div class="featured">
            <div class="container pt-4 pb-4">
              <div class="row col-lg-12">
                <a href="" class="btn btn-primary prime_btn">
                  Budget Planner
                </a>
                <p class="description">
                  Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet consectetur. consectetur adipisicing
                  elit. Quidem libero ullam eligendi laborum, ex quos beatae
                  doloremque recusandae quas omnis?
                  <br />
                  <br />
                  <b>Technologies Used</b>: NodeJS, Android, MongoDB, Express,
                  Firebase
                  <br />
                  <br />
                  <b>Contributors</b>: Aakash Goel, Rohan Mehta, Anshul Gupta,
                  Aditya Pandey
                </p>
              </div>
              <hr class="mt-2 mb-4" />
            </div>
          </div>
          <div class="about_kiet">
            <div class="container pt-4 pb-4">
              <img
                src="../assets/images/landscape.svg"
                class="pt-4"
                style={{ position: "absolute", right: "0" }}
                alt=""
              />
              <div class="row">
                <div class="col-md-9 col-sm-12">
                  <h5 class="title" style={{ color: "#fff" }}>
                    Want to contribute? Join us
                  </h5>
                  <p class="description" style={{ color: "white" }}>
                    We are a community of awesome developers and we believe in
                    learning by doing! Join us to bring out the innovation
                    inside you.
                  </p>
                  <a
                    href="https://dsckiet.herokuapp.com"
                    class="btn btn-primary prime_btn"
                  >
                    Become a Member
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
