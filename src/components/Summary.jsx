import React from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
    return (
        <section id="summary" className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-8 md:mb-12 text-center"
                >
                    <span className="section-pill">About Me</span>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
                        Professional <span className="text-gradient">Summary</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="premium-glass rounded-3xl p-6 sm:p-10 border border-brand-300/25 text-center shadow-xl shadow-brand-900/5 hover:shadow-2xl hover:shadow-brand-300/10 transition-shadow duration-500"
                >
                    <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium">
                        I am a passionate and results-driven software engineer with a strong foundation in full-stack development, modern web architecture, and clean UI/UX principles. By combining rigorous technical execution with a sharp eye for elegant design, I specialize in building seamless digital experiences that solve real-world problems. Whether designing scalable databases, architecting robust APIs, or crafting highly responsive, glassmorphic interfaces, my ultimate goal is to deliver intelligent, user-centric software that makes a tangible impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Summary;
