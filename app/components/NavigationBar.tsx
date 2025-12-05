'use client';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <Navbar style={{ backgroundColor: 'var(--primary)' }} variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} href="/" style={{ fontFamily: 'Lilita One, cursive', color: 'var(--secondary)' }}>Peach Tree Plumbing</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="tel:720-298-1900" className="text-white" style={{ fontFamily: 'Lilita One, cursive', fontSize: '1.2rem' }}>(720) 298-1900</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
