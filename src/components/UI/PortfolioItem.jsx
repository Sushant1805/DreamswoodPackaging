import React from 'react';

const PortfolioItem = ({ item }) => {
  const { title, description } = item;
  
  return (
    <div className="portfolio-item">
      <div className="portfolio-image">
        <span>Coming Soon</span>
      </div>
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
