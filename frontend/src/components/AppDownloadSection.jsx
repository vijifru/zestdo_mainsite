import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, Smartphone, Star, Zap, Heart } from 'lucide-react';
import { Button } from './ui/button';

const AppDownloadSection = () => {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/app/zestdo', '_blank');
  };

  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.zestdo', '_blank');
  };

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Gradient using Root Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-white/20"
        >
          <Smartphone size={40} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-white/20"
        >
          <Star size={30} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 text-white/20"
        >
          <Zap size={35} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 right-10 text-white/20"
        >
          <Heart size={25} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-large mb-4 text-white">Download the ZestDo App</h2>
          <p className="body-large text-white/90">
            Manage enrollments, track activities, and stay connected with our mobile app
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* App Store */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center cursor-pointer hover:bg-white/20 transition border border-white/20"
            onClick={handleAppStoreClick}
          >
            <Apple size={48} className="mx-auto mb-4 text-white" />
            <h3 className="heading-medium mb-2 text-white">App Store</h3>
            <p className="text-sm text-white/80 mb-4">Download for iOS</p>
            <Button className="bg-white text-primary hover:bg-gray-100 w-full transition">
              <Download size={18} className="mr-2" />
              Get on App Store
            </Button>
          </motion.div>

          {/* Play Store */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center cursor-pointer hover:bg-white/20 transition border border-white/20"
            onClick={handlePlayStoreClick}
          >
            <Smartphone size={48} className="mx-auto mb-4 text-white" />
            <h3 className="heading-medium mb-2 text-white">Google Play</h3>
            <p className="text-sm text-white/80 mb-4">Download for Android</p>
            <Button className="bg-white text-primary hover:bg-gray-100 w-full transition">
              <Download size={18} className="mr-2" />
              Get on Play Store
            </Button>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <div className="text-3xl mb-2">📱</div>
            <p className="font-semibold text-white">Easy Enrollment</p>
            <p className="text-sm text-white/80">Register for camps in minutes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <div className="text-3xl mb-2">📊</div>
            <p className="font-semibold text-white">Track Progress</p>
            <p className="text-sm text-white/80">Monitor activity and achievements</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <div className="text-3xl mb-2">🔔</div>
            <p className="font-semibold text-white">Get Notifications</p>
            <p className="text-sm text-white/80">Never miss important updates</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownloadSection;