import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css"; // Import the custom CSS for the footer

function Footer() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Copyright */}
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Made with &#128153; by Rishabh
            Tiwari
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-right">
          <a
            href="https://github.com/rishabh-147"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tiwarirt147"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
