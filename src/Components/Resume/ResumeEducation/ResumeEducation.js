import React from "react";
import { Row } from "react-bootstrap";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import "./ResumeEducation.css";

const ResumeEducation = () => {
  return (
    <>
      <Row>
        <div className="resume__title resumeEducation">
          {" "}
          <span>
            <MenuBookIcon className="resumeEducation__icon" />
          </span>{" "}
          <h1>Education</h1>
        </div>
      </Row>
      <Row>
        <ul className="educationDetails">
          <li>2016</li>
          <li>Model Academy</li>
          <li>GPA - 4.22</li>
        </ul>
      </Row>
      <hr width="50%" />
      <Row>
        <ul className="educationDetails">
          <li>2018</li>
          <li>Dhaka Commerce College</li>
          <li>GPA - 3.92</li>
        </ul>
      </Row>
    </>
  );
};

export default ResumeEducation;
