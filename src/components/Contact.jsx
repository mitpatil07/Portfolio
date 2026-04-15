import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { HiChatBubbleLeftRight, HiRocketLaunch, HiCodeBracket } from 'react-icons/hi2';
import { MdSend } from 'react-icons/md';

const highlights = [
    {
        icon: HiChatBubbleLeftRight,
        text: "Let's talk code, design, or big ideas - no small talk required.",
    },
    {
        icon: HiRocketLaunch,
        text: "Looking for someone who codes like an engineer and thinks like an entrepreneur?",
    },
    {
        icon: HiCodeBracket,
        text: "Coffee + Code + Conversation = Collaboration. Let's build something real.",
    },
];

const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const data = new FormData(form);

        try {
            // Use the direct email endpoint to avoid 404s if you don't have a Form ID yet.
            const response = await fetch("https://formspree.io/mitesh8767@gmail.com", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 relative z-10">

            {/* Outer decorative border with tinted glass effect */}
            <div className="absolute inset-6 md:inset-10 border border-brand-300/15 rounded-3xl pointer-events-none hidden md:block backdrop-blur-[3px] bg-brand-500/[0.03] shadow-[inset_0_0_80px_rgba(120,149,250,0.2)]" />

            <div className="container mx-auto px-5 sm:px-8 max-w-3xl relative z-20">

                {/* Top CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <span className="section-pill">Contact</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-5 tracking-tight leading-snug">
                        Let's Build Something{' '}
                        <span className="text-gradient">Extraordinary</span>
                    </h2>

                    {/* Highlights */}
                    <div className="flex flex-col gap-3 mb-8 max-w-md mx-auto text-left">
                        {highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: false }}
                                className="flex items-start gap-3"
                            >
                                <div className="w-7 h-7 rounded-lg bg-brand-600 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <h.icon className="text-white text-sm" />
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{h.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        <motion.a
                            href="#contact-form"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md shadow-purple-500/15 cursor-pointer"
                        >
                            <FaEnvelope size={12} /> Email Me
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/mitpatil07"
                            target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#0A66C2] shadow-md shadow-[#0A66C2]/15"
                        >
                            <FaLinkedin size={12} /> LinkedIn
                        </motion.a>
                        <motion.a
                            href="https://github.com/mitpatil07"
                            target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-slate-800 shadow-md shadow-slate-800/15"
                        >
                            <FaGithub size={12} /> GitHub
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/mitpatil_07"
                            target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-md shadow-red-500/15"
                        >
                            <FaInstagram size={12} /> Instagram
                        </motion.a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <div className="text-center mb-5">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-1">
                            Hire <span className="text-brand-600">Me</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm mx-auto">
                            Looking for someone who codes with passion and vision? Let's make it official.
                        </p>
                    </div>

                    <motion.form
                        id="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: false }}
                        className="premium-glass rounded-2xl p-5 sm:p-7 text-left border border-slate-200/50 shadow-2xl relative overflow-hidden bg-brand-50/20 backdrop-blur-xl"
                    >
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                                >
                                    <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-4 border border-green-500/20 shadow-sm">
                                        <MdSend size={32} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-800 mb-1">Message Sent!</h4>
                                    <p className="text-sm text-slate-600 font-medium px-4">Thanks for reaching out! I've received your message and will reply shortly.</p>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                                >
                                    <div className="w-16 h-16 bg-red-500/10 text-red-600 rounded-full flex items-center justify-center mb-4 border border-red-500/20 shadow-sm">
                                        <MdSend size={32} className="rotate-180" />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-800 mb-1">Oops!</h4>
                                    <p className="text-sm text-slate-600 font-medium shadow-sm">Something went wrong. Please try again or email me directly.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex flex-col gap-5">
                            <div className="border-b border-slate-200 focus-within:border-brand-500 transition-colors">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent py-2.5 text-slate-800 placeholder-slate-400 font-medium focus:outline-none text-sm"
                                    required
                                />
                            </div>
                            <div className="border-b border-slate-200 focus-within:border-brand-500 transition-colors">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent py-2.5 text-slate-800 placeholder-slate-400 font-medium focus:outline-none text-sm"
                                    required
                                />
                            </div>
                            <div className="border-b border-slate-200 focus-within:border-brand-500 transition-colors">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full bg-transparent py-2.5 text-slate-800 placeholder-slate-400 font-medium focus:outline-none resize-none text-sm"
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition-all shadow-md ${status === 'sending'
                                    ? 'bg-slate-400 cursor-not-allowed opacity-70'
                                    : 'bg-gradient-to-r from-brand-600 to-brand-900 hover:opacity-90 shadow-brand-900/15'
                                    }`}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <MdSend size={14} /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
