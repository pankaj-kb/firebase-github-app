import React, { useState, useContext } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {


  const context = useContext(UserContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/home" className="text-white">
          Git Profile info app
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/signup" className="text-white">
              SignUp
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signin" className="text-white">
              SignIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home" className="text-white">
              LogOut
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
