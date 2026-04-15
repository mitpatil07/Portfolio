import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        degree: "B.E. in Computer Engineering",
        institution: "SNJB's Late Sau K B Jain College of Engineering",
        location: "Chandwad, India",
        grade: "SGPA: 9.25",
        year: "Expected 2026",
        details: "Data Structures & Algorithms, OOP, Computer Networks, Operating Systems, DBMS, Web Development"
    },
    {
        degree: "Higher Secondary Education (HSC)",
        institution: "S.T.T.K Mahajan High School",
        location: "Dhule, India",
        grade: "68.83%",
        year: "2022",
        details: ""
    }
];

const Education = () => {
    return (
        <section id="education" className="py-16 md:py-24 relative z-10 bg-white">
            <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-10 md:mb-14 flex flex-col items-center text-center"
                >
                    <span className="section-pill">Learning</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-800">
                        Academic <span className="text-gradient">Journey</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-5">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="premium-glass p-5 sm:p-6 rounded-2xl border border-brand-300/35 group hover:shadow-lg hover:shadow-brand-300/15 transition-all duration-400"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <span className="inline-flex items-center gap-1.5 text-brand-900 font-bold uppercase tracking-wider text-[10px] mb-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                                        {edu.institution}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-black text-slate-800 mb-1 leading-snug group-hover:text-brand-900 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-slate-400 text-xs sm:text-sm font-semibold">{edu.location}</p>
                                </div>

                                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 flex-shrink-0">
                                    <span className="px-3 py-1 bg-brand-900 text-white text-xs font-bold tracking-wide uppercase rounded-lg shadow-sm">
                                        {edu.year}
                                    </span>
                                    <span className="px-3 py-1 bg-white border border-brand-300 text-brand-900 text-xs font-bold rounded-lg shadow-sm">
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>

                            {edu.details && (
                                <div className="mt-4 pt-3 border-t border-brand-300/30">
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Focus Areas</p>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium text-justify">
                                        {edu.details}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
