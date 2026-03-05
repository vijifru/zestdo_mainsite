import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { getTestimonials } from '../services/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-large text-center">What Our Community Says</h2>
            <p className="body-large text-center text-secondary">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading-large text-center">What Our Community Says</h2>
          <p className="body-large text-center text-secondary">
            Real feedback from parents, trainers, and apartment communities
          </p>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="testimonial-header">
                <div 
                  className="testimonial-avatar"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                </div>
                <div className="testimonial-info">
                  <h4 className="body-large font-medium">{testimonial.name}</h4>
                  <p className="body-small text-secondary">{testimonial.role}</p>
                  <p className="body-small text-muted">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6B35" stroke="#FF6B35" />
                ))}
              </div>
              
              <div className="testimonial-quote">
                <Quote size={24} className="quote-icon" />
              </div>
              
              <p className="testimonial-text body-standard">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
