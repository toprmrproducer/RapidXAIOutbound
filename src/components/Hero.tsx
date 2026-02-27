"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, PhoneCall, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 glow bg-indigo-500/20" />
            <div className="absolute bottom-1/4 -right-20 glow bg-purple-500/20" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Column - Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 w-fit text-xs font-bold uppercase tracking-widest mb-2">
                        <Zap size={14} className="text-indigo-400" />
                        <span>The most cost-effective solution in India</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] flex flex-col gap-2">
                        <span className="text-slate-100 drop-shadow-sm">24/7 AI Receptionists</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 pb-2 drop-shadow-[0_0_30px_rgba(129,140,248,0.2)]">
                            that book <br className="hidden sm:block" />appointments.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                        Enterprise-grade AI inbound and outbound voice agents. Your tireless SDR and always-on receptionist—built for speed, security, and scalability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="flex items-center justify-center gap-2 bg-white text-indigo-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                            Book Call <ArrowRight size={20} />
                        </button>
                        <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 glass text-slate-200 font-medium">
                            First 1000 mins FREE
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">24/7</span>
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Availability</span>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">SOC2</span>
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Enterprise Security</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Visual/Interactive Asset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center lg:justify-end w-full"
                >
                    {/* Abstract visual representation of AI agent */}
                    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">

                        {/* Subtly glowing backdrop for the entire core area */}
                        <div className="absolute inset-20 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />

                        {/* Static Concentric "Radar" Circles */}
                        <div className="absolute inset-0 rounded-full border border-white/[0.03] border-dashed" />
                        <div className="absolute inset-[12%] rounded-full border border-white/[0.04]" />
                        <div className="absolute inset-[24%] rounded-full border border-white/[0.06] border-dotted" />
                        <div className="absolute inset-[36%] rounded-full border border-indigo-500/20" />

                        {/* Center Core with Pulsing Effect */}
                        <div className="relative z-10 flex items-center justify-center">
                            {/* Outer Pulse */}
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-56 h-56 rounded-full bg-[#8b5cf6] blur-2xl"
                            />
                            {/* Inner Pulse */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-40 h-40 rounded-full bg-[#8b5cf6]/40 blur-xl"
                            />
                            {/* Solid Core */}
                            <div className="relative w-32 h-32 rounded-full bg-[#8b5cf6] shadow-[0_0_60px_rgba(139,92,246,0.8)] border border-white/20 flex items-center justify-center z-20">
                                <Bot size={52} className="text-white" />
                            </div>
                        </div>

                        {/* Orbiting Elements Container 1 (Inner, faster) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute inset-[15%]"
                        >
                            {/* Inbound Lead Card */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute top-0 right-[15%] bg-[#13131e] border border-white/10 pr-6 pl-3 py-3 rounded-2xl flex items-center gap-4 shadow-2xl"
                                style={{ transformOrigin: "center" }}
                            >
                                <div className="w-10 h-10 rounded-full bg-[#10b981]/20 border border-[#10b981]/30 flex items-center justify-center">
                                    <PhoneCall size={16} className="text-[#10b981]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-white whitespace-nowrap">Inbound Lead</span>
                                    <span className="text-xs text-slate-400 whitespace-nowrap font-medium">Qualifying...</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Orbiting Elements Container 2 (Outer, slower) */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            {/* Outbound SDR Card */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                                className="absolute bottom-[20%] left-[5%] bg-[#13131e] border border-white/10 pr-6 pl-3 py-3 rounded-2xl flex items-center gap-4 shadow-2xl"
                                style={{ transformOrigin: "center" }}
                            >
                                <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 flex items-center justify-center">
                                    <Zap size={16} className="text-[#8b5cf6]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-white whitespace-nowrap">Outbound SDR</span>
                                    <span className="text-xs text-slate-400 whitespace-nowrap font-medium">Following up...</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
