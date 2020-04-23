import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand
            href="/"
            style={{
              color: "rgb(203, 11, 101)",
              fontFamily: "Arial",
            }}
          >
            Pedhua
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="/aboutus"
                style={{
                  color: "rgb(0, 0, 0)",
                  fontFamily: "Arial",
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/statistics"
                style={{
                  color: "rgb(0, 0, 0)",
                  fontFamily: "Arial",
                }}
              >
                Statistics
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
