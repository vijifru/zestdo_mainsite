import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="cta-section gradient-cta">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <div className="cta-icon">
            <Sparkles size={48} />
          </div>
          
          <h2 className="display-hero-small">
            Bring Learning Back to Community
          </h2>
          
          <p className="body-large cta-subtext">
            Join 50+ apartments and 2000+ families transforming childhood learning
          </p>
          
          <div className="cta-buttons">
            <Button className="btn-primary btn-large">
              Launch in My Apartment
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" className="btn-secondary btn-large">
              Become a Trainer
            </Button>
          </div>
          
          <div className="cta-trust">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="body-small">Verified Trainers</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="body-small">Safe Environment</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="body-small">Community-Based</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
