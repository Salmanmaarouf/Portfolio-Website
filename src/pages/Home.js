import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRippleEffect } from '../hooks/useRippleEffect';

const Home = () => {
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
        <img src="/images/home.webp" className="main-image" alt="Home" />
      </div>
      <div className="right-column">
        <div className="intro">
          <h1>Hi, I'm <span className="your-name">Salman</span>, a computer science student at <span className="university">RMIT</span><br />University.</h1>
        </div>
        <div className="navigation">
          <Link to="/about" className="nav-button">About</Link>
          <Link to="/projects" className="nav-button">Projects</Link>
          <Link to="/blogs" className="nav-button">Blogs &amp; Commentaries</Link>
          <Link to="/contact" className="nav-button">Contact</Link>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/salman-maarouf-407310233/" className="social-button">
            <img src="/images/linkedin.webp" alt="LinkedIn" className="iconlinkedin" />
          </a>
          <a href="https://github.com/Salmanmaarouf" className="social-button">
            <img src="/images/github.png" alt="Github" className="icongithub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
