import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import userProfile from '../images/profile-pic.jpg';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="profile-img-container">
          {/* Placeholder for the background image */}
          <img src={userProfile} alt="Profile" className="profile-img" />
        </div>
        <div className="bio">
          <h1>Hi, I'm Rishabh Tiwari</h1>
          <p>I’m a software developer at Mindgate Solutions, currently working with NPCI on settlement systems. I’m contributing to the ONDC NOCS project, enhancing digital commerce interoperability. Passionate about leveraging technology to improve financial systems and drive innovation. Let's connect and work together!</p>
        </div>
        <div className="button-container">
          <Link to="/resume" className="button">Resume</Link>
          <Link to="/project" className="button">Projects</Link>
          <Link to="/about" className="button">About Me</Link>
          <Link to="/contact" className="button">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
