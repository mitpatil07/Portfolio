import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCollection, HiBriefcase, HiCode, HiAcademicCap, HiMail, HiSearch } from 'react-icons/hi';

const navLinks = [
    { title: 'Home', href: '#home', icon: HiHome },
    { title: 'About', href: '#summary', icon: HiUser },
    { title: 'Projects', href: '#projects', icon: HiCollection },
    { title: 'Contact', href: '#contact', icon: HiMail },
];

const Header = ({ searchQuery, setSearchQuery }) => {
    const [activeSection, setActiveSection] = useState('#home');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    // Track scroll positions to update active section icon
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            
            for (const link of navLinks) {
                const el = document.querySelector(link.href);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(link.href);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus input on search open
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    return (
        <>
            {/* 1. Left Vertical Sidebar Menu (Netflix TV style) - Desktop */}
            <header className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-20 bg-black justify-between py-8 items-center z-40 select-none shadow-2xl">
                
                {/* Red "M" Logo (Replaces Netflix N) */}
                <a
                    href="#home"
                    className="text-4xl font-black text-[#E50914] tracking-tighter uppercase font-bebas cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform"
                    onClick={(e) => {
                        e.preventDefault();
                        window.lenis?.scrollTo('#home');
                    }}
                >
                    {/* M */}
                </a>

                {/* Sidebar Navigation Icons */}
                <nav className="flex flex-col gap-6 w-full items-center">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.title}
                                href={link.href}
                                className={`relative group w-full h-12 flex items-center justify-center transition-all ${
                                    isActive 
                                        ? 'text-white scale-110 font-bold' 
                                        : 'text-zinc-500 hover:text-white hover:scale-105'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.lenis?.scrollTo(link.href);
                                }}
                            >
                                <Icon size={22} />
                                
                                {/* Tooltip */}
                                <div className="absolute left-16 bg-[#181818] text-white text-xs font-semibold px-3 py-1.5 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
                                    {link.title}
                                </div>
                            </a>
                        );
                    })}
                </nav>

                {/* Bottom Profile / Control Section */}
                <div className="flex flex-col gap-5 items-center">
                    <div
                        onClick={() => window.lenis?.scrollTo('#contact')}
                        className="w-8 h-8 rounded bg-[#E50914] hover:scale-105 transition-transform flex items-center justify-center font-bold text-white text-sm cursor-pointer select-none shadow-md"
                        title="Hire Mitesh"
                    >
                        M
                    </div>
                </div>
            </header>

            {/* 2. Responsive Bottom Tab Bar Menu - Mobile */}
            <header className="flex lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0c0c0c]/95 border-t border-[#1C1C1C] justify-around items-center z-40 select-none backdrop-blur-md">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href;
                    return (
                        <a
                            key={link.title}
                            href={link.href}
                            className={`flex flex-col items-center justify-center w-12 h-12 rounded transition-all ${
                                isActive ? 'text-[#E50914]' : 'text-zinc-500'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                window.lenis?.scrollTo(link.href);
                            }}
                        >
                            <Icon size={20} />
                            <span className="text-[9px] mt-0.5 font-medium tracking-tighter opacity-80">{link.title}</span>
                        </a>
                    );
                })}
            </header>


        </>
    );
};

export default Header;
