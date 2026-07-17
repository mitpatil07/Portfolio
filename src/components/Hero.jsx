import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiInformationCircle, HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { FaAward } from 'react-icons/fa';
import billboardImg from '../assets/bg.jpg';

const Hero = ({ setActiveModalItem, playTaDum, audioEnabled, setAudioEnabled }) => {
    
    const handleMoreInfo = () => {
        // Open a detailed overview of Mitesh in the modal
        setActiveModalItem({
            title: "Mitesh Dipak Patil",
            role: "Full-Stack Engineer & Passionate Creator",
            company: "Available for Hire",
            year: "2026",
            grade: "CGPA: 8.23 (Computer Engineering)",
            location: "Pune, India",
            description: "An engineer by degree, creator by passion, and communicator by nature. Mitesh specializes in full-stack architecture, machine learning integrations, and creating pixel-perfect, performant user experiences. With hands-on experience in Django, Node.js, Express, React, PostgreSQL, and computer vision, he bridges the gap between complex logic and seamless designs.",
            skills: ["React.js", "Django", "Node.js", "MongoDB", "Python", "C++", "OpenCV"],
            gradient: "from-[#E50914]/30 to-black"
        });
    };

    return (
        <section id="home" className="relative w-full h-[85vh] sm:h-screen flex items-center justify-start overflow-hidden bg-black select-none">
            {/* Ambient Spotlight Background / Scanner Line */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={billboardImg} 
                    alt="Mitesh Patil Cinematic Billboard" 
                    className="absolute right-0 top-0 h-full w-[85vw] lg:w-[70vw] object-cover opacity-50 z-0 pointer-events-none select-none"
                />
                
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-950/25 via-[#141414] to-[#141414] opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                
                {/* Netflix-style ambient scanlines or color splash */}
                <div className="absolute top-1/2 left-[15%] w-96 h-96 -translate-y-1/2 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
                
                {/* Horizontal bottom overlay that blends billboard into rows */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141414] to-transparent z-10" />
            </div>

            {/* Billboard Content */}
            <div className="z-10 text-left pt-20 px-6 sm:px-10 md:px-12 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl space-y-4"
                >
                    {/* Netflix original label */}
                    <div className="flex items-center gap-2">
                        <span className="font-bebas text-2xl tracking-widest text-[#E50914] font-black uppercase">M</span>
                        <span className="text-[10px] font-bold text-zinc-300 tracking-[0.25em] uppercase">Original Series</span>
                    </div>

                    {/* Bold Cinematic Title */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-bebas tracking-tight uppercase leading-[0.9] drop-shadow-xl select-all">
                        Mitesh Patil
                    </h1>

                    {/* Netflix tags info */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-200">
                        <span className="text-green-500 font-bold text-sm">98% Match</span>
                        <span className="px-2 py-0.5 border border-zinc-500 text-zinc-300 text-[10px] sm:text-xs rounded font-bold">
                            PG-13
                        </span>
                        <span className="text-zinc-300">2026 Release</span>
                        <span className="px-1.5 py-0.5 text-[9px] border border-zinc-600 text-zinc-400 rounded font-black tracking-widest uppercase">
                            Ultra HD
                        </span>
                        <span className="px-1.5 py-0.5 text-[9px] border border-zinc-600 text-zinc-400 rounded font-black tracking-widest uppercase">
                            HDR
                        </span>
                        <span className="px-1.5 py-0.5 text-[9px] border border-zinc-600 text-zinc-400 rounded font-black tracking-widest uppercase">
                            5.1
                        </span>
                    </div>

                    {/* Synopsis */}
                    <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed drop-shadow font-medium max-w-xl text-justify">
                        An engineer by degree and creator by passion. Follow Mitesh as he architects robust REST APIs, design sleek responsive frontends, and integrate computer vision algorithms into full-stack systems. Ready to deploy globally.
                    </p>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3.5 pt-2">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-white text-black font-bold text-sm sm:text-base rounded-md hover:bg-white/80 transition-all shadow-lg active:scale-95 duration-200 cursor-pointer"
                        >
                            <HiPlay size={24} className="fill-black text-black" />
                            <span>Play Resume</span>
                        </a>

                        <button
                            onClick={handleMoreInfo}
                            className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-zinc-600/70 text-white font-bold text-sm sm:text-base rounded-md hover:bg-zinc-600 border border-zinc-500/30 transition-all active:scale-95 duration-200"
                        >
                            <HiInformationCircle size={24} />
                            <span>More Info</span>
                        </button>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
