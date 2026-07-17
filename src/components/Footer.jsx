import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="relative z-10 bg-transparent pt-4 pb-28 lg:pb-12 border-t border-zinc-900/60 mt-4">
            <div className="container mx-auto px-5 sm:px-8 text-center">

                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                    <a href="https://github.com/mitpatil07" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://linkedin.com/in/mitpatil07" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300">
                        <FaLinkedin size={18} />
                    </a>
                    <a href="https://www.instagram.com/mitpatil_07" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300">
                        <FaInstagram size={18} />
                    </a>
                    <a href="mailto:mitesh8767@gmail.com" className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300">
                        <FaEnvelope size={18} />
                    </a>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                    <p className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">
                        Designed &amp; Built By
                    </p>
                    <p className="text-xs font-bold text-zinc-400 hover:text-white transition-colors duration-300">
                        Mitesh Patil &copy; {year}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
