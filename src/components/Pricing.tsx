"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative px-6">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold mb-6 animate-pulse">
                        First 1000 minutes FREE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Market Breaking Setup</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">The most cost-effective enterprise AI voice agents available in the Indian market.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

                    {/* Inbound Tier */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl glass-card border-white/5 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-300 relative group"
                    >
                        <h3 className="text-xl font-semibold text-slate-300 mb-2">Inbound Only</h3>
                        <div className="mb-6">
                            <span className="text-5xl font-extrabold text-white">₹7,000</span>
                            <span className="text-slate-400">/mo</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-8 border-b border-white/10 pb-6">Perfect for businesses needing a 24/7 receptionist.</p>

                        <ul className="space-y-4 mb-8">
                            {["Always-on reception", "Lead Qualification", "Meeting Routing", "Email Notifications"].map((f, i) => (
                                <li key={i} className="flex gap-3 text-slate-300 text-sm"><Check size={18} className="text-indigo-400" /> {f}</li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white transition-colors">Start Inbound</button>
                    </motion.div>

                    {/* Combined Tier (Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl backdrop-blur-3xl bg-gradient-to-b from-indigo-900/50 to-indigo-950/80 border border-indigo-500/30 relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-300 ring-1 ring-white/10 group"
                    >
                        <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>

                        <h3 className="text-xl font-semibold text-indigo-300 mb-2">Omnichannel Combined</h3>
                        <div className="mb-6">
                            <span className="text-5xl font-extrabold text-white">₹25,000</span>
                            <span className="text-indigo-200">/mo</span>
                        </div>
                        <p className="text-sm text-indigo-200/70 mb-8 border-b border-indigo-500/20 pb-6">Unstoppable growth with both inbound reception and outbound outreach.</p>

                        <ul className="space-y-4 mb-8">
                            {["Everything in Inbound & Outbound", "Shared Context Memory", "Advanced CRM Sync", "Dedicated Support Manager"].map((f, i) => (
                                <li key={i} className="flex gap-3 text-white font-medium text-sm"><Check size={18} className="text-purple-400" /> {f}</li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-white text-indigo-950 font-bold shadow-lg hover:bg-slate-200 transition-colors">Claim 1000 Free Mins</button>
                    </motion.div>

                    {/* Outbound Tier */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl glass-card border-white/5 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-300 relative group"
                    >
                        <h3 className="text-xl font-semibold text-slate-300 mb-2">Outbound Only</h3>
                        <div className="mb-6">
                            <span className="text-5xl font-extrabold text-white">₹20,000</span>
                            <span className="text-slate-400">/mo</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-8 border-b border-white/10 pb-6">Targeted outreach driven by human-grade AI SDRs.</p>

                        <ul className="space-y-4 mb-8">
                            {["Targeted Campaigns", "Automated Callbacks", "Re-engagement cadences", "SMS/WhatsApp follow-ups"].map((f, i) => (
                                <li key={i} className="flex gap-3 text-slate-300 text-sm"><Check size={18} className="text-indigo-400" /> {f}</li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white transition-colors">Start Outbound</button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
