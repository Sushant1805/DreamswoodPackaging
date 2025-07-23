import React from 'react';

const Navigation = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Dreamswood</h2>
          <span className="logo-subtitle">Packaging</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="nav-cta">
          <button className="btn-cta">Get Quote</button>
        </div>
        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
