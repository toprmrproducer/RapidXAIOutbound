"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TagItem {
    label: string;
    icon?: React.ReactNode;
    isLogoOnly?: boolean;
}

interface MarqueeTagStripProps {
    items?: TagItem[];
    speed?: number;
    direction?: "left" | "right";
    /** "dark" = white text on dark bg context, "light" = gray text on light bg */
    variant?: "dark" | "light";
    className?: string;
}

/* ── Shared star icon ── */
const StarIcon = () => (
    <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="#A78BFA"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
    >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
);

export default function MarqueeTagStrip({
    items = RAPIDX_CAPABILITIES,
    speed = 28,
    direction = "left",
    variant = "light",
    className = "",
}: MarqueeTagStripProps) {
    // 3× for seamless loop on any screen width
    const tripled = [...items, ...items, ...items];

    const textColor =
        variant === "dark" ? "rgba(255,255,255,0.72)" : "rgba(82,82,91,0.85)";

    return (
        <div
            className={`relative w-full overflow-hidden py-2 ${className}`}
            style={{
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
        >
            <motion.div
                className="flex items-center w-max"
                animate={{
                    x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {tripled.map((item, i) => (
                    <div
                        key={`${item.label}-${i}`}
                        className="flex items-center shrink-0"
                        style={{ paddingRight: item.isLogoOnly ? 64 : 44 }}
                    >
                        {item.isLogoOnly ? (
                            <div className="flex items-center text-slate-400 opacity-60 hover:opacity-100 transition-opacity duration-300">
                                {item.icon}
                            </div>
                        ) : (
                            <>
                                <div className="mr-2.5">
                                    {item.icon ?? <StarIcon />}
                                </div>
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: textColor,
                                        whiteSpace: "nowrap",
                                        letterSpacing: "0.01em",
                                    }}
                                >
                                    {item.label}
                                </span>
                            </>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

/* ── Default RapidXAI capabilities ── */
export const RAPIDX_CAPABILITIES: TagItem[] = [
    { label: "Real-time Transcription" },
    { label: "Interruption Handling" },
    { label: "Multi-language Support" },
    { label: "CRM Auto-sync" },
    { label: "SOC2-ready" },
    { label: "Sub-second Latency" },
    { label: "Smart Call Routing" },
    { label: "Live Human Handoff" },
    { label: "Custom Knowledge Base" },
    { label: "Calendar Integration" },
    { label: "Loop-free Conversations" },
    { label: "99.9% Uptime" },
];

/* ── Abstracted Brand Logo SVGs ── */
const LogoGroww = () => (
    <svg height="22" viewBox="0 0 110 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5H8v5h3zm4 0v-7h-3v7h3zm4 0v-9h-3v9h3z" />
        <text x="32" y="17" fontWeight="bold" fontSize="17" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">Groww</text>
    </svg>
);

const LogoMeesho = () => (
    <svg height="22" viewBox="0 0 110 24" fill="currentColor">
        <path d="M4 4h16v16H4V4zm4 4v8h2v-6h2v6h2V8H8z" />
        <text x="28" y="17" fontWeight="800" fontSize="16" fontFamily="system-ui, sans-serif" letterSpacing="0.01em">meesho</text>
    </svg>
);

const LogoNykaa = () => (
    <svg height="20" viewBox="0 0 100 24" fill="currentColor">
        <text x="0" y="18" fontWeight="900" fontSize="18" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">NYKAA</text>
    </svg>
);

const LogoBharatPe = () => (
    <svg height="22" viewBox="0 0 120 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
        <text x="30" y="17" fontWeight="800" fontSize="17" fontFamily="system-ui, sans-serif" letterSpacing="-0.03em">BharatPe</text>
    </svg>
);

const LogoRazorpay = () => (
    <svg height="22" viewBox="0 0 120 24" fill="currentColor">
        <path d="M4 22h4l4-10 4 10h4L12 2 4 22z" />
        <text x="28" y="17" fontWeight="700" fontSize="16" fontFamily="system-ui, sans-serif" letterSpacing="-0.01em">Razorpay</text>
    </svg>
);

const LogoOYO = () => (
    <svg height="22" viewBox="0 0 80 24" fill="currentColor">
        <rect width="60" height="22" rx="4" fill="currentColor" fillOpacity="0.15" />
        <text x="30" y="16" fontWeight="900" fontSize="15" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.05em">OYO</text>
    </svg>
);

const LogoCRED = () => (
    <svg height="22" viewBox="0 0 90 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="40 20" />
        <text x="32" y="17" fontWeight="800" fontSize="16" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">CRED</text>
    </svg>
);

const LogoZomato = () => (
    <svg height="22" viewBox="0 0 100 24" fill="currentColor">
        <text x="0" y="18" fontWeight="900" fontSize="20" fontStyle="italic" fontFamily="system-ui, sans-serif" letterSpacing="-0.04em">zomato</text>
    </svg>
);

/* ── Brand/partner variant ── */
export const RAPIDX_BRANDS: TagItem[] = [
    { label: "Groww", isLogoOnly: true, icon: <LogoGroww /> },
    { label: "Meesho", isLogoOnly: true, icon: <LogoMeesho /> },
    { label: "Nykaa", isLogoOnly: true, icon: <LogoNykaa /> },
    { label: "BharatPe", isLogoOnly: true, icon: <LogoBharatPe /> },
    { label: "Razorpay", isLogoOnly: true, icon: <LogoRazorpay /> },
    { label: "OYO", isLogoOnly: true, icon: <LogoOYO /> },
    { label: "CRED", isLogoOnly: true, icon: <LogoCRED /> },
    { label: "Zomato", isLogoOnly: true, icon: <LogoZomato /> },
];
