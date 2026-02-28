"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Zap } from "lucide-react";

/* ── Deterministic bar data (no random on each render / SSR safe) ── */
const WAVE_BARS = Array.from({ length: 40 }, (_, i) => {
    const norm = i / 39;
    const env = Math.sin(norm * Math.PI);
    const pr1 = ((i * 1234567) % 100) / 100;
    const pr2 = ((i * 7654321) % 100) / 100;
    const baseH = 5 + env * 32 + pr1 * 4;
    const peakH = baseH * (1.25 + pr2 * 0.5);
    const delay = Math.sin(i * 0.3) * 0.4;
    const dur = 0.58 + pr1 * 0.22;
    return { baseH, peakH, delay, dur };
});

function VoiceWaveform() {
    return (
        <div className="flex flex-col items-center gap-2">
            {/* Glow wrapper */}
            <div style={{ filter: "drop-shadow(0 0 10px rgba(124,106,245,0.25))" }}>
                <svg
                    width="280"
                    height="52"
                    viewBox="0 0 280 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#9b8af8" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#7c6af5" stopOpacity="0.25" />
                        </linearGradient>
                    </defs>
                    {WAVE_BARS.map((bar, i) => (
                        <motion.rect
                            key={i}
                            x={i * 7}
                            rx={1.5}
                            width={3}
                            fill="url(#waveGrad)"
                            animate={{
                                height: [bar.baseH, bar.peakH, bar.baseH],
                                y: [52 - bar.baseH, 52 - bar.peakH, 52 - bar.baseH],
                            }}
                            transition={{
                                duration: bar.dur,
                                delay: bar.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "loop",
                            }}
                        />
                    ))}
                </svg>
            </div>
            {/* Listening label */}
            <div className="flex items-center gap-2.5">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#E4E4E7]" />
                <motion.span
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#7c6af5]"
                >
                    AI Listening…
                </motion.span>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#E4E4E7]" />
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative pt-36 pb-24 overflow-hidden bg-[#F5F6F7] bg-dot-grid min-h-screen flex flex-col items-center justify-center">

            {/* Fade over dot grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6F7] via-transparent to-[#F5F6F7] pointer-events-none z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col items-center text-center">

                {/* Status pill */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-[#E4E4E7] shadow-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-xs font-medium text-[#71717A]">
                        Most cost-effective AI solution in India
                    </span>
                    <ArrowRight size={11} className="text-[#A1A1AA]" />
                </motion.div>

                {/* Headline + float cards */}
                <div className="relative w-full max-w-5xl mx-auto">

                    {/* LEFT float card — Sales metric */}
                    <div className="hidden lg:block absolute -left-16 top-6 animate-float-left z-0">
                        <div
                            className="rounded-[1.5rem] p-5 w-60 text-left"
                            style={{
                                background: "linear-gradient(180deg, #ffffff, #f9f9f9)",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.09)",
                                border: "1px solid #E4E4E7",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className="relative flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                                    style={{ background: "linear-gradient(135deg, #34d399, #10b981)", boxShadow: "0 3px 8px rgba(16,185,129,0.35)" }}
                                >
                                    <svg width={12} fill="#fff" height={12} viewBox="0 0 1792 1792">
                                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                                    </svg>
                                </span>
                                <p className="text-sm font-semibold text-[#1c1c1e]">Sales</p>
                                <div className="ml-auto flex items-center gap-0.5 text-emerald-700 text-xs font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height={13} width={13}>
                                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
                                    </svg>
                                    20%
                                </div>
                            </div>
                            <p className="font-display text-[2rem] font-bold text-[#111827] leading-none mb-4" style={{ letterSpacing: "-0.03em" }}>
                                39,500
                            </p>
                            <div className="w-full h-2 rounded-full bg-[#e5e5ea] overflow-hidden">
                                <div className="h-full rounded-full" style={{ width: "76%", background: "linear-gradient(90deg, #34d399, #10b981)" }} />
                            </div>
                            <p className="text-[10px] text-[#A1A1AA] mt-2">Revenue this month</p>
                        </div>
                    </div>

                    {/* RIGHT float card — Outbound Swarm */}
                    <div className="hidden lg:block absolute -right-16 top-14 animate-float-right z-0">
                        <div
                            className="rounded-[1.5rem] p-5 w-60 text-left"
                            style={{
                                background: "linear-gradient(180deg, #ffffff, #f9f9f9)",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.09)",
                                border: "1px solid #E4E4E7",
                            }}
                        >
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                                    <Zap size={13} className="text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#18181B]">Outbound Swarm</p>
                                    <p className="text-[10px] text-[#A1A1AA]">Running now</p>
                                </div>
                            </div>
                            <div className="flex gap-1 items-end h-10 mb-2">
                                {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-sm"
                                        style={{ height: `${h}%`, background: "linear-gradient(180deg, #34d399, #10b981)" }}
                                    />
                                ))}
                            </div>
                            <p className="text-[10px] text-[#A1A1AA]">14,293 contacts reached today</p>
                        </div>
                    </div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative z-10 font-display text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#18181B] leading-tight md:leading-[0.95] mb-8 mx-auto max-w-4xl"
                    >
                        AI Receptionists
                        <br />
                        That Book{" "}
                        <span className="text-gradient-violet">Appointments.</span>
                    </motion.h1>
                </div>

                {/* Sub-heading */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-[#71717A] text-lg max-w-xl mb-10 leading-relaxed"
                >
                    Enterprise-grade AI inbound and outbound voice agents. Your always-on SDR and receptionist — built for speed, security, and scale.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-10"
                >
                    <button className="btn-primary">
                        Book a Call
                        <ArrowRight size={15} className="-rotate-45" />
                    </button>
                    <button className="btn-secondary">
                        <PhoneCall size={14} className="text-[#7c6af5]" />
                        First 1000 mins FREE
                    </button>
                </motion.div>

                {/* Voice waveform */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <VoiceWaveform />
                </motion.div>

                {/* Mobile float cards — hidden on lg+ (desktop uses absolute positioned versions) */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="lg:hidden flex flex-row gap-3 mt-8 w-full max-w-xs mx-auto"
                >
                    {/* Sales metric card */}
                    <div className="flex-1 rounded-[1.25rem] p-4 text-left" style={{ background: "linear-gradient(180deg,#fff,#f9f9f9)", boxShadow: "0 6px 18px rgba(0,0,0,0.08)", border: "1px solid #E4E4E7" }}>
                        <div className="flex items-center gap-1.5 mb-2">
                            <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#34d399,#10b981)" }}>
                                <svg width={9} fill="#fff" height={9} viewBox="0 0 1792 1792"><path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" /></svg>
                            </span>
                            <p className="text-[11px] font-semibold text-[#1c1c1e]">Sales</p>
                            <span className="ml-auto text-emerald-700 text-[10px] font-semibold">↑20%</span>
                        </div>
                        <p className="font-display text-xl font-bold text-[#111827] leading-none mb-2" style={{ letterSpacing: "-0.03em" }}>39,500</p>
                        <div className="w-full h-1.5 rounded-full bg-[#e5e5ea] overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: "76%", background: "linear-gradient(90deg,#34d399,#10b981)" }} />
                        </div>
                        <p className="text-[9px] text-[#A1A1AA] mt-1.5">Revenue this month</p>
                    </div>

                    {/* Outbound Swarm card */}
                    <div className="flex-1 rounded-[1.25rem] p-4 text-left" style={{ background: "linear-gradient(180deg,#fff,#f9f9f9)", boxShadow: "0 6px 18px rgba(0,0,0,0.08)", border: "1px solid #E4E4E7" }}>
                        <div className="flex items-center gap-1.5 mb-2">
                            <div className="w-6 h-6 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                                <Zap size={10} className="text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[11px] font-semibold text-[#18181B] leading-none">Outbound</p>
                                <p className="text-[9px] text-[#A1A1AA]">Running now</p>
                            </div>
                        </div>
                        <div className="flex gap-0.5 items-end h-8 mb-1.5">
                            {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: "linear-gradient(180deg,#34d399,#10b981)" }} />
                            ))}
                        </div>
                        <p className="text-[9px] text-[#A1A1AA]">14,293 contacts today</p>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 text-xs text-[#A1A1AA] tracking-wide"
                >
                    SOC2 compliant · 99.9% uptime · {"<"}1s response latency
                </motion.p>

            </div>
        </section>
    );
}
