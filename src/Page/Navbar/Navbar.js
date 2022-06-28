import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Image/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt=""></img>
      </div>
      <FontAwesomeIcon
        onClick={handleNavbar}
        className="faBars"
        icon={navbar ? faTimes : faBars}
      />
      <div className="navbar__list">
        <div className={navbar ? "navbar__hambuger" : "navbar__item"}>
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
              <NavLink onClick={handleNavbar} to={""}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbar} to={""}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbar} to={""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className={navbar ? "navbar__item" : "navbar__hambuger"}>
          <ul>
            <li>
              <NavLink to={""}>Home</NavLink>
            </li>
            <li>
              <NavLink to={""}>About</NavLink>
            </li>
            <li>
              <NavLink to={""}>Products</NavLink>
            </li>
            <li>
              <NavLink to={""}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={""}>Contact</NavLink>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
