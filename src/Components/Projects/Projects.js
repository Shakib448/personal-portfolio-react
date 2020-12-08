import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import ProjectsDetails from "./ProjectsDetails/ProjectsDetails";

const projects = [
  {
    title: "DevConnector",
    description:
      "This is a full-stack web application where people can create their profile add experience, education also deletes their profile. This project is built on redux.",
    liveLink: "https://immense-brushlands-28060.herokuapp.com/",
    githubLink: "https://github.com/Shakib448/mern-stack-social-app",
    img: "https://i.ibb.co/48Tswrg/Dev.png",
    technology:
      "React.js, Node.js, Express.js, MongoDB, Redux, Express-validation, Heroku, Heroku Deployment",
  },
  {
    title: "Shopping Cart",
    description:
      "This is a complex redux shopping cart operation. Where you can select a specific product in your cart then increase or decries their product quantity also show their total amount, tax rate, and total.",
    liveLink: "https://infallible-ptolemy-d799dd.netlify.app/",
    githubLink: "https://github.com/Shakib448/redux-toolkit-shoppin-cart",
    img: "https://i.ibb.co/BtSpgs9/shop.png",
    technology: "React.js, Redux, Redux/toolkit, Netify, Hosting",
  },
  {
    title: "Real Time Chatting Application",
    description:
      "A real-time chatting application where people can create their private room and chat with each other.",
    liveLink: "https://real-time-chat-app-69922.web.app/",
    githubLink: "https://github.com/Shakib448/real-time-chat-app-client",
    img: "https://i.ibb.co/Jyp6nVn/Screenshot-3.png",
    technology:
      "React.js, Node.js, Express.js, Socket.io, Firebase Hosting, Heroku",
  },
  {
    title: "Creative Agency",
    description:
      "A single page web app with a dashboard where users can select their courses and also can give reviews from their dashboard. And an Admin can check the course details and can delete from his dashboard as well. ",
    liveLink: "https://creative-agency-e0f45.web.app/",
    githubLink: "https://github.com/Shakib448/creative-agency-client",
    img: "https://i.ibb.co/9GD2dH9/Screenshot-4.png",
    technology:
      "React.js, Node.js, Express.js, MongoDB, React Bootstrap, Fire-AUTH, Firebase Hosting, Heroku, Heroku  Deployment.",
  },
  {
    title: "Volunteer Network",
    description:
      "A single page web app where anyone can select their reasonable Volunteering and delete also. ",
    liveLink: "https://volunteer-network-13563.web.app/",
    githubLink: "https://github.com/Shakib448/volunteer-network-frontend",
    img: "https://i.ibb.co/kmbQZnd/Screenshot-1.png",
    technology:
      "React.js, Node.js, Express.js, MongoDB, React Bootstrap, Fire-AUTH, Firebase Hosting, Heroku, Heroku  Deployment.",
  },
  {
    title: "COVID 19 App",
    description:
      "A real-time COVID 19 tracker app. Where people can check local and global corona virus cases with active, recoveries and death rate.",
    liveLink: "https://shakib448.github.io/COVID-19-React/",
    githubLink: "https://github.com/Shakib448/real-time-chat-app-client",
    img: "https://i.ibb.co/zf8zCRq/Screenshot-5.png",
    technology: "React.js, Material UI, API, Chart.js. ",
  },
];

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState([]);

  const handleProject = (projectDetails) => {
    setProject(projectDetails);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ProjectsDetails
        project={project}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />

      <Container>
        <Row>
          <div className="projects__title">
            <h1>Projects</h1>
          </div>
        </Row>
        <Row>
          {projects.map((project, id) => (
            <Col key={id} className="mt-3 mb-3" lg={6} md={6} sm={12}>
              <Card className="projects__hoverCard">
                <Card.Img
                  height="200px"
                  width="200px"
                  variant="top"
                  src={project.img}
                />
                <button
                  onClick={() => {
                    openModal();
                    handleProject(project);
                  }}
                  className="projects__hoverBtn  btn btn-primary"
                >
                  <h4>Preview</h4>
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
