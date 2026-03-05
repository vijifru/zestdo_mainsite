import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Calendar, TrendingUp, Award, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const ForParents = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safe & Trusted",
      description: "All trainers are background-verified and experienced professionals"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Your child learns with neighbor kids in a familiar environment"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Classes fit your family's schedule with multiple time slots"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Regular updates on your child's development and achievements"
    },
    {
      icon: Award,
      title: "Quality Education",
      description: "Expert trainers focused on skill development and growth"
    },
    {
      icon: Heart,
      title: "Screen-Free Time",
      description: "Engaging activities that keep kids away from devices"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Browse Activities",
      description: "Explore various activities available in your apartment community"
    },
    {
      step: "02",
      title: "Choose a Plan",
      description: "Select a subscription plan that fits your needs (1, 3, or 6 months)"
    },
    {
      step: "03",
      title: "Book Classes",
      description: "Reserve spots in classes through our easy-to-use app"
    },
    {
      step: "04",
      title: "Watch Them Grow",
      description: "See your child develop new skills and make friends"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero parents-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1 className="display-hero">For Parents</h1>
            <p className="body-large">
              Give your child the gift of screen-free learning, right in your apartment community
            </p>
            <Button className="btn-primary btn-large mt-4">
              Get Started Today
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
            <h2 className="heading-large text-center">Why Parents Love ZestDo</h2>
            <p className="body-large text-center text-secondary">
              Trusted by 2000+ families across Bengaluru
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
                  </div>
                  <h3 className="heading-medium">{benefit.title}</h3>
                  <p className="body-standard text-secondary">{benefit.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="heading-large text-center">How It Works</h2>
            <p className="body-large text-center text-secondary">
              Four simple steps to get started
            </p>
          </motion.div>

          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="step-card"
              >
                <div className="step-number">{item.step}</div>
                <h3 className="heading-medium">{item.title}</h3>
                <p className="body-standard text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">What Parents Say</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="testimonial-highlight"
          >
            <div className="testimonial-quote-large">"</div>
            <p className="body-large testimonial-text-large">
              ZestDo has been a game-changer for our family. My daughter now spends her evenings learning dance instead of watching YouTube. The convenience of classes in our own apartment is unbeatable!
            </p>
            <div className="testimonial-author">
              <div 
                className="testimonial-author-avatar"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1588979355313-6711a095465f?w=100&h=100&fit=crop)' }}
              ></div>
              <div>
                <h4 className="body-large font-medium">Priya Sharma</h4>
                <p className="body-standard text-secondary">Parent, Prestige Lakeside</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-box"
          >
            <h2 className="heading-large text-center">Ready to Get Started?</h2>
            <p className="body-large text-center text-secondary">
              Join 2000+ families and give your child the gift of screen-free learning
            </p>
            <div className="cta-buttons-center">
              <Button className="btn-primary btn-large">
                Explore Activities
              </Button>
              <Button className="btn-secondary btn-large">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ForParents;
