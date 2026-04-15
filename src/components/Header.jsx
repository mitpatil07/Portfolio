import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Summary', href: '#summary' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: '#experience' },
    { title: 'Contact', href: '#contact' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Staggered animation for desktop nav
    const navVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.3 }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-3 sm:pt-4 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-4xl pointer-events-auto transition-all duration-400 ${isScrolled
                    ? 'nav-glass rounded-full px-5 py-3.5 shadow-2xl shadow-brand-900/10 transform scale-[0.98] border-brand-300/40'
                    : 'bg-transparent px-3 py-4'
                    }`}
            >
                <div className="flex justify-between items-center w-full">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xl sm:text-2xl font-black text-slate-800 px-2 tracking-tighter whitespace-nowrap"
                    >
                        Mitesh
                    </motion.a>

                    {/* Desktop Nav */}
                    <motion.nav
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        className="hidden md:flex items-center gap-1 lg:gap-2"
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.title}
                                variants={linkVariants}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 243, 255, 0.8)' }}
                                whileTap={{ scale: 0.95 }}
                                href={link.href}
                                className="px-3 xl:px-4 py-2 text-[11px] lg:text-xs font-black text-slate-500 hover:text-brand-900 rounded-full transition-colors uppercase tracking-[0.15em]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.lenis?.scrollTo(link.href);
                                }}
                            >
                                {link.title}
                            </motion.a>
                        ))}
                    </motion.nav>

                    {/* CTA Desktop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:block pl-2"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: '#4C4FDF' }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-brand-900 text-white text-[11px] lg:text-xs font-black shadow-lg shadow-brand-900/30 uppercase tracking-[0.15em] whitespace-nowrap transition-colors"
                        >
                            Hire Me <FiArrowUpRight size={14} className="mt-[-1px]" />
                        </motion.a>
                    </motion.div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-brand-900 p-2.5 focus:outline-none bg-brand-50 hover:bg-brand-100 transition-colors rounded-full shadow-sm"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                    </motion.button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden w-full bg-white/95 backdrop-blur-2xl rounded-2xl mt-3 shadow-xl border border-slate-100/50"
                        >
                            <div className="flex flex-col py-2 px-2">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.title}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        href={link.href}
                                        className="px-4 py-3 text-xs font-bold text-slate-600 hover:text-brand-900 hover:bg-brand-50/50 rounded-xl uppercase tracking-widest transition-colors text-left flex items-center justify-between group"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.lenis?.scrollTo(link.href);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {link.title}
                                        <span className="text-brand-300 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                                            <FiArrowUpRight />
                                        </span>
                                    </motion.a>
                                ))}
                                <motion.div className="px-2 pt-2 pb-1 mt-1 border-t border-slate-100">
                                    <motion.a
                                        href="#contact"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-900 text-white text-[11px] font-black uppercase tracking-[0.15em] shadow-md shadow-brand-900/20"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Hire Me <FiArrowUpRight size={14} />
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
};

export default Header;
