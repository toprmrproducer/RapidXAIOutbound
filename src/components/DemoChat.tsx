"use client";

import { motion, useInView } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function DemoChat() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const messages = [
        { type: "user", text: "Hi, I'm calling about pricing...", delay: 0.5 },
        { type: "ai", text: "I'd be happy to help! We have three main tiers starting at ₹7,000/mo for inbound agents. Are you looking for inbound reception, or outbound outreach?", delay: 1.5 },
        { type: "user", text: "Probably both. Do you have a combined package?", delay: 3.5 },
        { type: "ai", text: "Yes! Our Omnichannel Combined package is ₹25,000/mo and gives you the best of both worlds. Plus, your first 1000 minutes are free. Would you like me to schedule a technical demo with our team?", delay: 5.0 },
    ];

    return (
        <section className="py-24 relative px-6 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12" ref={ref}>
                {/* Text Context */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Human-Grade Dialogue</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Our AI doesn't sound like a robot. It understands context, handles interruptions gracefully, and navigates complex conversations seamlessly to drive your prospects towards the goal.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-indigo-300"><Sparkles size={16} /> Sub-second latency (Fast Response)</li>
                        <li className="flex items-center gap-2 text-indigo-300"><Sparkles size={16} /> Custom knowledge base integration</li>
                        <li className="flex items-center gap-2 text-indigo-300"><Sparkles size={16} /> Real-time CRM note syncing</li>
                    </ul>
                </div>

                {/* Chat UI */}
                <div className="flex-1 w-full max-w-sm relative group">
                    {/* Animated backdrop glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="glass-card p-4 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(99,102,241,0.25)] relative overflow-hidden">
                        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 px-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                                    <Sparkles size={18} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold">RapidXAI Assistant</h4>
                                    <p className="text-green-400 text-xs">● Active Call</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 h-[320px] overflow-y-auto px-2 flex flex-col justify-end pb-2">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ delay: msg.delay, duration: 0.4 }}
                                    className={`flex items-end gap-2 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    <div className={`w-6 h-6 rounded-full flex shrink-0 items-center justify-center ${msg.type === "user" ? "bg-slate-700" : "bg-indigo-600"}`}>
                                        {msg.type === "user" ? <User size={12} className="text-slate-300" /> : <Sparkles size={12} className="text-white" />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[85%] ${msg.type === "user" ? "bg-slate-800 text-slate-200 rounded-br-sm" : "bg-indigo-500/20 text-white rounded-bl-sm border border-indigo-500/30"}`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Audio wave decorative element */}
                        <div className="pt-4 border-t border-white/5 px-2 flex justify-center items-center h-12 gap-1 overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={isInView ? { height: [4, Math.random() * 20 + 4, 4] } : { height: 4 }}
                                    transition={{ repeat: Infinity, duration: 0.8 + Math.random() * 0.5 }}
                                    className="w-1 bg-indigo-500/40 rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
