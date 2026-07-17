import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaShoppingBag, FaQuestionCircle, FaBookOpen, FaChevronLeft, FaChevronRight, FaTachometerAlt, FaUsers, FaMicrophone } from 'react-icons/fa';
import { HiPlus, HiThumbUp, HiChevronDown } from 'react-icons/hi';

// Project Images
import ngoImg from '../assets/ngo_poster.png'; // Generated vertical poster
import durgsetuImg from '../assets/durgsetu_poster.png'; // Generated vertical poster
import whatyouwearImg from '../assets/whatyouwear.png';
import quizoraImg from '../assets/quizora.png';
import shopifyCroImg from '../assets/shopify_cro.png';
import productCatalogImg from '../assets/product_catalog.png';
import auracrmImg from '../assets/auracrm.png';

const projects = [

    {
        title: "DurgSetu AI",
        techStack: ["React", "Django","ML","AI", "OpenCV", "MySQL", "Tailwind"],
        description: "An AI change-detection platform monitoring historical structures. Developed using Django and OpenCV to run computer vision analysis of infrastructural degradation.",
        links: { github: "https://github.com/mitpatil07/DurgSetu-AI", live: "https://durgsetuai.vercel.app/" },
        icon: FaRobot,
        image: durgsetuImg,
        year: "2025",
        gradient: "from-blue-950/40 to-zinc-900"
    },
    {
        title: "VoicePortrait",
        techStack: ["React", "Node.js", "Express", "Python", "Wav2Lip", "FFmpeg", "OpenCV"],
        description: "A professional-grade, open-source AI platform designed to transform static 2D illustrations and anime characters into cinematic, talking narrators using Wav2Lip.",
        links: { github: "https://github.com/mitpatil07/VoicePortrait" },
        icon: FaRobot,
        year: "2025",
        gradient: "from-pink-950/40 to-zinc-900"
    },
    {
        title: "Shopify CRO Opportunity Engine",
        techStack: ["React", "TypeScript", "Node.js", "Express", "Cheerio", "Tailwind", "Llama 3.1"],
        description: "An AI-powered CRO auditing and experimentation dashboard for Shopify storefronts. Extracts live catalog, homepage signals, and PDP metadata to rank opportunities using ICE scoring.",
        links: { github: "https://github.com/mitpatil07/Shopify-CRO" },
        icon: FaTachometerAlt,
        image: shopifyCroImg,
        year: "2025",
        gradient: "from-green-950/40 to-zinc-900"
    },
    {
        title: "NGO Management System",
        techStack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
        description: "A comprehensive MERN-based platform engineered to streamline NGO operations, resource management, user coordination, and RESTful data workflows.",
        links: { github: "https://github.com/Kalpeshk22/NGO-FOOD-Project" },
        icon: FaShoppingBag,
        image: ngoImg,
        year: "2024",
        gradient: "from-rose-950/40 to-zinc-900"
    },
    {
        title: "Whatyouwear Store",
        techStack: ["React", "Django", "DRF", "PostgreSQL", "Razorpay", "Tailwind", "OAuth"],
        description: "A full-featured e-commerce platform with a React + Vite frontend and Django REST Framework backend, featuring Razorpay integration, Google OAuth login, and dynamic session cart flows.",
        links: { github: "https://github.com/mitpatil07/E-commerce", live: "https://www.whatyouwear.store/" },
        icon: FaShoppingBag,
        image: whatyouwearImg,
        year: "2024",
        gradient: "from-amber-950/40 to-zinc-900"
    },
    {
        title: "StockSync Product Catalog Dashboard",
        techStack: ["React", "React Router", "Tailwind CSS v4", "Vite", "Local Storage"],
        description: "A responsive, high-performance React application designed for managing a product inventory catalog, built using React Router and Tailwind CSS v4 with Local Storage persistence.",
        links: { github: "https://github.com/mitpatil07/Product-Catalog-Dashboard" },
        icon: FaTachometerAlt,
        image: productCatalogImg,
        year: "2024",
        gradient: "from-purple-950/40 to-zinc-900"
    },
    {
        title: "Quizora Platform",
        techStack: ["React", "Express", "MongoDB", "Node.js", "Socket.io"],
        description: "An interactive, web-based quiz application with live scoreboards, custom room joining, and responsive questions managed by a MERN stack.",
        links: { github: "https://github.com/mitpatil07/QuizApp" },
        icon: FaQuestionCircle,
        image: quizoraImg,
        year: "2024",
        gradient: "from-purple-950/40 to-zinc-900"
    },
    {
        title: "Employee-Management-System",
        techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
        description: "An enterprise administrative portal organizing department roles, secure employee logging, audit trail logs, and automated shift scheduling workflows.",
        links: { github: "https://github.com/mitpatil07/Employee-Management-System" },
        icon: FaUsers,
        year: "2024",
        gradient: "from-teal-950/40 to-zinc-900"
    },
    {
        title: "BookNest Digital",
        techStack: ["React", "Node.js", "MySQL", "Express", "Firebase"],
        description: "A digital library catalog system featuring dynamic search, review logs, and backend CRUD configurations supporting user explorations.",
        links: { github: "https://github.com/mitpatil07/BookNest" },
        icon: FaBookOpen,
        year: "2023",
        gradient: "from-teal-950/40 to-zinc-900"
    },    {
        title: "AuraCRM - AI-First CRM",
        techStack: ["Python", "FastAPI", "LangGraph", "SQLAlchemy", "React", "Redux"],
        description: "An AI-First CRM module tailored for Healthcare Professionals, combining stateful LangGraph agents, multi-turn tool calling, and live UI synchronization.",
        links: { github: "https://github.com/mitpatil07/AuraCRM" },
        icon: FaRobot,
        image: auracrmImg,
        year: "2026",
        gradient: "from-red-950/40 to-zinc-900"
    },
];

