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
            I’m a <strong>Software Developer</strong> with <strong>1.5+ years of experience</strong>, 
            focused on building robust backend systems using 
            <strong> Java</strong>, <strong>Spring Boot</strong>, and <strong>Spring MVC</strong>. 
            I'm proficient in <strong>JSP</strong> and work comfortably with relational databases like 
            <strong> MySQL</strong> and <strong>PostgreSQL</strong>.
          </p>

          <p>
            On the frontend, I’ve built interfaces using <strong>React.js</strong> and JSP, 
            enabling me to work seamlessly across the full stack.
          </p>

          <p>
            Currently, I’m part of the team at{" "}
            <a className="a-link" href="https://www.mindgate.solutions/" target="_blank" rel="noreferrer">
              <u>Mindgate Solutions</u>
            </a>
            , where I manage backend systems for the{" "}
            <a className="a-link" href="https://www.npci.org.in/" target="_blank" rel="noreferrer">
              <u>National Payments Corporation of India (NPCI)</u>
            </a>
            —the organization behind India’s central payment infrastructure.
          </p>

          <p>
            I'm passionate about creating impactful digital solutions and contributing to systems that reach millions.
            <br />
            <strong><u>Let’s connect and collaborate! 🤝</u></strong>
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
