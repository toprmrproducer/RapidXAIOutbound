"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const tableData = [
    { feature: "Per-Minute Rate", cri: "₹3.5", agencies: "₹5 – ₹10", telecallers: "N/A" },
    { feature: "Monthly Cost", cri: "From ₹7,000", agencies: "₹40K – ₹3L", telecallers: "₹15K–₹30K/head" },
    { feature: "Setup Time", cri: "3–5 Days", agencies: "4–8 Weeks", telecallers: "Months" },
    { feature: "24/7 Availability", cri: "✅", agencies: "partial", telecallers: "❌" },
    { feature: "Hidden Charges", cri: "❌", agencies: "✅ Always", telecallers: "Varies" },
    { feature: "Scales Instantly", cri: "✅", agencies: "❌", telecallers: "❌" },
];

const CellValue = ({ val }: { val: string }) => {
    if (val === "✅") return <CheckCircle2 className="mx-auto" size={20} style={{ color: "#22C55E" }} />;
    if (val === "❌") return <XCircle className="mx-auto" size={20} style={{ color: "#EF4444" }} />;
    if (val === "partial") return <span style={{ color: "#F59E0B" }}>Partial</span>;
    return <span>{val}</span>;
};

export default function Comparison() {
    return (
        <section className="bg-[#08080C] py-28 px-6 border-t border-[#1E1E2E]" id="results">
            <div className="max-w-[960px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#7C3AED" }}>
                        THE HONEST COMPARISON
                    </p>
                    <h2
                        className="font-bold text-white font-display tracking-tight"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        Why Businesses Choose RapidXAI.
                    </h2>
                </motion.div>

                <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                    <div
                        className="min-w-[700px] w-full overflow-hidden rounded-2xl"
                        style={{ border: "1px solid #1E1E2E" }}
                    >
                        {/* Header Row */}
                        <div
                            className="grid grid-cols-4"
                            style={{ background: "#0F0F14", borderBottom: "1px solid #1E1E2E" }}
                        >
                            <div className="p-4 pl-6 text-left" style={{ color: "#4B5563", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                                Feature
                            </div>
                            <div className="p-4 text-center relative" style={{ background: "rgba(124,58,237,0.08)" }}>
                                <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "#7C3AED" }} />
                                <span className="font-bold" style={{ color: "#A855F7", fontSize: "15px" }}>✦ RapidXAI</span>
                            </div>
                            <div className="p-4 text-center font-semibold text-white/80" style={{ fontSize: "15px" }}>Other Agencies</div>
                            <div className="p-4 text-center font-semibold text-white/80 pr-6" style={{ fontSize: "15px" }}>Telecallers</div>
                        </div>

                        {/* Data Rows */}
                        {tableData.map((row, i) => (
                            <motion.div
                                key={row.feature}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="grid grid-cols-4 group"
                                style={{
                                    borderBottom: i < tableData.length - 1 ? "1px solid #1E1E2E" : undefined,
                                    background: i % 2 === 1 ? "rgba(255,255,255,0.01)" : "transparent",
                                }}
                            >
                                <div className="p-4 pl-6 flex items-center font-medium" style={{ color: "#9CA3AF", fontSize: "15px" }}>
                                    {row.feature}
                                </div>
                                <div className="p-4 text-center flex items-center justify-center font-bold" style={{ color: "#F8F8FF", fontSize: "15px", background: "rgba(124,58,237,0.02)" }}>
                                    <CellValue val={row.cri} />
                                </div>
                                <div className="p-4 text-center flex items-center justify-center" style={{ color: "#9CA3AF", fontSize: "15px" }}>
                                    <CellValue val={row.agencies} />
                                </div>
                                <div className="p-4 pr-6 text-center flex items-center justify-center" style={{ color: "#9CA3AF", fontSize: "15px" }}>
                                    <CellValue val={row.telecallers} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
