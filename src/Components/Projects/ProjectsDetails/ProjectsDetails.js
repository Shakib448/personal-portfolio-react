import React from "react";
import "./ProjectsDetails.css";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { Card, Col, Row } from "react-bootstrap";

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
const ProjectsDetails = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button className="closeModalBtn" onClick={closeModal}>
        <CloseIcon className="closeModalIcon" />
      </button>
      <Row>
        <Col md={6} sm={12}>
          <Card.Img
            height="200px"
            width="200px"
            variant="top"
            src="https://i.ibb.co/F4WcxDS/resume.jpg"
          />
        </Col>
        <Col md={6} sm={12}>
          I love you
        </Col>
      </Row>
    </Modal>
  );
};

export default ProjectsDetails;
