import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { fetchPlans } from '../store/slices/plansSlice';
import { Button } from './ui/button';

const AppShowcase = () => {
  const dispatch = useDispatch();
  const { items: subscriptionPlans, loading } = useSelector((state) => state.plans);

  useEffect(() => {
    if (subscriptionPlans.length === 0) {
      dispatch(fetchPlans());
    }
  }, [dispatch, subscriptionPlans.length]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-large text-center">Choose Your Plan</h2>
            <p className="body-large text-center text-secondary">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading-large text-center">Choose Your Plan</h2>
          <p className="body-large text-center text-secondary">
            Flexible subscription options for every family
          </p>
        </motion.div>
        
        <div className="plans-grid">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`plan-card ${plan.popular ? 'popular-plan' : ''}`}
              data-testid={`plan-card-${plan.id}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} fill="currentColor" />
                  Most Popular
                </div>
              )}
              
              <div className="plan-header">
                <h3 className="heading-medium">{plan.duration}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  {plan.savings && (
                    <span className="price-savings">{plan.savings}</span>
                  )}
                </div>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="body-standard">
                    <Check size={20} className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="app-features"
        >
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <div className="feature-text">
              <h4 className="body-large font-medium">Easy App Access</h4>
              <p className="body-small text-secondary">Book classes in seconds</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div className="feature-text">
              <h4 className="body-large font-medium">Progress Tracking</h4>
              <p className="body-small text-secondary">Monitor your child's growth</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <div className="feature-text">
              <h4 className="body-large font-medium">Direct Communication</h4>
              <p className="body-small text-secondary">Connect with trainers instantly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
