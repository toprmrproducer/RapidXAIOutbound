"use client";

import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "/mo",
        desc: "Perfect for solo founders and small teams testing AI voice.",
        features: ["1,000 minutes/month", "1 AI agent", "Inbound calls only", "Basic analytics", "Email support"],
        cta: "Get Started",
        highlight: false,
    },
    {
        name: "Growth",
        price: "$99",
        period: "/mo",
        desc: "For growing sales teams ready to automate outbound too.",
        features: ["5,000 minutes/month", "5 AI agents", "Inbound + Outbound", "CRM integration", "Real-time dashboard", "Priority support"],
        cta: "Start Free Trial",
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "HyperSonic",
        price: "Custom",
        period: "",
        desc: "For enterprises with high call volumes and custom requirements.",
        features: ["Unlimited minutes", "Unlimited agents", "Custom voice cloning", "On-premise option", "SLA guarantee", "Dedicated success manager"],
        cta: "Book a Call",
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section className="bg-[#060010] py-24 px-6 border-t border-white/5" id="pricing">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:text-center text-left"
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        Pricing
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 font-display tracking-tight leading-tight">
                        Flexible Plans for Every Team
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto md:mx-auto ml-0 text-lg">
                        Start free. Scale as you grow. No per-seat nonsense.
                    </p>
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
                                    ? "bg-[#7C3AED]/10 border border-[#7C3AED]/60 md:-translate-y-4 shadow-[0_0_50px_rgba(124,58,237,0.15)]"
                                    : "bg-white/5 border border-white/10"
                                }`}
                        >
                            {/* Accent line top */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${plan.highlight ? "bg-[#7C3AED]" : "bg-white/10"}`} />

                            <div className="flex flex-col gap-1.5 relative z-10">
                                <div className="flex justify-between items-start">
                                    <p className="text-white/50 text-sm font-semibold tracking-wide uppercase">{plan.name}</p>
                                    {plan.badge && (
                                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#7C3AED] text-white font-bold tracking-widest shadow-sm">
                                            {plan.badge.toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-end gap-1 mt-2">
                                    <span className="text-5xl font-black text-white font-display tracking-tight leading-none">{plan.price}</span>
                                    {plan.period && <span className="text-white/50 text-base font-medium mb-1">{plan.period}</span>}
                                </div>
                                <p className="text-white/60 text-sm mt-4 leading-relaxed h-12">
                                    {plan.desc}
                                </p>
                            </div>

                            <div className="flex-1">
                                <ul className="flex flex-col gap-4">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                                            <span className="text-[#A78BFA] text-base shrink-0 leading-none mt-0.5">✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-4 rounded-xl font-bold tracking-wide text-sm transition-all duration-200 shadow-sm relative z-10 mt-2 ${plan.highlight
                                        ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-[#7C3AED]/20 hover:shadow-[#7C3AED]/40 shadow-lg"
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
