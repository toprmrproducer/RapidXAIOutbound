"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Rocket, BrainCircuit } from "lucide-react";

export default function Benefits() {
    const benefits = [
        {
            icon: <Clock size={24} className="text-white" />,
            title: "24/7 Always Available",
            desc: "Never miss a lead outside of business hours. Scale instantly."
        },
        {
            icon: <ShieldCheck size={24} className="text-white" />,
            title: "Enterprise Security",
            desc: "SOC2-ready processes with end-to-end encryption."
        },
        {
            icon: <Rocket size={24} className="text-white" />,
            title: "Build Speed: Weeks, not Quarters",
            desc: "Rapid deployment with our proven framework and battle-tested components."
        },
        {
            icon: <BrainCircuit size={24} className="text-white" />,
            title: "AI Voice Intelligence",
            desc: "Advanced conversational AI that understands context."
        }
    ];

    return (
        <section id="benefits" className="py-24 relative px-6">
            <div className="max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all group relative overflow-hidden"
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {b.icon}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{b.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
