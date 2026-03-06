import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PosterModal from './PosterModal';
import { fetchPosters } from '../services/api';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { Award, Gift } from 'lucide-react';

const SummerCampSection = () => {
  const [posters, setPosters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const loadPosters = async () => {
      setIsFetching(true);
      const data = await fetchPosters();
      setPosters(data || []);
      setIsFetching(false);
    };
    loadPosters();
  }, []);

  const handleOpenModal = (poster) => {
    setSelectedPoster(poster);
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <>
      <section className="section-padding bg-light">
        <div className="container">
          {/* ... heading section ... */}

          {/* Posters Grid */}
          {!isFetching && posters.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posters.map((poster) => (
                <motion.div
                  key={poster.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => handleOpenModal(poster)}
                >
                  <div className="relative rounded-lg shadow-lg overflow-hidden border-4 border-primary bg-white h-full flex flex-col">
                    <img
                      src={poster.imageUrl}
                      alt={poster.title}
                      className="w-full h-64 object-cover hover:opacity-80 transition"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />

                    {/* Reward Badges */}
                    {poster.rewards && (poster.rewards.certificate || poster.rewards.gift) && (
                      <div className="absolute top-4 right-4 flex gap-2">
                        {poster.rewards.certificate && (
                          <div
                            className="bg-amber-500 text-white p-2 rounded-full shadow-lg"
                            title="Certificate provided"
                          >
                            <Award size={20} />
                          </div>
                        )}
                        {poster.rewards.gift && (
                          <div
                            className="bg-orange-500 text-white p-2 rounded-full shadow-lg"
                            title="Gift provided"
                          >
                            <Gift size={20} />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="heading-medium mb-2">{poster.title}</h3>
                      {poster.ageGroup && (
                        <p className="text-sm text-gray-600 mb-2">
                          👥 Ages {poster.ageGroup}
                        </p>
                      )}
                      {poster.startDate && (
                        <p className="text-sm text-gray-600 mb-3">
                          📅 {poster.startDate}
                        </p>
                      )}
                      {poster.location && (
                        <p className="text-sm text-gray-600 mb-3">
                          📍 {poster.location}
                        </p>
                      )}
                      <Button className="btn-secondary w-full mt-auto">
                        View Details & Enroll
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ... rest of component ... */}
        </div>
      </section>

      {/* Modal */}
      <PosterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        poster={selectedPoster}
        isLoading={isLoading}
      />
    </>
  );
};

export default SummerCampSection;