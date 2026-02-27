"use client";

import { motion } from "framer-motion";
import { Headphones, Target, RotateCw, Database, Users } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="py-24 relative px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Two Pillars. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">One Goal.</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Revenue momentum driven by your always-on AI workforce.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Inbound */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-[2rem] flex flex-col items-start hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center mb-8">
                            <Headphones size={32} className="text-indigo-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Inbound AI Agent</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Your polite, always-on receptionist. Inbound that never misses a beat. We turn your missed calls into booked meetings.
                        </p>

                        <div className="w-full p-4 rounded-xl bg-black/20 border border-white/5 mb-8">
                            <div className="flex items-center justify-between text-sm text-slate-300 font-medium font-mono whitespace-nowrap overflow-x-auto no-scrollbar gap-2 md:gap-0">
                                <span>Greet</span>
                                <span className="text-indigo-500 shrink-0">→</span>
                                <span>Qualify</span>
                                <span className="text-indigo-500 shrink-0">→</span>
                                <span>Route</span>
                                <span className="text-indigo-500 shrink-0">→</span>
                                <span className="text-white">Schedule</span>
                            </div>
                        </div>

                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-center gap-3">
                                <Users size={18} className="text-indigo-400" />
                                <span>Graceful handoff to your human team</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Database size={18} className="text-indigo-400" />
                                <span>CRM-native logic to route calls</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Outbound */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 md:p-12 rounded-[2rem] flex flex-col items-start hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none" />

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center mb-8">
                            <Target size={32} className="text-purple-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Outbound AI SDR</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Your tireless SDR. Polite, persistent, and impossible to "forget to follow up." Drives targeted campaigns.
                        </p>

                        <div className="w-full p-4 rounded-xl bg-black/20 border border-white/5 mb-8">
                            <div className="flex items-center justify-between text-sm text-slate-300 font-medium font-mono whitespace-nowrap overflow-x-auto no-scrollbar gap-2 md:gap-0">
                                <span>Target</span>
                                <span className="text-purple-500 shrink-0">→</span>
                                <span>Connect</span>
                                <span className="text-purple-500 shrink-0">→</span>
                                <span>Pitch</span>
                                <span className="text-purple-500 shrink-0">→</span>
                                <span className="text-white">Book</span>
                            </div>
                        </div>

                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-center gap-3">
                                <RotateCw size={18} className="text-purple-400" />
                                <span>Follow-ups on rails (Phone, SMS, WhatsApp)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Database size={18} className="text-purple-400" />
                                <span>Syncs notes, statuses, and tasks</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
