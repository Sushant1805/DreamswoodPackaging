import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  placeholder = 'blur',
  quality = 75,
  sizes = '100vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    const widths = [320, 640, 768, 1024, 1280, 1920];
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  // Placeholder while loading
  const placeholderStyle = {
    backgroundColor: '#f3f4f6',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23f3f4f6'/%3e%3c/svg%3e")`,
    backgroundSize: 'cover',
    filter: isLoaded ? 'none' : 'blur(5px)',
    transition: 'filter 0.3s ease',
  };

  return (
    <div
      ref={imgRef}
      className={`optimized-image-container ${className}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          style={{
            ...placeholderStyle,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: isLoaded ? 'block' : 'none',
          }}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
      
      {!isLoaded && (
        <div
          className="image-placeholder"
          style={{
            ...placeholderStyle,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            fontSize: '0.875rem',
            fontWeight: '500',
          }}
        >
          {placeholder === 'blur' ? (
            <div style={{ filter: 'blur(5px)', opacity: 0.6 }}>
              Loading...
            </div>
          ) : (
            'Loading...'
          )}
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
