import React from "react";
import { Row } from "react-bootstrap";
import "./ResumeSkills.css";
import CodeIcon from "@material-ui/icons/Code";
import ProgressBar from "./ProgressBar";

const ResumeSkills = () => {
  const testData = [
    { bgColor: "rgb(4, 176, 102)", completed: 80, title: "Java Script" },
    { bgColor: "rgb(4, 176, 102)", completed: 75, title: "Web Development" },
    { bgColor: "rgb(4, 176, 102)", completed: 80, title: "React Js" },
    { bgColor: "rgb(4, 176, 102)", completed: 50, title: "Data Base" },
  ];

  return (
    <>
      <Row>
        <div className="resume__title resumeSkills">
          {" "}
          <span>
            <CodeIcon className="resumeSkills__icon" />
          </span>{" "}
          <h1>Skills</h1>
        </div>
      </Row>
      <Row>
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgColor={item.bgColor}
            completed={item.completed}
            title={item.title}
          />
        ))}
      </Row>
    </>
  );
};

export default ResumeSkills;
