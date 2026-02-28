"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Inbound Only",
        price: "₹7,000",
        per: "/mo",
        description: "Perfect for businesses needing a 24/7 AI receptionist.",
        features: ["Always-on reception", "Lead Qualification", "Meeting Routing", "Email Notifications"],
        cta: "Start Inbound",
        accent: "indigo",
        popular: false,
    },
    {
        name: "Omnichannel",
        price: "₹25,000",
        per: "/mo",
        description: "Unstoppable growth with inbound reception and outbound outreach working together.",
        features: ["Everything in Inbound & Outbound", "Shared Context Memory", "Advanced CRM Sync", "Dedicated Support Manager"],
        cta: "Claim 1000 Free Mins",
        accent: "violet",
        popular: true,
    },
    {
        name: "Outbound Only",
        price: "₹20,000",
        per: "/mo",
        description: "Targeted outreach driven by human-grade AI SDRs.",
        features: ["Targeted Campaigns", "Automated Callbacks", "Re-engagement cadences", "SMS/WhatsApp follow-ups"],
        cta: "Start Outbound",
        accent: "indigo",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-28 relative px-6 overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">

                {/* ── Header ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        First 1000 minutes FREE
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                        Market-Breaking{" "}
                        <span className="text-gradient-primary">Pricing.</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                        The most cost-effective enterprise AI voice agents in the Indian market.
                    </p>
                </motion.div>

                {/* ── Cards ───────────────────────────────────────── */}
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={plan.popular ? "lg:-translate-y-5" : ""}
                        >
                            <div
                                className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-500 ${plan.popular
                                        ? "bg-[#0e0e1e] shadow-[0_0_80px_rgba(124,106,245,0.25)] hover:shadow-[0_0_100px_rgba(124,106,245,0.4)]"
                                        : "glass-card hover:shadow-[0_24px_60px_rgba(99,102,241,0.12)] hover:-translate-y-1"
                                    }`}
                            >
                                {/* Gradient border for popular card */}
                                {plan.popular && (
                                    <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-b from-violet-500/60 via-indigo-500/30 to-transparent pointer-events-none">
                                        <div className="rounded-3xl bg-[#0e0e1e] w-full h-full" />
                                    </div>
                                )}

                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(124,106,245,0.5)]">
                                        <Sparkles size={11} />
                                        Most Popular
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Plan name */}
                                    <h3 className={`font-display text-lg font-semibold mb-2 ${plan.popular ? "text-violet-300" : "text-slate-300"}`}>
                                        {plan.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mb-5">
                                        <span className={`font-display text-5xl font-bold ${plan.popular ? "text-white" : "text-white"}`}>
                                            {plan.price}
                                        </span>
                                        <span className="text-slate-400 ml-1 text-sm">{plan.per}</span>
                                    </div>

                                    <p className={`text-sm mb-8 pb-6 border-b ${plan.popular ? "text-violet-200/60 border-violet-500/20" : "text-slate-400 border-white/8"} leading-relaxed font-light`}>
                                        {plan.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((f) => (
                                            <li key={f} className={`flex items-center gap-3 text-sm ${plan.popular ? "text-white/90" : "text-slate-300"}`}>
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-violet-500/20 border border-violet-500/30" : "bg-indigo-500/10 border border-indigo-500/20"}`}>
                                                    <Check size={11} className={plan.popular ? "text-violet-400" : "text-indigo-400"} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button
                                        className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 btn-shimmer ${plan.popular
                                                ? "bg-white text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                                                : "border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/60"
                                            }`}
                                    >
                                        {plan.cta}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
