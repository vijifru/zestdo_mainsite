import React from 'react';
import { motion } from 'motion/react';
import { Music, Drama, Cpu, Puzzle, Palette, Heart, Mic, Trophy } from 'lucide-react';
import { activities } from '../data/mock';

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
              >
                <div className="activity-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="heading-medium">{activity.name}</h3>
                <p className="body-standard text-secondary">{activity.description}</p>
                <button className="view-classes-btn">View Classes →</button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
