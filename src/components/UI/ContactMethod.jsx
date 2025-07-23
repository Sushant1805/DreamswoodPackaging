import React from 'react';

const ContactMethod = ({ method }) => {
  const { icon, title, details } = method;
  
  return (
    <div className="contact-method">
      <div className="method-icon">{icon}</div>
      <div className="method-info">
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    </div>
  );
};

export default ContactMethod;
