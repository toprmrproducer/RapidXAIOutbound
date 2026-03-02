"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="bg-[#060010] py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-gradient-to-br from-[#1a0040] via-[#2d0070] to-[#1a0040]"
                >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at center, #7C3AED 0%, transparent 70%)' }}
                    />

                    {/* Noise texture overlay for premium feel */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>


                    <div className="relative z-10 flex flex-col items-center text-center py-24 px-8 md:px-12 gap-6">
                        <h2 className="text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight font-display tracking-tight">
                            Step Into RapidX AI — The Future of Sales
                        </h2>
                        <p className="text-white/70 max-w-lg text-lg mb-4">
                            Start with 1,000 free minutes. No credit card required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                            <button className="px-8 py-4 bg-white text-[#060010] font-bold rounded-full hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-[0_4px_20px_rgba(255,255,255,0.2)]">
                                Book a Call
                                <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm">
                                Get Free Minutes
                            </button>
                        </div>
                    </div>

                    {/* Large brand name at bottom like COSMOQ */}
                    <div className="relative z-0 text-center pb-8 pt-10 select-none pointer-events-none overflow-hidden flex justify-center">
                        <span className="text-[clamp(80px,15vw,220px)] font-black leading-[0.7] tracking-tighter whitespace-nowrap opacity-90 transition-transform origin-bottom"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(167,139,250,0.5), rgba(124,58,237,0.05))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                            RapidX AI
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
