import React from "react";

import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import Contact from "./Contact";
// import Nav from './HeaderNav';

const Header = () => {
  return (
    <div>
      <MainNav></MainNav>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
