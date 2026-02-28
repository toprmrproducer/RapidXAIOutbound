"use client";

import { motion } from "framer-motion";
import { ListChecks, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: ListChecks,
        number: "01",
        title: "Define Objectives",
        description: "We sit down to understand your sales process, ICP, and objections, then map the perfect conversational trees.",
        accent: "violet",
        glow: "rgba(124,106,245,0.2)",
        border: "border-violet-500/25",
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
        numColor: "text-violet-400",
    },
    {
        icon: Code2,
        number: "02",
        title: "Train & Integrate",
        description: "We ingest your knowledge base and natively sync your agent with your CRM (HubSpot, Salesforce, and more).",
        accent: "indigo",
        glow: "rgba(99,102,241,0.2)",
        border: "border-indigo-500/25",
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
        numColor: "text-indigo-400",
    },
    {
        icon: Rocket,
        number: "03",
        title: "Launch & Scale",
        description: "Your AI workforce goes live. Watch inbound coverage hit 100% and outbound connection rates skyrocket.",
        accent: "purple",
        glow: "rgba(168,85,247,0.2)",
        border: "border-purple-500/25",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        numColor: "text-purple-400",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-28 relative px-6 overflow-hidden">
            {/* Subtle background stripe */}
            <div className="absolute inset-0 bg-white/[0.01] border-y border-white/[0.04] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">

                {/* ── Header ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Process</p>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                        Built to{" "}
                        <span className="text-gradient-primary">Launch Fast.</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                        We handle the complex engineering. You just turn the key.
                    </p>
                </motion.div>

                {/* ── Steps ─────────────────────────────────────────── */}
                <div className="grid md:grid-cols-3 gap-6 relative">

                    {/* Animated connector line */}
                    <div className="hidden md:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
                        <div className="h-full bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-purple-500/0" />
                        <motion.div
                            animate={{ x: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                    </div>

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                            >
                                <div
                                    className={`glass-card rounded-3xl p-8 flex flex-col items-center text-center h-full hover:shadow-[0_24px_60px_var(--glow)] transition-all duration-500 hover:-translate-y-1`}
                                    style={{ "--glow": step.glow } as React.CSSProperties}
                                >
                                    {/* Step number */}
                                    <div className={`font-mono-premium text-sm font-bold ${step.numColor} mb-5 tracking-widest`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${step.iconBg} border ${step.border} flex items-center justify-center mb-6 shadow-[0_0_30px_var(--glow)]`}
                                        style={{ "--glow": step.glow } as React.CSSProperties}>
                                        <Icon size={28} className={step.iconColor} />
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
