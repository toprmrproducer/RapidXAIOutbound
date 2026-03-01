"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall, Zap, ShieldCheck } from "lucide-react";
import MarqueeTagStrip from "./MarqueeTagStrip";

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
    const ROLES = ["Sales.", "Support.", "Growth.", "India."];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const activeWord = ROLES[roleIndex];
        let timeout: NodeJS.Timeout;

        if (isDeleting) {
            if (displayText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(activeWord.substring(0, displayText.length - 1));
                }, 40); // Fast deletion
            }
        } else {
            if (displayText === activeWord) {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000); // Pause at full word
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(activeWord.substring(0, displayText.length + 1));
                }, 80); // Typing speed
            }
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="relative pt-36 pb-24 overflow-hidden bg-[#F5F6F7] bg-dot-grid min-h-screen flex flex-col items-center justify-start">

            {/* Fade over dot grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6F7] via-transparent to-[#F5F6F7] pointer-events-none z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col items-center text-center mt-8">

                {/* Status pill */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-[#E4E4E7] shadow-sm cursor-pointer hover:shadow-md hover:border-[#D4D4D8] transition-all"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm font-semibold text-[#52525B]">
                        India's Most Cost-Effective Enterprise AI Voice
                    </span>
                    <ArrowRight size={14} className="text-[#A1A1AA] ml-1" />
                </motion.div>

                {/* Headline */}
                <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#18181B] leading-[1.1] mb-6 text-center max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <span>Human-Like Voice AI,</span>
                        <span className="flex items-center justify-center gap-2 sm:gap-3 mt-2">
                            Built for
                            <span className="relative flex items-center justify-start min-w-[130px] sm:min-w-[170px] md:min-w-[260px] text-gradient-violet">
                                <span className="whitespace-pre">{displayText}</span>
                                {/* Blinking cursor */}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="inline-block w-[3px] h-[0.9em] bg-[#7c6af5] ml-1 -mb-1"
                                />
                            </span>
                        </span>
                    </motion.h1>
                </div>

                {/* Sub-heading */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-[#71717A] text-lg max-w-xl mb-10 leading-relaxed"
                >
                    Enterprise-grade AI voice agents that answer calls, qualify leads, and book meetings automatically.
                    Your always-on SDR and receptionist — built for reliability, security, and real growth.
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

                {/* The Central Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, type: "spring", bounce: 0.3 }}
                    className="relative w-full max-w-5xl mx-auto mt-6"
                >
                    {/* Deep ambient glow behind dashboard */}
                    <div className="absolute inset-x-0 -top-10 -bottom-10 bg-[#7c6af5] opacity-[0.08] blur-[80px] rounded-[3rem] pointer-events-none" />

                    <div
                        className="relative w-full p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center overflow-hidden"
                        style={{
                            background: "rgba(255, 255, 255, 0.6)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255, 255, 255, 1)",
                        }}
                    >
                        {/* Voice waveform */}
                        <div className="mb-8 scale-[0.85] md:scale-100 origin-center">
                            <VoiceWaveform />
                        </div>

                        {/* Consolidated Cards */}
                        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                            {/* Sales metric card */}
                            <div className="w-full md:w-[280px] bg-white rounded-2xl p-5 shadow-sm border border-[#E4E4E7] transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="relative flex items-center justify-center w-9 h-9 rounded-[0.8rem] bg-gradient-to-br from-[#34d399] to-[#10b981] shadow-[0_4px_12px_rgba(16,185,129,0.3)] shrink-0">
                                        <svg width={14} fill="#fff" height={14} viewBox="0 0 1792 1792"><path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" /></svg>
                                    </span>
                                    <div className="text-left w-full">
                                        <p className="text-sm font-semibold text-[#18181B] leading-tight flex justify-between">
                                            Sales Captured
                                            <span className="text-emerald-600 text-[11px] font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md">↑ 24%</span>
                                        </p>
                                        <p className="font-display text-2xl font-bold text-[#18181B] leading-none mt-1 tracking-tight">39,500</p>
                                    </div>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-[#F4F4F5] overflow-hidden">
                                    <div className="h-full rounded-full bg-gradient-to-r from-[#34d399] to-[#10b981]" style={{ width: "76%" }} />
                                </div>
                            </div>

                            {/* Outbound Swarm card */}
                            <div className="w-full md:w-[280px] bg-white rounded-2xl p-5 shadow-sm border border-[#E4E4E7] transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-[0.8rem] bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                        <Zap size={15} className="text-indigo-600" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-[#18181B] leading-tight">Outbound Swarm</p>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
                                            </span>
                                            <p className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA]">Active Now</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-end h-[18px]">
                                    {[40, 65, 50, 80, 55, 90, 70, 85, 45, 60, 100, 80].map((h, i) => (
                                        <div key={i} className="flex-1 rounded-[1px] bg-indigo-200" style={{ height: `${h}%` }}>
                                            <div className="w-full bg-indigo-500 rounded-[1px] transition-all" style={{ height: `${h * 0.7}%` }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Security card */}
                            <div className="hidden md:block w-[180px] bg-white rounded-2xl p-5 shadow-sm border border-[#E4E4E7] text-left transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="w-9 h-9 rounded-[0.8rem] bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mb-3">
                                    <ShieldCheck size={16} className="text-slate-600" />
                                </div>
                                <p className="text-sm font-semibold text-[#18181B] mb-1">SOC2 Compliant</p>
                                <p className="text-[11px] text-[#71717A] leading-relaxed">End-to-end encryption for all enterprise voice data.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Capability tag strip (moved to bottom of hero perfectly) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="w-full max-w-4xl mx-auto mt-12 py-6 border-t border-[#E4E4E7]/60"
                >
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] mb-4">Enterprise Capabilities</p>
                    <MarqueeTagStrip
                        speed={28}
                        variant="light"
                        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                </motion.div>

            </div>
        </section>
    );
}
