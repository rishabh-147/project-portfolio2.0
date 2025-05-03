import React from "react";
import "./Resume.css";

const Resume = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/Rishabh_Tiwari.pdf";
    link.download = "Rishabh_Tiwari.pdf";
    link.click();
  };

  return (
    <div className="resume-page">
      <div className="resume-card">
        <h1>📄 My Resume</h1>
        <p className="resume-desc">
          Feel free to download my resume using the buttons below. It's always up-to-date and ready for review.
        </p>

        <div className="download-link">
          <a
            href="https://drive.google.com/file/d/1EcNQDkuI-O-uRmBaxShCgeAx5lOfSoJi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 View on Google Drive
          </a>
        </div>

        <div className="download-link">
          {/* <a onClick={onButtonClick}>⬇️ Direct Download (PDF)</a> */}
          <a href="#" onClick={(e) => { e.preventDefault(); onButtonClick(); }}>
          ⬇️ Direct Download (PDF)
          </a>

        </div>
      </div>
    </div>
  );
};

export default Resume;
