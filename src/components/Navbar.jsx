import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`portfolio-navbar-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Updated Brand Logo */}
        <a href="#" className="nav-brand">
          Gokul<span className="brand-dot">Krishna</span>
        </a>

        {/* Center Nav Links */}
        <nav className="nav-links-center d-none d-md-flex">
          <a href="#">Home</a>
          <a href="#journey">Journey</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <a href="#contact" className="btn-nav-hire">
            <Send size={14} className="me-1" /> Let's Talk
          </a>
        </div>

      </div>
    </header>
  );
}