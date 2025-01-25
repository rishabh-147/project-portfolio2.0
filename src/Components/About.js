import React, { useEffect, useState } from "react";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current technology index
  const [fadeOut, setFadeOut] = useState(false); // To trigger fade out effect
  const technologies = ["Java", "React", "Spring Boot", "MySQL"];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      // Trigger fade-out first
      setFadeOut(true);

      setTimeout(() => {
        // Change to the next technology
        setTypedText(technologies[currentIndex]);

        // After the fade-out, trigger fade-in
        setFadeOut(false);

        // Move to the next technology
        setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
      }, 500); // Delay before changing text
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <>
      <div className="about-us fade-in">
        {/* Header Section */}
        <header className="header">
          <div className="container">
            <h1>
              Hi, I'm <span className="highlight">Rishabh Tiwari</span>
            </h1>
            <p>I'm a passionate Software Developer</p>
            <div className="typing-effect">
              Technologies I love:{" "}
              <span
                className={`tech-highlight ${fadeOut ? "fade-out" : "fade-in"}`}
              >
                {typedText}
              </span>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="skills">
          <div className="container">
            <h2>My Skills</h2>
            <div className="skills-list">
              <div className="skill-card">
                <h3>Java</h3>
                <div className="progress-bar" data-progress="80%">
                  <div
                    className="fill fill-spring"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <h3>React</h3>
                <div className="progress-bar" data-progress="70%">
                  <div
                    className="fill fill-spring"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <h3>Spring Boot</h3>
                <div className="progress-bar" data-progress="75%">
                  <div
                    className="fill fill-spring"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <h3>Spring MVC</h3>
                <div className="progress-bar" data-progress="75%">
                  <div
                    className="fill fill-spring"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
              <h3>MySQL</h3>
                <div className="progress-bar" data-progress="75%">
                  <div
                    className="fill fill-spring"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <h3>PostgreSQL</h3>
                <div className="progress-bar" data-progress="75%">
                  <div
                    className="fill fill-spring"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="technologies">
          <div className="container">
            <h2>Technologies I Work With</h2>
            <div className="tech-icons">
              <div className="tech-icon" title="Java">
                <img
                  src="https://icon.icepanel.io/Technology/svg/Java.svg"
                  alt="Java"
                />
              </div>
              <div className="tech-icon" title="React">
                <img
                  src="https://icon.icepanel.io/Technology/svg/React.svg"
                  alt="React"
                />
              </div>
              <div className="tech-icon" title="Spring Boot">
                <img
                  src="https://icon.icepanel.io/Technology/svg/Spring.svg"
                  alt="Spring Boot"
                />
              </div>
              <div className="tech-icon" title="MySQL">
                <img
                  src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                  alt="Postgres SQL"
                />
              </div>
              <div className="tech-icon" title="Postman">
                <img
                  src="https://icon.icepanel.io/Technology/svg/Postman.svg"
                  alt="Postman"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
