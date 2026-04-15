import React from 'react';
import { motion } from 'framer-motion';
import { HiCodeBracket, HiPaintBrush, HiRocketLaunch } from 'react-icons/hi2';

const stats = [
    {
        icon: HiCodeBracket,
        label: "Logic",
        text: "Full-Stack engineering with a focus on clean, maintainable code."
    },
    {
        icon: HiPaintBrush,
        label: "Design",
        text: "Crafting intuitive UI/UX with modern glassmorphic aesthetics."
    },
    {
        icon: HiRocketLaunch,
        label: "Impact",
        text: "Building scalable solutions that solve real-world problems."
    }
];

const Summary = () => {
    return (
        <section id="summary" className="py-16 md:py-24 relative z-10 w-full overflow-hidden">

            {/* Ambient background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/20 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-10 md:mb-14 text-center"
                >
                    <span className="section-pill">About Me</span>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
                        Professional <span className="text-gradient">Summary</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Main Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false }}
                        className="lg:col-span-7"
                    >
                        <div className="premium-glass rounded-3xl p-6 sm:p-10 border border-brand-300/25 shadow-xl shadow-brand-900/5 relative overflow-hidden">
                            {/* Subtle corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-100/40 to-transparent -mr-12 -mt-12 rounded-full" />

                            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium text-justify space-y-5 relative z-10">
                                <p className="text-slate-800 text-lg sm:text-xl font-bold leading-snug">
                                    I bridge the gap between <span className="text-brand-600">complex logic</span> and <span className="text-purple-600">seamless user experiences</span>.
                                </p>
                                <p>
                                    As a Full Stack Developer, I specialize in building modern web architectures that are both technically rigorous and aesthetically pleasing. From architecting robust RESTful APIs to crafting responsive glassmorphic interfaces, I am dedicated to delivering high-impact software.
                                </p>
                                <p>
                                    My approach combines technical precision with an entrepreneurial mindset, ensuring that every line of code contributes to a meaningful, scalable solution.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Highlights */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="premium-glass p-5 rounded-2xl border border-brand-300/20 flex items-center gap-4 group transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-900 group-hover:text-white transition-all duration-300">
                                    <stat.icon size={22} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-slate-800 mb-0.5">{stat.label}</h4>
                                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">{stat.text}</p>
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
