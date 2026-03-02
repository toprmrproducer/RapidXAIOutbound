"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "RapidX AI handles 80% of our inbound calls completely on its own. Our closers only pick up when the lead is hot.",
        name: "Rahul Mehta",
        role: "VP Sales, FinServ Startup",
        avatar: "RM"
    },
    {
        quote: "We went from missing after-hours leads to converting them. The AI books meetings even at 2 AM.",
        name: "Priya Nair",
        role: "Founder, EdTech Platform",
        avatar: "PN"
    },
    {
        quote: "Setup was shockingly fast. We were live in one day. The voice quality is genuinely indistinguishable from human.",
        name: "Arjun Sharma",
        role: "Head of Growth, SaaS Co.",
        avatar: "AS"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-[#060010] py-24 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        Social Proof
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl font-display tracking-tight leading-tight">
                        Trusted by sales teams across India
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-6 hover:border-[#7C3AED]/40 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex gap-1.5">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} className="text-[#A78BFA] text-lg leading-none">★</span>
                                ))}
                            </div>
                            <p className="text-white/70 text-base leading-relaxed italic grow">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-10 h-10 rounded-full bg-[#7C3AED]/30 border border-[#7C3AED]/50 flex items-center justify-center text-sm text-white font-bold shadow-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold tracking-wide">{t.name}</p>
                                    <p className="text-white/50 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
