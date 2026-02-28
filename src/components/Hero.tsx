"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Bot, PhoneCall, Zap, ChevronRight } from "lucide-react";

/* ── animated floating card ───────────────────────────────── */
function FloatCard({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden">

            {/* ── Aurora Background ───────────────────────────────── */}
            <div className="aurora" />

            {/* ── Dot Grid ────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-dot-grid opacity-100 pointer-events-none" />

            {/* ── Radial vignette over dot grid ───────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, #030308 80%)",
                }}
            />

            {/* ── Main Content ─────────────────────────────────────── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

                {/* ── Centered hero content ────────────────────────── */}
                <div className="flex flex-col items-center text-center gap-8 mb-20">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-widest"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                        </span>
                        Most cost-effective AI sales solution in India
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-white max-w-5xl"
                    >
                        AI Agents That
                        <br />
                        <span className="text-gradient-primary">Book Meetings.</span>
                        <br />
                        <span className="text-gradient-warm text-[0.9em]">24/7. On Autopilot.</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light"
                    >
                        Enterprise-grade inbound & outbound voice agents. Your tireless SDR and always-on
                        receptionist — built for speed, security, and scale.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <button className="btn-shimmer group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-base hover:scale-[1.03] transition-all shadow-[0_0_40px_rgba(255,255,255,0.12)] active:scale-95">
                            Book a Call
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 border border-white/10 text-slate-300 px-8 py-4 rounded-full font-medium text-base hover:border-white/25 hover:text-white transition-all glass">
                            <PhoneCall size={16} className="text-violet-400" />
                            First 1000 mins FREE
                        </button>
                    </motion.div>

                    {/* Trust row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-8 pt-2 text-sm text-slate-500 font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            SOC2 Enterprise Security
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-white/10" />
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                            99.9% Uptime SLA
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-white/10" />
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            {"<"}1s Response Latency
                        </div>
                    </motion.div>
                </div>

                {/* ── Visual Showcase ─────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative mx-auto w-full max-w-4xl"
                >
                    {/* Glow behind the main visual */}
                    <div className="absolute inset-0 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10 scale-75" />

                    {/* Main pipeline visual */}
                    <div className="relative flex justify-center items-center min-h-[420px]">

                        {/* Pipeline capsule */}
                        <div className="relative w-44 h-[380px] bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] border border-white/5 border-t-white/20 border-b-transparent shadow-2xl flex flex-col items-center justify-center z-10 overflow-hidden glass-card">

                            {/* Subtle top shine */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            {/* Purple Core */}
                            <div className="relative z-10 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute w-36 h-36 bg-violet-600/30 blur-3xl rounded-full"
                                />
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_80px_rgba(124,106,245,0.8)] border border-white/20 flex items-center justify-center z-20">
                                    <Bot size={30} className="text-white" />
                                </div>
                            </div>
                        </div>

                        {/* SVG connection paths */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-20"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="grad-in" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#94a3b8" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.7" />
                                    <stop offset="100%" stopColor="#7c6af5" stopOpacity="1" />
                                </linearGradient>
                                <linearGradient id="grad-out" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#7c6af5" stopOpacity="1" />
                                    <stop offset="60%" stopColor="#10b981" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Inbound */}
                            <path d="M 15,22 C 30,22 35,50 50,50" fill="none" stroke="url(#grad-in)" strokeWidth="0.4" opacity="0.4" />
                            <motion.path
                                d="M 15,22 C 30,22 35,50 50,50"
                                fill="none" stroke="#cbd5e1" strokeWidth="0.8" strokeLinecap="round"
                                strokeDasharray="3 15"
                                initial={{ strokeDashoffset: 18 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                                style={{ filter: "drop-shadow(0 0 4px rgba(203,213,225,0.8))" }}
                            />
                            {/* Outbound */}
                            <path d="M 50,50 C 50,70 35,85 15,85" fill="none" stroke="url(#grad-out)" strokeWidth="0.4" opacity="0.4" />
                            <motion.path
                                d="M 50,50 C 50,70 35,85 15,85"
                                fill="none" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round"
                                strokeDasharray="4 20"
                                initial={{ strokeDashoffset: 24 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                                style={{ filter: "drop-shadow(0 0 6px rgba(16,185,129,0.8))" }}
                            />
                        </svg>

                        {/* Orbiters */}
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 14, ease: "linear" }} className="absolute inset-[-18%] pointer-events-none z-20">
                            <div className="absolute top-[18%] left-[18%] w-3 h-3 bg-violet-400 rounded-full shadow-[0_0_20px_#a78bfa]" />
                        </motion.div>
                        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute inset-[-10%] pointer-events-none z-20">
                            <div className="absolute bottom-[28%] right-[10%] w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_#818cf8]" />
                        </motion.div>

                        {/* ── Floating UI Cards ─────────────────────────────── */}

                        {/* Raw Traffic */}
                        <FloatCard delay={0} className="absolute top-[18%] left-[0%] sm:left-[-8%] z-30">
                            <div className="glass-card border-gradient bg-black/60 pr-6 pl-3 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
                                <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                                    <span className="text-slate-400 font-serif italic font-bold text-sm">in</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-white whitespace-nowrap font-display">Raw Traffic</span>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                                        <span className="text-xs text-slate-400 whitespace-nowrap">Processing...</span>
                                    </div>
                                </div>
                            </div>
                        </FloatCard>

                        {/* Outbound Swarm */}
                        <FloatCard delay={1.5} className="absolute top-[40%] right-[-2%] sm:right-[-10%] z-30">
                            <div className="glass-card bg-black/50 pr-6 pl-3 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
                                <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0">
                                    <Zap size={16} className="text-violet-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-white whitespace-nowrap font-display">Outbound Swarm</span>
                                    <div className="flex items-baseline gap-1 mt-0.5">
                                        <span className="text-xs text-violet-400 whitespace-nowrap font-mono-premium font-bold">14,293</span>
                                        <span className="text-[10px] text-slate-400 whitespace-nowrap uppercase tracking-wider">Scraped</span>
                                    </div>
                                </div>
                            </div>
                        </FloatCard>

                        {/* Qualified Meetings */}
                        <FloatCard delay={0.7} className="absolute bottom-[8%] left-[5%] sm:left-[-2%] z-30">
                            <div className="bg-black/70 border border-emerald-500/20 pr-6 pl-3 py-3 rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(16,185,129,0.12)] backdrop-blur-xl">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-[3px] shadow-[0_0_14px_#10b981] rotate-45" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-white whitespace-nowrap font-display">Qualified Meetings</span>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="flex h-2 w-2 relative shrink-0">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                        </span>
                                        <span className="text-xs text-emerald-400 whitespace-nowrap font-medium">Booked</span>
                                    </div>
                                </div>
                            </div>
                        </FloatCard>

                    </div>
                </motion.div>
            </div>

            {/* ── Bottom fade into next section ─────────────────────── */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, transparent, #030308)",
                }}
            />
        </section>
    );
}
