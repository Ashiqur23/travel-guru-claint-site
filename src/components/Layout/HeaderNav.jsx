import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import imgHeader from "../../assets/IMG/BANNAR/cox-bazar.jpg";
import "./common.css";
import Home from "./Home";


const HeaderNav = () => {
    const [img ,setImg]= useState(imgHeader)
  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        background: "linear-gradient(rgb(0, 0, 0))", 
      }}
    >
      <div className="w-100 container">
        <Navbar collapseOnSelect expand="lg" className="navbar top-0 w-100">
          <Navbar.Brand href="#" className="m-0 logo">
            Travel Guru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav m-2" />

          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto text-black">
              <input
                type="text"
                className="inputNav"
                placeholder="Search your Destination..."
              />
              <Nav.Link to="/" className="nav">
                Home
              </Nav.Link>
              <Nav.Link className="nav" to="/destination">
                Destination
              </Nav.Link>
              <Nav.Link className="nav" to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav" to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="btn btn-warning text-black ms-lg-4"
                to="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* hero */}
        <Home setImg={setImg}></Home>
      </div>
    </div>
  );
};

export default HeaderNav;
