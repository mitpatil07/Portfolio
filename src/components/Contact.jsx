import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mdaqegjr", {
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
        <section id="contact" className="relative py-16 md:py-24 z-10 w-full overflow-hidden flex items-center justify-center bg-black/40">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[130px] rounded-full" />
            </div>

            <div className="container mx-auto px-5 max-w-lg z-10 flex flex-col items-center">
                
                {/* Netflix-style Sign-In Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/80 border-t-4 border-t-[#E50914] rounded-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden"
                >
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-50 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 shadow-[inset_0_0_40px_rgba(34,197,94,0.1)]"
                            >
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-bounce">
                                    <MdSend size={26} />
                                </div>
                                <h4 className="text-xl font-black text-white mb-2 tracking-wide uppercase">Message Transmitted</h4>
                                <p className="text-xs sm:text-sm text-zinc-400 font-medium px-6 leading-relaxed">
                                    Your message has been sent successfully! I will review your inquiry and reply to you shortly.
                                </p>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-50 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 shadow-[inset_0_0_40px_rgba(220,38,38,0.1)]"
                            >
                                <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4 border border-red-500/30 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                                    <MdSend size={26} className="rotate-180" />
                                </div>
                                <h4 className="text-xl font-black text-white mb-2 tracking-wide uppercase">Transmission Failed</h4>
                                <p className="text-xs sm:text-sm text-zinc-400 font-medium px-6 leading-relaxed">
                                    Unable to connect. Please review details or contact me directly at mitesh8767@gmail.com.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
 
                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight text-left">
                        Let's Connect
                    </h2>
 
                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        {/* Name Input */}
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full bg-zinc-900/60 hover:bg-zinc-900/90 focus:bg-zinc-900 text-white border border-zinc-800/80 focus:border-[#E50914] rounded px-5 py-4 placeholder-zinc-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#E50914]/20 transition-all duration-300 text-sm"
                            />
                        </div>
 
                        {/* Email Input */}
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email Address"
                                className="w-full bg-zinc-900/60 hover:bg-zinc-900/90 focus:bg-zinc-900 text-white border border-zinc-800/80 focus:border-[#E50914] rounded px-5 py-4 placeholder-zinc-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#E50914]/20 transition-all duration-300 text-sm"
                            />
                        </div>
 
                        {/* Message Input */}
                        <div className="relative group">
                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Your Message / Project Proposal"
                                className="w-full bg-zinc-900/60 hover:bg-zinc-900/90 focus:bg-zinc-900 text-white border border-zinc-800/80 focus:border-[#E50914] rounded px-5 py-4 placeholder-zinc-500 font-semibold focus:outline-none focus:ring-2 focus:ring-[#E50914]/20 transition-all duration-300 text-sm resize-none"
                            />
                        </div>
 
                        {/* Netflix-style Red CTA button */}
                        <motion.button
                            type="submit"
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={`w-full py-4 bg-[#E50914] text-white font-extrabold rounded shadow-lg transition-all duration-300 text-sm uppercase tracking-widest cursor-pointer hover:bg-[#F50C17] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] focus:ring-2 focus:ring-[#E50914]/30 ${
                                status === 'sending' ? 'opacity-65 cursor-not-allowed' : ''
                            }`}
                        >
                            {status === 'sending' ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                <span>Let's Begin</span>
                            )}
                        </motion.button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
