import React from 'react';
import ServiceCard from '../UI/ServiceCard';
import { IMAGES } from '../../utils/constants';

const Services = () => {
  const services = [
    {
      icon: '📦',
      title: 'Box Manufacturing',
      description: 'High-quality box production with precision cutting and professional finishing.',
      image: IMAGES.services.boxManufacturing,
      features: [
        'Corrugated boxes',
        'Folding cartons',
        'Custom dimensions',
        'Quality control'
      ]
    },
    {
      icon: '🏭',
      title: 'Volume Production',
      description: 'Large-scale manufacturing capabilities with consistent quality and fast turnaround.',
      image: IMAGES.services.volumeProduction
    },
    {
      icon: '🌱',
      title: 'Sustainable Materials',
      description: 'Eco-friendly packaging manufacturing using recyclable and biodegradable materials.',
      image: IMAGES.services.sustainable
    },
    {
      icon: '🚚',
      title: 'Bulk Orders',
      description: 'Cost-effective bulk manufacturing with reliable delivery schedules.',
      image: IMAGES.services.bulkOrders
    },
    {
      icon: '🛡️',
      title: 'Protective Packaging',
      description: 'Durable packaging manufacturing for fragile and valuable items during shipping.',
      image: IMAGES.services.protective
    },
    {
      icon: '📏',
      title: 'Custom Specifications',
      description: 'Manufacturing to precise measurements and dimensions to meet your requirements.',
      image: IMAGES.services.custom

    
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2>Professional Packaging Manufacturing</h2>
          <p>From production to delivery, we provide comprehensive packaging manufacturing services tailored to your specifications.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              featured={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
