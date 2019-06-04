import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class coc extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div className="container ">
            <h2 className="title mt-4">Code of Conduct</h2>
            <p className="description" style={{ color: "#444444" }}>
              You guys are part of DSCKIET now and Discipline is very essential
              for a healthy atmosphere and the achievement of organisational
              goals. So here are some rules, that we expect you to follow as a
              part of this community:-
            </p>
          </div>
          <div className="featured">
            <div className="container pt-4 pb-4">
              <p className="description">
                First thing first, we believe in developing and growing
                together. As we already mentioned we are not a group or a club,
                we are a community of awesome people who loves to code, debug
                and party together!
                <hr />
              </p>
              <p className="description">
                We don't care in which year you are, if you have the potential
                and calibre and just want to channelize it, then indeed you are
                at the right place.
                <hr />
              </p>
              <p className="description">
                We don't promote ragging at all, and will not be tolerated.
                <hr />
              </p>
              <p className="description">
                Don't ping someone for an invalid reason if you don't know them
                if you have some doubt about something then it's better to ask
                on the main group as it may benefit others too. In case you're
                not comfortable then you can interact with the core members of
                the specific domain.
                <hr />
              </p>
              <p className="description">
                Please don't use abusive language in the group. Keep your
                conversation professional and formal. And try to keep it short
                and free with semantic errors.
                <hr />
              </p>
              <p className="description">
                Don't promote any social content other than tech information
                like- hackathons, internships etc. Tech blogs can also be
                shared, no issue. Just be technical and professional.
                <hr />
              </p>
              <p className="description">
                Feel free to ask anything if you need help with other
                technologies too. There might be someone who can help you!
              </p>
            </div>
          </div>
          <div className="fluid-container mt-3" style={{ paddingBottom: "0" }}>
            <div className="container ">
              <p className="title" style={{ color: "#444444" }}>
                Keep Learning!
                <br />
                Keep Growing!
                <hr/>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
