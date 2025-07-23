import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Full Name *" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address *" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company Name" />
            </div>
          </div>
          <div className="form-group">
            <select required>
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
            <textarea placeholder="Tell us about your manufacturing requirements *" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary full-width">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
