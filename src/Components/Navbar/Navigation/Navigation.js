import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Menu from "../Menu/Menu";
import "./Navigation.css";

const navItems = [
  {
    name: "About ",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgb(86, 99, 100);
  box-shadow: rgba(43, 83, 135, 0.08) 0px 3px 8px 0px;
  display: flex;
  align-items: center;
`;

const NavContent = styled.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const slideIn = keyframes`
    from {
        right: -270px;

    }
    to {
        right: -20px;

    }
`;

const slideOut = keyframes`
    from {
        right: -20px;

    }
    to {
        right: -270px;

    }
`;

const NavList = styled.ul`
  display: flex;
  visibility: ${(props) =>
    props.display === "default"
      ? "hidden"
      : props.display === "opened"
      ? "show"
      : "hidden"};
  opacity: ${(props) =>
    props.display === "default" ? 0 : props.display === "opened" ? 1 : 0};
  transition: opacity 600ms, visibility 600ms;
  margin: 0 20px;
  position: absolute;
  top: 0;
  right: -300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  animation: ${(props) =>
      props.display === "default"
        ? null
        : props.display === "opened"
        ? slideIn
        : slideOut}
    0.3s forwards;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 65px;
  background-color: #1c1e1f;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 50px;
`;

const Navigation = () => {
  const [navState, setNavState] = useState("default");

  const location = useLocation();

  const handleNavState = () => {
    if (navState === "default") {
      setNavState("opened");
    } else if (navState === "opened") {
      setNavState("closed");
    } else {
      setNavState("opened");
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <Menu navState={navState} handleNavState={handleNavState} />
        <NavList display={navState}>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <NavLink
                className="navLink"
                activeClassName={
                  location.pathname === item.link ? "navLinkActive" : null
                }
                to={item.link}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
