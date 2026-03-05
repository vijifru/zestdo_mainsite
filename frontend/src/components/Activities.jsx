import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Music, Drama, Cpu, Puzzle, Palette, Heart, Mic, Trophy } from 'lucide-react';
import { fetchActivities } from '../store/slices/activitiesSlice';

const iconMap = {
  Music: Music,
  Drama: Drama,
  Cpu: Cpu,
  Puzzle: Puzzle,
  Palette: Palette,
  Heart: Heart,
  Mic: Mic,
  Trophy: Trophy
};

const Activities = () => {
  const dispatch = useDispatch();
  const { items: activities, loading } = useSelector((state) => state.activities);

  useEffect(() => {
    if (activities.length === 0) {
      dispatch(fetchActivities());
    }
  }, [dispatch, activities.length]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-large text-center">Featured Activities</h2>
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
          <h2 className="heading-large text-center">Featured Activities</h2>
          <p className="body-large text-center text-secondary">
            Discover diverse learning opportunities for your child
          </p>
        </motion.div>
        
        <div className="activities-grid">
          {activities.map((activity, index) => {
            const IconComponent = iconMap[activity.icon];
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="activity-card"
                style={{ '--activity-color': activity.color }}
                data-testid={`activity-card-${activity.id}`}
              >
                <div className="activity-image-container">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="activity-image"
                  />
                  <div className="activity-overlay">
                    <div className="activity-icon">
                      <IconComponent size={32} />
                    </div>
                  </div>
                </div>
                <div className="activity-content">
                  <h3 className="heading-medium">{activity.name}</h3>
                  <p className="body-standard text-secondary">{activity.description}</p>
                  <button className="view-classes-btn">View Classes →</button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
