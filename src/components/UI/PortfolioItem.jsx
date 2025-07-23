import React from 'react';
import ImageWithFallback from './ImageWithFallback';

const PortfolioItem = ({ item }) => {
  const { category, title, description, image } = item;
  
  return (
    <div className="portfolio-item">
      <ImageWithFallback
        src={image}
        alt={title}
        fallbackText={category}
        className="portfolio-image"
      >
        <span>{category}</span>
      </ImageWithFallback>
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
