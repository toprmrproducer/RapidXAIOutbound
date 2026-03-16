"use client";

import { motion } from "framer-motion";
import { Mic2, PhoneCall, Zap, FileText } from "lucide-react";

const features = [
    {
        icon: Mic2,
        title: "Speaks Like a Human",
        desc: "Custom voices in Hindi, English, and Hinglish — scripted to sound exactly like your brand.",
    },
    {
        icon: PhoneCall,
        title: "Inbound + Outbound",
        desc: "Handles queries coming in and hunts leads going out — on one unified platform.",
    },
    {
        icon: Zap,
        title: "Live in 3 Days",
        desc: "Not weeks. Not months. Your agent is deployed and calling within 72 hours.",
    },
    {
        icon: FileText,
        title: "Full Transcripts + Logs",
        desc: "Every call recorded, transcribed, and logged so nothing slips through the cracks.",
    },
];

export default function ProductShowcase() {
    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E] relative overflow-hidden">
            {/* Faint purple radial bg */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-[1100px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p
                        className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
                        style={{ color: "#7C3AED" }}
                    >
                        MEET RAPIDXAI
                    </p>
                    <h2
                        className="font-bold text-white font-display tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        Your AI Voice Agent. Always On.{" "}
                        <span
                            style={{
                                background: "linear-gradient(90deg, #A855F7, #7C3AED)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Never Late.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feat, i) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={feat.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                whileHover={{
                                    borderColor: "rgba(124,58,237,0.5)",
                                    boxShadow: "0 0 0 1px rgba(124,58,237,0.4), 0 8px 32px rgba(124,58,237,0.08)",
                                    y: -2,
                                }}
                                className="rounded-2xl p-9 flex flex-col transition-all duration-200 cursor-default"
                                style={{
                                    background: "rgba(124,58,237,0.03)",
                                    border: "1px solid #1E1E2E",
                                }}
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                                    style={{ background: "rgba(124,58,237,0.12)" }}
                                >
                                    <Icon size={20} style={{ color: "#A855F7" }} />
                                </div>
                                <h3
                                    className="text-white font-semibold mb-3"
                                    style={{ fontSize: "20px", lineHeight: "1.3" }}
                                >
                                    {feat.title}
                                </h3>
                                <p style={{ color: "#9CA3AF", fontSize: "15px", lineHeight: "1.7" }}>
                                    {feat.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
