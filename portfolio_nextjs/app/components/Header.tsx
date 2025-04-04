'use client';

import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else {
          header.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="container">
          <Link href="/" className="logo">Shane Fitzpatrick</Link>
          <ul className="nav-links">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#visualizations">Visualizations</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 