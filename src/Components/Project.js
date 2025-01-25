// Project.js
import React from "react";
import "./Project.css";
import Footer from "./Footer";

const Project = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">Project Coming Soon!</h1>
        <p className="coming-soon-message">
          Our awesome project is currently under development. Stay tuned!
        </p>
        <div className="coming-soon-animation">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default Project;
