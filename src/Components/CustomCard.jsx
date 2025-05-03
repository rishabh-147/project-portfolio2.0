import React, { useState } from 'react';
import './CustomCard.css';

const CustomCard = ({ title, image, shortDescription, fullDescription, githubLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="custom-card" onClick={handleCardClick}>
        <img src={image} alt={title} className="custom-card-image" />
        <div className="custom-card-info">
          <h3 className="custom-card-title">{title}</h3>
          <p className="custom-card-description">
            <span className="short-desc">{shortDescription}</span>
          </p>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{title}</h2>
            <img src={image} alt={title} className="modal-image" />
            <ul className="modal-description">
              {fullDescription.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCard;
