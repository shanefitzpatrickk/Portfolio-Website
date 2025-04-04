'use client';

import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3><i className="fas fa-code"></i> Programming & Data Analysis</h3>
            <p>Python (Pandas, NumPy, Matplotlib, Scikit-Learn), SQL, R, Tableau</p>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-map"></i> Geospatial & Visualization</h3>
            <p>ArcGIS, Geopandas, Folium, Matplotlib, Seaborn</p>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-brain"></i> Machine Learning & Statistics</h3>
            <p>Linear Regression, OLS Regression, Random Forest, ANOVA</p>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-database"></i> Data Management & APIs</h3>
            <p>FRED API, Zillow Data, Web Scraping</p>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
            <p>Google Suite, Excel (VLOOKUP, PivotTables), PC Assembly & Diagnostics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 