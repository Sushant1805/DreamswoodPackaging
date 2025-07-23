import React from 'react';
import PortfolioItem from '../UI/PortfolioItem';
import { IMAGES } from '../../utils/constants';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'Beauty Products',
      title: 'Luxury Cosmetics Box',
      description: 'Premium packaging for high-end beauty brand',
      image: IMAGES.portfolio.cosmetics
    },
    {
      category: 'Food & Beverage',
      title: 'Organic Food Packaging',
      description: 'Sustainable packaging for organic products',
      image: IMAGES.portfolio.food
    },
    {
      category: 'Electronics',
      title: 'Tech Device Box',
      description: 'Protective packaging for electronic devices',
      image: IMAGES.portfolio.electronics
    },
    {
      category: 'Fashion',
      title: 'Clothing Brand Box',
      description: 'Elegant packaging for fashion retailers',
      image: IMAGES.portfolio.fashion
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2>Our Latest Projects</h2>
          <p>Discover some of our recent packaging designs across various industries.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
