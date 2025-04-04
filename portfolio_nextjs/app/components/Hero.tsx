'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-profile">
          <Image 
            src="/img/aurshane.png" 
            alt="Shane Fitzpatrick"
            width={240}
            height={240}
            style={{ objectFit: 'cover', objectPosition: '85% 8%' }}
          />
        </div>
        <h1>Shane Fitzpatrick</h1>
        <p>Data Science Portfolio</p>
        <div className="hero-contact">
          <span><i className="fas fa-map-marker-alt"></i> Huntington, NY</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 