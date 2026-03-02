"use client";

import { motion } from "framer-motion";

const securityFeatures = [
    { icon: "🔐", label: "End-to-End Encryption" },
    { icon: "🛡", label: "SOC2 Compliant" },
    { icon: "🏢", label: "On-Premise Option" },
    { icon: "📋", label: "Audit Logs" },
    { icon: "🌍", label: "GDPR Ready" },
    { icon: "🔑", label: "Role-Based Access" },
];

export default function SecuritySection() {
    return (
        <section className="bg-[#060010] py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-14 lg:p-20 relative overflow-hidden"
                >
                    {/* Subtle corner glow */}
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                                    Trust & Security
                                </p>
                                <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight leading-tight">
                                    Multi-Layer Security
                                </h2>
                            </div>
                            <p className="text-white/60 leading-relaxed text-lg">
                                Enterprise deployments require enterprise-grade protection. Every layer of RapidX AI is built with security as the default — not an afterthought.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mt-4">
                                {securityFeatures.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-4 text-white/80 font-medium"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl shadow-inner border border-white/5">
                                            {item.icon}
                                        </div>
                                        {item.label}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full rounded-[24px] border border-white/10 bg-[#060010] p-3 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] min-h-[380px] flex items-center justify-center relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5 bg-[#0a001a] min-h-[380px]">
                                <img src="/images/security.png" alt="Security Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
