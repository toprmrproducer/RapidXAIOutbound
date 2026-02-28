"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-dark rounded-[2rem] p-14 md:p-24 text-center relative overflow-hidden"
                >
                    {/* Dot grid inside dark card */}
                    <div
                        className="absolute inset-0 rounded-[2rem] pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(#3F3F46 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                            opacity: 0.5,
                        }}
                    />

                    {/* Subtle violet glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 blur-[80px] pointer-events-none rounded-full" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-600/8 blur-[60px] pointer-events-none rounded-full" />

                    <div className="relative z-10">
                        <h2 className="font-display text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.95] mb-6">
                            Ready to Increase Your
                            <br />
                            <span className="text-gradient-violet">Booked Meetings?</span>
                        </h2>

                        <p className="text-white/50 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
                            Stop losing leads to slow response times. Deploy your AI today and start turning more calls into booked meetings this quarter.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="btn-white group">
                                Claim 1000 Free Mins
                                <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                            <p className="text-white/30 text-sm font-medium uppercase tracking-wider">
                                No credit card required
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
