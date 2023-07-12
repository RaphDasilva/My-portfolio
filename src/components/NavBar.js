/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState, useEffect } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../assets/img/logo.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else { setScrolled(false); }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="50px" height="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#connect"
              className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('connect')}
            >
              Contact me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raphael-okolo-480012227/" target="_blank" rel="noreferrer"><FaLinkedinIn className="soc-icon" /></a>
              <a href="https://github.com/RaphDasilva" target="_blank" rel="noreferrer"><FaGithub className="soc-icon" /></a>
              <a href="https://twitter.com/silvaz_creation" target="_blank" rel="noreferrer"><FaTwitter className="soc-icon" /></a>
            </div>

            {/* <button className="vvd" type="submit">
              {' '}
              <span>
                <a href="#connect">
                  Let &apos;s Connect
                </a>
              </span>
              {' '}
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
