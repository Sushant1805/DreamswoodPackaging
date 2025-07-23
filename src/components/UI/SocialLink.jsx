import React from 'react';

const SocialLink = ({ href, ariaLabel, children }) => {
  return (
    <a href={href} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default SocialLink;
