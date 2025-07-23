import React from 'react';
import ContactMethod from '../UI/ContactMethod';
import ContactForm from '../UI/ContactForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: '123 Packaging Boulevard<br />Industrial District, City 12345'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567<br />Mon-Fri 9AM-6PM'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'info@dreamswoodpackaging.com<br />We reply within 24 hours'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-badge">Contact Us</span>
            <h2>Ready to Start Your Project?</h2>
            <p>Get in touch with our team to discuss your packaging needs and receive a custom quote.</p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <ContactMethod key={index} method={method} />
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
