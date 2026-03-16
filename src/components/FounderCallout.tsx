"use client";

import { motion } from "framer-motion";

export default function FounderCallout() {
    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E]">
            <div className="max-w-[800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
                    style={{
                        background: "linear-gradient(145deg, #0F0F14 0%, #08080C 100%)",
                        border: "1px solid #1E1E2E",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                    }}
                >
                    {/* Faint Purple Glow inside */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at top, rgba(124,58,237,0.15), transparent 70%)"
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full mb-8 overflow-hidden border border-[#2D2D3D] flex items-center justify-center bg-[#1E1E2E] text-white font-bold text-xl">
                            SR
                        </div>

                        <p className="text-[20px] md:text-[24px] leading-[1.6] text-white font-medium mb-10" style={{ letterSpacing: "-0.01em" }}>
                            "We didn't build this to win awards. We built this because I spoke to 100+ Indian business owners who were losing sleep over missed calls and dropping conversion rates. You shouldn't need VC funding to afford good AI. Period."
                        </p>

                        <div>
                            <p className="font-bold text-white text-[16px] mb-1 tracking-wide">SHREYAS RAJ</p>
                            <p style={{ color: "#9CA3AF", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Founder, CR/AI
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
