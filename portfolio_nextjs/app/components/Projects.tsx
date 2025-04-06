'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
      const element = card as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <Image
                src="/img/project1.png"
                alt="Investor Forecasting"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h3>Investor Forecasting Simulation</h3>
            <p>Designed an algorithmic investment simulation model that analyzes historical market data to generate forecasting scenarios. Features multi-portfolio strategy comparison, risk evaluation metrics, and visualization of projected returns across diverse market conditions.</p>
            <div className="technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">Financial Analysis</span>
              <span className="tech-tag">Matplotlib</span>
            </div>
            <a href="https://github.com/shanefitzpatrickk/Investor-Forecasting-Simulation" className="btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image
                src="/img/project2.png"
                alt="Used Car Analysis"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h3>Used Car Market Analysis</h3>
            <p>Statistical exploration of used car market data examining key factors affecting vehicle valuation. Analyzes relationships between vehicle specifications (cylinders, horsepower, torque) and market pricing through regression modeling and feature importance visualization.</p>
            <div className="technologies">
              <span className="tech-tag">Data Analysis</span>
              <span className="tech-tag">Statistical Modeling</span>
              <span className="tech-tag">Seaborn</span>
              <span className="tech-tag">R</span>
            </div>
            <a href="https://github.com/shanefitzpatrickk/Used-Car-Market-Analysis" className="btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image
                src="/img/project3.png"
                alt="Bikeshare NYC"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h3>Bikeshare NYC Analysis</h3>
            <p>Comprehensive analysis of NYC's Citi Bike program using geospatial and temporal data. Features time series analysis of usage patterns, station flow mapping, weekly trend analysis with rolling averages, and peak usage identification to optimize system operations.</p>
            <div className="technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Geospatial Analysis</span>
              <span className="tech-tag">Time Series</span>
              <span className="tech-tag">GeoVisualization</span>
            </div>
            <a href="https://github.com/shanefitzpatrickk/Bikeshare-NYC" className="btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 