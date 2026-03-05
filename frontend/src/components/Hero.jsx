import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const springConfig = {
    type: "spring",
    damping: 80,
    stiffness: 400,
    mass: 1
  };

  return (
    <section className="hero-section gradient-hero">
      <div className="gradient-overlay">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.1 }}
              className="hero-text"
            >
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.2 }}
                className="hero-badge"
              >
                <span className="badge-dot"></span>
                Now Live in Bengaluru
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.3 }}
                className="display-hero"
              >
                Where Kids Discover Passion Beyond Screens
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.4 }}
                className="hero-subtext body-large"
              >
                Apartment-Based Classes. Trusted Trainers. Screen-Free Growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.5 }}
                className="hero-cta"
              >
                <Button className="btn-primary" size="lg">
                  Explore Classes
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" className="btn-secondary" size="lg">
                  <Play size={20} className="mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hero-stats"
              >
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Apartments</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Expert Trainers</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Happy Kids</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springConfig, delay: 0.4 }}
              className="hero-visual"
            >
              <div className="app-mockup-container">
                <div className="floating-icon icon-music">🎵</div>
                <div className="floating-icon icon-art">🎨</div>
                <div className="floating-icon icon-robot">🤖</div>
                <div className="floating-icon icon-dance">💃</div>
                <div className="app-mockup-placeholder">
                  <div className="mockup-screen">
                    <div className="mockup-header"></div>
                    <div className="mockup-content"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
