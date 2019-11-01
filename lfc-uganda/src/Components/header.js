import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">Liverpool Fun Club Uganda</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="mr-sm-2">
              <Nav.Link href="#about">Who we Are</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;