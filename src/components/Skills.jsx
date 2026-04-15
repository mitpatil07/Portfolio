import React from 'react';
import { motion } from 'framer-motion';
import { BiCodeAlt, BiGlobe, BiGitBranch } from 'react-icons/bi';
import { FaDatabase, FaBrain, FaBolt } from 'react-icons/fa';

const skillsData = [
    {
        icon: BiCodeAlt,
        iconBg: "bg-brand-50 text-brand-600",
        title: "Languages",
        description: "Python, C++, Java - the trio I reach for first.",
    },
    {
        icon: BiGlobe,
        iconBg: "bg-pink-50 text-pink-500",
        title: "Web Development",
        description: "React, Django, Node.js, and Tailwind CSS - full-stack, front to back.",
    },
    {
        icon: FaDatabase,
        iconBg: "bg-emerald-50 text-emerald-500",
        title: "Databases",
        description: "MySQL, PostgreSQL, MongoDB - I let data flow where it belongs.",
    },
    {
        icon: FaBrain,
        iconBg: "bg-amber-50 text-amber-500",
        title: "Machine Learning",
        description: "NumPy, Pandas, OpenCV - making models and computers see.",
    },
    {
        icon: BiGitBranch,
        iconBg: "bg-slate-100 text-slate-700",
        title: "Version Control",
        description: "Git & GitHub - because every hero needs a history.",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 110, damping: 20 }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-10 md:mb-14 text-center"
                >
                    <span className="section-pill">Toolkit</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-800 flex items-center justify-center gap-2">
                        My Skills
                        <motion.span
                            animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2.2, repeatDelay: 3 }}
                        >
                            <FaBolt className="text-orange-400 text-3xl" />
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-40px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -4, boxShadow: "0 12px 32px -8px rgba(93, 95, 239, 0.14)" }}
                            className={`premium-glass rounded-2xl p-5 sm:p-6 flex flex-col group cursor-default ${index === skillsData.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.12, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm ${skill.iconBg}`}
                            >
                                <skill.icon size={20} />
                            </motion.div>

                            <h3 className="text-sm font-bold text-slate-800 mb-1.5 group-hover:text-brand-900 transition-colors">
                                {skill.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mt-auto text-xs sm:text-sm font-medium text-left">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
