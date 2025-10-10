import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import BlogsAndCommentaries from './pages/BlogsAndCommentaries';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<BlogsAndCommentaries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:blogName" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

