import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo192.png";

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
        <h4 className={navbar ? "nav_menu act" : "nav_menu"}>About</h4>
        <h4 className={navbar ? "nav_menu act" : "nav_menu"}>Projects</h4>
        <h4 className={navbar ? "nav_menu act" : "nav_menu"}>Community</h4>
        <h4 className={navbar ? "nav_menu act" : "nav_menu"}>Team</h4>
      </div>
      <img className="logo1" src={logo}></img>
    </nav>
  );
}
