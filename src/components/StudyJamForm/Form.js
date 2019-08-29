import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import classes from "./form.module.css";
import ApiMessage from "../ApiMessage/ApiMessage";
import * as websiteApi from "./../../utils/websiteApi";

const Form = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("1");
  const [branch, setBranch] = useState("CSE");
  const [github, setGithub] = useState("");

  // enable login button
  useEffect(() => {
    if (email !== "" && name !== "" && year !== "" && branch !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, name, year, branch]);

  const handleFormSubmit = async e => {
    setIsDisabled(true);
    setIsLoading(true);
    e.preventDefault();
    let body = {};
    if (github === "") {
      body = {
        email,
        name,
        year,
        branch
      };
    } else {
      body = {
        email,
        name,
        year,
        branch,
        github
      };
    }
    try {
      const response = await websiteApi.devioRegister(body);
      if (response.data.message === "success") {
        setApiStatus({
          message: "Registration Successful! Please check your email",
          type: 200
        });
      } else if (response.data.message === "already registered") {
        setApiStatus({
          message: "Already registered",
          type: 406
        });
      } else {
        setApiStatus({
          message: "Invalid Entries",
          type: 406
        });
      }
      setIsLoading(false);
      setIsDisabled(false);
    } catch (err) {
      console.log(err.response);
      setIsDisabled(false);
      setIsLoading(false);
      if (err.response === undefined) {
        setApiStatus({
          type: 406,
          message: err.message
        });
      } else {
        setApiStatus({
          type: err.response.status || 406,
          message: err.response.data.message || err
        });
      }
    }
  };

  const buttonClass = isLoading
    ? `btn btn-primary ld-ext-right running ${classes.register_btn}`
    : `btn btn-primary ld-ext-right ${classes.register_btn}`;

  return (
    <>
      <Navbar />
      <div className="fluid-container">
        <div className="container">
          <div className={classes.main}>
            <div className="row">
              <div className="col-lg-7 col-md-12 text-left">
                <div className="welcome">
                  <h2 className={classes.heading}>
                    Welcome to{" "}
                    <span className={classes.dev}>
                      DEV <span style={{ color: "#DB4437" }}>i</span>
                      <span style={{ color: "#0F9D58" }}>O</span>'19
                    </span>
                  </h2>
                  <br></br>
                  <p style={{ color: "#444", fontSize: "16px" }}>
                    Join us on 31st August to kickstart your <br /> developer
                    career. Developer Student Clubs <br /> powered by{" "}
                    <span style={{ color: "#4285f4" }}>G</span>
                    <span style={{ color: "#DB4437" }}>o</span>
                    <span style={{ color: "#F4B400" }}>o</span>
                    <span style={{ color: "#4285f4" }}>g</span>
                    <span style={{ color: "#0F9D58" }}>l</span>
                    <span style={{ color: "#DB4437" }}>e</span> Developers is
                    organising <br /> sessions on different technologies.

                    <br></br><br></br>

                    For any issue, feel free to contact us on dsckiet@gmail.com or 8791431819
                  </p>
                  <br />
                  <h2 className={classes.heading}>Agenda</h2>
                  <br></br>
                  <span
                    className={`badge badge-primary ${classes.open} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    open source
                  </span>
                  <span
                    className={`badge badge-primary ${classes.and} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    android
                  </span>
                  <span
                    className={`badge badge-primary ${classes.ml} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    ml/ai
                  </span>
                  <br />
                  <span
                    className={`badge badge-primary ${classes.and} pl-3 pr-3 pt-2 pb-2 mb-2  mr-2`}
                  >
                    web
                  </span>
                  <span
                    className={`badge badge-primary ${classes.design} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    designing
                  </span>
                  <span
                    className={`badge badge-primary ${classes.open} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    startup
                  </span>
                  <br />
                  <span
                    className={`badge badge-primary ${classes.ml} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    programming
                  </span>
                  <span
                    className={`badge badge-primary ${classes.design} pl-3 pr-3 pt-2 pb-2 mb-2 mr-2`}
                  >
                    cloud
                  </span>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 mt-3 pt-2">
                <div className={`${classes.card} p-3`}>
                  <div className="logo mb-3">
                    <img
                      className="img-fluid"
                      src="./assets/images/devio.png"
                      alt="logo"
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <div className="form">
                    <form action="">
                      <div className="form-group">
                        <input
                          name="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="row">
                        <div className="col form-group">
                          <select
                            name="branch"
                            value={branch}
                            onChange={e => setBranch(e.target.value)}
                            className="form-control"
                          >
                            <option value="CSE">CSE</option>
                            <option value="CO">CO</option>
                            <option value="IT">IT</option>
                            <option value="CSI">CSI</option>
                            <option value="ECE">ECE</option>
                            <option value="EN">EN</option>
                            <option value="EI">EI</option>
                            <option value="ME">ME</option>
                            <option value="CIVIL">CIVIL</option>
                          </select>
                        </div>
                        <div className="col form-group">
                          <select
                            name="year"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            className="form-control"
                          >
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          name="github"
                          value={github}
                          onChange={e => setGithub(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="GitHub/LinkedIn Url"
                        />
                      </div>
                      {apiStatus !== null ? (
                        <ApiMessage
                          type={apiStatus.type}
                          message={apiStatus.message}
                        />
                      ) : null}
                      <div className="mb-2 mt-4">
                        {isDisabled ? (
                          <button
                            onClick={e => e.preventDefault()}
                            className={buttonClass}
                            type="submit"
                            disabled={isDisabled}
                          >
                            {isLoading ? "Loading..." : "Register"}

                            {isLoading ? (
                              <div className="ld ld-ring ld-spin" />
                            ) : null}
                          </button>
                        ) : (
                          <button
                            onClick={handleFormSubmit}
                            className={buttonClass}
                            type="submit"
                            disabled={isDisabled}
                          >
                            {isLoading ? "Loading..." : "Register"}
                            {isLoading ? (
                              <div className="ld ld-ring ld-spin" />
                            ) : null}
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
