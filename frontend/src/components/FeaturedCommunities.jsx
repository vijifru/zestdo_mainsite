import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, TrendingUp } from 'lucide-react';
import { getCommunities } from '../services/api';
import { Button } from './ui/button';

const FeaturedCommunities = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const data = await getCommunities();
        setCommunities(data);
      } catch (error) {
        console.error('Error fetching communities:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunities();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-large text-center">Featured Partner Communities</h2>
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
          <h2 className="heading-large text-center">Featured Partner Communities</h2>
          <p className="body-large text-center text-secondary">
            Leading apartment communities transforming children's learning
          </p>
        </motion.div>
        
        <div className="communities-grid">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="community-card"
              data-testid={`community-card-${community.id}`}
            >
              <div className="community-image-container">
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="community-image"
                />
                <div className="community-badge">Partner Community</div>
              </div>
              <div className="community-content">
                <h3 className="heading-medium">{community.name}</h3>
                <div className="community-info">
                  <div className="info-item">
                    <MapPin size={18} />
                    <span className="body-standard">{community.location}</span>
                  </div>
                  <div className="info-item">
                    <Users size={18} />
                    <span className="body-standard">{community.trainersCount}+ Trainers</span>
                  </div>
                  <div className="info-item">
                    <TrendingUp size={18} />
                    <span className="body-standard">{community.activitiesCount} Active Classes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="community-cta"
        >
          <p className="body-large">Want to bring ZestDo to your apartment community?</p>
          <Button className="btn-primary">
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCommunities;
