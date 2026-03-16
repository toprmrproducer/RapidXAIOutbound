"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "The Strategy Call",
        desc: "You tell us your goal (sales, support, booking). We map the flow.",
    },
    {
        num: "02",
        title: "We Build & Train",
        desc: "We write the scripts, select the voice engine, and train the AI on your FAQs.",
    },
    {
        num: "03",
        title: "You Go Live",
        desc: "We integrate it with your CRM/Dialer. You flip the switch.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E]">
            <div className="max-w-[700px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#7C3AED" }}>
                        HOW IT WORKS
                    </p>
                    <h2
                        className="font-bold text-white font-display tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        Three Steps. Zero Headaches.
                    </h2>
                    <p style={{ color: "#9CA3AF", fontSize: "17px" }}>
                        You don't need to be technical. You just need to know your business.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-6 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-[50%] top-2 bottom-2 w-px bg-[#1E1E2E] -translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                            >
                                {/* Circle Node */}
                                <div className="absolute left-0 md:left-[50%] -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-[#08080C] z-10"
                                    style={{ border: "1px solid #7C3AED", color: "#A855F7", boxShadow: "0 0 16px rgba(124,58,237,0.3)" }}
                                >
                                    {step.num}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-10 md:ml-0 md:w-[42%] p-7 rounded-2xl ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                                    style={{ background: "#0F0F14", border: "1px solid #1E1E2E" }}
                                >
                                    <h3 className="text-white font-semibold text-[18px] mb-2">{step.title}</h3>
                                    <p style={{ color: "#9CA3AF", fontSize: "15px", lineHeight: "1.6" }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <div
                        className="px-6 py-3 rounded-full flex items-center gap-2 border"
                        style={{
                            background: "rgba(124,58,237,0.08)",
                            borderColor: "rgba(124,58,237,0.3)",
                        }}
                    >
                        <span style={{ fontSize: "16px" }}>⚡</span>
                        <span className="text-white font-medium text-[14px]">
                            Deploys in 3–5 Business Days.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
