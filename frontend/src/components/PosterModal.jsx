import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, Award, Gift } from 'lucide-react';
import { Button } from './ui/button';
import AppDownloadModal from './AppDownloadModal';

const PosterModal = ({ isOpen, onClose, poster, isLoading }) => {
  const [enrollmentSuccess, setEnrollmentSuccess] = React.useState(false);
  const [showAppModal, setShowAppModal] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleEnrollNow = () => {
    // Close poster modal and open app download modal
    onClose();
    setShowAppModal(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-auto">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition z-10"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-gray-800" />
                </button>

                {/* Loading State */}
                {isLoading && (
                  <div className="flex items-center justify-center min-h-96">
                    <Loader2 size={40} className="animate-spin text-primary" />
                  </div>
                )}

                {/* Poster Image */}
                {!isLoading && poster && !enrollmentSuccess && (
                  <>
                    <div className="w-full">
                      <img
                        src={poster.imageUrl}
                        alt={poster.title}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          e.target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>

                    {/* Poster Details & Enrollment */}
                    <div className="p-6 border-t">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {poster.title}
                      </h2>
                      
                      {poster.description && (
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {poster.description}
                        </p>
                      )}

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        {poster.startDate && poster.endDate && (
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Duration</p>
                            <p className="text-sm text-gray-600">
                              {poster.startDate} to {poster.endDate}
                            </p>
                          </div>
                        )}
                        
                        {poster.location && (
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Location</p>
                            <p className="text-sm text-gray-600">{poster.location}</p>
                          </div>
                        )}

                        {poster.ageGroup && (
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Age Group</p>
                            <p className="text-sm text-gray-600">{poster.ageGroup}</p>
                          </div>
                        )}

                        {poster.level && (
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Level</p>
                            <p className="text-sm text-gray-600">{poster.level}</p>
                          </div>
                        )}
                      </div>

                      {poster.requirements && (
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-gray-900 mb-2">Requirements</p>
                          <p className="text-sm text-gray-600">{poster.requirements}</p>
                        </div>
                      )}

                      {poster.highlights && (
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-gray-900 mb-2">What's Included</p>
                          <ul className="list-disc list-inside space-y-1">
                            {poster.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-gray-600">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Certificate & Gift Section */}
                      {poster.rewards && (poster.rewards.certificate || poster.rewards.gift) && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
                          <h3 className="text-lg font-bold text-amber-900 mb-4">
                            🎉 Rewards at End of Program
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {poster.rewards.certificate && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <Award size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                  <p className="font-semibold text-gray-900">
                                    Certificate of Completion
                                  </p>
                                  <p className="text-sm text-gray-700">
                                    {poster.rewards.certificateDescription}
                                  </p>
                                </div>
                              </motion.div>
                            )}

                            {poster.rewards.gift && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-3"
                              >
                                <Gift size={24} className="text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                  <p className="font-semibold text-gray-900">
                                    Exclusive Gift
                                  </p>
                                  <p className="text-sm text-gray-700">
                                    {poster.rewards.giftDescription}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={handleEnrollNow}
                          className="btn-primary flex-1"
                        >
                          Enroll Now
                        </Button>
                        <Button
                          onClick={onClose}
                          className="btn-secondary flex-1"
                        >
                          Close
                        </Button>
                      </div>

                      {/* Pricing Note */}
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-xs text-blue-800">
                          <span className="font-semibold">💡 Tip:</span> Pricing varies by apartment community. You'll get detailed pricing on the app based on your location.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Success State */}
                {enrollmentSuccess && (
                  <div className="flex flex-col items-center justify-center min-h-96 p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle size={80} className="text-green-500 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Enrollment Successful!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for enrolling in {poster?.title}.
                    </p>
                  </div>
                )}

                {/* Error State */}
                {!isLoading && !poster && !enrollmentSuccess && (
                  <div className="flex items-center justify-center min-h-96">
                    <p className="text-gray-600 text-lg">Unable to load poster</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* App Download Modal */}
      <AppDownloadModal 
        isOpen={showAppModal} 
        onClose={() => setShowAppModal(false)} 
      />
    </>
  );
};

export default PosterModal;