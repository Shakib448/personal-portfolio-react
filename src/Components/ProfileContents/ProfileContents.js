import React from "react";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import "./ProfileContents.css";

const ProfileContents = () => {
  const location = useLocation();
  return (
    <>
      <Col className="profileContents m-3" lg={8} md={12} sm={12}>
        {location.pathname === "/" && <AboutMe />}
        {location.pathname === "/projects" && <Projects />}
        {location.pathname === "/resume" && <Resume />}
      </Col>
    </>
  );
};

export default ProfileContents;
