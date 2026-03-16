"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const demos = [
    { industry: "REAL ESTATE", title: "Inbound Qualifier", duration: "1:24" },
    { industry: "EDUCATION", title: "Outbound Follow-Up", duration: "0:58" },
    { industry: "E-COMMERCE", title: "Customer Support", duration: "1:42" },
    { industry: "HEALTHCARE", title: "Appointment Setter", duration: "1:15" },
];

const voices = [
    { name: "Priya", subtitle: "Warm & conversational · Hindi/English" },
    { name: "Arjun", subtitle: "Confident & professional · English" },
    { name: "Meera", subtitle: "Friendly & soft · Hindi" },
    { name: "Dev", subtitle: "Assertive & sharp · Hinglish" },
];

export default function DemoSection() {
    const [activeVoice, setActiveVoice] = useState(0);

    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E]">
            <div className="max-w-[1100px] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#7C3AED" }}>
                        HEAR IT FOR YOURSELF
                    </p>
                    <h2 className="font-bold text-white font-display tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                        RapidXAI in Action.
                    </h2>
                    <p style={{ color: "#9CA3AF", fontSize: "17px" }}>
                        Don't read about it. Listen.
                    </p>
                </motion.div>

                {/* 2x2 Grid of Demos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
                    {demos.map((demo, i) => (
                        <motion.div
                            key={demo.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            whileHover={{ borderColor: "#7C3AED", backgroundColor: "rgba(124,58,237,0.04)" }}
                            className="rounded-2xl p-7 flex items-center justify-between transition-colors duration-200 cursor-pointer group"
                            style={{ background: "#0F0F14", border: "1px solid #1E1E2E", height: "140px" }}
                        >
                            <div className="flex flex-col items-start gap-4">
                                <span
                                    className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                                    style={{ background: "rgba(124,58,237,0.12)", color: "#A855F7" }}
                                >
                                    {demo.industry}
                                </span>
                                <div className="text-white font-semibold" style={{ fontSize: "18px" }}>
                                    {demo.title}
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-105"
                                    style={{ background: "#7C3AED", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
                                >
                                    <Play size={20} fill="white" className="text-white ml-1" />
                                </div>
                                <span style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: 500 }}>
                                    {demo.duration}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Voice Picker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 mb-20"
                >
                    <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "4px" }}>
                        Pick a voice. Hear the difference.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {voices.map((voice, idx) => (
                            <button
                                key={voice.name}
                                onClick={() => setActiveVoice(idx)}
                                className="px-5 py-2 rounded-full font-medium transition-colors"
                                style={{
                                    fontSize: "14px",
                                    border: activeVoice === idx ? "1px solid #7C3AED" : "1px solid #2D2D3D",
                                    background: activeVoice === idx ? "rgba(124,58,237,0.15)" : "transparent",
                                    color: activeVoice === idx ? "#F8F8FF" : "#9CA3AF",
                                }}
                            >
                                {voice.name}
                            </button>
                        ))}
                    </div>
                    <p style={{ color: "#9CA3AF", fontSize: "13px", marginTop: "4px" }}>
                        {voices[activeVoice].subtitle}
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <p className="text-[17px] text-white/90">
                        Ready to deploy one of these voices in your business?
                    </p>
                    <a href="https://calendly.com/shreyasrajsony11/30min" target="_blank" rel="noopener noreferrer">
                        <button
                            className="px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:scale-[1.02]"
                            style={{
                                background: "#7C3AED",
                                boxShadow: "0 0 24px rgba(124,58,237,0.4)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Jump on a call →
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
