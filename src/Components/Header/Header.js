import React from "react";
import Navigation from "../Navbar/Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./Header.css";

const Header = () => {
  return (
    <>
      <ThemeProvider className="header" theme={theme}>
        <>
          <Navigation />
        </>
      </ThemeProvider>
    </>
  );
};

export default Header;
