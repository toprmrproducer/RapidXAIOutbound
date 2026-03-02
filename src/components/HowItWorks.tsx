"use client";

import { motion } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "Connect Your Phone Number",
        desc: "Bring your existing business number or get a new one. Works with any Indian telecom provider. Setup takes under 5 minutes.",
        cta: "Start Setup →",
        img: "/images/connect.png"
    },
    {
        step: "02",
        title: "Configure Your AI Agent",
        desc: "Define your agent's voice, personality, qualification script, and escalation rules using our no-code builder. No engineers needed.",
        cta: "See the Builder →",
        img: "/images/configure.png"
    },
    {
        step: "03",
        title: "Go Live & Watch It Work",
        desc: "Flip the switch. Your AI agent starts handling calls immediately. Monitor every conversation in real time from your dashboard.",
        cta: "View Dashboard →",
        img: "/images/golive.png"
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-[#060010] py-24 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        Setup
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight">
                        3 Steps to Go Live
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-24 lg:gap-32">
                    {steps.map((step, i) => (
                        <div key={step.step} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 flex flex-col gap-5 text-center md:text-left relative"
                            >
                                <span className="text-[120px] md:text-[160px] font-black text-white/[0.03] font-display absolute -top-16 md:-top-24 -left-4 md:-left-8 select-none pointer-events-none">
                                    {step.step}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-4 font-display tracking-tight">{step.title}</h3>
                                    <p className="text-white/60 leading-relaxed text-lg mb-6">{step.desc}</p>
                                    <button className="text-[#A78BFA] font-mdeium hover:text-white transition-colors duration-200 flex items-center gap-2 group mx-auto md:mx-0">
                                        {step.cta.replace("→", "")}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex-1 w-full rounded-[24px] border border-white/10 bg-[#060010] p-3 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] min-h-[320px] md:min-h-[400px] flex items-center justify-center relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5 bg-[#0a001a] min-h-[320px] max-h-[400px]">
                                    <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
