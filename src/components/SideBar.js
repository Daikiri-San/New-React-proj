import React from "react";
import { Link } from "react-router-dom";
import routesPaths from "../routesPaths";
import SidebarUser from "./SideBarUser";
import NavLinks from "./NavLinks";
import logo from "../assets/images/UGPay logo.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={routesPaths.strings} className="navLinks__item">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <SidebarUser />
      <NavLinks />
    </div>
  );
};

export default SideBar;
