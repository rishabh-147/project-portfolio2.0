import React from "react";
import userProfile from '../images/profile-pic.jpg';
import './Header.css';

function Header() {
  return (
    <div className="navBar-style">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand " href="/">
        <img src={userProfile} width="30" height="30" class="d-inline-block align-top" alt=""></img>
          Rishabh Tiwari
        </a>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <a class="nav-item nav-link" href="/resume">Resume </a>
      <a class="nav-item nav-link" href="/project">Projects</a>
      <a class="nav-item nav-link" href="/about">About</a>
      <a class="nav-item nav-link" href="/contact">Contact</a>
    </div>
  </div>
      </nav>
    </div>
  );
}

export default Header;
