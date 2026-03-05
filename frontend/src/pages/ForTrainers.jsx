import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Users, Calendar, TrendingUp, Award, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';

const ForTrainers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Monetize Your Skills",
      description: "Earn competitive income teaching what you love in premium apartments"
    },
    {
      icon: Users,
      title: "Grow Your Student Base",
      description: "Access to multiple apartment communities with 1000+ families"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Choose your own time slots and manage your availability"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Expand your reach with our marketing and platform support"
    },
    {
      icon: Award,
      title: "Professional Recognition",
      description: "Get verified trainer badge and build your reputation"
    },
    {
      icon: Briefcase,
      title: "Easy Management",
      description: "Simple booking, payment, and student management system"
    }
  ];

  const requirements = [
    "Minimum 2 years of teaching/training experience",
    "Professional certification or qualification in your field",
    "Background verification and police clearance",
    "Passion for teaching children (age 5-15 years)",
    "Good communication skills",
    "Availability for at least 3 classes per week"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero trainers-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1 className="display-hero">For Trainers</h1>
            <p className="body-large">
              Turn your passion into income. Teach in premium apartment communities.
            </p>
            <Button className="btn-primary btn-large mt-4">
              Apply as Trainer
            </Button>
          </motion.div>
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
            <h2 className="heading-large text-center">Why Train With ZestDo?</h2>
            <p className="body-large text-center text-secondary">
              Join 100+ expert trainers growing their teaching business
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

      {/* Requirements Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="requirements-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="requirements-content"
            >
              <h2 className="heading-large">Trainer Requirements</h2>
              <p className="body-standard text-secondary mb-4">
                We maintain high standards to ensure quality education for children
              </p>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index} className="body-standard">
                    <span className="req-check">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="requirements-image"
            >
              <img 
                src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=500&fit=crop" 
                alt="Trainer teaching"
              />
            </motion.div>


          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">How To Get Started</h2>
            <p className="body-large text-center text-secondary">
              Simple onboarding process in 5 steps
            </p>
          </motion.div>

          <div className="steps-timeline">
            {[
              { step: "01", title: "Apply Online", desc: "Fill out the trainer application form with your details" },
              { step: "02", title: "Document Verification", desc: "Submit certificates and complete background check" },
              { step: "03", title: "Interview", desc: "Video interview with our team to assess teaching skills" },
              { step: "04", title: "Profile Setup", desc: "Create your trainer profile and list your classes" },
              { step: "05", title: "Start Teaching", desc: "Get matched with apartments and begin classes" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-number">{item.step}
                <div className="timeline-content">
                  <h3 className="heading-medium">{item.title}</h3>
                  <p className="body-standard text-secondary">{item.desc}</p>

              </motion.div>
            ))}


          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-light">
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
              Teaching through ZestDo has opened up amazing opportunities. I can now reach multiple apartment communities, manage my schedule easily, and the payment system is seamless. Best decision for my teaching career!
            </p>
            <div className="testimonial-author">
              <div 
                className="testimonial-author-avatar"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603367563698-67012943fd67?w=100&h=100&fit=crop)' }}
              >
              <div>
                <h4 className="body-large font-medium">Rajesh Kumar</h4>
                <p className="body-standard text-secondary">Chess Coach, ZestDo Trainer</p>


          </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-box"
          >
            <h2 className="heading-large text-center">Ready to Join Our Team?</h2>
            <p className="body-large text-center text-secondary">
              Become part of India's fastest-growing community learning platform
            </p>
            <div className="cta-buttons-center">
              <Button className="btn-primary btn-large">
                Apply Now
              </Button>
              <Button className="btn-secondary btn-large">
                Learn More
              </Button>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ForTrainers;
