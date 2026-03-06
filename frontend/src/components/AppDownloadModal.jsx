import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Apple, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

const AppDownloadModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    // Close modal when clicking outside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40"
            style={{ zIndex: 40 }}
          />

          {/* Modal Container - Click to close */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
            style={{ zIndex: 50 }}
          >
            {/* Modal Content - Prevent click propagation */}
            <div 
              className="relative app-download-modal rounded-lg max-w-md w-full text-white overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition z-10"
                aria-label="Close modal"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="mb-6"
                >
                  <div className="inline-block p-4 bg-white/20 rounded-full">
                    <Smartphone size={48} />
                  </div>
                </motion.div>

                <h2 className="heading-large mb-2">Download ZestDo App</h2>
                <p className="opacity-90 mb-8">
                  Complete your enrollment and manage your programs on the go with our mobile app
                </p>

                {/* App Store Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('https://apps.apple.com/app/zestdo', '_blank');
                    onClose(); // Optional: close modal after clicking
                  }}
                  className="w-full mb-4 bg-white text-primary hover:bg-gray-100 transition rounded-lg py-3 px-4 font-semibold flex items-center justify-center gap-2"
                >
                  <Apple size={20} />
                  Download on App Store
                </motion.button>

                {/* Play Store Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.open('https://play.google.com/store/apps/details?id=com.zestdo', '_blank');
                    onClose(); // Optional: close modal after clicking
                  }}
                  className="w-full mb-6 bg-white/20 hover:bg-white/30 transition rounded-lg py-3 px-4 font-semibold flex items-center justify-center gap-2 border border-white/30"
                >
                  <Smartphone size={20} />
                  Get on Google Play
                </motion.button>

                {/* Features */}
                <div className="text-left space-y-3 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Easy camp enrollment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Track activities and progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Push notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>View certificates and rewards</span>
                  </div>
                </div>

                {/* Skip Button */}
                <button
                  onClick={onClose}
                  className="mt-6 text-white/70 hover:text-white transition text-sm"
                >
                  Continue without app
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppDownloadModal;