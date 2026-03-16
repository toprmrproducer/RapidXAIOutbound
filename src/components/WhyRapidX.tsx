"use client";

import { motion } from "framer-motion";

const cards = [
    {
        stat: "₹10",
        headline: "What Others Charge Per Minute",
        desc: "We charge ₹3.5. That's the entire difference.",
    },
    {
        stat: "62%",
        headline: "Of Calls Go Unanswered",
        desc: "Every missed ring is a lead walking to your competitor.",
    },
    {
        stat: "8 Wks",
        headline: "To Deploy With Legacy Platforms",
        desc: "RapidXAI goes live in 3–5 days.",
    },
];

export default function WhyRapidX() {
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
                        WHY BUSINESSES SWITCH TO RAPIDXAI
                    </p>
                    <h2
                        className="font-bold text-white font-display tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        The Market Has Been{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #A855F7, #7C3AED)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Lying to You.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.stat}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            whileHover={{
                                borderColor: "rgba(239,68,68,0.4)",
                                boxShadow: "0 0 0 1px rgba(239,68,68,0.3), 0 8px 32px rgba(239,68,68,0.08)",
                                y: -2,
                            }}
                            className="rounded-2xl p-8 flex flex-col transition-all duration-200 cursor-default"
                            style={{ background: "#0F0F14", border: "1px solid #1E1E2E" }}
                        >
                            <span
                                className="font-black leading-none mb-5 font-display"
                                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#EF4444", letterSpacing: "-0.03em" }}
                            >
                                {card.stat}
                            </span>
                            <h3 className="text-white font-semibold mb-3" style={{ fontSize: "18px" }}>
                                {card.headline}
                            </h3>
                            <p style={{ color: "#9CA3AF", fontSize: "15px", lineHeight: "1.6" }}>
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
