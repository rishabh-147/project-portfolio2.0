// Project.js
import React from "react";
import "./Project.css";
import Footer from "./Footer";
import CustomCard from "./CustomCard";
import hybridCryptography from "../images/hybrid-cryptography.png";
import netBanking from "../images/net-banking.png";
import roamingNomad from "../images/roaming-nomad.png";

const projects = [
  {
    title: 'Net Banking (Cash Flow and Cheque Clearance System)',
    image: netBanking,
    shortDescription: 'A simulated net banking system for cash flow and cheque clearance.',
    fullDescription: [
      'Developed a simulated net banking system mimicking the flow of cash withdrawals, account updates, and cheque clearance processes.',
      'Utilized Java Spring Boot for the backend and React for the frontend, providing a dynamic user interface.',
      'Implemented Oracle MySQL with Lombok for efficient class development, and integrated secure authentication/authorization.',
    ],
    githubLink: 'https://github.com/rishabh-147/SpringProjectAPI', // Dummy link
  },
  {
    title: 'Roaming Nomads (Travel Booking Website)',
    image: roamingNomad,
    shortDescription: 'A travel booking platform using .NET, React, and MySQL.',
    fullDescription: [
      'Developed an end-to-end travel booking platform enabling users to search, book, and manage itineraries.',
      'Designed dynamic, responsive UI with React, improving accessibility across devices.',
      'Built a robust backend with .NET and Entity Framework, ensuring secure data transactions and smooth booking management.',
    ],
    githubLink: 'https://github.com/rishabh-147/RoamingNomads', // Dummy link
  },
  {
    title: 'Hybrid Cryptography-Based Secure File Storage on Cloud (Using AES and Blowfish)',
    image: hybridCryptography,
    shortDescription: 'Hybrid cryptography solution combining AES and Blowfish for secure cloud storage.',
    fullDescription: [
      'Developed a hybrid cryptography system combining AES for encryption and Blowfish for secure key generation.',
      'Implemented the Least Significant Bit (LSB) technique to hide encryption keys within cover images.',
      'Optimized encryption and decryption times for large datasets, ensuring high scalability and security in cloud storage.',
    ],
    githubLink: 'https://github.com/rishabh-147/SecurefileStorage', // Dummy link
  },
];



const Project = () => {
  return (
    <div>
      <div style={{ display: "none" }} className="coming-soon-container">
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
      {/* New Development */}

      <section className="projects-section">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <CustomCard
            key={index}
            title={project.title}
            image={project.image}
            shortDescription={project.shortDescription}
            fullDescription={project.fullDescription}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      <footer className="projects-footer">
        <p>🚧 More projects coming soon — stay tuned!</p>
      </footer>
    </section>
    </div>
  );
};

export default Project;
