"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "How quickly can I go live?", a: "Most teams are fully live within 24 hours. Connect your number, configure your script, and flip the switch." },
    { q: "Does it work with Indian phone numbers?", a: "Yes. RapidX AI works with all major Indian telecom providers including Airtel, Jio, and Vi." },
    { q: "What languages does the AI support?", a: "Currently English and Hindi, with regional language support (Tamil, Telugu, Marathi) coming in Q2 2026." },
    { q: "Can the AI transfer calls to a human?", a: "Yes. Set any condition to trigger a live transfer — hot lead detected, specific keyword spoken, or customer request." },
    { q: "Is my data stored or used for training?", a: "No. All call data is encrypted at rest and in transit. We do not use your call recordings to train any models." },
    { q: "How does pricing work for high volumes?", a: "HyperSonic plan includes unlimited minutes with a flat enterprise fee. Contact us for custom volume quotes." },
];

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="bg-[#060010] py-24 px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center md:text-left"
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        FAQ
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-display tracking-tight leading-tight">
                        Curious about RapidX AI?
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <motion.button
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className={`rounded-2xl border text-left overflow-hidden transition-all duration-300 w-full ${openFaq === i
                                    ? "bg-white/10 border-[#7C3AED]/50 shadow-[0_4px_20px_rgba(124,58,237,0.1)]"
                                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            <div className="flex items-center justify-between px-6 py-5 md:py-6 gap-4">
                                <span className={`font-semibold md:text-lg transition-colors ${openFaq === i ? "text-white" : "text-white/80"}`}>
                                    {faq.q}
                                </span>
                                <span className={`text-[#A78BFA] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </div>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 md:pb-7 text-white/60 text-base leading-relaxed border-t border-white/10 pt-4 md:pt-5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
