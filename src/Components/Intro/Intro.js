import React from "react";
import { Col } from "react-bootstrap";
import Navigation from "../Navbar/Navigation/Navigation";
import Profile from "../Profile/Profile";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const Intro = () => {
  return (
    <>
      <Profile />
      <Col
        className="m-3"
        style={{ border: "1px solid red", height: "440px" }}
        md={8}
      >
        <ThemeProvider theme={theme}>
          <>
            <Navigation />
          </>
        </ThemeProvider>
      </Col>
    </>
  );
};

export default Intro;
