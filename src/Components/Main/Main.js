import React from "react";
import { Container, Row } from "react-bootstrap";
import Intro from "../Intro/Intro";
import "./Main.css";

const Main = () => {
  return (
    <Container>
      <Row
        style={{ height: "600px" }}
        className="align-items-center justify-content-md-center no-gutters"
      >
        <Intro />
      </Row>
    </Container>
  );
};

export default Main;
