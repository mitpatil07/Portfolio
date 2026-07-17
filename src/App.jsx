import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills, { skillsData } from './components/Skills';
import Experience, { experiences } from './components/Experience';
import Education, { educationData } from './components/Education';
import Projects, { projects } from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import NetflixModal from './components/NetflixModal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Web Audio API "Ta-dum" Sound Synthesizer
  const playTaDum = () => {
    if (!audioEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const playOscillator = (freq, type, startOffset, duration, volume) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.value = freq;

        // Warm up sound with filters
        filter.type = type === 'sawtooth' ? 'lowpass' : 'bandpass';
        filter.frequency.value = type === 'sawtooth' ? 300 : 1500;
        filter.Q.value = 1.0;

        gainNode.gain.setValueAtTime(0.001, ctx.currentTime + startOffset);
        gainNode.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + startOffset + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startOffset + duration);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(ctx.currentTime + startOffset);
        osc.stop(ctx.currentTime + startOffset + duration);
      };

      // Fictional Ta-dum notes:
      // Note 1: Deep resonant low bass note (55Hz / A1)
      playOscillator(55, 'sawtooth', 0, 1.2, 0.45);
      playOscillator(110, 'sawtooth', 0.02, 1.0, 0.25);

      // Note 2: Higher metallic chime chord entering slightly later (around 0.12s)
      playOscillator(220, 'triangle', 0.12, 1.4, 0.15); // A3
      playOscillator(277.18, 'sine', 0.15, 1.3, 0.12);   // C#4
      playOscillator(329.63, 'triangle', 0.18, 1.2, 0.1);  // E4
      playOscillator(440, 'sine', 0.22, 1.1, 0.08);      // A4

    } catch (e) {
      console.warn("AudioContext failed to start:", e);
    }
  };

  // Play "Ta-dum" sound on the first click
  useEffect(() => {
    const handleGesture = () => {
      playTaDum();
      // Remove listener after first trigger
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('keydown', handleGesture);
    };

    window.addEventListener('click', handleGesture);
    window.addEventListener('keydown', handleGesture);

    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('keydown', handleGesture);
    };
  }, [audioEnabled]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = 'auto';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = 'auto';
      if (window.lenis) window.lenis.start();
    };
  }, [activeModalItem]);

  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans bg-mesh relative overflow-hidden selection:bg-red-600 selection:text-white z-0 text-white bg-[#141414]">
        {/* Sleek netflix-style ambient spotlight background glow */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-red-950/20 blur-[160px] opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-900/40 blur-[140px]" />
        </div>

        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main className="relative z-10 flex flex-col gap-6 md:gap-10 pb-0 lg:pl-20">
          <Hero
            setActiveModalItem={setActiveModalItem}
            playTaDum={playTaDum}
            audioEnabled={audioEnabled}
            setAudioEnabled={setAudioEnabled}
          />
          <Summary />
          <Projects
            searchQuery={searchQuery}
            setActiveModalItem={setActiveModalItem}
          />
          <Experience
            setActiveModalItem={setActiveModalItem}
          />
          <Skills
            searchQuery={searchQuery}
            setActiveModalItem={setActiveModalItem}
          />
          <Education
            setActiveModalItem={setActiveModalItem}
          />
          <Contact />
        </main>
        <Footer />

        {/* Global Netflix Detail Modal */}
        <AnimatePresence>
          {activeModalItem && (
            <NetflixModal
              item={activeModalItem}
              onClose={() => setActiveModalItem(null)}
              allProjects={projects}
              allExperiences={experiences}
            />
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}

export default App;
