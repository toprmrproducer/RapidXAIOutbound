"use client";

import React from "react";
import { motion } from "framer-motion";

export interface CallEntry {
    city: string;
    type: string;
    language: string;
    duration: string;
    timeAgo: string;
    status: "Resolved" | "Booked" | "Escalated" | string;
}

function getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
        case "resolved":
            return "#10B981";
        case "booked":
        case "meeting booked":
        case "sale completed":
            return "#6C47D9";
        case "escalated":
        case "escalated to human":
            return "#F59E0B";
        default:
            return "#94A3B8";
    }
}

function getStatusBg(status: string): string {
    switch (status.toLowerCase()) {
        case "resolved":
            return "rgba(16,185,129,0.1)";
        case "booked":
        case "meeting booked":
        case "sale completed":
            return "rgba(108,71,217,0.12)";
        case "escalated":
        case "escalated to human":
            return "rgba(245,158,11,0.12)";
        default:
            return "rgba(148,163,184,0.1)";
    }
}

const AudioWaveIcon = () => (
    <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
    >
        <path d="M12 2v20M17 6v12M7 6v12M22 10v4M2 10v4" />
    </svg>
);

interface LiveCallTickerProps {
    calls?: CallEntry[];
    className?: string;
}

export default function LiveCallTicker({
    calls = RAPIDX_CALLS,
    className = "",
}: LiveCallTickerProps) {
    // 3× duplicate for seamless loop on all screen widths
    const tickerData = [...calls, ...calls, ...calls];

    return (
        <div className={`relative w-full overflow-hidden py-3 ${className}`}>
            {/* Edge fade masks */}
            <div
                className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to right, #ffffff 0%, transparent 100%)",
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to left, #ffffff 0%, transparent 100%)",
                }}
            />

            <motion.div
                className="flex w-max"
                style={{ gap: "16px" }}
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{
                    duration: 150,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {tickerData.map((call, idx) => {
                    const statusColor = getStatusColor(call.status);
                    const statusBg = getStatusBg(call.status);
                    return (
                        <div
                            key={`${call.city}-${idx}`}
                            className="flex items-center gap-3 whitespace-nowrap"
                            style={{
                                background: "rgba(249,249,251,0.8)",
                                border: "1px solid #E4E4E7",
                                borderRadius: "9999px",
                                padding: "8px 16px 8px 10px",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            {/* Avatar */}
                            <div
                                className="flex items-center justify-center shrink-0 text-white"
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #6C47D9, #A78BFA)",
                                }}
                            >
                                <AudioWaveIcon />
                            </div>

                            {/* Call info */}
                            <span
                                className="text-[#18181B] font-semibold"
                                style={{ fontSize: 13 }}
                            >
                                {call.city}
                            </span>
                            <span style={{ color: "#D4D4D8", fontSize: 10 }}>|</span>
                            <span style={{ color: "#71717A", fontSize: 12 }}>{call.type}</span>
                            <span style={{ color: "#D4D4D8", fontSize: 10 }}>|</span>
                            <span style={{ color: "#71717A", fontSize: 12 }}>
                                {call.language}
                            </span>
                            <span style={{ color: "#E4E4E7", fontSize: 10 }}>·</span>
                            <span style={{ color: "#A1A1AA", fontSize: 11 }}>
                                {call.duration}
                            </span>
                            <span style={{ color: "#E4E4E7", fontSize: 10 }}>·</span>
                            <span style={{ color: "#A1A1AA", fontSize: 11 }}>
                                {call.timeAgo}
                            </span>

                            {/* Status badge */}
                            <div
                                className="flex items-center gap-1.5 ml-1"
                                style={{
                                    background: statusBg,
                                    borderRadius: "9999px",
                                    padding: "3px 10px",
                                }}
                            >
                                <div
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        backgroundColor: statusColor,
                                        boxShadow: `0 0 6px ${statusColor}`,
                                    }}
                                />
                                <span
                                    className="font-semibold"
                                    style={{ color: statusColor, fontSize: 11 }}
                                >
                                    {call.status}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

/* ── Default RapidXAI-themed call data ── */
export const RAPIDX_CALLS: CallEntry[] = [
    {
        city: "Mumbai",
        type: "Inbound",
        language: "Hindi",
        duration: "3m 45s",
        timeAgo: "1m ago",
        status: "Booked",
    },
    {
        city: "Bengaluru",
        type: "Outbound SDR",
        language: "English",
        duration: "2m 12s",
        timeAgo: "3m ago",
        status: "Resolved",
    },
    {
        city: "Delhi",
        type: "Lead Qualify",
        language: "Hindi",
        duration: "4m 58s",
        timeAgo: "5m ago",
        status: "Booked",
    },
    {
        city: "Hyderabad",
        type: "Follow-up",
        language: "Telugu",
        duration: "1m 30s",
        timeAgo: "7m ago",
        status: "Resolved",
    },
    {
        city: "Pune",
        type: "Inbound",
        language: "Marathi",
        duration: "6m 20s",
        timeAgo: "9m ago",
        status: "Escalated",
    },
    {
        city: "Chennai",
        type: "Demo Book",
        language: "Tamil",
        duration: "3m 02s",
        timeAgo: "11m ago",
        status: "Booked",
    },
    {
        city: "Ahmedabad",
        type: "Outbound SDR",
        language: "Gujarati",
        duration: "2m 40s",
        timeAgo: "14m ago",
        status: "Resolved",
    },
    {
        city: "Kolkata",
        type: "Re-engagement",
        language: "Bengali",
        duration: "5m 11s",
        timeAgo: "17m ago",
        status: "Booked",
    },
    {
        city: "Jaipur",
        type: "Lead Qualify",
        language: "Hindi",
        duration: "2m 55s",
        timeAgo: "20m ago",
        status: "Resolved",
    },
    {
        city: "Surat",
        type: "Inbound",
        language: "Gujarati",
        duration: "1m 48s",
        timeAgo: "22m ago",
        status: "Escalated",
    },
];
