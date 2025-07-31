import React from 'react';
import ImageWithFallback from './ImageWithFallback';

const ServiceCard = ({ service, featured = false }) => {
  const { icon, title, description, features, image } = service;
  
  return (
    <div className={`service-card ${featured ? 'featured' : ''}`}>
      {image && (
        <ImageWithFallback
          src={image}
          alt={title}
          fallbackText={icon}
          className="service-image"
        >
          <div className="service-overlay"></div>
        </ImageWithFallback>
      )}
      <div className="service-header">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {features && (
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
