"use client";

import { motion } from "framer-motion";
import { Headphones, Target, RotateCw, Database, Users, ArrowRight } from "lucide-react";
import { useRef as useRefHook } from "react";

function SpotlightCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRefHook<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty("--mouse-x", `${x}%`);
        ref.current.style.setProperty("--mouse-y", `${y}%`);
    };

    return (
        <div ref={ref} onMouseMove={handleMouseMove} className={`spotlight-card ${className}`}>
            {children}
        </div>
    );
}

const flowSteps = {
    inbound: ["Greet", "Qualify", "Route", "Schedule"],
    outbound: ["Target", "Connect", "Pitch", "Book"],
};

function FlowPill({ label, accent }: { label: string; accent: string }) {
    return (
        <div className={`px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/8 text-xs font-mono-premium font-medium text-slate-300`}>
            {label}
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-28 relative px-6">
            <div className="max-w-6xl mx-auto">

                {/* ── Section header ────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Core Offering</p>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                        Two Pillars.{" "}
                        <span className="text-gradient-primary">One Goal.</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                        Revenue momentum driven by your always-on AI workforce — inbound and outbound.
                    </p>
                </motion.div>

                {/* ── Cards ────────────────────────────────────────── */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Inbound */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SpotlightCard className="glass-card border-gradient rounded-3xl p-10 flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(99,102,241,0.15)] transition-all duration-500">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                                <Headphones size={26} className="text-indigo-400" />
                            </div>

                            <h3 className="font-display text-3xl font-bold text-white mb-3">Inbound AI Agent</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed font-light">
                                Your polite, always-on receptionist. Never miss a call again — we turn inbound into booked meetings.
                            </p>

                            {/* Flow steps */}
                            <div className="flex items-center gap-2 flex-wrap mb-8">
                                {flowSteps.inbound.map((step, i) => (
                                    <div key={step} className="flex items-center gap-2">
                                        <FlowPill label={step} accent="indigo" />
                                        {i < flowSteps.inbound.length - 1 && (
                                            <ArrowRight size={12} className="text-indigo-500 shrink-0" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-3 text-slate-400 mt-auto">
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                                        <Users size={11} className="text-indigo-400" />
                                    </div>
                                    Graceful handoff to your human team
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                                        <Database size={11} className="text-indigo-400" />
                                    </div>
                                    CRM-native routing logic
                                </li>
                            </ul>
                        </SpotlightCard>
                    </motion.div>

                    {/* Outbound */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 }}
                    >
                        <SpotlightCard className="glass-card rounded-3xl p-10 flex flex-col h-full relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(168,85,247,0.15)] transition-all duration-500">
                            {/* Subtle gradient wash inside card */}
                            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-violet-500/8 to-transparent pointer-events-none rounded-b-3xl" />

                            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                                <Target size={26} className="text-violet-400" />
                            </div>

                            <h3 className="font-display text-3xl font-bold text-white mb-3">Outbound AI SDR</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed font-light">
                                Your tireless SDR — polite, persistent, and impossible to&nbsp;forget to follow up. Drives targeted campaigns.
                            </p>

                            <div className="flex items-center gap-2 flex-wrap mb-8">
                                {flowSteps.outbound.map((step, i) => (
                                    <div key={step} className="flex items-center gap-2">
                                        <FlowPill label={step} accent="violet" />
                                        {i < flowSteps.outbound.length - 1 && (
                                            <ArrowRight size={12} className="text-violet-500 shrink-0" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-3 text-slate-400 mt-auto relative z-10">
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center shrink-0">
                                        <RotateCw size={11} className="text-violet-400" />
                                    </div>
                                    Follow-ups on rails (Phone, SMS, WhatsApp)
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center shrink-0">
                                        <Database size={11} className="text-violet-400" />
                                    </div>
                                    Syncs statuses & notes automatically
                                </li>
                            </ul>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
