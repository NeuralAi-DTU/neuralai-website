import React, { useState, useEffect, Component } from "react";
import "./Navbar.css";
import logo from "./logo192.png";
import Button from "../../node_modules/@mui/material/Button/Button";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [nav_menu, setText] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
      setText(true);
    } else {
      setNavbar(false);
      setText(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={navbar ? "navbar active fixed-top" : "navbar fixed-top"}
      onMouseEnter={() => setNavbar(true)}
      onMouseLeave={() => {
        if (window.scrollY < 80) setNavbar(false);
      }}
    >
      <img className="logo1" src={logo}></img>
      <div className={navbar ? "nav_links act" : "nav_links"}>
        <li className={navbar ? "nav_menu act" : "nav_menu"}>About</li>
        <li className={navbar ? "nav_menu act" : "nav_menu"}>Projects</li>
        <li className={navbar ? "nav_menu act" : "nav_menu"}>Community</li>
        <li className={navbar ? "nav_menu act" : "nav_menu"}>Team</li>
        <Button
          variant="outlined"
          className={navbar ? "nav_button act" : "nav_button"}
        >
          Contact Us
        </Button>
        <li href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </li>
      </div>
    </nav>
  );
}
