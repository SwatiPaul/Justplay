import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are dedicated to providing the best service.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">New Release</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <Nav>
              <Nav.Link href="#facebook">
              <i class="bi bi-facebook"></i>
              </Nav.Link>
              <Nav.Link href="#twitter">
              <i class="bi bi-twitter"></i>
              </Nav.Link>
              <Nav.Link href="#instagram">
              <i class="bi bi-instagram"></i>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <small>© 2024 Your Company. All rights reserved.</small>
        </div>
      </Container>
    </footer>
    </>
  )
}

export default Footer;