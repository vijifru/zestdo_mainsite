import React from 'react';
import { motion } from 'motion/react';
import { Building2, TrendingUp, Users, DollarSign, Award, Target } from 'lucide-react';
import { Button } from '../components/ui/button';

const ForApartments = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Earn 20% revenue share from all classes conducted in your premises"
    },
    {
      icon: Users,
      title: "Increased Engagement",
      description: "Build a more connected and active resident community"
    },
    {
      icon: TrendingUp,
      title: "Amenity Utilization",
      description: "Transform underused clubhouse/common areas into revenue generators"
    },
    {
      icon: Award,
      title: "Enhanced Value",
      description: "Offer unique value proposition to current and prospective residents"
    },
    {
      icon: Target,
      title: "Zero Investment",
      description: "No upfront costs - we handle everything from trainers to marketing"
    },
    {
      icon: Building2,
      title: "Premium Brand",
      description: "Association with a trusted children's education platform"
    }
  ];

  const caseStudy = {
    name: "Brigade Gateway",
    location: "Rajaji Nagar, Bengaluru",
    residents: "1500 families",
    results: [
      "₹45,000/month additional revenue",
      "8 active classes running weekly",
      "150+ children enrolled",
      "85% resident satisfaction increase",
      "Clubhouse utilization up 300%"
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero apartments-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1 className="display-hero">For Apartments</h1>
            <p className="body-large">
              Transform your amenities into revenue-generating community hubs
            </p>
            <Button className="btn-primary btn-large mt-4">
              Partner With Us
            </Button>
          </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Why Partner With ZestDo?</h2>
            <p className="body-large text-center text-secondary">
              50+ apartments across Bengaluru trust us
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="benefit-card"
                >
                  <div className="benefit-icon">
                    <IconComponent size={32} />

                  <h3 className="heading-medium">{benefit.title}</h3>
                  <p className="body-standard text-secondary">{benefit.description}</p>
                </motion.div>
              );
            })}


          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Simple Revenue Model</h2>
            <p className="body-large text-center text-secondary">
              Transparent and fair revenue sharing
            </p>
          </motion.div>

          <div className="revenue-breakdown">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="revenue-card main-revenue"
            >
              <h3 className="revenue-percentage">20%</h3>
              <p className="revenue-label">Apartment Revenue Share</p>
              <p className="body-standard text-secondary">
                You earn 20% of all subscription fees from classes in your premises
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="revenue-example"
            >
              <h4 className="heading-medium text-center mb-4">Example Calculation</h4>
              <div className="calculation-grid">
                <div className="calc-item">
                  <div className="calc-number">50
                  <div className="calc-label">Children Enrolled

                <div className="calc-operator">×
                <div className="calc-item">
                  <div className="calc-number">₹999
                  <div className="calc-label">Per Month Plan

                <div className="calc-operator">×
                <div className="calc-item">
                  <div className="calc-number">20%
                  <div className="calc-label">Your Share

                <div className="calc-operator">=
                <div className="calc-item highlight">
                  <div className="calc-number">₹9,990
                  <div className="calc-label">Monthly Revenue


            </motion.div>


          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Success Story</h2>
            <p className="body-large text-center text-secondary">
              Real results from our partner communities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="case-study-card"
          >
            <div className="case-study-header">
              <div className="case-study-image">
                <img 
                  src="https://images.unsplash.com/photo-1624204386084-dd8c05e32226?w=600&h=400&fit=crop" 
                  alt={caseStudy.name}
                />

              <div className="case-study-info">
                <h3 className="heading-large">{caseStudy.name}</h3>
                <p className="body-large text-secondary">{caseStudy.location}</p>
                <p className="body-standard text-muted">{caseStudy.residents}</p>



            <div className="case-study-results">
              <h4 className="heading-medium mb-4">Results After 6 Months</h4>
              <div className="results-grid">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="result-item"
                  >
                    <span className="result-check">✓</span>
                    <span className="body-standard">{result}</span>
                  </motion.div>
                ))}


          </motion.div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Partnership Process</h2>
            <p className="body-large text-center text-secondary">
              Get started in 4 simple steps
            </p>
          </motion.div>

          <div className="steps-grid">
            {[
              { step: "01", title: "Initial Discussion", desc: "Connect with our team to discuss your community's needs" },
              { step: "02", title: "Site Visit", desc: "We assess available spaces and plan activity schedule" },
              { step: "03", title: "Agreement Signing", desc: "Simple partnership agreement with transparent terms" },
              { step: "04", title: "Launch Classes", desc: "We handle marketing, trainers, and operations - you earn revenue" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="step-card"
              >
                <div className="step-number">{item.step}
                <h3 className="heading-medium">{item.title}</h3>
                <p className="body-standard text-secondary">{item.desc}</p>
              </motion.div>
            ))}


          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="testimonial-highlight"
          >
            <div className="testimonial-quote-large">"
            <p className="body-large testimonial-text-large">
              Our clubhouse was rarely used before ZestDo. Now it's buzzing with activity every evening. Parents are happy, kids are learning, and we earn revenue share. It's a perfect win-win partnership!
            </p>
            <div className="testimonial-author">
              <div 
                className="testimonial-author-avatar"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624272864537-8ecc72b67958?w=100&h=100&fit=crop)' }}
              >
              <div>
                <h4 className="body-large font-medium">Meena Iyer</h4>
                <p className="body-standard text-secondary">Secretary, Brigade Gateway</p>


          </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-box"
          >
            <h2 className="heading-large text-center">Ready to Transform Your Community?</h2>
            <p className="body-large text-center text-secondary">
              Join 50+ apartments generating revenue through ZestDo
            </p>
            <div className="cta-buttons-center">
              <Button className="btn-primary btn-large">
                Schedule a Call
              </Button>
              <Button className="btn-secondary btn-large">
                Download Brochure
              </Button>

          </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ForApartments;
