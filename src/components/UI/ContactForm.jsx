import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, sendTestEmail } from '../../utils/emailConfig';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
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
      // For production, uncomment EmailJS code below and comment out the test function
      
      // Test email function (remove this in production)
      await sendTestEmail(formData);
      
      /* 
      // EmailJS configuration (uncomment for production)
      const templateParams = {
        to_email: '202302040002@mitaoe.ac.in',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID, 
        EMAIL_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAIL_CONFIG.PUBLIC_KEY
      );
      */
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h3>Send us a message</h3>
        {submitStatus === 'success' && (
          <div className="form-message success">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="form-message error">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name *" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address *" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="company"
                placeholder="Company Name" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service *</option>
              <option value="box-manufacturing">Box Manufacturing</option>
              <option value="volume-production">Volume Production</option>
              <option value="sustainable-materials">Sustainable Materials</option>
              <option value="bulk-orders">Bulk Orders</option>
              <option value="protective-packaging">Protective Packaging</option>
              <option value="custom-specifications">Custom Specifications</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Tell us about your manufacturing requirements *" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn-primary full-width"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
