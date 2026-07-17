import React from 'react';
import { motion } from 'framer-motion';
import { HiCodeBracket, HiPaintBrush, HiRocketLaunch } from 'react-icons/hi2';

const highlights = [
    {
        icon: HiCodeBracket,
        label: "Logic & Architecture",
        text: "Engineering clean, maintainable, and high-performance server structures with robust API frameworks.",
        badge: "Backend & Systems",
        color: "from-red-500 to-rose-600"
    },
    {
        icon: HiPaintBrush,
        label: "Design & UX",
        text: "Crafting beautiful, cinematic, and responsive frontends with smooth animations and state managers.",
        badge: "Frontend & Interface",
        color: "from-orange-500 to-red-600"
    },
    {
        icon: HiRocketLaunch,
        label: "Impact & Optimization",
        text: "Deploying scalable client-server pipelines designed to optimize business logic and data workflows.",
        badge: "Deployment & Scaling",
        color: "from-red-600 to-amber-600"
    }
];

const Summary = () => {
    return (
        <section id="summary" className="py-16 md:py-24 relative z-10 w-full overflow-hidden bg-[#141414]">
            {/* Cinematic background spotlight glows */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-red-950/15 blur-[120px] opacity-70" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-zinc-900/40 blur-[130px]" />
            </div>

            <div className="px-6 sm:px-10 md:px-12 w-full max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-10 text-left"
                >
                    <span className="section-pill">About The Creator</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-2 leading-none uppercase font-bebas">
                        Professional <span className="text-[#E50914] drop-shadow-[0_0_15px_rgba(229,9,20,0.3)]">Summary</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Narrative Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6 flex"
                    >
                        <div className="bg-[#181818]/60 backdrop-blur-md border border-[#2F2F2F] hover:border-red-900/50 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-500 group/narrative flex-1">
                            {/* Subtle red linear accent line on left */}
                            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#E50914] to-transparent opacity-70" />
                            
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-red-600/10 to-transparent blur-2xl -mr-16 -mt-16 rounded-full group-hover/narrative:from-red-600/20 transition-all duration-500" />

                            <div className="text-zinc-300 text-base sm:text-lg leading-relaxed space-y-6 relative z-10 text-left">
                                <p className="text-white text-2xl sm:text-3xl font-black leading-tight tracking-tight text-left">
                                    I bridge the gap between <span className="text-[#E50914] drop-shadow-[0_0_8px_rgba(229,9,20,0.2)] font-semibold">complex logic</span> and <span className="text-white underline decoration-[#E50914]/50 decoration-2 underline-offset-4">seamless user experiences</span>.
                                </p>
                                <p className="opacity-95 text-zinc-400 text-sm sm:text-base leading-relaxed">
                                    As a Full Stack Developer, I specialize in building modern web architectures that are both technically rigorous and aesthetically pleasing. From architecting robust RESTful APIs to crafting responsive Netflix-style interfaces, I am dedicated to delivering high-impact software.
                                </p>
                                <p className="opacity-95 text-zinc-400 text-sm sm:text-base leading-relaxed">
                                    My approach combines technical precision with an entrepreneurial mindset, ensuring that every line of code contributes to a meaningful, scalable solution.
                                </p>
                            </div>

                            {/* Fictional cinematic telemetry footer info */}
                            <div className="mt-8 pt-6 border-t border-[#2F2F2F] flex flex-wrap gap-4 text-xs font-bold text-zinc-500 tracking-wider">
                                <div>
                                    STATUS: <span className="text-green-500">READY TO DEPLOY</span>
                                </div>
                                <div className="hidden sm:block">|</div>
                                <div>
                                    LOC: <span className="text-zinc-300">INDIA</span>
                                </div>
                                <div className="hidden sm:block">|</div>
                                <div>
                                    ROLE: <span className="text-zinc-300 font-extrabold uppercase">FULL STACK DEVELOPER</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Highlights cards */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                        {highlights.map((highlight, i) => (
                          <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: i * 0.15 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.015, x: 6 }}
                              className="bg-[#181818]/60 backdrop-blur-md border border-[#2F2F2F] hover:border-red-900/40 p-4 sm:p-5 rounded-xl flex items-center gap-4 group transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(229,9,20,0.06)] cursor-pointer flex-1"
                          >
                              {/* Glowing Icon Container */}
                              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-zinc-900/90 border border-zinc-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E50914] text-red-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] group-hover:border-[#E50914]">
                                  <highlight.icon size={20} className="sm:size-6" />
                              </div>

                              <div className="text-left space-y-0.5 sm:space-y-1 flex-1">
                                  <div className="flex items-center justify-between flex-wrap gap-2">
                                      <h4 className="text-sm sm:text-base font-black text-white leading-tight uppercase font-sans tracking-wide">
                                          {highlight.label}
                                      </h4>
                                      <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-extrabold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full group-hover:border-red-900/40 group-hover:text-red-400 transition-colors">
                                          {highlight.badge}
                                      </span>
                                  </div>
                                  <p className="text-[11px] sm:text-xs text-zinc-400 font-semibold leading-relaxed group-hover:text-zinc-300 transition-colors text-left">
                                      {highlight.text}
                                  </p>
                              </div>
                          </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
