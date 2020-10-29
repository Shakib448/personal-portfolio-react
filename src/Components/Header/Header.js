import React from "react";
import { Col } from "react-bootstrap";
import Navigation from "../Navbar/Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const Header = () => {
  return (
    <Col
      className="intro  m-3"
      style={{ border: "1px solid red", height: "440px" }}
      md={8}
    >
      <ThemeProvider theme={theme}>
        <>
          <Navigation />
        </>
      </ThemeProvider>
    </Col>
  );
};

export default Header;
