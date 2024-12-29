import React from "react";
import userProfile from '../images/profile-pic.jpg';
import './Header.css';

function Header() {
  return (
    <div className="navBar-style">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#/">
          <img src={userProfile} width="30" height="30" className="d-inline-block align-top rounded-circle" alt="Profile" />
          <span className="brand-name">Rishabh Tiwari</span>
        </a>

        {/* Hamburger Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" href="/#/resume">Resume</a>
            <a className="nav-item nav-link" href="/#/project">Projects</a>
            <a className="nav-item nav-link" href="/#/contact">Contact</a>
            <a className="nav-item nav-link" href="/#/about">About</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
