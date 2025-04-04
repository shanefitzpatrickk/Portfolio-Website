'use client';

import React from 'react';
import Image from 'next/image';

const Visualizations = () => {
  return (
    <section id="visualizations">
      <div className="container">
        <h2>Data Visualizations</h2>
        <div className="visualizations-grid">
          <div className="visualization-card">
            <h3>Multi-Portfolio Investment Strategy Comparison</h3>
            <p>Comparative analysis of investment strategies against benchmark performance over time.</p>
            <div className="visualization-image">
              <Image 
                src="/img/Visualizations%20for%20Website/investor%20forecasting.png" 
                alt="Investment Portfolio Analysis"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="visualization-card">
            <h3>Bikeshare Ridership with 7-Day Rolling Average</h3>
            <p>Weekly trend analysis of Citi Bike usage with smoothed data to identify seasonal patterns.</p>
            <div className="visualization-image">
              <Image 
                src="/img/Visualizations%20for%20Website/bikesharew7dayRA.png" 
                alt="Bikeshare Weekly Trends"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="visualization-card">
            <h3>Horsepower Distribution by Cylinder Configuration</h3>
            <p>Average horsepower analysis for different engine cylinder counts in the used car market.</p>
            <div className="visualization-image">
              <Image 
                src="/img/Visualizations%20for%20Website/carprojectvisualcylinders.png" 
                alt="Car Engine Analysis"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="visualization-card">
            <h3>Horsepower vs. Torque Correlation</h3>
            <p>Scatter plot showing the positive relationship between vehicle horsepower and torque measurements.</p>
            <div className="visualization-image">
              <Image 
                src="/img/Visualizations%20for%20Website/hpvstorque.png" 
                alt="Performance Metrics Analysis"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="visualization-card">
            <h3>Bikeshare Station Net Flow Map</h3>
            <p>Color-coded visualization of station outflow volumes to identify optimal locations for bike rebalancing and station placement.</p>
            <div className="visualization-image">
              <Image 
                src="/img/Visualizations%20for%20Website/netoutflowbikeshare.png"
                alt="Station Flow Analysis"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="visualization-card">
            <h3>Hourly Bikeshare Usage Pattern</h3>
            <p>Daily ridership distribution showing peak usage during morning and evening commute hours.</p>
            <div className="visualization-image">
              <Image 
                src="/img/Visualizations%20for%20Website/bikesharefixed.png" 
                alt="Daily Usage Pattern"
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualizations; 