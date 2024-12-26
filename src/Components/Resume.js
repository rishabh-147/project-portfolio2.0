import React, { useEffect } from "react";
import './Resume.css';
import Footer from "./Footer";

const Resume = () => {

  return (
    <div className="resume-page">
      <div className="resume-card">
        <h1>My Resume</h1>
        <p>Welcome to my resume page. Feel free to download my resume:</p>
        
        {/* Google Drive Link */}
        <div className="download-link">
          <a href="https://drive.google.com/file/d/1EcNQDkuI-O-uRmBaxShCgeAx5lOfSoJi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download Resume from Google Drive (PDF)
          </a>
        </div>

        {/* Fallback to download directly from the public folder */}
        <div className="download-link temp-Down">
          <a href="#" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Resume;
