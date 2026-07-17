import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiPlus, HiThumbUp, HiChevronDown } from 'react-icons/hi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Paarsh Infotech Pvt. Ltd.",
        year: "2026",
        details: [
            "Architected and engineered the backend system architecture and API integrations for a comprehensive NGO Management platform.",
            "Designed and implemented the core UI design system and responsive dashboard interfaces using React and Tailwind CSS.",
            "Developed high-performance Node.js/Express REST APIs and optimized MongoDB database structures for secure donor and resource workflows.",
            "Spearheaded database schema design, secure role-based access control, and deployment pipeline optimization."
        ],
        tags: ["MERN Stack", "API Integration", "UI System Design", "Backend Dev"],
        gradient: "from-red-950/40 to-zinc-900",
        icon: HiBriefcase
    },
    {
        role: "Java Developer Intern",
        company: "NetLeap",
        year: "2025",
        details: [
            "Developed travel planning features using Java, Servlets, and JSP with a focus on UX.",
            "Optimized backend logic and server-side data handling to double system performance.",
            "Designed efficient system architectures for scalable enterprise-level web applications."
        ],
        tags: ["Java SE/EE", "JSP/Servlets", "Backend"],
        gradient: "from-zinc-800 to-zinc-900",
        icon: HiBriefcase
    }
];

const Experience = ({ setActiveModalItem }) => {
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

    return (
        <section id="experience" className="relative py-4 z-10 select-none overflow-visible w-full">
            <div className="px-6 sm:px-10 md:px-12 mb-2 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    Critically Acclaimed Series (Career Experience)
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
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-44 sm:w-48 h-64 sm:h-72 bg-[#181818] rounded-md overflow-hidden border border-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.85)] cursor-pointer group"
                            onClick={() => setActiveModalItem(exp)}
                        >
                            {/* Corner M Logo Badge */}
                            <div className="absolute top-2 left-2 z-10 bg-black/60 rounded px-1.5 py-0.5 text-xs font-bold text-[#E50914] flex items-center justify-center font-bebas">
                                M
                            </div>

                            {/* Card Media Header - Vertical Aspect Ratio */}
                            <div className={`relative w-full h-full bg-gradient-to-br ${exp.gradient} flex flex-col items-center justify-center p-4`}>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E50914] text-white shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                                    <exp.icon size={20} />
                                </div>

                                {/* Text & Detail Overlay (visible on hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <div className="space-y-1">
                                        <h3 className="font-bebas text-lg tracking-wide text-white leading-tight">
                                            {exp.company}
                                        </h3>
                                        
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-300">
                                            <span className="text-green-500">98% Match</span>
                                            <span className="border border-zinc-700 text-zinc-400 px-1 rounded">PG-13</span>
                                            <span>1 Season</span>
                                        </div>

                                        <p className="text-zinc-300 text-[10px] leading-snug font-bold line-clamp-1">
                                            {exp.role}
                                        </p>

                                        {/* Description & Skill Tags (more info in card) */}
                                        <p className="text-[9px] text-zinc-400 line-clamp-2 leading-tight mt-1">
                                            {exp.details[0]}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {exp.tags?.map((t, idx) => (
                                                <span key={idx} className="text-[8px] bg-red-950/20 text-red-400 border border-red-900/30 px-1.5 py-0.5 rounded font-bold">
                                                    {t}
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
                                                    setActiveModalItem(exp);
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

export { experiences };
export default Experience;
