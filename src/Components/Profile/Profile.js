import React from "react";
import { Card, Col } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import "./Profile.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  return (
    <>
      <Col className="profile m-3" lg md={8} sm={12}>
        <>
          <Header />
        </>
        <Card className="text-center p-3 profile__card">
          <Avatar
            className="profile__imgCenter"
            style={{ width: "120px", height: "120px" }}
            alt="Muktadir"
            src="https://i.ibb.co/F4WcxDS/resume.jpg"
          />

          <Card.Body>
            <Card.Title>
              <strong>Muktadir Ahamed</strong>
              <h6>
                <LocationOnIcon className="profile__iconLocation" /> Bangladesh,
                Dhaka <br /> <PhoneIcon className="profile__iconPhone" />{" "}
                +8801796643426
              </h6>
            </Card.Title>
            <Card.Title className="m-0 profile__title">
              React Developer
            </Card.Title>
            <div className=" mt-3 mb-3">
              <a href="https://github.com/Shakib448">
                <i>
                  <GitHubIcon className="profile__icon profile__iconGithub m-2" />
                </i>
              </a>
              <a href="https://www.linkedin.com/in/muktadir-ahmed-shakib-227795179/">
                <i>
                  <LinkedInIcon className="profile__icon profile__iconLinkedIn m-2" />
                </i>
              </a>
              <a href="https://www.facebook.com/shakib.ahmed.334839/">
                <i>
                  <FacebookIcon className="profile__icon profile__iconFacebook m-2" />
                </i>
              </a>
            </div>
            {location.pathname === "/resume" ? (
              <form
                method="get"
                action="https://drive.google.com/file/d/16JjPmgIivhdQ0UmXI-YzoetO3L2ijq_O/view?usp=sharing"
                target="_blank"
              >
                <button type="submit" className="btn btn-2">
                  <span>Resume</span>
                </button>
              </form>
            ) : (
              <a
                style={{ textDecoration: "none" }}
                href="mailto: shakiba448@gmail.com "
              >
                <button className="btn btn-2">
                  <span>Email</span>
                </button>
              </a>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Profile;
