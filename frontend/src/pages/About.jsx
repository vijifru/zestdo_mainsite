import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Users, Award, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Child-Centric",
      description: "Every decision we make prioritizes children's holistic development and well-being"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building strong, connected communities where families support each other"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Only verified, experienced trainers who are passionate about education"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Constantly evolving our platform to serve families better"
    }
  ];

  const team = [
    {
      name: "Priya Reddy",
      role: "Founder & CEO",
      description: "Former educator with 15+ years experience, mother of two"
    },
    {
      name: "Arjun Mehta",
      role: "Head of Operations",
      description: "Community building expert, passionate about children's development"
    },
    {
      name: "Kavya Iyer",
      role: "Head of Trainer Relations",
      description: "Professional dancer and educator, connecting talent with opportunity"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1 className="display-hero">About ZestDo</h1>
            <p className="body-large">
              Transforming apartment communities into thriving learning hubs for children
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="about-story">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="story-image"
            >
              <img 
                src="https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=600&h=600&fit=crop" 
                alt="Children learning"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="story-content"
            >
              <h2 className="heading-large">Our Story</h2>
              <p className="body-standard">
                ZestDo was born from a simple observation: children in urban apartments spend too much time on screens while community amenities remain underutilized. As parents ourselves, we saw an opportunity to solve both problems.
              </p>
              <p className="body-standard">
                In 2024, we started with just 5 apartments in Bengaluru. Today, we've grown to 50+ partner communities, 100+ passionate trainers, and over 2000 happy children learning and growing together.
              </p>
              <p className="body-standard">
                Our mission is simple: bring back the joy of community-based learning, reduce screen time, and give every child the opportunity to discover their passion.
              </p>
            </motion.div>
          
        
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mission-card"
            >
              <Target size={48} className="card-icon" />
              <h3 className="heading-medium">Our Mission</h3>
              <p className="body-standard">
                To create a screen-free learning ecosystem within apartment communities, making quality education accessible, convenient, and community-driven.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="vision-card"
            >
              <Zap size={48} className="card-icon" />
              <h3 className="heading-medium">Our Vision</h3>
              <p className="body-standard">
                To become India's leading platform for apartment-based children's activities, present in every major city, transforming how children learn and grow.
              </p>
            </motion.div>
          
        
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Our Core Values</h2>
            <p className="body-large text-center text-secondary">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <IconComponent size={32} />
                  
                  <h3 className="heading-medium">{value.title}</h3>
                  <p className="body-standard text-secondary">{value.description}</p>
                </motion.div>
              );
            })}
          
        
      </section>

      {/* Team Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Meet Our Team</h2>
            <p className="body-large text-center text-secondary">
              Passionate individuals driving change in children's education
            </p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="team-card"
              >
                <div className="team-avatar">
                  {member.name.charAt(0)}
                
                <h3 className="heading-medium">{member.name}</h3>
                <p className="body-standard team-role">{member.role}</p>
                <p className="body-standard text-secondary">{member.description}</p>
              </motion.div>
            ))}
          
        
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div className="stats-showcase">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="stat-large"
            >
              <div className="stat-number-large">50+
              <div className="stat-label-large">Partner Apartments
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-large"
            >
              <div className="stat-number-large">100+
              <div className="stat-label-large">Verified Trainers
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="stat-large"
            >
              <div className="stat-number-large">2000+
              <div className="stat-label-large">Happy Children
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="stat-large"
            >
              <div className="stat-number-large">8+
              <div className="stat-label-large">Activity Categories
            </motion.div>
          
        
      </section>
    </>
  );
};

export default About;
