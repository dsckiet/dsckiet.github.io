import React, { Component } from "react";

export default class Member extends Component {
  render() {
    const { profile } = this.props;
    const photoUrl = process.env.REACT_APP_PHOTO_URL;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center member">
        <div className="card p-4 text-center">
          <img
            src={`${photoUrl}${profile.photo}`}
            className="team-member"
            alt=""
          />
          <h6 className="title">{profile.name}</h6>
          <p
            className="description"
            style={{ paddingTop: "0", marginTop: "0", marginBottom: "8px" }}
          >
            {profile.role}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "0"
            }}
          >
            <a href={"mailto:" + profile.email}>
              <i className="fa fa-envelope" />
            </a>
            <a href={profile.linkedin}>
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={profile.github}>
              <i className="fab fa-github" />
            </a>

            {profile.twitter !== "" ? (
              <a href={profile.twitter}>
                <i className="fab fa-twitter" />
              </a>
            ) : null}
            {profile.website !== "" ? (
              <a href={profile.website}>
                <i className="fa fa-link" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
