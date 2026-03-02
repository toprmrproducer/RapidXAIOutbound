"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const useCases: Record<string, any> = {
    sales: {
        title: "Sales Automation",
        desc: "AI agents that qualify inbound leads, run outbound campaigns, and hand off hot prospects to your closers in real time.",
        features: ["Lead qualification calls", "Objection handling", "Calendar booking", "CRM sync"],
    },
    support: {
        title: "Customer Support",
        desc: "24/7 first-line support that resolves common queries, escalates complex issues, and never puts a customer on hold.",
        features: ["FAQ handling", "Ticket creation", "Escalation routing", "Post-call summaries"],
    },
    reception: {
        title: "AI Receptionist",
        desc: "A professional front desk that greets callers, routes them to the right department, and captures every inquiry.",
        features: ["Smart call routing", "Appointment scheduling", "Message taking", "Multi-language support"],
    },
};

const useCaseImages: Record<string, string> = {
    sales: "/images/sales.png",
    support: "/images/support.png",
    reception: "/images/reception.png",
};

export default function UseCaseTabs() {
    const [activeTab, setActiveTab] = useState("sales");

    return (
        <section className="bg-[#060010] py-24 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        Use Cases
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-display tracking-tight">
                        Built for every team
                    </h2>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-3 mb-14 flex-wrap">
                    {Object.keys(useCases).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === key
                                ? "bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                                : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {useCases[key].title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[380px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-3xl font-bold text-white font-display">
                                {useCases[activeTab].title}
                            </h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                {useCases[activeTab].desc}
                            </p>
                            <ul className="flex flex-col gap-4 mt-2 mb-2">
                                {useCases[activeTab].features.map((f: string) => (
                                    <li key={f} className="flex items-center gap-3 text-white/80 shrink-0">
                                        <div className="w-5 h-5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[10px] text-[#A78BFA] shrink-0">
                                            ✓
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="self-start flex items-center gap-2 mt-2 px-6 py-3 bg-white text-[#060010] font-bold rounded-full text-sm hover:bg-white/90 transition shadow-[0_4px_14px_rgba(255,255,255,0.15)] group">
                                See it in action
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`img-${activeTab}`}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                            className="w-full rounded-[24px] border border-white/10 bg-[#060010] p-3 min-h-[380px] flex items-center justify-center relative shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5 bg-[#0a001a] flex items-center justify-center min-h-[360px]">
                                <img
                                    src={useCaseImages[activeTab]}
                                    alt={useCases[activeTab].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
