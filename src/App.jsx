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

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 relative overflow-hidden selection:bg-brand-300 selection:text-brand-900 z-0">

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
    </div>
  );
}

export default App;
