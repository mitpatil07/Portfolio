import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HiSparkles, HiArrowRight } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
    const { scrollY } = useScroll();
    // Parallax scrolling effects - smoothed with useSpring
    const yParallaxRaw = useTransform(scrollY, [0, 600], [0, 200]);
    const opacityParallaxRaw = useTransform(scrollY, [0, 400], [1, 0]);

    const yParallax = useSpring(yParallaxRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const opacityParallax = useSpring(opacityParallaxRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="home" className="w-full min-h-screen relative flex items-center justify-center overflow-hidden">


            {/* Ambient accent blobs */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[-10%] left-[-5%] w-72 h-72 rounded-full bg-brand-600/20 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-[10%] right-[-5%] w-80 h-80 rounded-full bg-brand-300/25 blur-3xl"
                />
            </div>

            <div className="container mx-auto px-5 sm:px-8 max-w-4xl z-10">
                <motion.div
                    style={{ y: yParallax, opacity: opacityParallax }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >
                    {/* Eyebrow label */}
                    <motion.div
                        variants={itemVariants}
                        viewport={{ once: true }}
                        className="mb-5"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-1.5 section-pill cursor-default"
                        >
                            <motion.span
                                animate={{ rotate: [0, 20, -10, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }}
                            >
                                <HiSparkles className="text-brand-600 text-xs" />
                            </motion.span>
                            Available for hire
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-800 mb-4 sm:mb-6 tracking-tight leading-[1.15]"
                    >
                        Engineer by degree,{' '}
                        <span className="text-gradient">Creator by passion,</span>{' '}
                        <br className="hidden sm:block" />
                        Communicator by nature.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm sm:text-base md:text-lg text-slate-500 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed font-medium px-4 text-center"
                    >
                        I design digital stories that blend{' '}
                        <span className="text-brand-600 font-semibold">logic</span> with{' '}
                        <span className="text-pink-500 font-semibold">emotion</span>
                        {' '}- sometimes in code, sometimes in pixels.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex justify-center gap-3 flex-col sm:flex-row px-4 sm:px-0">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-600/25 transition-shadow hover:shadow-brand-500/40"
                        >
                            Explore Projects <FiArrowUpRight size={15} />
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-800 text-sm font-bold rounded-xl shadow-sm border border-slate-100 hover:border-brand-500 hover:bg-brand-50 transition-all font-sans"
                        >
                            Resume <FiArrowUpRight size={15} className="text-brand-600" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-50 text-brand-600 text-sm font-bold rounded-xl shadow-sm border border-slate-200/50 hover:border-brand-500 hover:bg-white transition-all font-sans"
                        >
                            Let's Talk <HiArrowRight size={14} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
