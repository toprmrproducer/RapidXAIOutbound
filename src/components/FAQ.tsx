"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "Is it really ₹7,000/month?", a: "Yes. Our Pilot Phase is ₹7,000/month and includes 1,000 minutes. After that, you pay ₹3.5 per minute. No hidden platform fees or mandatory onboarding costs." },
    { q: "Can the agent transfer calls to my team?", a: "Absolutely. If a lead is hot, or if the AI doesn't know the answer, it can instantly transfer the call to the right human." },
    { q: "How long does setup take?", a: "3 to 5 business days. You give us your script and requirements; we build, test, and deploy the agent for you." },
    { q: "Does it work with Indian numbers?", a: "Yes. CR/AI works natively with Indian telecom providers. We can port your existing number or provide a new one." },
    { q: "Does it speak Hindi?", a: "Yes. Our agents are fluent in English, Hindi, and natural Hinglish — perfect for the Indian market." },
    { q: "Will my customers know they're talking to AI?", a: "Our latency is under 800ms, and our voice models reflect natural human breathing and intonation. Most callers never realize they aren't speaking to a human." },
    { q: "What if it makes a mistake?", a: "We run rigorous guardrails on every agent. It stays strictly within the knowledge base and script you approve. If it gets confused, its default action is to transfer to a human." },
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
                        Got Questions? We Got Answers.
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
