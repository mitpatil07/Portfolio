import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiPlus, HiThumbUp, HiChevronDown } from 'react-icons/hi';

const educationData = [
    {
        degree: "B.E. in Computer Engineering",
        institution: "SNJB's Late Sau College of Engineering",
        location: "Chandwad, India",
        grade: "CGPA: 8.23",
        year: "2026",
        duration: "4 Years",
        description: "Focus Areas: Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, DBMS, Web Development architectures, and software design principles.",
        gradient: "from-[#E50914]/20 to-zinc-900"
    },
    {
        degree: "Higher Secondary Education (HSC)",
        institution: "S.T.T.K Mahajan High School",
        location: "Dhule, India",
        grade: "68.83%",
        year: "2022",
        duration: "2 Years",
        description: "Academic focus on physics, chemistry, mathematics, and fundamentals of computer science.",
        gradient: "from-zinc-800 to-zinc-900"
    }
];

const Education = ({ setActiveModalItem }) => {
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
        <section id="education" className="relative py-4 z-10 select-none overflow-visible w-full">
            <div className="px-6 sm:px-10 md:px-12 mb-2 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    Documentaries & Reality (Academic Journey)
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
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-44 sm:w-48 h-64 sm:h-72 bg-[#181818] rounded-md overflow-hidden border border-[#2C2C2C] transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.85)] cursor-pointer group"
                            onClick={() => setActiveModalItem(edu)}
                        >
                            {/* Corner M Logo Badge */}
                            <div className="absolute top-2 left-2 z-10 bg-black/60 rounded px-1.5 py-0.5 text-xs font-bold text-[#E50914] flex items-center justify-center font-bebas">
                                M
                            </div>

                            {/* Card Media Header - Vertical Aspect Ratio */}
                            <div className={`relative w-full h-full bg-gradient-to-br ${edu.gradient} flex flex-col items-center justify-center p-4`}>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E50914] text-white shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                                    <FaGraduationCap size={20} />
                                </div>

                                {/* Text & Detail Overlay (visible on hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <div className="space-y-1">
                                        <h3 className="font-bebas text-lg tracking-wide text-white leading-tight">
                                            {edu.degree}
                                        </h3>
                                        
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-300">
                                            <span className="text-green-500">95% Match</span>
                                            <span className="border border-zinc-700 text-zinc-400 px-1 rounded">G</span>
                                            <span>{edu.year}</span>
                                        </div>

                                        <p className="text-zinc-300 text-[10px] leading-snug font-bold line-clamp-1">
                                            {edu.institution}
                                        </p>

                                        {/* Description, location and duration details in hover card (more info in card) */}
                                        <p className="text-[9px] text-zinc-400 line-clamp-2 leading-tight mt-1">
                                            {edu.description}
                                        </p>
                                        <div className="flex items-center gap-1 text-[8px] text-zinc-400 mt-1 font-semibold">
                                            <span className="bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded">{edu.location}</span>
                                            <span className="bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded">{edu.duration}</span>
                                        </div>

                                        {/* Action buttons revealed in overlay */}
                                        <div className="flex items-center gap-1.5 pt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center text-black shadow active:scale-90 transition-all">
                                                <HiPlus size={12} />
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveModalItem(edu);
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

export { educationData };
export default Education;
