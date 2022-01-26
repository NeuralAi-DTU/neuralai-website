import React, { useState, useEffect, Component } from "react";
import "./Navbar.css";
import logoLight from "./logo variation-03.png";
import logoDark from "./logo variation-01.png";
import Button from "../../node_modules/@mui/material/Button/Button";
import Icon from "../../node_modules/@mui/icons-material/Menu";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

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

  function myFunction() {
    console.log("test123");
    var x = document.getElementById("myTopnav");
    if (x.className === "nav_links" || x.className === "nav_links act") {
      x.className += " responsive";
    } else {
      if (x.className === "nav_links responsive") x.className = "nav_links";
      else x.className = "nav_links act";
    }
  }

  return (
    <nav
      className={navbar ? "navbar active fixed-top" : "navbar fixed-top"}
      onMouseEnter={() => setNavbar(true)}
      onMouseLeave={() => {
        if (window.scrollY < 80) setNavbar(false);
      }}
    >
      <img
        className="logo"
        src={navbar ? logoDark : logoLight}
        alt="store logo"
      />
      <div className={navbar ? "nav_links act" : "nav_links"} id="myTopnav">
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

        <li
          href="javascript:void(0);"
          class="icon"
          onClick={() => {
            var x = document.getElementById("myTopnav");
            if (
              x.className === "nav_links" ||
              x.className === "nav_links act"
            ) {
              console.log("test1");
              x.className += " responsive";
            } else {
              if (x.className === "nav_links responsive") {
                x.className = "nav_links";
                console.log("test2");
              } else {
                x.className = "nav_links act";
                console.log("test3");
              }
            }
          }}
        >
          click
        </li>
      </div>
    </nav>
  );
}
