import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, sendTestQuoteEmail } from '../../utils/emailConfig';

const QuoteForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    packagingMaterial: '',
    dimensions: '',
    quantity: '',
    timeline: '',
    budget: '',
    additionalRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // For testing purposes, use the test email function
      // For production, uncomment the EmailJS code below
      await sendTestQuoteEmail(formData);
      
      /* For production with EmailJS:
      const serviceId = EMAIL_CONFIG.SERVICE_ID;
      const templateId = EMAIL_CONFIG.QUOTE_TEMPLATE_ID;
      const publicKey = EMAIL_CONFIG.PUBLIC_KEY;

      const templateParams = {
        to_email: '202302040002@mitaoe.ac.in',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        product_type: formData.productType,
        packaging_material: formData.packagingMaterial,
        dimensions: formData.dimensions,
        quantity: formData.quantity,
        timeline: formData.timeline,
        budget: formData.budget,
        additional_requirements: formData.additionalRequirements,
        reply_to: formData.email,
        subject: 'New Quote Request - Dreamswood Packaging'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      */
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        productType: '',
        packagingMaterial: '',
        dimensions: '',
        quantity: '',
        timeline: '',
        budget: '',
        additionalRequirements: ''
      });

      // Auto close modal after 3 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus('');
      }, 3000);

    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <div className="quote-modal-header">
          <h2>Get a Quote</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="quote-modal-content">
          {submitStatus === 'success' ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank you for requesting a quote!</h3>
              <p>Our team will contact you within 24–48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-section">
                <h3>Contact Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Packaging Requirements</h3>
                <div className="form-row">
                  <div className="form-group">
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Product Type *</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="cosmetics">Cosmetics & Beauty</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="e-commerce">E-commerce Shipping</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="packagingMaterial"
                      value={formData.packagingMaterial}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Packaging Material *</option>
                      <option value="corrugated-cardboard">Corrugated Cardboard</option>
                      <option value="kraft-paper">Kraft Paper</option>
                      <option value="eco-friendly">Eco-friendly Materials</option>
                      <option value="rigid-boxes">Rigid Boxes</option>
                      <option value="custom-material">Custom Material</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Quantity Range *</option>
                      <option value="100-500">100 - 500 units</option>
                      <option value="500-1000">500 - 1,000 units</option>
                      <option value="1000-5000">1,000 - 5,000 units</option>
                      <option value="5000-10000">5,000 - 10,000 units</option>
                      <option value="10000+">10,000+ units</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Required Timeline *</option>
                      <option value="rush-1-week">Rush (1 week)</option>
                      <option value="standard-2-3-weeks">Standard (2-3 weeks)</option>
                      <option value="flexible-1-month">Flexible (1 month)</option>
                      <option value="flexible-2-months">Flexible (2+ months)</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="Dimensions (L x W x H)"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Budget Range (Optional)</option>
                      <option value="under-1000">Under ₹1,000</option>
                      <option value="1000-5000">₹1,000 - ₹5,000</option>
                      <option value="5000-15000">₹5,000 - ₹15,000</option>
                      <option value="15000-50000">₹15,000 - ₹50,000</option>
                      <option value="50000+">₹50,000+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder="Additional requirements, special features, printing needs, etc."
                    rows="3"
                  />
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="error-message">
                  Failed to send quote request. Please try again.
                </div>
              )}

              <div className="form-actions">
                <button type="button" onClick={onClose} className="btn-secondary">
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Quote'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
