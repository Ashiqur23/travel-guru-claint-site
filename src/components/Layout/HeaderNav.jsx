import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

import "./common.css";

const HeaderNav = () => {
  return (
    <>
      <div className="w-100 container position-relative">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="position-absolute top-0 w-100"
        >
          <Navbar.Brand href="#" className="m-0">
            Travel Guru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav m-2" />

          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto text-black">
              <Form className="">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 "
                />
              </Form>
              <Nav.Link to="/" className="">
                Home
              </Nav.Link>
              <Nav.Link t="/destination">Destination</Nav.Link>
              <Nav.Link t="/blog">Blog</Nav.Link>
              <Nav.Link t="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="btn btn-warning text-black ms-lg-4" to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderNav;
