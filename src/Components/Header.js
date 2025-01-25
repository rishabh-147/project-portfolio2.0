import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import userProfile from '../images/profile-pic.jpg';
import './Header.css';

function Header() {
  const handleExpansion = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.click();
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleExpansion);
    })
  }, [])

  return (
    <div className="navBar-style">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={userProfile} width="30" height="30" className="d-inline-block align-top rounded-circle" alt="Profile" />
          <span className="brand-name">Rishabh Tiwari</span>
        </Link>

        {/* Hamburger Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link" to="/resume">Resume</Link> {/* Use Link instead of anchor tag */}
            <Link className="nav-item nav-link" to="/project">Projects</Link>
            <Link className="nav-item nav-link" to="/contact">Contact</Link>
            <Link className="nav-item nav-link" to="/about">About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;