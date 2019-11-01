import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant=""
        className="py-2"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="images/sample-logo.png"
              width="180"
              className="d-inline-block align-top pb-1"
              alt="iiverpool fc fans club uganda logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className="mr-sm-0 ml-sm-0">
              <Nav.Link className="mr-sm-3 ml-sm-3" href="#about">
                Home
              </Nav.Link>
              <Nav.Link className="mr-sm-3 ml-sm-3" href="#gallery">
                Membership
              </Nav.Link>
              <Nav.Link className="mr-sm-3 ml-sm-3" href="#gallery">
                Committee
              </Nav.Link>
              <Nav.Link className="mr-sm-3 ml-sm-3" href="#gallery">
                Contact Us
              </Nav.Link>
              <Nav.Link className="ml-sm-3" href="#gallery">
                #YWNWA
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
