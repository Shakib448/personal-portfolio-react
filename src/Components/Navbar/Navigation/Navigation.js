import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import Menu from "../Menu/Menu";

const navItems = [
  {
    name: "About Me",
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
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
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
`;

const NavBrand = styled.div`
  margin: 0 20px;
  width: 160px;
  color: ${(props) => props.theme.colors.primary};
`;
const NavBrandName = styled.h1`
  font-size: 30px;
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
  height: 440px;
  width: 250px;
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
  background-color: white;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 10px;
`;

const NavLink = styled.a`
  display: block;
  font-size: 18px;
  font-weight: 600;
  padding: 6px 12px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 1px;
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
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
        <NavBrand>
          <NavBrandName className="mt-2">
            {location.pathname === "/" && "About Me"}
            {location.pathname === "/projects" && "Projects"}
            {location.pathname === "/resume" && "Resume"}
            {location.pathname === "/blog" && "Blog"}
            {location.pathname === "/contact" && "Contact"}
          </NavBrandName>
        </NavBrand>
        <Menu navState={navState} handleNavState={handleNavState} />
        <NavList display={navState}>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <NavLink href={item.link}>{item.name}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
