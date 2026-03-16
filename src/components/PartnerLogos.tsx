"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "OPENAI", type: "text" },
    { name: "ANTHROPIC", type: "text" },
    { name: "DEEPGRAM", type: "text" },
    { name: "ELEVENLABS", type: "text" },
    { name: "SARVAM AI", type: "text" },
    { name: "META Llama", type: "text" },
    { name: "TWILIO", type: "text" },
    { name: "VONAGE", type: "text" },
];

export default function PartnerLogos() {
    return (
        <section className="bg-[#08080C] py-8 border-y border-[#1E1E2E] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#08080C] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#08080C] to-transparent z-10 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                <p className="text-[11px] font-semibold tracking-widest uppercase mb-6" style={{ color: "#6B7280" }}>
                    Powered By Top AI Providers
                </p>

                <div className="flex whitespace-nowrap overflow-hidden w-full relative">
                    <motion.div
                        className="flex items-center gap-16 md:gap-24 text-white/40 font-bold text-xl md:text-2xl tracking-widest pl-16 md:pl-24"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed by changing duration
                        }}
                    >
                        {/* Render the array twice for seamless looping */}
                        {[...partners, ...partners].map((partner, i) => (
                            <div key={i} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                                {partner.name}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
