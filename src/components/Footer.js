/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../assets/img/logo.svg';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col sm={6}>
          <img src={logo} alt="Logo" />
        </Col>

        <Col sm={6} className="text-center text-sm-end">
          <div className="social-icon up-spase">
            <a href="https://www.linkedin.com/in/raphael-okolo-480012227/" target="_blank" rel="noreferrer"><FaLinkedinIn className="soc-icon" /></a>
            <a href="https://github.com/RaphDasilva" target="_blank" rel="noreferrer"><FaGithub className="soc-icon" /></a>
            <a href="https://twitter.com/silvaz_creation" target="_blank" rel="noreferrer"><FaTwitter className="soc-icon" /></a>
          </div>
          <p>
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Raphael Okolo. All rights reserved.
          </p>
        </Col>

      </Row>
    </Container>
  </footer>
);

export default Footer;
