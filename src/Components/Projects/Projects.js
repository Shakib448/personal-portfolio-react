import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <Container>
      <Row>
        <div className="projects__title">
          <h1>Projects</h1>
        </div>
      </Row>
      <Row>
        <Col className="mt-3 mb-3" lg={4} md={6} sm={12}>
          <Card className="projects__hoverCard">
            <Card.Img
              height="200px"
              variant="top"
              src="https://i.ibb.co/F4WcxDS/resume.jpg"
            />
            <button className="projects__hoverBtn  btn btn-primary">
              <span>Preview</span>
            </button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
