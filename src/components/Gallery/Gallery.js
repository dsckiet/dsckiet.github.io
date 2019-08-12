import React, { Component } from "react";
// import image1 from "../../../public/assets/images/developer-student-clubs-kiet-google-cloud.jpg";

class Gallery extends Component {
  render() {
    return (
      <div className="about_kiet">
        <div className="container pt-4 pb-4">
          <h5 className="title" style={{ color: "#ffffff" }}>
            Our Glimpses
          </h5>
          <div className="col-lg-12 mt-4 mb-4" style={{ padding: "0" }}>
            {/* <div className="card mt-4 p-4"> */}
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <img
                  className="storyimage"
                  src="./assets/images/developer-student-clubs-kiet-gcp-workshop.jpg"
                  width="100%"
                  style={{boxShadow: '0 4px 8px rgba(0,0,0,0.2)'}}
                  alt=""
                />
              </div>

              <div className="col-md-4 col-sm-12">
                <img
                  className="storyimage"
                  style={{boxShadow: '0 4px 8px rgba(0,0,0,0.2)'}}
                  src="./assets/images/developer-student-clubs-kiet-google-cloud.jpg"
                  width="100%"
                  alt=""
                />
              </div>

              <div className="col-md-4 col-sm-12">
                <img
                  className="storyimage"
                  style={{boxShadow: '0 4px 8px rgba(0,0,0,0.2)'}}
                  src="./assets/images/developer-student-clubs-kiet-cloud-study-jam.jpg"
                  width="100%"
                  alt=""
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
