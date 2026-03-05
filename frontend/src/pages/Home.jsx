import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Activities from '../components/Activities';
import WhyZestDo from '../components/WhyZestDo';
import FeaturedCommunities from '../components/FeaturedCommunities';
import AppShowcase from '../components/AppShowcase';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Activities />
      <WhyZestDo />
      <FeaturedCommunities />
      <AppShowcase />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Home;
