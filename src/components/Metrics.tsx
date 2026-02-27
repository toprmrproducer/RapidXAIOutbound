"use client";

import { motion } from "framer-motion";

export default function Metrics() {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-8">
                    Powering Revenue Teams Worldwide
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center p-4 border-r border-white/5 last:border-0"
                    >
                        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">99.9%</span>
                        <span className="text-sm text-indigo-300 font-medium">Uptime Guarantee</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center justify-center p-4 md:border-r border-white/5 last:border-0"
                    >
                        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">&lt; 1s</span>
                        <span className="text-sm text-indigo-300 font-medium">Latency Response</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center justify-center p-4 border-r border-white/5 last:border-0"
                    >
                        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">3x</span>
                        <span className="text-sm text-indigo-300 font-medium">Increase in Connects</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">24/7</span>
                        <span className="text-sm text-indigo-300 font-medium">Continuous Pipeline</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
