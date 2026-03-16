"use client";

import { motion } from "framer-motion";

export default function FreeValueVideo() {
    return (
        <section className="bg-[#08080C] py-24 px-6 border-t border-[#1E1E2E]">
            <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#7C3AED" }}>
                        FREE VALUE
                    </p>
                    <h2 className="font-bold text-white font-display tracking-tight leading-[1.1] mb-6"
                        style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                        Want to build this yourself?
                    </h2>
                    <p className="max-w-2xl mx-auto" style={{ color: "#9CA3AF", fontSize: "17px", lineHeight: "1.6" }}>
                        Don't have the budget to hire us yet? No problem. Watch this complete breakdown on how you can build an AI voice agent for your business completely from scratch. 
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full aspect-video rounded-3xl overflow-hidden border border-[#2D2D3D] shadow-2xl shadow-[#7C3AED]/10 bg-[#0F0F14]"
                >
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/w8kkTvdxRu8" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <a href="https://calendly.com/shreyasrajsony11/30min" target="_blank" rel="noopener noreferrer">
                        <button
                            className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:scale-[1.02]"
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Or Jump on a call to have us build it
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
