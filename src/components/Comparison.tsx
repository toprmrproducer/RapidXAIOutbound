"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const oldItems = [
    "Costly and hard to scale teams",
    "Missed calls outside business hours",
    "Inconsistent following up with leads",
    "Weeks to hire and train SDRs",
    "Silos between comms and your CRM",
];

const newItems = [
    "Market-breaking cost-effectiveness",
    "24/7 Always-Available AI Receptionist",
    "Persistent multi-step cadence follow-ups",
    "Go live in days, not months",
    "CRM-native: automatic notes & tasks",
];

export default function Comparison() {
    return (
        <section className="py-24 px-6 bg-[#F5F6F7]">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="font-display font-extrabold text-[#18181B] tracking-tight mb-4 flex flex-col items-center gap-1">
                        <span className="text-4xl md:text-5xl">What You're Doing Now</span>
                        <span className="text-sm font-bold text-[#A1A1AA] uppercase tracking-[0.3em]">vs.</span>
                        <span className="text-4xl md:text-5xl text-gradient-violet">What Actually Works</span>
                    </h2>
                    <p className="text-[#71717A] max-w-xl mx-auto text-lg">
                        Most companies lose revenue because they respond too late. Here's the difference.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Old Way — white card, red accent */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card p-10 flex flex-col"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-8 self-start">
                            <XCircle size={14} />
                            The Traditional Way
                        </div>

                        <ul className="space-y-5">
                            {oldItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                                    <span className="text-[#52525B] text-[15px] leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* RapidXAI Way — light lavender card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 }}
                        className="rounded-[1.75rem] p-10 flex flex-col relative overflow-hidden"
                        style={{ background: "linear-gradient(140deg, #ede9fe 0%, #f3f0ff 100%)", border: "1px solid #ddd6fe" }}
                    >
                        {/* Soft violet radial wash top-right */}
                        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,86,235,0.08) 0%, transparent 70%)" }} />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 self-start" style={{ background: "#ddd6fe", border: "1px solid #c4b5fd", color: "#5b21b6" }}>
                                <CheckCircle2 size={14} />
                                The Smarter Way with RapidXAI
                            </div>

                            <ul className="space-y-5">
                                {newItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#6d56eb" }} />
                                        <span className="text-[#18181B] text-[15px] leading-snug font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
