import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);

  const setHandle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const loggedIn = () => {
    navigate('/login');
  };

  useEffect(() => {
    const root = document.documentElement; // Access <html>
    root.setAttribute("data-theme", darkmode ? "dark" : "light");
  }, [darkmode]);

  return (
    <div className="navbar_position">
      <Navbar bg={darkmode ? "dark" : "light"} expand="lg" data-bs-theme={darkmode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand as={Link} to="/" className='d-flex align-items-center logo-brand'>
            <i className="bi bi-play-fill"></i>
            <span>JustPlay</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="collapse-resp">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/newRelease">New Release</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <div className="navbar-theme">
            <div className="d-flex gap-3">
              <button className="add_cart">
                <i className="bi bi-bag"></i>
              </button>
              <button
                className={`toggle_btn ${darkmode ? "dark" : "light"}`}
                onClick={setHandle}
              >
                {darkmode ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-fill"></i>}
              </button>
            </div>
            <div className="logged">
              <button onClick={loggedIn}>Log In</button>
            </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavItem;