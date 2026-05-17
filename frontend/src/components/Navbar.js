import React, { useState } from "react";
import "./Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="/" className="logo-link">
        <div className="logo">
          <img src="/images/main-logo-removebg.png" alt="Hotel Logo" />
        </div>
      </a>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        {/* CLOSE BUTTON (X) */}
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>

        <li className="dropdown">
          <a href="/rooms">Rooms</a>
        </li>

        <li><a href="/meeting-hall" onClick={() => setMenuOpen(false)}>Meeting & Events</a></li>
        <li><a href="/restro" onClick={() => setMenuOpen(false)}>Restro & Bar</a></li>
        {/* <li><a href="/" onClick={() => setMenuOpen(false)}>Explore</a></li> */}
        <li><a href="/facilities" onClick={() => setMenuOpen(false)}>Facilities</a></li>
        <li><a href="/contact" onClick={() => setMenuOpen(false)}>ContactUs</a></li>

      </ul>

      {/* Book Button */}
      <div className="book-btn">
        <a href="/booknow">
        <button>Book Now</button>
        </a>
      </div>

    </nav>
  );
}