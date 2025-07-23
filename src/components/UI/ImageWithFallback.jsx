import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, fallbackText, className, style, children }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError || !src) {
    return (
      <div 
        className={`${className} fallback-image`}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: '600',
          textAlign: 'center'
        }}
      >
        {fallbackText || 'Image'}
        {children}
      </div>
    );
  }

  return (
    <div 
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img 
        src={src} 
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ 
          display: 'none' 
        }}
      />
      {children}
    </div>
  );
};

export default ImageWithFallback;
