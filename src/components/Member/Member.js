import React, { Component } from "react";

export default class Member extends Component {
  render() {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 text-center member">
        <div class="card p-4 text-center">
          <img src="../assets/images/logo.png" class="team-member" alt="" />
          <h6 class="title">Aakash Goel</h6>
          <p
            class="description"
            style={{ paddingTop: "0", marginTop: "0", marginBottom: "8px" }}
          >
            DSC Lead
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "0"
            }}
          >
            <a href="">
              <i class="fa fa-envelope" />
            </a>
            <a href="">
              <i class="fab fa-linkedin-in" />
            </a>
            <a href="">
              <i class="fa fa-link" />
            </a>
            <a href="">
              <i class="fab fa-github" />
            </a>
            <a href="">
              <i class="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
