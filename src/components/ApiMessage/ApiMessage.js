import React from "react";

const ApiMessage = ({ type, message }) => {
  if (type === 200) {
    //validations errors
    return <h6 style={{ color: "green" }}>{message}</h6>;
  } else if (type === 500) {
    //server errors on console only
    console.log(message);
    return <h6 style={{ color: "#e95451" }}>Server Error</h6>;
  } else {
    //success messages
    return <h6 style={{ color: "#e95451" }}>Error: {message}</h6>;
  }
};

export default ApiMessage;
