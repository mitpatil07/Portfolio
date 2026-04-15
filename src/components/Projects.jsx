import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaShoppingBag, FaQuestionCircle, FaBookOpen, FaUsers, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

// Project Images
import ngoImg from '../assets/ngo.png';
import durgsetuImg from '../assets/durgsetu.png';
import whatyouwearImg from '../assets/whatyouwear.png';
import quizoraImg from '../assets/quizora.png';

const projects = [
    {
        title: "NGO Management System",
        techStack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
        description: "A comprehensive full-stack platform engineered to streamline NGO operations, including resource management, user coordination, and complex data handling. Engineered responsive UI components using React.js and implemented RESTful APIs with Node.js and Express.js to handle business logic and data flow.",
        links: { github: "https://github.com/Kalpeshk22/NGO-FOOD-Project" },
        icon: FaUsers,
        image: ngoImg,
        gradient: "from-rose-500/10 to-red-600/5"
    },
    {
        title: "DurgSetu AI",
        techStack: ["React", "Django", "OpenCV", "MySQL", "Tailwind"],
        description: "An AI-powered change detection platform designed to monitor historical structures. Developed full-stack using Django and React to render real-time computer vision analysis highlighting infrastructural degradation and structural shifts.",
        links: { github: "https://github.com/mitpatil07/DurgSetu-AI", live: "https://durgsetuai.vercel.app/" },
        icon: FaRobot,
        image: durgsetuImg,
        gradient: "from-blue-500/10 to-indigo-600/5"
    },
    {
        title: "Whatyouwear",
        techStack: ["React", "Django", "PostgreSQL", "Tailwind", "Stripe"],
        description: "A comprehensive full-stack e-commerce platform offering responsive UI, secure user authentication, modular product catalog management, and seamless end-to-end checkout integration with localized payment gateways.",
        links: { github: "https://github.com/mitpatil07/E-commerce", live: "https://www.whatyouwear.store/" },
        icon: FaShoppingBag,
        image: whatyouwearImg,
        gradient: "from-amber-400/10 to-orange-500/5"
    },
    {
        title: "Quizora",
        techStack: ["React", "Express", "MongoDB", "Node.js", "Socket.io"],
        description: "Interactive web-based quiz application providing a dynamic testing platform with real-time score tracking. Engineered a modular MERN backend to efficiently handle scalable quiz logic and dynamic question rendering.",
        links: { github: "https://github.com/mitpatil07/QuizApp" },
        icon: FaQuestionCircle,
        image: quizoraImg,
        gradient: "from-purple-500/10 to-pink-500/5"
    },
    {
        title: "BookNest",
        techStack: ["React", "Node.js", "MySQL", "Express", "Firebase"],
        description: "Full-stack digital library management system featuring a responsive React frontend coupled with a robust backend, enabling scalable CRUD operations for comprehensive book collection exploration and user reviews.",
        links: { github: "https://github.com/mitpatil07/BookNest" },
        icon: FaBookOpen,
        gradient: "from-teal-400/10 to-emerald-500/5"
    }
];

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="premium-glass rounded-3xl overflow-hidden border border-slate-200/50 flex flex-col h-full group transition-all duration-500"
        >
            {/* Visual Header */}
            <div className="relative h-48 sm:h-56 flex-shrink-0 overflow-hidden bg-slate-100">
                {project.image ? (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                    />
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center`}>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <project.icon className="text-white text-6xl drop-shadow-2xl" />
                        </motion.div>
                    </div>
                )}
                {/* Overlay Gradient for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-brand-600 transition-colors">
                        {project.title}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, isExpanded ? undefined : 3).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-brand-50/50 text-brand-600 rounded-md border border-brand-200/50 text-[10px] font-bold">
                            {tech}
                        </span>
                    ))}
                    {!isExpanded && project.techStack.length > 3 && (
                        <span className="text-[10px] font-black text-slate-400 ml-1">+{project.techStack.length - 3}</span>
                    )}
                </div>

                <motion.p
                    layout
                    className={`text-slate-600 text-xs font-medium leading-relaxed mb-6 ${isExpanded ? '' : 'line-clamp-2'}`}
                >
                    {project.description}
                </motion.p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.a
                            href={project.links.github}
                            target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all"
                        >
                            <FaGithub size={16} />
                        </motion.a>
                        {project.links.live && (
                            <motion.a
                                href={project.links.live}
                                target="_blank" rel="noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all"
                            >
                                <FaExternalLinkAlt size={14} />
                            </motion.a>
                        )}
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-md active:scale-95"
                    >
                        {isExpanded ? (
                            <>Collapse <FaChevronUp size={8} /></>
                        ) : (
                            <>More Info <FaChevronDown size={8} /></>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-24 relative z-10">
            <div className="container mx-auto px-5 sm:px-8 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mb-12 md:mb-20 text-center"
                >
                    <span className="section-pill mb-4">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 mb-4">
                        Selected <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm">
                        A curation of full-stack engineering, AI integration, and modular architectures designed for scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