const Projects = ({ searchQuery, setActiveModalItem }) => {
    const sliderRef = useRef(null);

    const handleScroll = (direction) => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollAmount = clientWidth * 0.7;
            const targetScroll = direction === 'left' 
                ? scrollLeft - scrollAmount 
                : scrollLeft + scrollAmount;
            
            sliderRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    const filteredProjects = projects.filter(p => {
        const query = searchQuery.toLowerCase();
        return (
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.techStack.some(t => t.toLowerCase().includes(query))
        );
    });

    if (searchQuery && filteredProjects.length === 0) {
        return null;
    }

    return (
        <section id="projects" className="relative py-4 z-10 select-none overflow-visible w-full">
            <div className="px-6 sm:px-10 md:px-12 mb-2 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    Trending Now (Projects)
                </h2>
            </div>

            {/* Slider Row Container */}
            <div className="relative group/row overflow-visible">
                
                {/* Left scroll control arrow - Floating Round Button */}
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/90 border border-zinc-800 hover:bg-white hover:text-black flex items-center justify-center text-white opacity-0 group-hover/row:opacity-100 transition-all duration-300 pointer-events-auto shadow-2xl cursor-pointer"
                >
                    <FaChevronLeft size={16} />
                </button>

                {/* Horizontal Scroll Element */}
                <div
                    ref={sliderRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar py-6 px-6 sm:px-12 overflow-y-visible"
                >
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-44 sm:w-48 h-64 sm:h-72 bg-[#181818] rounded-md overflow-hidden border border-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.85)] cursor-pointer group"
                            onClick={() => setActiveModalItem(project)}
                        >
                            {/* Red M logo badge in the corner */}
                            <div className="absolute top-2 left-2 z-10 bg-black/60 rounded px-1.5 py-0.5 text-xs font-bold text-[#E50914] flex items-center justify-center font-bebas">
                                M
                            </div>

                            {/* Card Media Header - Vertical Poster Aspect Ratio */}
                            <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-red-950/20 to-black/50">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center p-4`}>
                                        <project.icon className="text-[#E50914] text-4xl opacity-40 mb-2" />
                                        <span className="text-white text-xs font-black text-center uppercase tracking-wider">{project.title}</span>
                                    </div>
                                )}
                                
                                {/* Bottom Card Text & Detail Overlay (visible on hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <div className="space-y-1.5">
                                        <h3 className="font-bebas text-lg tracking-wide text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-300">
                                            <span className="text-green-500">98% Match</span>
                                            <span className="border border-zinc-700 text-zinc-400 px-1 rounded">ALL</span>
                                            <span>{project.year}</span>
                                        </div>

                                        {/* Description & Tech Tags (more info in card) */}
                                        <p className="text-[9px] text-zinc-400 line-clamp-2 leading-tight mt-1">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {project.techStack.slice(0, 3).map((t, idx) => (
                                                <span key={idx} className="text-[8px] bg-red-950/20 text-red-400 border border-red-900/30 px-1 rounded font-bold">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action buttons revealed in the overlay */}
                                        <div className="flex items-center gap-1.5 pt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-6.5 h-6.5 rounded-full bg-white hover:bg-white/80 flex items-center justify-center text-black shadow active:scale-90 transition-all"
                                                title="Source Code"
                                            >
                                                <FaGithub size={12} />
                                            </a>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveModalItem(project);
                                                }}
                                                className="w-6.5 h-6.5 rounded-full bg-[#2F2F2F]/80 border border-zinc-600 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all active:scale-90 ml-auto"
                                            >
                                                <HiChevronDown size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right scroll control arrow - Floating Round Button */}
                <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/90 border border-zinc-800 hover:bg-white hover:text-black flex items-center justify-center text-white opacity-0 group-hover/row:opacity-100 transition-all duration-300 pointer-events-auto shadow-2xl cursor-pointer"
                >
                    <FaChevronRight size={16} />
                </button>
            </div>
        </section>
    );
};

export { projects };
export default Projects;
