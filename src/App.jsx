import React, { useState, Suspense, lazy } from 'react';
import './styles/App.css';

// Import performance optimization utilities
import { PerformanceOptimizer, usePerformanceMetrics } from './utils/performanceOptimizer';

// Lazy load non-critical components
const QuoteForm = lazy(() => import('./components/UI/QuoteForm'));

// Import critical components normally (above the fold)
import {
  Navigation,
  Footer,
  Hero,
} from './components';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/Sections/About'));
const Services = lazy(() => import('./components/Sections/Services'));
const Portfolio = lazy(() => import('./components/Sections/Portfolio'));
const Contact = lazy(() => import('./components/Sections/Contact'));

// Import hooks
import { useScrollHandler } from './hooks';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const isScrolled = useScrollHandler(50);

  // Use performance metrics hook
  usePerformanceMetrics();

  const handleGetQuoteClick = () => {
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  // Loading component for Suspense
  const LoadingSpinner = () => (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '200px',
        backgroundColor: 'transparent'
      }}
      aria-label="Loading content"
    >
      <div 
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #3045e6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      ></div>
    </div>
  );

  return (
    <div className="App">
      {/* Performance optimizer component */}
      <PerformanceOptimizer />
      
      {/* Critical above-the-fold content */}
      <Navigation 
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onGetQuoteClick={handleGetQuoteClick}
      />
      
      <Hero onGetQuoteClick={handleGetQuoteClick} />
      
      {/* Lazy-loaded below-the-fold content */}
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      
      <Footer />
      
      {/* Lazy-loaded modal */}
      <Suspense fallback={null}>
        <QuoteForm 
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
        />
      </Suspense>
    </div>
  );
};

export default App;