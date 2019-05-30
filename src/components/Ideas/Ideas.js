import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Idea from "../Idea/Idea";
import * as websiteApi from "./../../utils/websiteApi";
import { Link } from "react-router-dom";

export default class Ideas extends Component {
  state = {
    message: "",
    ideas: []
  };

  componentDidMount() {
    websiteApi.getIdeas().then(res => {
      this.setState({ message: res.message, ideas: res.ideas });
    });
  }

  render() {
    const { ideas } = this.state;

    return (
      <div>
        <Navbar />
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div className="container ">
            <h2 className="title mt-4 mb-4">Ideas</h2>
          </div>
          <div className="featured">
            <div className="container pt-4 pb-4">
              <div className="row">
                {ideas.map(idea =>
                  idea ? <Idea key={idea._id} idea={idea} /> : null
                )}
              </div>
            </div>
          </div>
          <div className="about_kiet">
            <div className="container pt-4 pb-4">
              <div className="row">
                <div className="col-md-9 col-sm-12">
                  <h5 className="title" style={{ color: "#fff" }}>
                    Want your idea to feature here ?
                  </h5>
                  <Link to="/add-idea" className="btn btn-primary prime_btn">
                    Submit an Idea
                  </Link>
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
