import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import userProfile from "../images/profile-pic.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="profile-img-container">
          <img src={userProfile} alt="Profile" className="profile-img" />
        </div>

        <div className="bio">
          <h1>👋 Hi, I'm Rishabh Tiwari!</h1>
          <p>
            I’m a software developer at{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.mindgate.solutions/">
                  Mindgate Solutions
                </a>
              </u>
            </span>
            , currently working on an exciting project with the{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.npci.org.in/">
                  National Payments Corporation of India (NPCI)
                </a>
              </u>
            </span>{" "}
            - working on the{" "}
            <span className="strong-text">
              <u>
                <a className="a-link" href="https://www.linkedin.com/pulse/understanding-nocs-reconciliation-settlement-platform-ondc/">
                  NOCS 
                </a>
              </u>
            </span>{" "}
            project! 
            <br />
            NOCS, launched by{" "}
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
                <a className="a-link" href="https://ondc.org/ondc-buyer-apps/">
                  ONDC 
                </a>
              </u>
            </span>{" "}
            network.
            <br />
            I’m passionate about leveraging technology to create real-world impact, and I also contribute to NBBL’s broader efforts in supporting the bill payment ecosystem across India.{" "}
            <br/><span className="strong-text">
              <u>Let’s connect and collaborate! 🤝</u>
            </span>
          </p>
        </div>

        {/* Button Container at Bottom */}
        <div className="button-container">
          <Link to="/resume" className="button">
            Resume 📝
          </Link>
          <Link to="/project" className="button">
            Projects 💻
          </Link>
          <Link to="/about" className="button">
            About Me 📚
          </Link>
          <Link to="/contact" className="button">
            Contact 📞
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
