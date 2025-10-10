import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRippleEffect } from '../hooks/useRippleEffect';

const About = () => {
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
        <img src="/images/about.webp" className="main-image" alt="About" />
      </div>
      <div className="right-column">
        <div className="back-button-container">
          <Link to="/" className="back-button">
            <span className="back-arrow">←</span> Back to home
          </Link>
        </div>
        <div className="page-header">
          <h1>ABOUT</h1>
          <div className="underline"></div>
        </div>
        <div className="sub-header">
          <h2>Developer - Designer</h2>
        </div>
        <div className="content">
          <p>
            I'm a passionate and self-driven creator with a strong background in web development, data science and video editing. 
            While currently studying Computer Science, My true interests lie in building impactful software and digital experiences. 
            I'm actively developing my skills in web development, data analysis, machine learning and artificial intelligence. 
            Beyond coding, I have a deep appreciation for filmmaking, 
            commentary-style storytelling, and architecture and Mixed Martial Arts. My work is a blend of technical problem-solving and artistic creativity, and I thrive on bringing ideas to life through digital mediums.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


