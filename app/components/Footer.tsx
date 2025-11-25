import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Plumbing Co.</h5>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
              <li><a href="/cookie-consent" className="text-white">Cookie Consent</a></li>
              <li><a href="/copyright" className="text-white">Copyright Notice</a></li>
              <li><a href="/terms-of-use" className="text-white">Terms of Use</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <p>Social media links can go here.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Plumbing Co. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
