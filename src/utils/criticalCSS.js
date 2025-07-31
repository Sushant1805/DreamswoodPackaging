// Critical CSS utilities for performance optimization

// Extract critical above-the-fold CSS
export const criticalCSS = `
/* Critical styles for immediate rendering */
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  background-color: #ffffff;
  overflow-x: hidden;
}

.App {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
}

/* Critical navigation styles */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  z-index: 1000;
  height: 80px;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 20px rgba(48, 69, 230, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Critical hero styles */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
  padding: 120px 0 80px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.hero-content h1 {
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.1;
  color: #1F2937;
  margin-bottom: 0.5rem;
}

.btn-primary {
  background: #03045e;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(3, 4, 94, 0.3);
}

/* Loading spinner */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Mobile critical styles */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 1.8rem;
  }
  
  .nav-container {
    padding: 0 20px;
  }
}
`;

// Function to inject critical CSS
export const injectCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }
};

// Function to defer non-critical CSS
export const deferNonCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      if (!link.hasAttribute('data-critical')) {
        link.media = 'print';
        link.onload = function() {
          this.media = 'all';
        };
      }
    });
  }
};

// Resource preloading utilities
export const preloadCriticalResources = () => {
  if (typeof document !== 'undefined') {
    const resources = [
      { href: '/images/package-delivery-home.jpg', as: 'image' },
      { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap', as: 'style' }
    ];

    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'style') {
        link.onload = function() {
          this.rel = 'stylesheet';
        };
      }
      document.head.appendChild(link);
    });
  }
};

// Function to optimize fonts loading
export const optimizeFontLoading = () => {
  if (typeof document !== 'undefined' && 'fonts' in document) {
    // Preload critical font variants
    const criticalFonts = [
      'Montserrat 400',
      'Montserrat 600',
      'Montserrat 700'
    ];

    criticalFonts.forEach(font => {
      document.fonts.load(`1em ${font}`);
    });
  }
};

// Function to implement resource hints
export const addResourceHints = () => {
  if (typeof document !== 'undefined') {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
      document.head.appendChild(link);
    });
  }
};

export default {
  criticalCSS,
  injectCriticalCSS,
  deferNonCriticalCSS,
  preloadCriticalResources,
  optimizeFontLoading,
  addResourceHints
};
