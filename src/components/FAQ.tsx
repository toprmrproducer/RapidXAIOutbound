"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How long does it take to deploy RapidXAI?",
        answer: "Most of our enterprise clients are live within 48 to 72 hours. We handle the technical integration, knowledge base ingestion, and initial testing. You simply provide us with your sales objectives and historical call data."
    },
    {
        question: "What languages and accents do your agents support?",
        answer: "Our agents natively support over 30 languages. Crucially for the Indian market, we have perfectly tuned models for Hindi, English (Indian Accent), Hinglish, Tamil, Telugu, and more, ensuring your customers feel they are speaking to a local expert."
    },
    {
        question: "Does it integrate with my existing CRM?",
        answer: "Yes. RapidXAI offers native, one-click integrations with Salesforce, HubSpot, Zoho CRM, and Pipedrive. The agent automatically logs calls, updates lead statuses, and drops meeting calendar links directly into your existing pipelines."
    },
    {
        question: "Can I try the AI before committing to an enterprise plan?",
        answer: "Absolutely. We offer your first 1,000 conversational minutes entirely free. This allows you to test the latency, voice quality, and objection handling on a small batch of leads before scaling up."
    },
    {
        question: "How secure is my company data?",
        answer: "We are SOC2 Type II compliant. All audio streams and transcripts are end-to-end encrypted, and we never use your proprietary sales data to train our foundational models. Your data remains strictly sandboxed."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Questions</span></h2>
                    <p className="text-slate-400 text-lg">Everything you need to know about scaling your revenue momentum.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden border border-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-indigo-400' : 'text-slate-200'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-indigo-400' : ''}`}
                                    size={20}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
