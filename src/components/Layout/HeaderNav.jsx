import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import imgHeader from "../../assets/IMG/BANNAR/cox-bazar.jpg";
import "./common.css";
import Home from "./Home";

const HeaderNav = () => {
  const [img, setImg] = useState(imgHeader);
  return (
    <div
      style={{
        height: "100vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) , url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-100 container">
        {/* hero */}
        <Home setImg={setImg}></Home>
      </div>
    </div>
  );
};

export default HeaderNav;
