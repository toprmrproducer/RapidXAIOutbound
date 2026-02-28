"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-28 px-6 relative z-10 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] p-14 md:p-24 text-center overflow-hidden"
                >
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-[2.5rem] p-px bg-gradient-to-br from-violet-500/50 via-indigo-500/25 to-transparent pointer-events-none">
                        <div className="rounded-[2.5rem] w-full h-full bg-[#0a0a18]" />
                    </div>

                    {/* Inner aurora glow */}
                    <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/8 blur-[80px]" />
                    </div>

                    {/* Dot grid inside the card */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-dot-grid opacity-100 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-8">
                            <Sparkles size={12} />
                            Limited Early Access
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
                            Ready to Break Your
                            <br />
                            <span className="text-gradient-primary">Revenue Ceiling?</span>
                        </h2>

                        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-light">
                            Stop losing leads to slow response times. Deploy your AI workforce today — watch your meeting booked rate double this quarter.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="btn-shimmer group flex items-center gap-2 bg-white text-slate-900 px-10 py-4 rounded-full font-semibold text-base hover:scale-[1.03] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95">
                                Claim 1000 Free Mins
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">No credit card required</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
