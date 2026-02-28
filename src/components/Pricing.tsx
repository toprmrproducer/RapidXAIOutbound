"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";

const plans = [
    {
        name: "Inbound Only",
        price: "₹7,000",
        per: "/mo",
        description: "Ideal for businesses that want every inbound call answered and converted.",
        features: ["Always-on reception", "Lead Qualification", "Meeting Routing", "Email Notifications"],
        cta: "Start Inbound",
        popular: false,
    },
    {
        name: "Omnichannel",
        price: "₹25,000",
        per: "/mo",
        description: "Inbound and outbound working together to maximize booked meetings.",
        features: ["Everything in Inbound & Outbound", "Shared Context Memory", "Advanced CRM Sync", "Dedicated Support Manager"],
        cta: "Claim 1000 Free Mins",
        popular: true,
    },
    {
        name: "Outbound Only",
        price: "₹20,000",
        per: "/mo",
        description: "Targeted outbound campaigns powered by AI SDRs that follow up automatically.",
        features: ["Targeted Campaigns", "Automated Callbacks", "Re-engagement cadences", "SMS/WhatsApp follow-ups"],
        cta: "Start Outbound",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#7c6af5] text-xl font-light">└</span>
                        <span className="section-label">Pricing</span>
                        <span className="text-[#7c6af5] text-xl font-light">┐</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
                        Simple, Transparent{" "}
                        <span className="text-[#71717A]">Pricing.</span>
                    </h2>
                    <p className="text-[#71717A] text-lg max-w-xl">
                        Enterprise-grade AI voice agents at pricing built for growing businesses.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-5 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={plan.popular ? "lg:-translate-y-4" : ""}
                        >
                            <div
                                className={`rounded-[1.75rem] p-8 flex flex-col h-full border transition-all duration-300 ${plan.popular
                                    ? "bg-[#18181B] border-[#27272A] shadow-[0_20px_60px_rgba(0,0,0,0.18)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.25)]"
                                    : "bg-white border-[#E4E4E7] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-1"
                                    }`}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="inline-flex items-center gap-1.5 bg-[#7c6af5] text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6 self-start">
                                        <Sparkles size={10} />
                                        Most Popular
                                    </div>
                                )}

                                <h3 className={`font-display text-base font-semibold mb-2 ${plan.popular ? "text-white/60" : "text-[#71717A]"}`}>
                                    {plan.name}
                                </h3>

                                <div className="mb-4">
                                    <span className={`font-display text-5xl font-extrabold tracking-tight ${plan.popular ? "text-white" : "text-[#18181B]"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm ml-1 ${plan.popular ? "text-white/40" : "text-[#A1A1AA]"}`}>{plan.per}</span>
                                </div>

                                <p className={`text-sm mb-7 pb-7 border-b leading-relaxed ${plan.popular ? "text-white/50 border-white/10" : "text-[#71717A] border-[#E4E4E7]"}`}>
                                    {plan.description}
                                </p>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-white/80" : "text-[#52525B]"}`}>
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-[#7c6af5]/20" : "bg-[#ede9fe]"}`}>
                                                <Check size={11} className={plan.popular ? "text-[#9b8af8]" : "text-[#6d56eb]"} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${plan.popular
                                        ? "bg-white text-[#18181B] hover:bg-gray-100"
                                        : "border border-[#18181B] text-[#18181B] hover:bg-[#18181B] hover:text-white"
                                        }`}
                                >
                                    {plan.cta}
                                    <ArrowUpRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-[#A1A1AA] text-sm mt-10">
                    All plans include your first{" "}
                    <span className="font-semibold text-[#18181B]">1,000 minutes free.</span>{" "}
                    No credit card required.
                </p>
            </div>
        </section>
    );
}
