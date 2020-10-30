import React from "react";
import { Container } from "react-bootstrap";
import "./Resume.css";
import ResumeEducation from "./ResumeEducation/ResumeEducation";
import ResumeSkills from "./ResumeSkills/ResumeSkills";
import ResumeSummery from "./ResumeSummery/ResumeSummery";

const Resume = () => {
  return (
    <>
      <Container>
        <ResumeSummery />
        <hr />
        <ResumeSkills />
        <hr />
        <ResumeEducation />
      </Container>
    </>
  );
};

export default Resume;
