"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function ValuePropSection() {
    return (
        <section className="bg-[#05000a] py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center z-10">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-4 text-left pr-4"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-medium leading-[1.15] tracking-tight">
                        <span className="text-white">We provide AI voice solutions to companies in India. </span>
                        <span className="text-white/30">Automation does not need to be expensive.</span>
                    </h2>
                </motion.div>

                {/* Right: Glowing Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex justify-center items-center w-full"
                >
                    {/* The multi-layered glowing sphere */}
                    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden flex flex-col justify-center items-center">

                        {/* 1. Underlying Base Gradient */}
                        <div
                            className="absolute inset-0 rounded-full blur-[8px]"
                            style={{
                                background: "conic-gradient(from 180deg at 50% 50%, #1e3a8a 0deg, #60a5fa 120deg, #f59e0b 240deg, #7c3aed 360deg)",
                                opacity: 0.8
                            }}
                        />

                        {/* 2. Glassmorphic Sheen / Light reflection */}
                        <div className="absolute inset-0 rounded-full"
                            style={{
                                background: "radial-gradient(120% 120% at 20% 20%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 30%, rgba(0,0,0,0) 100%)",
                                mixBlendMode: 'overlay'
                            }}
                        />

                        {/* 3. Drop Shadow edge mimicking 3D spherical depth */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_-20px_40px_rgba(0,0,0,0.8)]" />

                        {/* Center Icon & Text */}
                        <div className="relative z-10 flex flex-col items-center gap-3 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <Shield className="w-16 h-16 text-white bg-white/5 p-3 rounded-2xl backdrop-blur-md border border-white/20" />
                            <span className="text-white font-medium tracking-wide text-lg">AI Voice</span>
                        </div>
                    </div>

                    {/* Ambient outer glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[80px] rounded-full -z-10" />
                </motion.div>
            </div>


        </section>
    );
}
