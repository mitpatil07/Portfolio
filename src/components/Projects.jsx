import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaShoppingBag, FaQuestionCircle, FaBookOpen } from 'react-icons/fa';

const projects = [
    {
        title: "DurgSetu AI",
        techStack: ["React", "Django", "OpenCV", "MySQL"],
        description: "An AI-powered change detection platform designed to monitor historical structures. Developed full-stack using Django and React to render real-time computer vision analysis highlighting infrastructural degradation.",
        links: { github: "https://github.com/mitpatil07/DurgSetu-AI", live: "https://durgsetuai.vercel.app/" },
        icon: FaRobot,
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        title: "Whatyouwear",
        techStack: ["React", "Express", "Node.js", "MongoDB"],
        description: "A comprehensive full-stack e-commerce platform offering responsive UI, secure user authentication, modular product catalog management, and seamless end-to-end checkout integration.",
        links: { github: "https://github.com/mitpatil07/E-commerce", live: "https://www.whatyouwear.store/" },
        icon: FaShoppingBag,
        gradient: "from-amber-400 to-orange-500"
    },
    {
        title: "Quizora",
        techStack: ["React.js", "Node.js", "Express", "MongoDB"],
        description: "Interactive web-based quiz application providing a dynamic testing platform with real-time score tracking. Engineered a modular MERN backend to efficiently handle scalable quiz logic and dynamic question rendering.",
        links: { github: "https://github.com/mitpatil07/QuizApp" },
        icon: FaQuestionCircle,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "BookNest",
        techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
        description: "Full-stack digital library management system featuring a responsive React frontend coupled with a robust backend, enabling scalable CRUD operations for comprehensive book collection exploration.",
        links: { github: "https://github.com/mitpatil07/BookNest" },
        icon: FaBookOpen,
        gradient: "from-teal-400 to-emerald-500"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-24 relative z-10">
            <div className="container mx-auto px-5 sm:px-8 max-w-5xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="mb-10 md:mb-16 flex flex-col items-center text-center"
                >
                    <span className="section-pill">Portfolio</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-800">
                        Selected <span className="text-gradient">Works</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.08 }}
                            viewport={{ once: false, amount: 0.1 }}
                            whileHover={{ y: -3 }}
                            className="premium-glass rounded-2xl p-5 sm:p-7 border border-slate-100 flex flex-col md:flex-row gap-5 md:gap-7 cursor-default group"
                        >
                            {/* Visual Preview Badge */}
                            <div className="flex-shrink-0 w-full md:w-56 h-40 md:h-auto relative rounded-xl overflow-hidden shadow-inner group-hover:shadow-md transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.85] group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3`}>
                                    <project.icon className="text-white text-5xl opacity-80 drop-shadow-lg group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between flex-1 min-w-0">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-2 hover:text-brand-900 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium mb-4 text-justify">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.techStack.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-2.5 py-1 bg-brand-50 text-brand-900 rounded-lg border border-brand-300/50 text-xs font-bold"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <motion.a
                                        href={project.links.github}
                                        whileHover={{ scale: 1.05, x: 2 }}
                                        className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest"
                                    >
                                        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:border-brand-300 shadow-sm transition-colors">
                                            <FaGithub size={13} />
                                        </div>
                                        Source
                                    </motion.a>
                                    {project.links.live && (
                                        <motion.a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, x: 2 }}
                                            className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest"
                                        >
                                            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:border-brand-300 shadow-sm transition-colors">
                                                <FaExternalLinkAlt size={11} />
                                            </div>
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
