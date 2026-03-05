import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav-brand">
            <h2 className="heading-medium">ZestDo</h2>
          </Link>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <Link 
              to="/for-parents" 
              className={`nav-link body-standard ${isActive('/for-parents') ? 'nav-link-active' : ''}`}
            >
              For Parents
            </Link>
            <Link 
              to="/for-trainers" 
              className={`nav-link body-standard ${isActive('/for-trainers') ? 'nav-link-active' : ''}`}
            >
              For Trainers
            </Link>
            <Link 
              to="/for-apartments" 
              className={`nav-link body-standard ${isActive('/for-apartments') ? 'nav-link-active' : ''}`}
            >
              For Apartments
            </Link>
            <Link 
              to="/about" 
              className={`nav-link body-standard ${isActive('/about') ? 'nav-link-active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link body-standard ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              Contact
            </Link>
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
