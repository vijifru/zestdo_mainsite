import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { submitContact, resetContactForm } from '../store/slices/contactSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const { contactForm } = useSelector((state) => state.contact);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'parent',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Reset form on success
    if (contactForm.success) {
      setFormData({ name: '', email: '', phone: '', userType: 'parent', subject: '', message: '' });
    }
  }, [contactForm.success]);

  useEffect(() => {
    // Reset form state on unmount
    return () => {
      dispatch(resetContactForm());
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitContact(formData));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1 className="display-hero">Get In Touch</h1>
            <p className="body-large">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-info"
            >
              <h2 className="heading-large">Contact Information</h2>
              <p className="body-standard text-secondary">
                Reach out to us through any of these channels. We're here to help!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="body-large font-medium">Address</h4>
                    <p className="body-standard text-secondary">
                      Koramangala, Bengaluru<br />
                      Karnataka 560034, India
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="body-large font-medium">Email</h4>
                    <p className="body-standard text-secondary">
                      hello@zestdo.com<br />
                      support@zestdo.com
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="body-large font-medium">Phone</h4>
                    <p className="body-standard text-secondary">
                      +91 98765 43210<br />
                      Mon-Sat: 9 AM - 7 PM
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="body-large font-medium">Working Hours</h4>
                    <p className="body-standard text-secondary">
                      Monday - Saturday<br />
                      9:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-form-wrapper"
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="userType" className="form-label">I am a *</label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="parent">Parent</option>
                    <option value="trainer">Trainer</option>
                    <option value="apartment">Apartment Admin</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {(contactForm.success || contactForm.error) && (
                  <div className={`form-status ${contactForm.success ? 'success' : 'error'}`} data-testid="form-status">
                    {contactForm.success ? contactForm.message : contactForm.error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={contactForm.loading}
                  data-testid="contact-submit-btn"
                >
                  {contactForm.loading ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="heading-large text-center">Quick Links</h2>
            <p className="body-large text-center text-secondary">
              Find answers to common questions
            </p>
          </motion.div>

          <div className="quick-links-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="quick-link-card"
            >
              <h3 className="heading-medium">For Parents</h3>
              <p className="body-standard text-secondary">Learn how to enroll your child in activities</p>
              <Button className="btn-secondary mt-4">Learn More</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="quick-link-card"
            >
              <h3 className="heading-medium">For Trainers</h3>
              <p className="body-standard text-secondary">Join our network of expert trainers</p>
              <Button className="btn-secondary mt-4">Learn More</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="quick-link-card"
            >
              <h3 className="heading-medium">For Apartments</h3>
              <p className="body-standard text-secondary">Partner with us to activate your amenities</p>
              <Button className="btn-secondary mt-4">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
