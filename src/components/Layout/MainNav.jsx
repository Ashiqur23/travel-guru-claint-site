import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MainNav = () => {
  const { user,logout } = useContext(AuthContext);
  return (
    <div className="w-full">
      <div className="container position-relative w-full">
        <Navbar
          collapseOnSelect
          expand="lg"
          className=" top-0 w-100 position-absolute px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.319)" }}
        >
          <Link to="/" className="m-0 logo">
            Travel Guru
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav m-2" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto text-black">
              <input
                type="text"
                className="inputNav"
                placeholder="Search your Destination..."
              />
              <Link to="/" className="nav mx-md-2">
                Home
              </Link>
              <Link className="nav mx-md-2" to="/destination">
                Destination
              </Link>
              <Link className="nav mx-md-2" to="blog">
                Blog
              </Link>
              <Link className="nav mx-md-2" to="contact">
                Contact
              </Link>
            </Nav>
            <Nav>
              {user ? (
                <Link className="btn btn-warning text-black ms-lg-4" onClick={logout}>
                  Logout
                </Link>
              ) : (
                <Link className="btn btn-warning text-black ms-lg-4" to="/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MainNav;
