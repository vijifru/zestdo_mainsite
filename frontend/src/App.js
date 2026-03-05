import React from "react";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Activities from "@/components/Activities";
import WhyZestDo from "@/components/WhyZestDo";
import AppShowcase from "@/components/AppShowcase";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Activities />
        <WhyZestDo />
        <AppShowcase />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
