import React from 'react';

const Hero = ({ onGetQuoteClick }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
    
          <h1>
            Professional Packaging
            <span className="highlight"> Manufacturing</span>
            <br />That Protects Your Products
          </h1>
          <p>We manufacture high-quality, durable packaging solutions using sustainable materials that ensure your products reach customers safely and securely.</p>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>100+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat-item">
              <strong>10K+</strong>
              <span>Packages Delivered</span>
            </div>
            <div className="stat-item">
              <strong>99%</strong>
              <span>Satisfaction Rate</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onGetQuoteClick}>Get Quote</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="packaging-display">
            <div className="single-package-container">
              <img 
                src="/images/package-delivery-home.jpg" 
                alt="Professional Packaging and Delivery" 
                className="hero-package-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
