import React from 'react';
import { IMAGES } from '../../utils/constants';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2>Why Choose Dreamswood Packaging?</h2>
          <p>We combine quality manufacturing, sustainability, and precision to deliver packaging solutions that protect and preserve your products.</p>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-text">
                  <h4>Quality Manufacturing</h4>
                  <p>Our production facility maintains the highest standards for consistent, reliable packaging output.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <div className="feature-text">
                  <h4>Eco-Friendly Materials</h4>
                  <p>100% recyclable and biodegradable materials for environmentally conscious brands.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h4>Fast Turnaround</h4>
                  <p>Quick prototyping and production to meet your tight deadlines without compromising quality.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-container">
              <div className="about-image" style={{backgroundImage: `url(${IMAGES.about.manufacturing})`}}>
                <span>Our Manufacturing Process</span>
              </div>
              <div className="experience-badge">
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
