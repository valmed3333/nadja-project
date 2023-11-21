import React, { useState } from "react";
import "./header.css";
import { Button, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar">
      <Button variant="outline-dark" onClick={handleShow} className="ms-2">
        <img
          src="/src/img/NP_Icono_Menu.png"
          alt="Hamburguer"
          width="30"
          height="30"
        />
      </Button>
      <Offcanvas
        className="offcanvas-sidebar"
        show={show}
        placement="end"
        variant="dark"
        bg="dark"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title className="offcanvas-title">MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link href="#home">HOME</Nav.Link>
          <NavDropdown title="GALLERY" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">YO SOY YO</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SEBASTIAN</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">CONTACT</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
