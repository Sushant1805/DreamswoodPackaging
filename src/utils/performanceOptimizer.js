import { useEffect } from 'react';

// Performance optimization utilities
export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/package-delivery-home.jpg',
        // Add other critical images here
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.defer = true;
        }
      });
    };

    // Enable service worker for caching
    const enableServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    };

    // Implement resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images for next-gen formats
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading=lazy to images not already optimized
        if (!img.hasAttribute('loading') && !img.dataset.priority) {
          img.loading = 'lazy';
        }

        // Add decoding=async for better performance
        if (!img.hasAttribute('decoding')) {
          img.decoding = 'async';
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeThirdPartyScripts();
    enableServiceWorker();
    addResourceHints();
    
    // Delay image optimization to avoid blocking initial render
    setTimeout(optimizeImages, 100);

    // Cleanup function
    return () => {
      // Remove added elements if component unmounts
    };
  }, []);

  return null; // This component doesn't render anything
};

// Hook for measuring performance
export const usePerformanceMetrics = () => {
  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let cumulativeLayoutShiftScore = 0;
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            cumulativeLayoutShiftScore += entry.value;
          }
        });
        console.log('CLS:', cumulativeLayoutShiftScore);
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Only measure in production
    if (process.env.NODE_ENV === 'production') {
      measureWebVitals();
    }
  }, []);
};

// Utility for critical CSS injection
export const injectCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
};

// Utility for lazy loading modules
export const lazyLoadModule = (importFunction) => {
  return React.lazy(() => 
    new Promise(resolve => {
      setTimeout(() => resolve(importFunction()), 100);
    })
  );
};

export default PerformanceOptimizer;
