'use client';

import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <p>Interested in discussing economics, data science, or potential opportunities? Let's connect!</p>
          <div className="contact-info">
            <a href="mailto:shanefitz999@gmail.com" className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>shanefitz999@gmail.com</span>
            </a>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Huntington, NY</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/shanefitzpatrickk" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/shane-fitzpatrick-68030b267" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 