import React from "react";
import { Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <Container>
        <Row
          style={{ height: "220px" }}
          className="align-items-center justify-content-center"
        >
          <h3>
            This page is under construction{" "}
            <span role="img" aria-label="strong">
              🔺
            </span>{" "}
          </h3>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
