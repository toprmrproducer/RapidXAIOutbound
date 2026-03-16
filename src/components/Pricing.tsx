"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Inbound Only",
        priceMonthly: "₹10,000",
        priceYearly: "₹7,000",
        period: "/mo",
        desc: "Handle customer inquiries & bookings 24/7.",
        features: ["Includes 1,000 minutes", "1 Phone Number Included", "₹3.5/min after included", "Additional numbers charged extra", "Basic Analytics"],
        cta: "Start Inbound",
        highlight: false,
    },
    {
        name: "Outbound Only",
        priceMonthly: "₹25,000",
        priceYearly: "₹20,000",
        period: "/mo",
        desc: "For proactive sales and lead follow-ups.",
        features: ["Includes 1,000 minutes", "1 Phone Number Included", "₹3.5/min after included", "Additional numbers charged extra", "CRM Integration"],
        cta: "Start Outbound",
        highlight: false,
    },
    {
        name: "The Full Stack",
        priceMonthly: "₹35,000",
        priceYearly: "₹25,000",
        period: "/mo",
        desc: "Both inbound & outbound operations.",
        features: ["Includes 1,000 minutes", "1 Phone Number Included", "₹3.5/min after included", "Additional numbers charged extra", "Priority Support"],
        cta: "Get Both",
        highlight: true,
        badge: "Best Value"
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E]" id="pricing">
            <div className="max-w-[1100px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center flex flex-col items-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#7C3AED" }}>
                        PRICING
                    </p>
                    <h2
                        className="font-bold text-white font-display tracking-tight leading-[1.1] mb-8"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        Transparent Pricing.<br />No Hidden Fees.
                    </h2>

                    {/* Toggle */}
                    <div className="flex items-center gap-4 bg-[#0F0F14] p-1.5 rounded-full border border-[#1E1E2E] w-max">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isYearly ? "bg-white text-black shadow-sm" : "text-white/60 hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isYearly ? "bg-[#7C3AED] text-white shadow-sm" : "text-white/60 hover:text-white"
                                }`}
                        >
                            Yearly <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">Billed Annually</span>
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className={`rounded-3xl p-8 flex flex-col gap-8 transition-all duration-300 relative overflow-hidden ${plan.highlight
                                ? "bg-[#0A0512] border border-[#7C3AED]/50 md:-translate-y-4 shadow-[0_0_50px_rgba(124,58,237,0.1)]"
                                : "bg-[#0F0F14] border border-[#1E1E2E]"
                                }`}
                        >
                            {/* Accent line top */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${plan.highlight ? "bg-[#7C3AED]" : "bg-white/5"}`} />

                            <div className="flex flex-col gap-2 relative z-10">
                                <div className="flex justify-between items-start">
                                    <p className="text-white/60 text-[13px] font-semibold tracking-wide uppercase">{plan.name}</p>
                                    {plan.badge && (
                                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#7C3AED]/20 text-[#A78BFA] font-bold tracking-widest border border-[#7C3AED]/30">
                                            {plan.badge.toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-end gap-1 mt-2">
                                    <span className="text-5xl font-black text-white font-display tracking-tight leading-none">
                                        {isYearly ? plan.priceYearly : plan.priceMonthly}
                                    </span>
                                    <span className="text-white/40 text-[15px] font-medium mb-1.5">{plan.period}</span>
                                </div>
                                <p className="text-white/60 text-[15px] mt-3 leading-relaxed h-12">
                                    {plan.desc}
                                </p>
                            </div>

                            <div className="flex-1">
                                <ul className="flex flex-col gap-4">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-start gap-3 text-[14px] text-[#D1D5DB]">
                                            <span className="text-[#A78BFA] text-base shrink-0 leading-none mt-0.5">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-4 rounded-xl font-bold tracking-wide text-[15px] transition-all duration-300 relative z-10 mt-2 ${plan.highlight
                                    ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg shadow-[#7C3AED]/20"
                                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
