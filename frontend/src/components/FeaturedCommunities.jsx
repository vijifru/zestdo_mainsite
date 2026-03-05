import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const FeaturedCommunities = () => {
  const communities = [
    {
      id: 1,
      name: "Prestige Lakeside Habitat",
      location: "Varthur, Bengaluru",
      residents: "2000+ Families",
      activities: "12 Active Classes",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Brigade Gateway",
      location: "Rajaji Nagar, Bengaluru",
      residents: "1500+ Families",
      activities: "8 Active Classes",
      image: "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?w=600&h=400&fit=crop"
    }
  ];

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
                    <span className="body-standard">{community.residents}</span>
                  </div>
                  <div className="info-item">
                    <TrendingUp size={18} />
                    <span className="body-standard">{community.activities}</span>
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
