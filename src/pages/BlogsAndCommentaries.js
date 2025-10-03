import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRippleEffect } from '../hooks/useRippleEffect';

const BlogsAndCommentaries = () => {
  useRippleEffect();

  useEffect(() => {
    // Apply fade-in effect on page load
    document.body.classList.add('show');
  }, []);

  return (
    <div className="container">
      <div className="left-column"></div>
      
      <div className="center-column">
        {/* Main image for the blog page */}
        <img src="/images/blogs_and_commentaries.webp" alt="Blogs & Commentaries" className="main-image" />
      </div>

      <div className="right-column">
        <div className="back-button-container">
          <Link to="/" className="back-button">
            <span className="back-arrow">←</span> Back to Home
          </Link>
        </div>
        
        <div className="page-header">
          <h1>BLOGS & COMMENTARIES</h1>
          <div className="underline"></div>
        </div>

        <div className="content">
          <h2>Latest</h2>
          <ul className="blog-list">
            {/* Blog 1 */}
            <li>
              <Link to="/blogs/blog1.html" className="blog-button">How Data is Transforming Football and Boosting Club Profits</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogsAndCommentaries;
