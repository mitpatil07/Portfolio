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
                    className="w-full bg-[#000000]/75 border border-zinc-800 rounded-lg p-8 sm:p-12 shadow-2xl relative overflow-hidden"
                >
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-50 bg-[#141414]/95 flex flex-col items-center justify-center text-center p-6"
                            >
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/20 shadow-sm animate-bounce">
                                    <MdSend size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Message Broadcasted!</h4>
                                <p className="text-sm text-zinc-400 font-medium px-4 leading-relaxed">
                                    Your email subscription request is successful! I will review your inquiry and reply to you shortly.
                                </p>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-50 bg-[#141414]/95 flex flex-col items-center justify-center text-center p-6"
                            >
                                <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4 border border-red-500/20 shadow-sm">
                                    <MdSend size={32} className="rotate-180" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Transmission Failed</h4>
                                <p className="text-sm text-zinc-400 font-medium px-4 leading-relaxed">
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
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full bg-[#333] hover:bg-[#3f3f3f] focus:bg-[#454545] text-white border-b-2 border-transparent focus:border-red-600 rounded px-5 py-4 placeholder-zinc-400 font-semibold focus:outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email Address"
                                className="w-full bg-[#333] hover:bg-[#3f3f3f] focus:bg-[#454545] text-white border-b-2 border-transparent focus:border-red-600 rounded px-5 py-4 placeholder-zinc-400 font-semibold focus:outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="relative">
                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Your Message / Project Proposal"
                                className="w-full bg-[#333] hover:bg-[#3f3f3f] focus:bg-[#454545] text-white border-b-2 border-transparent focus:border-red-600 rounded px-5 py-4 placeholder-zinc-400 font-semibold focus:outline-none transition-all text-sm resize-none"
                            />
                        </div>

                        {/* Netflix-style Red CTA button */}
                        <motion.button
                            type="submit"
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={`w-full py-4 bg-[#E50914] text-white font-bold rounded shadow-lg transition-all text-base uppercase tracking-wider ${
                                status === 'sending' ? 'opacity-65 cursor-not-allowed' : 'hover:bg-[#B81D24]'
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
