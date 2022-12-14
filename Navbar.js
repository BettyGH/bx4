import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Style/navStyle.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>{<Logo />}</h3>
      <nav ref={navRef}>
        <Link to="home">HOME</Link>
        <Link to="about">ABOUT</Link>
        <Link to="services">SERVICES</Link>
        <Link to="industries">INDUSTRIES</Link>
        <Link to="leadership">LEADERSHIP</Link>
        <Link to="contact">CONTACT</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
