import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h2 className="heading-medium">ZestDo</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <a href="#activities" className="nav-link body-standard">Activities</a>
            <a href="#how-it-works" className="nav-link body-standard">How it Works</a>
            <a href="#pricing" className="nav-link body-standard">Pricing</a>
            <a href="#about" className="nav-link body-standard">About</a>
            <div className="nav-buttons">
              <Button variant="ghost" className="btn-secondary-small">
                Login
              </Button>
              <Button className="btn-primary-small">
                Get Started
              </Button>
            </div>
          </div>
          
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
