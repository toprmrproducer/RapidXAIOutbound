"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-indigo-500/20"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Ready to Break Your <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Revenue Ceiling?</span>
                        </h2>

                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop losing leads to high response times. Deploy your AI workforce today and watch your meeting booked rate double this quarter.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-indigo-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                Claim 1000 Free Mins <ArrowRight size={20} />
                            </button>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">No credit card required</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
