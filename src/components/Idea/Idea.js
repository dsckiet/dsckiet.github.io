import React, { Component } from "react";

export default class Idea extends Component {
  render() {
    const { idea } = this.props;
    return (
      <div className="col-lg-12">
        <button className="btn btn-primary prime_btn">{idea.title}</button>
        <p className="description">
          {idea.description}
          <br />
          <br />
          <b>Technologies</b>: {idea.technology}
          <br />
          <br />
          <b>Given by</b>: {idea.name}
        </p>

        <hr className="mt-2 mb-4" />
      </div>
    );
  }
}
