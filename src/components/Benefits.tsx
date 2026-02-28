"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Rocket, BrainCircuit } from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "24/7 Always Available",
        desc: "Never miss a lead outside business hours. Scale instantly without hiring more staff.",
        iconBg: "bg-[#ede9fe] border-[#ddd6fe]",
        iconColor: "text-[#6d56eb]",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "SOC2-ready processes, end-to-end audio encryption, and strict data sandboxing.",
        iconBg: "bg-emerald-50 border-emerald-100",
        iconColor: "text-emerald-600",
    },
    {
        icon: Rocket,
        title: "Weeks, Not Quarters",
        desc: "Go live in 48–72 hours. We handle integration, training, and testing for you.",
        iconBg: "bg-indigo-50 border-indigo-100",
        iconColor: "text-indigo-600",
    },
    {
        icon: BrainCircuit,
        title: "AI Voice Intelligence",
        desc: "Advanced conversational AI that understands context, handles objections, and works naturally with Indian accents.",
        iconBg: "bg-amber-50 border-amber-100",
        iconColor: "text-amber-600",
    },
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 px-6 bg-[#F5F6F7]">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#7c6af5] text-xl font-light">└</span>
                        <span className="section-label">Why RapidXAI</span>
                        <span className="text-[#7c6af5] text-xl font-light">┐</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
                        Built for{" "}
                        <span className="text-[#71717A]">Real Business Impact.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {benefits.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="card p-7"
                            >
                                <div className={`w-11 h-11 rounded-xl ${b.iconBg} border flex items-center justify-center mb-5`}>
                                    <Icon size={20} className={b.iconColor} />
                                </div>
                                <h4 className="font-display text-base font-bold text-[#18181B] mb-2">{b.title}</h4>
                                <p className="text-[#71717A] text-sm leading-relaxed">{b.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
