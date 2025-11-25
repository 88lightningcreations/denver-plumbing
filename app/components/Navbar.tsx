'use client';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="d-flex justify-content-between">
        <Link href="/" passHref>
          <Navbar.Brand>Plumbing Co.</Navbar.Brand>
        </Link>
        <Nav>
          <Nav.Link href="tel:123-456-7890" className="d-none d-lg-block text-white">
            123-456-7890
          </Nav.Link>
          <Button href="tel:123-456-7890" variant="outline-light" className="d-lg-none">
            Click me
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
