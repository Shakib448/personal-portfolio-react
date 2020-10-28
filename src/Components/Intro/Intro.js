import React from "react";
import { Col } from "react-bootstrap";
import Profile from "../Profile/Profile";

const Intro = () => {
  return (
    <>
      <Profile />
      <Col
        className="m-3"
        style={{ border: "1px solid red", height: "400px" }}
        md={8}
      ></Col>
    </>
  );
};

export default Intro;
