"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";

/* ── Deterministic bars (SSR-safe) ── */
const BARS = Array.from({ length: 32 }, (_, i) => {
    const pr = ((i * 1234567) % 100) / 100;
    const pr2 = ((i * 7654321) % 100) / 100;
    return {
        duration: 0.38 + pr * 0.44,
        delay: pr2 * 0.55,
    };
});

interface WaveformCardProps {
    audioSrc?: string;
    /** Quote displayed in the card center */
    quote?: string;
    /** Bottom pill label */
    tag?: string;
    /** Brand name top-right */
    brandName?: string;
}

export default function WaveformCard({
    audioSrc,
    quote = "You can't tell it apart from a real voice agent.",
    tag = "RapidXAI Voice · Sub-second latency",
    brandName = "RapidXAI",
}: WaveformCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => { });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            className="relative flex flex-col items-center justify-center overflow-hidden select-none"
            style={{
                width: "100%",
                maxWidth: 520,
                aspectRatio: "520 / 300",
                borderRadius: 24,
                boxShadow:
                    "0 0 0 1px rgba(139,103,196,0.25), 0 0 60px rgba(139,103,196,0.35), 0 24px 60px -12px rgba(0,0,0,0.22)",
                background:
                    "linear-gradient(-45deg, #5e35b1, #7B5EA7, #9B6EDE, #b39ddb, #7c6af5)",
                backgroundSize: "500% 500%",
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 7,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            {/* Subtle inner grain overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }}
            />

            {/* Top-right brand label */}
            <div
                className="absolute top-5 right-16 flex items-center gap-1.5 z-10"
                style={{ color: "rgba(255,255,255,0.85)" }}
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span
                    style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                    }}
                >
                    {brandName}
                </span>
            </div>

            {/* Audio control button */}
            <button
                onClick={toggleAudio}
                className="absolute top-4 right-4 z-20 flex items-center justify-center transition-all"
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.35)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                {isPlaying ? (
                    /* Pause icon */
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    /* Speaker icon */
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                )}
            </button>

            {/* Main quote — centered */}
            <h2
                className="text-white text-center relative z-10"
                style={{
                    fontSize: "clamp(14px, 2.2vw, 20px)",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    padding: "0 40px",
                    marginBottom: 24,
                    textShadow: "0 2px 16px rgba(0,0,0,0.25)",
                }}
            >
                "{quote}"
            </h2>

            {/* Live waveform bars */}
            <div
                className="flex items-center relative z-10"
                style={{ gap: 3, height: 44 }}
            >
                {BARS.map((bar, i) => (
                    <motion.div
                        key={i}
                        style={{
                            width: 3,
                            borderRadius: 9999,
                            background: "rgba(255,255,255,0.72)",
                        }}
                        animate={{
                            height: isPlaying ? [6, 36 + ((i * 7) % 18), 10, 42, 6] : 5,
                            opacity: isPlaying ? [0.5, 1, 0.6, 1, 0.5] : 0.35,
                        }}
                        transition={{
                            duration: bar.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: bar.delay,
                        }}
                    />
                ))}
            </div>

            {/* Bottom pill badge */}
            <div
                className="absolute bottom-4 z-10 flex items-center gap-2"
                style={{
                    backdropFilter: "blur(12px)",
                    background: "rgba(0,0,0,0.42)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 9999,
                    padding: "5px 14px",
                }}
            >
                <div
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: isPlaying ? "#10B981" : "rgba(255,255,255,0.4)",
                        boxShadow: isPlaying ? "0 0 8px #10B981" : "none",
                        transition: "all 0.3s",
                    }}
                />
                <span
                    style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                    }}
                >
                    {tag}
                </span>
            </div>

            {/* Hidden audio */}
            {audioSrc && (
                <audio
                    ref={audioRef}
                    src={audioSrc}
                    onEnded={() => setIsPlaying(false)}
                />
            )}
        </motion.div>
    );
}
