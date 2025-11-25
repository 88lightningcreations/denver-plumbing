import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Plumbing Co.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link as="a">Home</Nav.Link>
            </Link>
            <Link href="/services" passHref>
              <Nav.Link as="a">Services</Nav.Link>
            </Link>
            <Link href="/blogs" passHref>
              <Nav.Link as="a">Blog</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
