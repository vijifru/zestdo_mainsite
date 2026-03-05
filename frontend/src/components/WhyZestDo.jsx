import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { getWhyZestDo } from '../services/api';

const WhyZestDo = () => {
  const [whyZestDoPoints, setWhyZestDoPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWhyZestDo = async () => {
      try {
        const data = await getWhyZestDo();
        setWhyZestDoPoints(data);
      } catch (error) {
        console.error('Error fetching why ZestDo points:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchWhyZestDo();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-large text-center">Why ZestDo?</h2>
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
          <h2 className="heading-large text-center">Why ZestDo?</h2>
          <p className="body-large text-center text-secondary">
            Solving real problems for modern parents
          </p>
        </motion.div>
        
        <div className="why-comparison">
          <div className="comparison-column problems-column">
            <div className="column-header">
              <X size={24} className="header-icon problem-icon" />
              <h3 className="heading-medium">Traditional Problems</h3>
            </div>
            {whyZestDoPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="comparison-item problem-item"
              >
                <X size={20} className="item-icon" />
                <span className="body-standard">{point.problem}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="comparison-divider">
            <div className="divider-line"></div>
            <div className="divider-badge">VS</div>
            <div className="divider-line"></div>
          </div>
          
          <div className="comparison-column solutions-column">
            <div className="column-header">
              <Check size={24} className="header-icon solution-icon" />
              <h3 className="heading-medium">ZestDo Solution</h3>
            </div>
            {whyZestDoPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="comparison-item solution-item"
              >
                <Check size={20} className="item-icon" />
                <span className="body-standard">{point.solution}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZestDo;
