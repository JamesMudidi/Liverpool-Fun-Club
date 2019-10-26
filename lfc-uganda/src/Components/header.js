import React, { Component } from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand href="#home">LFC</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#fixtures">Fixtures</Nav.Link>
              <Nav.Link href="#gallery">Results</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        );
    }
}

export default Header;