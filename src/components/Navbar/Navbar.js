import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  let activeStyle = {
    color: "black",
  };
  const handleNavbar = () => {
    setNavbar((prevState) => !prevState);
  };
  var menumask;
  menumask = <div className="menu-mask" onClick={() => setNavbar(false)}></div>;

  return (
    <div className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt=""></img>
      </div>
      <FontAwesomeIcon
        onClick={handleNavbar}
        className="faBars"
        icon={navbar ? faTimes : faBars}
      />
      <div className="navbar__list">
        <div className="navbar__item">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"product"}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"blog"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* HAMBURGER SECTION */}
        <div className={navbar ? "navbar__hambuger" : "navbar__item-disable"}>
          {menumask}
          <ul>
            <li>
              <NavLink onClick={handleNavbar} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbar} to={"about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbar} to={"product"}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbar} to={"blog"}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbar} to={"contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
