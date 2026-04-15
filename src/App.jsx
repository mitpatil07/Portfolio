import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import SmoothScroll from './components/SmoothScroll';
import { motion } from 'framer-motion';

function App() {
  return (
    <SmoothScroll>
      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="min-h-screen font-sans bg-mesh relative overflow-hidden selection:bg-brand-300 selection:text-white z-0"
      >
        {/* Interactive Canvas Particle Animation (Antigravity effect) */}
        <ParticleBackground />

        <Header />
        <main className="relative z-10 flex flex-col gap-6 md:gap-10 lg:gap-16">
          <Hero />
          <Summary />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
}

export default App;
