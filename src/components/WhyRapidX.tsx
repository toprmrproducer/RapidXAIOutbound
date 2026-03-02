"use client";

import { motion } from "framer-motion";

const features = [
    {
        icon: "🎙",
        title: "Ultra-Low Latency Voice",
        desc: "Sub-800ms response times using Sarvam AI and 11Labs — conversations feel real, not robotic.",
        gradient: "from-purple-600 to-violet-900"
    },
    {
        icon: "🔁",
        title: "Always-On Automation",
        desc: "No lunch breaks, no sick days. Your AI agent qualifies leads and books meetings 24/7.",
        gradient: "from-indigo-600 to-purple-900"
    },
    {
        icon: "📊",
        title: "Real-Time Analytics",
        desc: "Live dashboards showing call outcomes, lead quality scores, and conversion rates.",
        gradient: "from-violet-600 to-purple-900"
    },
    {
        icon: "🔒",
        title: "Enterprise-Grade Security",
        desc: "SOC2 compliant infrastructure. Your data stays yours — always encrypted, never shared.",
        gradient: "from-purple-800 to-indigo-900"
    },
];

export default function WhyRapidX() {
    return (
        <section className="bg-[#060010] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        Why RapidX AI
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-xl font-display tracking-tight">
                        What sets RapidX AI apart
                    </h2>
                    <p className="text-white/50 max-w-lg leading-relaxed">
                        Built from the ground up for Indian enterprises — lower cost, higher performance, and voice that actually sounds human.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4 hover:border-[#7C3AED]/50 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-xl shadow-lg ring-1 ring-white/10 group-hover:scale-105 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-white text-xl font-semibold font-display tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-white/55 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
