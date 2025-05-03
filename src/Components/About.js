import React, { useEffect, useState } from "react";
import "./About.css";
import CustomCard from "./CustomCard";
import AZ900Badge from "../images/AZ-900-Badge.png"; // initial badge
import AZ900Cert from "../images/AZ-900-Cert.png"; // actual certificate

const techCards = [
  { title: "Java", image: "https://icon.icepanel.io/Technology/svg/Java.svg" },
  { title: "React", image: "https://icon.icepanel.io/Technology/svg/React.svg" },
  { title: "Spring Boot", image: "https://icon.icepanel.io/Technology/svg/Spring.svg" },
  { title: "MySQL", image: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
  { title: "PostgreSQL", image: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg" },
  { title: "Postman", image: "https://icon.icepanel.io/Technology/svg/Postman.svg" },
];

const About = () => {
  const [isCertClicked, setIsCertClicked] = useState(false);

  useEffect(() => {
    const techCards = document.querySelectorAll(".technologies-container .custom-card");
    techCards.forEach((card) => {
      card.onclick = (e) => e.stopPropagation(); // disable click
      card.style.cursor = "default";
    });
  }, []);

  const certificationCard = {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    image: isCertClicked ? AZ900Cert : AZ900Badge,
    shortDescription:
      "Foundational knowledge in cloud concepts, Azure services, SLA, security & governance. Issued: March 2024",
    fullDescription: [],
  };

  return (
    <div className="about-section">
      <h1 className="about-heading">👋 Hi, I'm <span className="highlight">Rishabh Tiwari</span></h1>
      <p className="about-subheading">A passionate Software Developer</p>

      {/* Bio */}
    {/* About Me / Bio Section */}
      <section className="bio-container">
        <h2 className="section-title">About Me</h2>
        <div className="bio-box">
          <p><strong>🎓 Education:</strong> B.Tech in Computer Science from Dr. MGR Educational and Research Institute (CGPA: 8.71)</p>
          <p><strong>📍 Location:</strong> Chennai, Tamil Nadu, India</p>
          <p><strong>💼 Interests:</strong> Passionate about crafting impactful software and constantly exploring new challenges in development.</p>
          <p><strong>📜 Certification:</strong> Microsoft Azure Fundamentals (AZ-900), validating my foundation in cloud, security, and governance principles.</p>
          <p><strong>📬 Contact:</strong> <a href="mailto:onlinestuff.rishabh@gmail.com">onlinestuff.rishabh@gmail.com</a> | 📱 +91-8960151997</p>
        </div>
      </section>


      {/* Certifications */}
      <section className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div
            onClick={() => setIsCertClicked(!isCertClicked)}
            style={{ cursor: "pointer" }}
          >
            <CustomCard
              title={certificationCard.title}
              image={certificationCard.image}
              shortDescription={certificationCard.shortDescription}
              fullDescription={certificationCard.fullDescription}
              githubLink={null}
            />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies-container">
        <h2 className="section-title">Technologies I Work With</h2>
        <div className="tech-grid">
          {techCards.map((tech, index) => (
            <CustomCard
              key={index}
              title={tech.title}
              image={tech.image}
              shortDescription=""
              fullDescription={[]}
              githubLink={null}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
