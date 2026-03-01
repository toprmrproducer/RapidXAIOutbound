"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface SecurityFeature {
    text: string;
    x: number;
    y: number;
    delay: number;
    floatDur: number;
    side: "left" | "right";
}

const FEATURES: SecurityFeature[] = [
    { text: "SOC2 Type II Ready", x: -180, y: -85, delay: 0.05, floatDur: 3.6, side: "left" },
    { text: "AES-256 At-Rest Encryption", x: -210, y: 0, delay: 0.15, floatDur: 4.2, side: "left" },
    { text: "GDPR Compliant", x: -180, y: 85, delay: 0.25, floatDur: 3.8, side: "left" },
    { text: "VAPT & Pen Testing", x: 180, y: -85, delay: 0.35, floatDur: 4.0, side: "right" },
    { text: "Role-Based Access Control", x: 210, y: 0, delay: 0.45, floatDur: 4.6, side: "right" },
    { text: "TLS 1.2+ In-Transit", x: 180, y: 85, delay: 0.55, floatDur: 3.3, side: "right" },
];

export default function SecurityOrbit() {
    return (
        <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{ minHeight: 340 }}
        >
            {/* Subtle circuit grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(108,71,217,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(108,71,217,0.06) 1px, transparent 1px)
          `,
                    backgroundSize: "52px 52px",
                }}
            />

            {/* Outer ambient glow */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: 480,
                    height: 480,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(108,71,217,0.07) 0%, transparent 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Rotating outer ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{
                    width: 200,
                    height: 200,
                    border: "1px solid rgba(108,71,217,0.18)",
                    borderRadius: "50%",
                }}
            >
                {/* Ring tick marks */}
                {[0, 90, 180, 270].map((deg) => (
                    <div
                        key={deg}
                        className="absolute"
                        style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#7c6af5",
                            opacity: 0.6,
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${deg}deg) translateY(-100px) translate(-50%, -50%)`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Inner dashed counter-rotating ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{
                    width: 140,
                    height: 140,
                    border: "1px dashed rgba(124,106,245,0.2)",
                    borderRadius: "50%",
                }}
            />

            {/* Central lock / shield node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute z-20 flex items-center justify-center"
                style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    background:
                        "linear-gradient(145deg, rgba(237,233,254,0.9), rgba(255,255,255,0.7))",
                    border: "1.5px solid rgba(109,86,235,0.35)",
                    boxShadow:
                        "0 0 0 6px rgba(109,86,235,0.06), 0 8px 32px rgba(109,86,235,0.2)",
                    backdropFilter: "blur(12px)",
                }}
            >
                {/* Shield SVG */}
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6d56eb"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>

                {/* Pulse ring */}
                <motion.div
                    animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-[18px] border-2 pointer-events-none"
                    style={{ borderColor: "rgba(109,86,235,0.5)" }}
                />
            </motion.div>

            {/* Feature badges */}
            {FEATURES.map((node, i) => {
                const angle = Math.atan2(node.y, node.x) * (180 / Math.PI);
                const dist = Math.sqrt(node.x * node.x + node.y * node.y);

                return (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: `translate(calc(-50% + ${node.x}px), calc(-50% + ${node.y}px))`,
                        }}
                    >
                        {/* Connector line rendered in SVG */}
                        <svg
                            className="absolute pointer-events-none overflow-visible"
                            style={{
                                top: "50%",
                                left: "50%",
                                width: 1,
                                height: 1,
                                transform: `translate(${-node.x}px, ${-node.y}px) rotate(${angle}deg)`,
                            }}
                        >
                            <motion.line
                                x1="0"
                                y1="0"
                                x2={dist - 70}
                                y2="0"
                                stroke="url(#lg)"
                                strokeWidth="1"
                                strokeDasharray="3 5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: node.delay + 0.3 }}
                            />
                            <defs>
                                <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#7c6af5" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#7c6af5" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* The badge */}
                        <motion.div
                            initial={{ opacity: 0, x: node.side === "left" ? -18 : 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: node.delay, duration: 0.55, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: node.floatDur,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="flex items-center gap-2.5 whitespace-nowrap"
                                style={{
                                    background: "rgba(255,255,255,0.85)",
                                    border: "1px solid rgba(109,86,235,0.18)",
                                    borderRadius: 9999,
                                    padding: "8px 14px",
                                    backdropFilter: "blur(10px)",
                                    boxShadow:
                                        "0 2px 16px rgba(109,86,235,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                                }}
                            >
                                {/* Check indicator */}
                                <div
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #6d56eb, #a78bfa)",
                                        boxShadow: "0 0 8px rgba(109,86,235,0.4)",
                                    }}
                                >
                                    <svg
                                        width="9"
                                        height="9"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 6l3 3 5-5" />
                                    </svg>
                                </div>

                                {/* Text */}
                                <span
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                        color: "#18181B",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {node.text}
                                </span>

                                {/* Status sub-label */}
                                <div className="flex items-center gap-1 ml-0.5">
                                    <div
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: "#10B981",
                                            boxShadow: "0 0 5px #10B981",
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: 9,
                                            fontWeight: 700,
                                            color: "#10B981",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Active
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
