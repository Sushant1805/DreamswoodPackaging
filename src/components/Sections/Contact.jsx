import React from 'react';
import ContactMethod from '../UI/ContactMethod';
import ContactForm from '../UI/ContactForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: 'KHONDGE WASTI, AMBETHAN, CHAKAN<br />PUNE, Maharashtra, India - 410501'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+91 (XXX) XXX-XXXX<br />Mon-Fri 9AM-6PM'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'dreamswood2@gmail.com<br />We reply within 24 hours'
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
