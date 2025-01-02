import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import defaultImg from '../../Image/default.jpg'
import Account from "../../Pages/Account";
import Authenticate from "../../Pages/Authenticate";
import { useNavigate } from "react-router-dom";





const NavItem = () => {
  // const [mode,setMode] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const darkmode = useSelector((state)=> state.theme.darkmode);
  const setHandle = ()=>{
    dispatch({type: 'TOGGLE_THEME'})
  };
  const [log,setLog] = useState(false)
    // Toggle data-theme attribute on <html>
    useEffect(() => {
      const root = document.documentElement; // Access <html>
      root.setAttribute("data-theme", darkmode ? "dark" : "light");
    }, [darkmode]);

    const loggedIn=()=>{
      navigate('/login')
      setLog(true)
    }
  return (
    <>
    <div className="navbar_position">
    <Navbar bg={`${darkmode ?  "dark" : "light"}`} data-bs-theme={`${darkmode ?  "dark" : "light"}`}>
        <Container>
          <Navbar.Brand href="#home" className='d-flex align-items-center logo-brand'>
          <i class="bi bi-play-fill"></i>
          <span>JustPlay</span>
          </Navbar.Brand>
          <Nav className="">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/newRelease">New Release</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <div className="mx-lg-3 d-flex gap-3">
            <button className="add_cart">
            <i class="bi bi-bag"></i>
            </button>
          <button className={`toggle_btn ${darkmode ?  "dark" : "light"}`}
          onClick={()=>setHandle()}
          >
            {darkmode ? 
            <i class="bi bi-sun-fill"></i>
            :
            <i class="bi bi-moon-fill"></i>
            }
          </button>
            </div>

            <div className="logged">
              <button onClick={loggedIn}>Log In</button>
            </div>
            {/* <div className="acc_details">
              <figure>
                <img src={defaultImg} alt="img" srcset="" />
              </figure>
              <p className="m-0">
                <span>Account</span>
                <Authenticate/>
              </p>
            </div> */}


          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default NavItem;