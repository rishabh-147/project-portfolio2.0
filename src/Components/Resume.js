import React from "react";
import "./Resume.css";
import Footer from "./Footer";

const Resume = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Rishabh_Tiwari.pdf"; // Direct path to the file in the public directory
    link.download = "Rishabh_Tiwari.pdf";
    link.click();
  };

  return (
    <div className="resume-page">
      <div className="resume-card">
        <h1>My Resume</h1>
        <p>Welcome to my resume page. Feel free to download my resume:</p>

        {/* Google Drive Link */}
        <div className="download-link">
          <a
            href="https://drive.google.com/file/d/1EcNQDkuI-O-uRmBaxShCgeAx5lOfSoJi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume from Google Drive (PDF)
          </a>
        </div>

        {/* Direct download from the public folder */}
        <div className="download-link temp-Down">
          <a onClick={onButtonClick}>Download Resume (PDF)</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;