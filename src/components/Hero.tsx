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

/* VoiceWaveform removed — was spawning 48 Framer Motion infinite loops */

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
                    preload="metadata"
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
                            background: "rgba(124,58,237,0.15)",
                            border: "1px solid rgba(124,58,237,0.4)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                        </span>
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#A855F7" }}>
                            💥 THE MARKET CHARGES ₹10/MIN. WE CHARGE ₹3.5.
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
                            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                            color: "#ffffff",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Stop Paying for AI{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #A855F7, #7C3AED)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            That's Been Robbing You.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.22 }}
                        className="text-base md:text-lg max-w-2xl mb-11 leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Inter', sans-serif" }}
                    >
                        RapidXAI gives every Indian business enterprise-grade AI voice agents — inbound, outbound, 24/7 — at the fairest pricing in the market.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.34 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-14"
                    >
                        {/* Primary */}
                        <a href="#pricing">
                            <button
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:scale-[1.02]"
                                style={{
                                    background: "#7C3AED",
                                    boxShadow: "0 0 24px rgba(124,58,237,0.4)",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                See Pricing →
                            </button>
                        </a>

                        {/* Secondary ghost */}
                        <span className="text-sm font-medium text-white/60 mx-1">or</span>
                        <button
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200"
                            style={{
                                background: "rgba(255,255,255,0.10)",
                                border: "1px solid rgba(255,255,255,0.28)",
                                backdropFilter: "blur(8px)",
                                fontFamily: "'Inter', sans-serif",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(124,58,237,0.12)")}
                            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
                        >
                            <PhoneCall size={14} style={{ color: "#c4b5fd" }} />
                            Book a Free Call With Shreyas
                        </button>
                    </motion.div>

                    {/* Trust line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75 }}
                        className="mt-10 text-[12px] md:text-[13px] tracking-wide"
                        style={{ color: "rgba(255,255,255,0.50)", fontFamily: "'Inter', sans-serif" }}
                    >
                        Starting at ₹7,000/month{" "}
                        <span style={{ color: "#7C3AED" }}>·</span>{" "}
                        1,000 minutes included{" "}
                        <span style={{ color: "#7C3AED" }}>·</span>{" "}
                        ₹3.5/min after that{" "}
                        <span style={{ color: "#7C3AED" }}>·</span>{" "}
                        No hidden fees. No BS.
                    </motion.p>
                </div>
            </section>
        </>
    );
}
