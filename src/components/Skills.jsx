import React from 'react';
import { motion } from 'framer-motion';
import { BiCodeAlt, BiGlobe, BiGitBranch, BiLayer } from 'react-icons/bi';
import { FaDatabase, FaBrain, FaBolt, FaTerminal } from 'react-icons/fa';

const skillsData = [
    {
        icon: BiGlobe,
        iconBg: "bg-brand-50 text-brand-600",
        title: "Frontend Development",
        desc: "Crafting responsive, performant, and pixel-perfect user interfaces.",
        skills: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
    },
    {
        icon: BiLayer,
        iconBg: "bg-purple-50 text-purple-600",
        title: "Backend Development",
        desc: "Architecting robust APIs and scalable server-side systems.",
        skills: ["Django", "Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
    },
    {
        icon: BiCodeAlt,
        iconBg: "bg-pink-50 text-pink-500",
        title: "Programming Languages",
        desc: "Python, C++, and Java - the core foundations of my logic.",
        skills: ["Python", "C++", "Java", "JavaScript (ES6+)"],
    },
    {
        icon: FaDatabase,
        iconBg: "bg-emerald-50 text-emerald-500",
        title: "Database Solutions",
        desc: "Relational and NoSQL - letting data flow where it belongs.",
        skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
        icon: FaBrain,
        iconBg: "bg-amber-50 text-amber-500",
        title: "Machine Learning & CV",
        desc: "Engineering models and computers that see and understand.",
        skills: ["OpenCV", "NumPy", "Pandas", "Computer Vision"],
    },
    {
        icon: FaTerminal,
        iconBg: "bg-slate-100 text-slate-700",
        title: "Developer Toolkit",
        desc: "The essential tools that keep every hero's history safe.",
        skills: ["Git & GitHub", "VS Code", "Postman", "Linux", "Vercel"],
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-10 md:mb-16 text-center"
                >
                    <span className="section-pill">Toolkit</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-800 flex items-center justify-center gap-2">
                        My Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-40px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="premium-glass rounded-2xl p-6 border border-brand-300/25 flex flex-col group h-full shadow-lg shadow-brand-900/5"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm ${category.iconBg}`}
                                >
                                    <category.icon size={22} />
                                </motion.div>
                                <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-brand-900 transition-colors tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-5 text-justify">
                                {category.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(238, 242, 255, 1)' }}
                                        className="px-3 py-1.5 bg-brand-50/50 text-brand-800 rounded-lg border border-brand-200/50 text-[11px] sm:text-xs font-bold transition-all"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
