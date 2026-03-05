import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-brand">
              <h3 className="heading-medium">ZestDo</h3>
              <p className="body-standard text-secondary">
                Energy. Skill. Passion.<br />
                Screen-Free Learning.<br />
                Community Growth.
              </p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">For Parents</h4>
            <ul className="footer-links">
              <li><Link to="/for-parents" className="body-standard">Browse Activities</Link></li>
              <li><Link to="/for-parents#plans" className="body-standard">Subscription Plans</Link></li>
              <li><Link to="/contact" className="body-standard">Parent Guide</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">For Trainers</h4>
            <ul className="footer-links">
              <li><Link to="/for-trainers" className="body-standard">Become a Trainer</Link></li>
              <li><Link to="/for-trainers#requirements" className="body-standard">Requirements</Link></li>
              <li><Link to="/contact" className="body-standard">Resources</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">For Apartments</h4>
            <ul className="footer-links">
              <li><Link to="/for-apartments" className="body-standard">Partner With Us</Link></li>
              <li><Link to="/for-apartments#revenue" className="body-standard">Revenue Model</Link></li>
              <li><Link to="/for-apartments#case-study" className="body-standard">Case Studies</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li className="body-standard">
                <MapPin size={16} />
                <span>Bengaluru, India</span>
              </li>
              <li className="body-standard">
                <Mail size={16} />
                <span>hello@zestdo.com</span>
              </li>
              <li className="body-standard">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="body-small text-secondary">
            © 2025 ZestDo. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="body-small text-secondary">Privacy Policy</Link>
            <span className="legal-divider">•</span>
            <Link to="/terms-of-service" className="body-small text-secondary">Terms of Service</Link>
            <span className="legal-divider">•</span>
            <Link to="/contact" className="body-small text-secondary">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
