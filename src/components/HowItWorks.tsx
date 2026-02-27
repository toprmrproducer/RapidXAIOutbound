"use client";

import { motion } from "framer-motion";
import { ListChecks, Code2, Rocket } from "lucide-react";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative px-6 bg-[#050510]/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Launch Fast.</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">We handle the complex engineering. You just turn the key.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">

                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0" />

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 mb-6 rounded-full glass-card border border-indigo-500/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                            <ListChecks size={32} className="text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Define Objectives</h3>
                        <p className="text-slate-400 text-sm leading-relaxed px-4">We sit down to understand your sales process, ICP, and objections. We then map out the perfect conversational trees.</p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-0"
                    >
                        <div className="w-24 h-24 mb-6 rounded-full glass-card border border-purple-500/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">2</div>
                            <Code2 size={32} className="text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Train & Integrate</h3>
                        <p className="text-slate-400 text-sm leading-relaxed px-4">We ingest your company's knowledge base and natively sync the agent with your existing CRM infrastructure (HubSpot, Salesforce, etc).</p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-0"
                    >
                        <div className="w-24 h-24 mb-6 rounded-full glass-card border border-pink-500/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                            <Rocket size={32} className="text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Launch & Scale</h3>
                        <p className="text-slate-400 text-sm leading-relaxed px-4">Your AI workforce goes live. Watch your inbound coverage hit 100% and your outbound connection rates skyrocket immediately.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
