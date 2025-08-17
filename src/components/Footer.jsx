import React from 'react';
import { Heart, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              &copy; {currentYear} Padmnabham Vijay Khedekar. All rights reserved.
            </p>
            <p className="footer-tagline">
              Built with <Heart size={16} className="heart-icon" /> and <Code size={16} className="code-icon" /> for data and technology
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;