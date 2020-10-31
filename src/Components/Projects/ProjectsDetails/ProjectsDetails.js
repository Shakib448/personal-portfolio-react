import React from "react";
import "./ProjectsDetails.css";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { Card, Col, Row } from "react-bootstrap";
import PublicIcon from "@material-ui/icons/Public";
import GitHubIcon from "@material-ui/icons/GitHub";

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
const ProjectsDetails = ({ modalIsOpen, closeModal, project }) => {
  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <button className="closeModalBtn" onClick={closeModal}>
        <CloseIcon className="closeModalIcon" />
      </button>
      <Row className="justify-content-center">
        <Col className="text-center mb-3 mt-3" lg={6} md={12} sm={12}>
          <Card.Img height="200px" variant="top" src={project.img} />
        </Col>
        <Col
          className="projectDescription mt-auto mb-auto"
          lg={6}
          md={12}
          sm={12}
        >
          {project.description}
          <Col className="projectDescription ml-auto mr-auto" md={12} sm={12}>
            <div className="text-center mb-2 mt-2">
              <a href="https://github.com/Shakib448">
                <i>
                  <GitHubIcon className="projectDetails projectDetailsGithub m-2" />
                </i>
              </a>
              <a href={project.liveLink}>
                <i>
                  <PublicIcon className="projectDetails projectDetailsPublic m-2" />
                </i>
              </a>
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="  justify-content-center">
        <h1 className="text-white">Technology </h1>
      </Row>
      <Row className="  justify-content-center">
        <div style={{ color: "rgb(4, 176, 102)" }} className="mr-3 ml-3">
          {project.technology}
        </div>
      </Row>
    </Modal>
  );
};

export default ProjectsDetails;
