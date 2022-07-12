import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav className="nav-bar">
      <Img
        className="logo"
        src={require("../assets/CraftCircleLogo-06.png")}
        alt="craft circle logo"
      />
      <div>
        <NavLink to={"/"}>
          <Button className="nav-button">
            <H3>All Crafts</H3>
          </Button>
        </NavLink>
        <NavLink to={"about"}>
          <Button className="nav-button">
            <H3>About</H3>
          </Button>
        </NavLink>
        <NavLink to={"profile"}>
          <Button className="nav-button">
            <H3>Profile</H3>
          </Button>
        </NavLink>
      </div>
    </Nav>
  );
};

export default NavBar;

const Button = styled.button`
  background: #f4ecdd;
  border: none;
  font-size: 25px;
  color: #a7c891;
  margin: 25px;
	display: inline-block;
	position: relative;
  .active & {
    color: #e3976e;
  }
	&: hover {
    cursor: pointer;
  }
	&: after {
	  background-color: #e3976e;
	  bottom: 0;
	  content: '';
	  height: 4px;
	  left: 0;
	  position: absolute;
	  transform: scaleX(0);
	  transform-origin: bottom right;
	  transition: transform 0.25s ease-out;
	  width: 100%;
	}
	&: hover:after {
	  transform: scaleX(1);
	  transform-origin: bottom left;
	}
`;

const H3 = styled.h3`
  margin: 0px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const Img = styled.img`
  height: 150px;
`;
