import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import favicon from "../../img/NADJAPHOTOGRAPHER_FAVICON.png";

import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="header_container">
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">
            <img
              alt=""
              src={favicon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            NADJA PHOTOGRAPHER
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Sidebar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
