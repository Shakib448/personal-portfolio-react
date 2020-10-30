import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
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
              <button
                onClick={openModal}
                className="projects__hoverBtn  btn btn-primary"
              >
                <h4>Preview</h4>
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
