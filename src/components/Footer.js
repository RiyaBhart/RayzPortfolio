import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-lusion">
      <div className="footer-lusion-content">
        <div className="footer-brand">
          <h2>Rayz.</h2>
          <p>Where Brands Rise.</p>
        </div>
        <div className="footer-lusion-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="https://instagram.com/rayzcreative" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-lusion-bottom">
        <p>&copy; {new Date().getFullYear()} Rayz Creative. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;