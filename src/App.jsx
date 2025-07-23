import React, { useState } from 'react';
import './styles/App.css';

// Import components
import {
  Navigation,
  Footer,
  Hero,
  About,
  Services,
  Portfolio,
  Contact
} from './components';

// Import hooks
import { useScrollHandler } from './hooks';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHandler(50);

  return (
    <div className="App">
      <Navigation 
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      
      <Footer />
    </div>
  )
}

export default App