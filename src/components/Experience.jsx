import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi2';

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Paarsh Infotech Pvt. Ltd.",
        details: [
            "Worked as a Full Stack Developer on an NGO management system using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
            "Developed responsive and user-friendly interfaces using React.js to enhance user experience across devices",
            "Built RESTful APIs using Node.js and Express.js to handle business logic and ensure efficient data flow",
            "Designed and optimized MongoDB database schemas for structured and scalable data management",
            "Implemented workflows to streamline NGO operations and ensured seamless frontend–backend integration"
        ]
    },
    {
        role: "Java Developer Intern",
        company: "NetLeap",
        details: [
            "Worked on a travel planner web application using Java, Servlets, and JSP",
            "Developed and enhanced key features to improve user experience and application functionality",
            "Optimized backend processes and data handling, contributing to improved system performance and reliability",
            "Strengthened understanding of backend development, server-side programming, and efficient system design"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 max-w-3xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-10 md:mb-14 text-left pl-10 sm:pl-0 sm:text-center"
                >
                    <span className="section-pill">Career</span>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                        viewport={{ once: false }}
                        className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-brand-600 via-brand-300 to-transparent"
                    />

                    <div className="space-y-8 pl-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="relative"
                            >
                                {/* Pulse dot */}
                                <div className="absolute -left-[30px] top-5 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.6 }}
                                        className="absolute w-3.5 h-3.5 rounded-full bg-brand-600/30"
                                    />
                                    <div className="w-3 h-3 bg-white border-2 border-brand-600 rounded-full shadow-sm relative z-10" />
                                </div>

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    className="premium-glass rounded-2xl p-5 sm:p-6 border border-brand-300/25 group"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-300/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <HiBriefcase className="text-brand-600 text-sm" />
                                            </div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-brand-900 transition-colors leading-snug">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-sm font-bold text-brand-600 mt-0.5">{exp.company}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 pl-11">
                                        {exp.details.map((detail, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -8 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-2.5 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium"
                                            >
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
                                                <span className="text-left">{detail}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
