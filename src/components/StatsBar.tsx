"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "39,500+", label: "Sales Calls Handled" },
    { value: "98.6%", label: "Uptime Reliability" },
    { value: "< 800ms", label: "Response Latency" },
    { value: "SOC2", label: "Compliant & Secure" },
];

export default function StatsBar() {
    return (
        <section className="bg-[#060010] border-y border-white/5 py-10 px-6 relative z-10">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="text-3xl font-bold text-white font-display tracking-tight">
                            {stat.value}
                        </span>
                        <span className="text-sm text-white/50 font-medium">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
