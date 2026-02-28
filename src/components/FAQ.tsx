"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Shield, Plug, DollarSign, Globe } from "lucide-react";

const categories = ["All", "Setup", "Integrations", "Pricing", "Security", "Language"] as const;
type Category = typeof categories[number];

const faqs: { question: string; answer: string; category: Category; icon: React.ElementType }[] = [
    {
        category: "Setup",
        icon: Zap,
        question: "How long does it take to deploy RapidXAI?",
        answer: "Most clients are live within 48–72 hours. We handle integration, AI training, and testing. You provide your sales goals — we take care of the rest.",
    },
    {
        category: "Language",
        icon: Globe,
        question: "What languages and accents do your agents support?",
        answer: "Our agents support Indian English accents and major regional languages. Let us know your priority languages during setup.",
    },
    {
        category: "Integrations",
        icon: Plug,
        question: "Does it integrate with my existing CRM?",
        answer: "Yes. We integrate with HubSpot, Salesforce, and other major CRMs. Notes and meetings sync automatically.",
    },
    {
        category: "Pricing",
        icon: DollarSign,
        question: "Can I try the AI before committing to an enterprise plan?",
        answer: "Yes. Every plan includes your first 1,000 minutes free. No credit card required.",
    },
    {
        category: "Security",
        icon: Shield,
        question: "How secure is my company data?",
        answer: "Your data is protected with SOC2-ready processes, encryption, and strict data controls. Security is built into every layer of our system.",
    },
];

const categoryColors: Record<Category, string> = {
    All: "#7c6af5",
    Setup: "#7c6af5",
    Integrations: "#0ea5e9",
    Pricing: "#10b981",
    Security: "#f59e0b",
    Language: "#ec4899",
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filtered = faqs.filter((f) => activeCategory === "All" || f.category === activeCategory);

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-[#7c6af5] text-xl font-light">└</span>
                        <span className="section-label">FAQ</span>
                        <span className="text-[#7c6af5] text-xl font-light">┐</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
                        Frequently Asked{" "}
                        <span className="text-gradient-violet">Questions</span>
                    </h2>
                    <p className="text-[#71717A] text-lg">
                        Clear answers to common questions.
                    </p>
                </div>

                {/* Category filter pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => {
                        const active = activeCategory === cat;
                        const color = categoryColors[cat];
                        return (
                            <motion.button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200"
                                style={active
                                    ? { background: color, color: "white", border: `1px solid ${color}`, boxShadow: `0 4px 14px -2px ${color}55` }
                                    : { background: "white", color: "#71717A", border: "1px solid #E4E4E7" }
                                }
                            >
                                {cat}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Accordion */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-3"
                    >
                        {filtered.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const Icon = faq.icon;
                            const color = categoryColors[faq.category];

                            return (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.06 }}
                                    className="relative rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200"
                                    style={{
                                        border: isOpen ? `1px solid ${color}40` : "1px solid #E4E4E7",
                                        background: isOpen ? `${color}04` : "white",
                                    }}
                                >
                                    {/* Left accent bar */}
                                    <motion.div
                                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                                        animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0.3 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ background: color, transformOrigin: "top" }}
                                    />

                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full px-7 py-5 flex items-center justify-between text-left gap-4 focus:outline-none group"
                                    >
                                        <div className="flex items-center gap-3">
                                            {/* Category icon */}
                                            <div
                                                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                                                style={{ background: isOpen ? `${color}18` : "#F4F4F5", color: isOpen ? color : "#A1A1AA" }}
                                            >
                                                <Icon size={15} />
                                            </div>
                                            <span
                                                className="font-display text-[15px] font-semibold leading-snug transition-colors"
                                                style={{ color: isOpen ? color : "#18181B" }}
                                            >
                                                {faq.question}
                                            </span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="shrink-0"
                                            style={{ color: isOpen ? color : "#A1A1AA" }}
                                        >
                                            <ChevronDown size={18} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                <div className="px-7 pb-6 pt-1 text-[#52525B] text-[15px] leading-relaxed border-t border-[#F4F4F5] ml-[3px]">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA nudge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#A1A1AA] text-sm">
                        Can't find what you're looking for?{" "}
                        <a href="mailto:hello@rapidxai.com" className="text-[#7c6af5] font-semibold hover:underline transition-all">
                            Talk to our team →
                        </a>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
