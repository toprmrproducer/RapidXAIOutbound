"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Comparison() {
    return (
        <section className="py-24 relative z-10 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Old Way vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">RapidXAI Way</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Stop losing revenue to slow follow-ups, missed calls, and expensive traditional teams.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Old Way Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(239,68,68,0.1)] transition-shadow duration-500"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-6">
                            <XCircle size={16} /> The Old Way
                        </div>

                        <ul className="space-y-5">
                            {[
                                "Costly and hard to scale teams",
                                "Missed calls outside business hours",
                                "Inconsistent following up with leads",
                                "Weeks to hire and train SDRs",
                                "Silos between comms and your CRM"
                            ].map((item, i) => (
                                <li key={i} className="flex flex-start gap-4 text-slate-300">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* New Way Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl glass-card relative overflow-hidden hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] transition-shadow duration-500"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6">
                            <CheckCircle2 size={16} /> The RapidXAI Way
                        </div>

                        <ul className="space-y-5">
                            {[
                                "Market breaking cost-effectiveness",
                                "24/7 Always Available Receptionist",
                                "Persistent multi-step cadence follow-ups",
                                "Rapid deployment in weeks, not quarters",
                                "CRM-native: automatic notes & tasks"
                            ].map((item, i) => (
                                <li key={i} className="flex flex-start gap-3 text-white font-medium">
                                    <CheckCircle2 size={20} className="text-indigo-400 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
