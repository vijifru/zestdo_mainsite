import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { fetchUserRoles } from '../store/slices/userRolesSlice';
import { Button } from './ui/button';

const iconMap = {
  Users: Users,
  GraduationCap: GraduationCap,
  Building2: Building2
};

const HowItWorks = () => {
  const dispatch = useDispatch();
  const { items: userRoles, loading } = useSelector((state) => state.userRoles);

  useEffect(() => {
    if (userRoles.length === 0) {
      dispatch(fetchUserRoles());
    }
  }, [dispatch, userRoles.length]);

  if (loading) {
    return (
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-large text-center">How ZestDo Works</h2>
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
          <h2 className="heading-large text-center">How ZestDo Works</h2>
          <p className="body-large text-center text-secondary">
            Three ways to be part of the ZestDo community
          </p>
        </motion.div>
        
        <div className="roles-grid">
          {userRoles.map((role, index) => {
            const IconComponent = iconMap[role.icon];
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="role-card"
                data-testid={`role-card-${role.id}`}
              >
                <div className="role-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="heading-medium">{role.role}</h3>
                <ul className="benefits-list">
                  {role.benefits.map((benefit, idx) => (
                    <li key={idx} className="body-standard">
                      <span className="benefit-check">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="btn-secondary w-full mt-4">
                  {role.cta}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
