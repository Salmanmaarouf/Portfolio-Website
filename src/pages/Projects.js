import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRippleEffect } from '../hooks/useRippleEffect';

const Projects = () => {
  useRippleEffect();

  useEffect(() => {
    // Apply fade-in effect on page load
    document.body.classList.add('show');
  }, []);

  return (
    <div className="container">
      <div className="left-column">
        {/* Left sidebar/spacing */}
      </div>
      <div className="center-column">
        <img src="/images/projects.webp" className="main-image" alt="Projects" />
      </div>
      <div className="right-column">
        <div className="back-button-container">
          <Link to="/" className="back-button">
            <span className="back-arrow">←</span> Back to Home
          </Link>
        </div>
        <div className="page-header">
          <h1>PROJECTS</h1>
          <div className="underline"></div>
        </div>
        <div className="content">
          <h2>Here I will post my latest computer science projects.</h2>
          <p>Nothing to see here yet! But coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

