import React from 'react';
import { motion } from 'motion/react';
import { Smartphone } from 'lucide-react';

const AppDownload = ({ variant = 'default', userType = 'parent' }) => {
  // Dummy links - will be replaced with actual app store links
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

  const links = appLinks[userType] || appLinks.parent;

  // Compact version for footer or inline use
  if (variant === 'compact') {
    return (
      <div className="app-download-compact">
        <a 
          href={links.android} 
          target="_blank" 
          rel="noopener noreferrer"
          className="store-badge"
          data-testid={`download-android-${userType}`}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play" 
            className="store-badge-img"
          />
        </a>
        <a 
          href={links.ios} 
          target="_blank" 
          rel="noopener noreferrer"
          className="store-badge"
          data-testid={`download-ios-${userType}`}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
            alt="Download on the App Store" 
            className="store-badge-img"
          />
        </a>
      </div>
    );
  }

  // Full section version
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="app-download-section"
    >
      <div className="app-download-content">
        <div className="app-download-icon">
          <Smartphone size={32} />
        </div>
        <div className="app-download-text">
          <h4 className="heading-medium">
            {userType === 'trainer' ? 'Download Trainer App' : 'Download Parent App'}
          </h4>
          <p className="body-standard text-secondary">
            {userType === 'trainer' 
              ? 'Manage your classes, track earnings, and connect with parents on the go'
              : 'Book classes, track progress, and stay connected with trainers'
            }
          </p>
        </div>
      </div>
      <div className="app-download-badges">
        <a 
          href={links.android} 
          target="_blank" 
          rel="noopener noreferrer"
          className="store-badge-large"
          data-testid={`download-android-${userType}-full`}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play" 
          />
        </a>
        <a 
          href={links.ios} 
          target="_blank" 
          rel="noopener noreferrer"
          className="store-badge-large"
          data-testid={`download-ios-${userType}-full`}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
            alt="Download on the App Store" 
          />
        </a>
      </div>
    </motion.div>
  );
};

export default AppDownload;
