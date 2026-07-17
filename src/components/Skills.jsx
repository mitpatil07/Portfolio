import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BiCodeAlt, BiGlobe, BiGitBranch, BiLayer } from 'react-icons/bi';
import { FaDatabase, FaBrain, FaTerminal, FaChevronLeft, FaChevronRight, FaRobot } from 'react-icons/fa';
import { HiPlus, HiThumbUp, HiChevronDown } from 'react-icons/hi';

import frontendSkillImg from '../assets/frontend.png';
import backendSkillImg from '../assets/backend.png';
import programmingSkillImg from '../assets/lang.png';
import databaseSkillImg from '../assets/db.png';
import mlCvSkillImg from '../assets/ML.png';
import toolkitSkillImg from '../assets/developer.png';
import aiLlmSkillImg from '../assets/ai.png';

const skillsData = [
    {
        icon: BiGlobe,
        iconBg: "text-red-500 bg-red-950/20 border border-red-900/30",
        title: "Frontend Development",
        desc: "Crafting responsive, high-performance, and pixel-perfect user interfaces.",
        skills: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
        year: "2026",
        gradient: "from-blue-950/40 to-zinc-900",
        image: frontendSkillImg
    },
    {
        icon: BiLayer,
        iconBg: "text-purple-500 bg-purple-950/20 border border-purple-900/30",
        title: "Backend Development",
        desc: "Architecting robust APIs and scalable server-side systems.",
        skills: ["Django", "Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
        year: "2025",
        gradient: "from-purple-950/40 to-zinc-900",
        image: backendSkillImg
    },
    {
        icon: BiCodeAlt,
        iconBg: "text-pink-500 bg-pink-950/20 border border-pink-900/30",
        title: "Programming Languages",
        desc: "Python, C++, Java, and JavaScript - the core foundations of engineering logic.",
        skills: ["Python", "C++", "Java", "JavaScript (ES6+)"],
        year: "2026",
        gradient: "from-pink-950/40 to-zinc-900",
        image: programmingSkillImg
    },
    {
        icon: FaDatabase,
        iconBg: "text-emerald-500 bg-emerald-950/20 border border-emerald-900/30",
        title: "Database Solutions",
        desc: "Relational and NoSQL structures facilitating safe, scalable data storage and retrieval.",
        skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
        year: "2025",
        gradient: "from-emerald-950/40 to-zinc-900",
        image: databaseSkillImg
    },
    {
        icon: FaBrain,
        iconBg: "text-amber-500 bg-amber-950/20 border border-amber-900/30",
        title: "Machine Learning & CV",
        desc: "Engineering custom models and pipelines that analyze infrastructural and visual data.",
        skills: ["OpenCV", "NumPy", "Pandas", "Computer Vision"],
        year: "2025",
        gradient: "from-amber-950/40 to-zinc-900",
        image: mlCvSkillImg
    },
    {
        icon: FaTerminal,
        iconBg: "text-slate-400 bg-slate-800/40 border border-slate-700/30",
        title: "Developer Toolkit",
        desc: "The essential system utilities and tools keeping developer histories secure and deployments clean.",
        skills: ["Git & GitHub", "VS Code", "Postman", "Linux", "Vercel"],
        year: "2026",
        gradient: "from-slate-900 to-zinc-900",
        image: toolkitSkillImg
    },
    {
        icon: FaRobot,
        iconBg: "text-rose-500 bg-rose-950/20 border border-rose-900/30",
        title: "Generative AI & LLMs",
        desc: "Designing stateful multi-turn agents, vector retrieval systems, and engineering LLM prompts.",
        skills: ["LangChain", "LangGraph", "Groq API", "Llama Models", "Vector Databases", "Prompt Engineering"],
        year: "2026",
        gradient: "from-rose-950/40 to-zinc-900",
        image: aiLlmSkillImg
    }
];

const Skills = ({ searchQuery, setActiveModalItem }) => {
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

    const filteredSkills = skillsData.filter(cat => {
        const query = searchQuery.toLowerCase();
        return (
            cat.title.toLowerCase().includes(query) ||
            cat.desc.toLowerCase().includes(query) ||
            cat.skills.some(s => s.toLowerCase().includes(query))
        );
    });

    if (searchQuery && filteredSkills.length === 0) {
        return null;
    }

    return (
        <section id="skills" className="relative py-4 z-10 select-none overflow-visible w-full">
            <div className="px-6 sm:px-10 md:px-12 mb-2 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    Top Picks for You (Skills Genres)
                </h2>
            </div>

            {/* Slider Row Container */}
            <div className="relative group/row overflow-visible">

                {/* Left scroll control arrow - Floating Round Button */}
                <button
                    onClick={() => handleScroll('left')}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/90 border border-zinc-800 hover:bg-white hover:text-black items-center justify-center text-white opacity-0 group-hover/row:opacity-100 transition-all duration-300 pointer-events-auto shadow-2xl cursor-pointer"
                >
                    <FaChevronLeft size={16} />
                </button>

                {/* Horizontal Scroll Element */}
                <div
                    ref={sliderRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar py-6 px-6 sm:px-12 overflow-y-visible"
                >
                    {filteredSkills.map((category, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-44 sm:w-48 h-64 sm:h-72 bg-[#181818] rounded-md overflow-hidden border border-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.85)] cursor-pointer group"
                            onClick={() => setActiveModalItem(category)}
                        >
                            {/* Corner M Logo Badge */}
                            <div className="absolute top-2 left-2 z-10 bg-black/60 rounded px-1.5 py-0.5 text-xs font-bold text-[#E50914] flex items-center justify-center font-bebas">
                                M
                            </div>

                            {/* Card Media Header - Vertical aspect ratio with poster image */}
                            <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-red-950/20 to-black/50">
                                {category.image ? (
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${category.title === "Frontend Development" ? "netflix-illustration-filter" : ""
                                            }`}
                                    />
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center p-4`}>
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${category.iconBg} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                            <category.icon size={20} />
                                        </div>
                                        <span className="text-white text-xs font-black text-center uppercase tracking-wider">{category.title}</span>
                                    </div>
                                )}

                                {/* Text & Detail Overlay (visible on hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <div className="space-y-1">
                                        <h3 className="font-bebas text-lg tracking-wide text-white leading-tight">
                                            {category.title}
                                        </h3>

                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-300">
                                            <span className="text-green-500">95% Match</span>
                                            <span className="border border-zinc-700 text-zinc-400 px-1 rounded">G</span>
                                            <span>{category.year}</span>
                                        </div>

                                        {/* Additional description & sub-skills (more info in card) */}
                                        <p className="text-[9px] text-zinc-400 line-clamp-2 leading-tight">
                                            {category.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-1 pt-0.5">
                                            {category.skills.slice(0, 3).map((s, idx) => (
                                                <span key={idx} className="text-[8px] bg-zinc-800 text-zinc-300 px-1 rounded font-semibold border border-zinc-700">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action buttons revealed in overlay */}
                                        <div className="flex items-center gap-1.5 pt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center text-black shadow active:scale-90 transition-all">
                                                <HiPlus size={12} />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveModalItem(category);
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
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/90 border border-zinc-800 hover:bg-white hover:text-black items-center justify-center text-white opacity-0 group-hover/row:opacity-100 transition-all duration-300 pointer-events-auto shadow-2xl cursor-pointer"
                >
                    <FaChevronRight size={16} />
                </button>
            </div>
        </section>
    );
};

export { skillsData };
export default Skills;
