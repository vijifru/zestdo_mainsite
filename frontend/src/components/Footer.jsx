import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

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
              <li><a href="#" className="body-standard">Browse Activities</a></li>
              <li><a href="#" className="body-standard">Find Classes</a></li>
              <li><a href="#" className="body-standard">Subscription Plans</a></li>
              <li><a href="#" className="body-standard">Parent Guide</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">For Trainers</h4>
            <ul className="footer-links">
              <li><a href="#" className="body-standard">Become a Trainer</a></li>
              <li><a href="#" className="body-standard">Trainer Dashboard</a></li>
              <li><a href="#" className="body-standard">Resources</a></li>
              <li><a href="#" className="body-standard">Success Stories</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">For Apartments</h4>
            <ul className="footer-links">
              <li><a href="#" className="body-standard">Partner With Us</a></li>
              <li><a href="#" className="body-standard">Revenue Model</a></li>
              <li><a href="#" className="body-standard">Case Studies</a></li>
              <li><a href="#" className="body-standard">Admin Portal</a></li>
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
            <a href="#" className="body-small text-secondary">Privacy Policy</a>
            <span className="legal-divider">•</span>
            <a href="#" className="body-small text-secondary">Terms of Service</a>
            <span className="legal-divider">•</span>
            <a href="#" className="body-small text-secondary">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
