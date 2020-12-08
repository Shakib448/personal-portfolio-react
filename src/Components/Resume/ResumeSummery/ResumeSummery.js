import React from "react";
import { Row } from "react-bootstrap";

const ResumeSummery = () => {
  return (
    <Row>
      <div className="resume__title">
        <h1>Resume</h1>
        <h5>
          <i>2 years in design</i>{" "}
          <span style={{ color: "rgb(211, 211, 211, 0.1)" }}>/</span>{" "}
          <i>2 years in coding</i>{" "}
          <span style={{ color: "rgb(211, 211, 211, 0.1)" }}>/</span>{" "}
          <i>1 year in React</i>
        </h5>
        <blockquote className="blockquote pt-3 pb-3">
          <p className="mb-2">
            <i>
              A self-motivated Web Developer and I have a profound interest in
              React JS Library with 1 year of experience. I have much experience
              in creating both logical and innovative solutions to complex web
              problems. I’ve done some clone projects such as NETFLIX, HULU,
              AMAZON, AUTHENTICATIONS So on.
            </i>
          </p>
        </blockquote>
      </div>
    </Row>
  );
};

export default ResumeSummery;
