'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm an Economics student at Binghamton University minoring in Digital and Data Studies. My academic journey combines economic theory with modern data science techniques, allowing me to analyze complex market dynamics and derive meaningful insights from data.</p>
            <p>I've developed a strong foundation in both quantitative analysis and programming, with particular interests in applying machine learning and statistical modeling to solve real-world economic problems, focusing on market analysis and predictive analytics.</p>
          </div>
          <div className="key-courses">
            <h3>Relevant Coursework</h3>
            <ul>
              <li>Economic Analysis with Python</li>
              <li>Statistical Analysis with R</li>
              <li>Database Fundamentals with SQL</li>
              <li>Data Visualization with Python</li>
              <li>Intro to Coding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 