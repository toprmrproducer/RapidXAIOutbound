"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

/* ── Typewriter for the last word ── */
const WORDS = ["Growth.", "Revenue.", "Scale.", "Results."];

function TypewriterWord() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = WORDS[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % WORDS.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, wordIndex]);

    return (
        <span
            className="inline-block"
            style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #7c6af5 60%, #6d28d9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
        >
            {displayed}
            <span
                className="inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-sm"
                style={{
                    background: "#a78bfa",
                    animation: "blink 1s step-end infinite",
                    verticalAlign: "middle",
                }}
            />
        </span>
    );
}

/* ── Deterministic waveform bars ── */
const WAVE_BARS = Array.from({ length: 48 }, (_, i) => {
    const norm = i / 47;
    const env = Math.sin(norm * Math.PI);
    const pr1 = ((i * 1234567) % 100) / 100;
    const pr2 = ((i * 7654321) % 100) / 100;
    const baseH = 4 + env * 28 + pr1 * 4;
    const peakH = baseH * (1.3 + pr2 * 0.5);
    return { baseH, peakH, delay: Math.sin(i * 0.3) * 0.4, dur: 0.55 + pr1 * 0.25 };
});

function VoiceWaveform() {
    return (
        <div className="flex flex-col items-center gap-3">
            <div style={{ filter: "drop-shadow(0 0 14px rgba(167,139,250,0.55))" }}>
                <svg width="300" height="56" viewBox="0 0 300 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="wg2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="1" />
                            <stop offset="100%" stopColor="#7c6af5" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    {WAVE_BARS.map((b, i) => (
                        <motion.rect
                            key={i}
                            x={i * 6.25}
                            rx={2}
                            width={3.5}
                            fill="url(#wg2)"
                            animate={{ height: [b.baseH, b.peakH, b.baseH], y: [56 - b.baseH, 56 - b.peakH, 56 - b.baseH] }}
                            transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
                        />
                    ))}
                </svg>
            </div>
            <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50"
            >
                AI Listening…
            </motion.span>
        </div>
    );
}

export default function Hero() {
    return (
        <>
            {/* Blink keyframe */}
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-28">

                {/* ── Video ── */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    suppressHydrationWarning
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/hero-bg.mp4"
                />

                {/* ── Darkened overlay (approx 35%) with vignette at edges ── */}
                <div
                    className="absolute inset-0 z-[1] pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(5,0,20,0.35) 40%, rgba(5,0,20,0.65) 100%)",
                    }}
                />

                {/* ── Bottom fade into next section ── */}
                <div
                    className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none"
                    style={{ height: "160px", background: "linear-gradient(to bottom, transparent, #0a0014)" }}
                />

                {/* ── Content ── */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-9 inline-flex items-center gap-2.5 px-5 py-2 rounded-full"
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                        </span>
                        <span className="text-xs font-semibold text-white/80 tracking-wide">
                            India's Most Cost-Effective Enterprise AI Voice
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-7 leading-[1.05]"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                            color: "#ffffff",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Human-Like Voice AI,
                        <br />
                        Built for{" "}
                        <TypewriterWord />
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.22 }}
                        className="text-base md:text-lg max-w-xl mb-11 leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Inter', sans-serif" }}
                    >
                        Enterprise-grade AI voice agents that answer calls, qualify leads, and book meetings
                        automatically. Your always-on SDR and receptionist — built for reliability, security,
                        and real growth.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.34 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-14"
                    >
                        {/* Primary */}
                        <button
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200"
                            style={{
                                background: "#18181B",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.45)",
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                letterSpacing: "-0.01em",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "#09090B")}
                            onMouseLeave={e => (e.currentTarget.style.background = "#18181B")}
                        >
                            Book a Call
                            <ArrowUpRight size={15} />
                        </button>

                        {/* Secondary ghost */}
                        <button
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200"
                            style={{
                                background: "rgba(255,255,255,0.10)",
                                border: "1px solid rgba(255,255,255,0.28)",
                                backdropFilter: "blur(8px)",
                                fontFamily: "'Inter', sans-serif",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
                        >
                            <PhoneCall size={14} style={{ color: "#c4b5fd" }} />
                            First 1000 mins FREE
                        </button>
                    </motion.div>

                    {/* Trust line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75 }}
                        className="mt-10 text-[11px] tracking-widest uppercase"
                        style={{ color: "rgba(255,255,255,0.30)", fontFamily: "'Inter', sans-serif" }}
                    >
                        SOC2-ready · 99.9% uptime · Sub-second response
                    </motion.p>
                </div>
            </section>
        </>
    );
}
