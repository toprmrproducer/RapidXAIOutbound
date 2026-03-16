"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const writtenTestimonials = [
    {
        quote: "We replaced 4 telecallers with one RapidXAI agent. Our lead conversion went up 40% in the first month because the AI literally calls them back in 2 minutes.",
        name: "Rohan K.",
        role: "Real Estate Developer",
    },
    {
        quote: "I was paying ₹15/min to my previous agency. RapidXAI dropped it to ₹3.5, and the voice quality is actually better. No brainer.",
        name: "Sneha M.",
        role: "E-Commerce Founder",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E]">
            <div className="max-w-[1100px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#7C3AED" }}>
                        PROOF
                    </p>
                    <h2
                        className="font-bold text-white font-display tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        Don't Take Our Word For It.
                    </h2>
                </motion.div>

                {/* 3 Video Placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[9/16]"
                            style={{ border: "1px solid #1E1E2E", background: "#0F0F14" }}
                        >
                            {/* Dummy Image Placeholder bg */}
                            <div className="absolute inset-0 bg-[#0F0F14]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
                                >
                                    <Play fill="white" className="text-white ml-1" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2 Written Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {writtenTestimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            className="rounded-2xl p-8 flex flex-col justify-between"
                            style={{ background: "#0F0F14", border: "1px solid #1E1E2E" }}
                        >
                            <p className="text-[16px] leading-relaxed mb-8" style={{ color: "#D1D5DB" }}>
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="font-semibold text-white text-[15px]">{t.name}</p>
                                <p style={{ color: "#9CA3AF", fontSize: "14px" }}>{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
