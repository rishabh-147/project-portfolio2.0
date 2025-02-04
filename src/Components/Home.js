import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import userProfile from "../images/profile-pic.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="profile-img-container">
          {/* Profile Image */}
          <img src={userProfile} alt="Profile" className="profile-img" />
        </div>

        <div className="bio">
          <h1>Hi, I'm Rishabh Tiwari</h1>
          <p>
            I’m a software developer at{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.mindgate.solutions/">Mindgate Solutions</a>
              </u>
            </span>
            , currently working with the{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.npci.org.in/">
                  National Payments Corporation of India (NPCI)
                </a>
              </u>
            </span>{" "}
            on the{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.linkedin.com/pulse/understanding-nocs-reconciliation-settlement-platform-ondc/">
                  NOCS
                </a>
              </u>
            </span>{" "}
            project. NOCS, launched by{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.npci.org.in/who-we-are/group-companies/npci-bharat-billpay-ltd/bharat-billpay-overview">
                  NPCI Bharat BillPay Ltd. (NBBL)
                </a>
              </u>
            </span>
            , handles reconciliation and settlement for transactions within the{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://ondc.org/ondc-buyer-apps/">ONDC</a>
              </u>
            </span>{" "}
            network. Additionally, I contribute to NBBL’s broader efforts in
            supporting the bill payment ecosystem across India.
            <br />
            <span className="strong-text">
              <u>Let's connect and collaborate!</u>
            </span>
          </p>
        </div>

        {/* Button Container at Bottom */}
        <div className="button-container">
          <Link to="/resume" className="button">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2H16L20 6V22H4V2Z" stroke="#4A90E2" strokeWidth="2" />
            <path d="M12 2V12H20" stroke="#4A90E2" strokeWidth="2" />
          </svg> */}
            Resume
          </Link>
          <Link to="/project" className="button">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 5H9L12 2Z" fill="#4A90E2" />
            <rect x="5" y="7" width="14" height="14" stroke="#4A90E2" strokeWidth="2" />
          </svg> */}
            Projects
          </Link>
          <Link to="/about" className="button">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#4A90E2" strokeWidth="2" />
            <path d="M7 12L12 7L17 12" stroke="#4A90E2" strokeWidth="2" />
          </svg> */}
            About Me
          </Link>
          <Link to="/contact" className="button">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" stroke="#4A90E2" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" stroke="#4A90E2" strokeWidth="2" />
          </svg> */}
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
