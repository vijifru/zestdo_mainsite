import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Activities from '../components/Activities';
import WhyZestDo from '../components/WhyZestDo';
import FeaturedCommunities from '../components/FeaturedCommunities';
import AppShowcase from '../components/AppShowcase';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Home;
