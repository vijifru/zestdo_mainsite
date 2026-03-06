import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Dummy app store links
  const appLinks = {
    parent: {
      android: 'https://play.google.com/store/apps/details?id=com.zestdo.parent',
      ios: 'https://apps.apple.com/app/zestdo-parent/id123456789'
    },
    trainer: {
      android: 'https://play.google.com/store/apps/details?id=com.zestdo.trainer',
      ios: 'https://apps.apple.com/app/zestdo-trainer/id987654321'
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* App Download Section */}
        <div className="footer-apps">
          <div className="footer-app-section">
            <h4 className="footer-heading">Parent App</h4>
            <p className="body-small text-secondary mb-3">Book classes & track progress</p>
            <div className="footer-store-badges">
              <a 
                href={appLinks.parent.android} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-store-badge"
                data-testid="footer-download-android-parent"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                />
              </a>
              <a 
                href={appLinks.parent.ios} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-store-badge"
                data-testid="footer-download-ios-parent"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                />
              </a>
            </div>
          </div>
          <div className="footer-app-section">
            <h4 className="footer-heading">Trainer App</h4>
            <p className="body-small text-secondary mb-3">Manage classes & earnings</p>
            <div className="footer-store-badges">
              <a 
                href={appLinks.trainer.android} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-store-badge"
                data-testid="footer-download-android-trainer"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                />
              </a>
              <a 
                href={appLinks.trainer.ios} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-store-badge"
                data-testid="footer-download-ios-trainer"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                />
              </a>
            </div>
          </div>
        </div>

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
                <span>+91 8970007983 & +91 8970007984</span>
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
