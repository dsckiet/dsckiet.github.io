import React, { Component } from "react";
import "./IdeaSharing.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import * as websiteApi from "./../../utils/websiteApi";

export default class IdeaSharing extends Component {
  state = {
    name: "",
    email: "",
    title: "",
    technology: "",
    description: ""
  };

  handleChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: val });
  };

  handleSubmit = e => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      technology: this.state.technology,
      description: this.state.description
    };

    websiteApi
      .addIdea(payload)
      .then(res => {
        alert(res.message);
        this.setState({
          name: "",
          email: "",
          title: "",
          technology: "",
          description: ""
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div className="container">
            <div className="idea_card mt-4">
              <div
                className="row"
                style={{ marginRight: "-16px", marginLeft: "-16px" }}
              >
                <div className="col-lg-4 col-md-5 col-12 pb-4 custom_back">
                  <h4 className="idea_title mt-4 mb-4">
                    Share your{" "}
                    <span className="idea_highlight">
                      <u>Idea</u>
                    </span>
                    .
                  </h4>
                  <form action="/action_page.php">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address:</label>
                      <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
                        className="form-control"
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="idea_title">Idea Title:</label>
                      <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="idea_title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="idea_desc">Idea Description:</label>
                      <textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        rows="4"
                        cols="50"
                        type=""
                        className="form-control"
                        id="idea_desc"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tech">Technologies: </label>
                      <input
                        name="technology"
                        value={this.state.technology}
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="idea_title"
                      />
                    </div>
                    <button
                      onClick={this.handleSubmit}
                      type="submit"
                      className="btn idea_submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div
                  className="col-lg-8 col-md-7 col-12"
                  style={{ margin: "0", padding: "0" }}
                >
                  <img
                    src="./assets/images/ideasharing.jpg"
                    width="100%"
                    className="idea__image"
                    height="100%"
                    alt=""
                  />
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
