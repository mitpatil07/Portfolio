import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="relative z-10 bg-white border-t border-brand-300/20 pt-8 pb-6">
            <div className="container mx-auto px-5 sm:px-8 text-center">

                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                    <a href="https://github.com/mitpatil07" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-900 hover:bg-brand-50 hover:border-brand-300 transition-all duration-250">
                        <FaGithub size={16} />
                    </a>
                    <a href="https://linkedin.com/in/mitpatil07" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-900 hover:bg-brand-50 hover:border-brand-300 transition-all duration-250">
                        <FaLinkedin size={16} />
                    </a>
                    <a href="https://www.instagram.com/mitpatil_07" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-900 hover:bg-brand-50 hover:border-brand-300 transition-all duration-250">
                        <FaInstagram size={16} />
                    </a>
                    <a href="mailto:mitesh8767@gmail.com" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-900 hover:bg-brand-50 hover:border-brand-300 transition-all duration-250">
                        <FaEnvelope size={16} />
                    </a>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                        Designed &amp; Built By
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                        Mitesh Dipak Patil &copy; {year}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
