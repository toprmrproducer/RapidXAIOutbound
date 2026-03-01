"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Check, ArrowRight, Headphones, Target, Database, Users, Phone, Brain, Calendar, MessageSquare } from "lucide-react";
import SecurityOrbit from "./SecurityOrbit";
import MarqueeTagStrip, { RAPIDX_CAPABILITIES } from "./MarqueeTagStrip";

const inboundFlow = ["Greet", "Qualify", "Route", "Schedule"];
const outboundFlow = ["Target", "Connect", "Pitch", "Book"];

interface BentoCardProps extends HTMLMotionProps<"div"> {
    children?: React.ReactNode;
}

const BentoCard = ({ children, className = "", ...props }: BentoCardProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            {...props}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`relative overflow-hidden card ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition duration-300 z-0"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,106,245,0.06), transparent 40%)`,
                }}
            />
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};

function SectionLabel({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <span className="text-[#7c6af5] text-xl font-light">└</span>
            <span className="section-label">{text}</span>
            <span className="text-[#7c6af5] text-xl font-light">┐</span>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <SectionLabel text="Our Core Services" />
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
                        One AI Workforce.{" "}
                        <span className="text-[#71717A]">Every Call Covered.</span>
                    </h2>
                </motion.div>

                {/* Top row — 1 + 2 col bento */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {/* Inbound — 1 col */}
                    <BentoCard
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 flex flex-col"
                    >
                        <div className="w-11 h-11 rounded-xl bg-[#ede9fe] border border-[#ddd6fe] flex items-center justify-center mb-5">
                            <Headphones size={20} className="text-[#6d56eb]" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-[#18181B] mb-2">Inbound AI Agent</h3>
                        <p className="text-[#71717A] text-sm leading-relaxed mb-5">
                            Never miss another opportunity. The AI answers instantly, asks smart qualifying questions, and books meetings directly into your calendar.
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 mb-5">
                            {inboundFlow.map((step, i) => (
                                <div key={step} className="flex items-center gap-1.5">
                                    <span className="px-2.5 py-1 rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] text-xs font-medium text-[#18181B]">
                                        {step}
                                    </span>
                                    {i < inboundFlow.length - 1 && <ArrowRight size={11} className="text-[#D4D4D8]" />}
                                </div>
                            ))}
                        </div>

                        <ul className="mt-auto space-y-2">
                            <li className="flex items-center gap-2 text-sm text-[#52525B]">
                                <Check size={13} className="text-[#7c6af5] shrink-0" />
                                Seamless handoff to your team when needed
                            </li>
                            <li className="flex items-center gap-2 text-sm text-[#52525B]">
                                <Check size={13} className="text-[#7c6af5] shrink-0" />
                                Smart CRM-based routing
                            </li>
                        </ul>
                    </BentoCard>

                    {/* Outbound — 2 col */}
                    <BentoCard
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 lg:col-span-2 relative overflow-hidden flex flex-col justify-center"
                    >
                        {/* Background watermark */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none pr-6 z-0">
                            <span className="font-display font-extrabold text-[9rem] leading-none text-[#F4F4F5] tracking-widest">
                                SDR
                            </span>
                        </div>

                        <div className="relative z-10 w-full max-w-xl">
                            <div className="w-11 h-11 rounded-xl bg-[#dcfce7] border border-[#bbf7d0] flex items-center justify-center mb-5">
                                <Target size={20} className="text-emerald-600" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-[#18181B] mb-2">Outbound AI SDR</h3>
                            <p className="text-[#71717A] text-sm leading-relaxed mb-6 max-w-md">
                                A tireless SDR that never forgets to follow up. Polite, persistent outreach that runs campaigns at scale and turns conversations into meetings.
                            </p>

                            <div className="flex flex-wrap items-center gap-1.5 mb-6">
                                {outboundFlow.map((step, i) => (
                                    <div key={step} className="flex items-center gap-1.5">
                                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-700">
                                            {step}
                                        </span>
                                        {i < outboundFlow.length - 1 && <ArrowRight size={11} className="text-[#D4D4D8]" />}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-3 max-w-sm">
                                <div className="bg-white/80 backdrop-blur-sm border border-[#E4E4E7] rounded-xl p-4 shadow-sm">
                                    <p className="font-display text-2xl font-bold text-[#18181B] mb-0.5">3×</p>
                                    <p className="text-xs text-[#71717A]">More connects vs human SDR</p>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm border border-[#E4E4E7] rounded-xl p-4 shadow-sm">
                                    <p className="font-display text-2xl font-bold text-[#18181B] mb-0.5">14,293</p>
                                    <p className="text-xs text-[#71717A]">Contacts reached today</p>
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                {/* Bottom row — 2 × 1 col */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

                    {/* CRM Integration */}
                    <BentoCard
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-2"
                    >
                        <div className="p-6 lg:p-8 flex flex-col md:flex-row gap-7 items-start lg:items-center w-full h-full">
                            <div className="flex-1">
                                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                                    <Database size={20} className="text-indigo-600" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-[#18181B] mb-2">CRM & Calendar Sync</h3>
                                <p className="text-[#71717A] text-sm leading-relaxed">
                                    Connects directly with HubSpot, Salesforce, and Google Calendar. Every note, status update, and meeting is synced automatically.
                                </p>
                            </div>
                            {/* Mini checklist */}
                            <div className="w-full md:w-56 shrink-0 bg-white shadow-sm border border-[#E4E4E7] rounded-2xl p-4 relative z-10 transition-transform hover:-translate-y-1">
                                <div className="bg-[#ede9fe] border border-[#ddd6fe] p-3 rounded-xl mb-3 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-[#18181B]">Integration Setup</span>
                                    <Check size={14} className="text-[#7c6af5]" />
                                </div>
                                {["HubSpot CRM", "Google Calendar", "SMS Follow-ups", "Slack Alerts"].map((item, i) => (
                                    <div key={item} className="flex items-center gap-2 py-1.5 text-xs text-[#71717A]">
                                        <Check size={11} className={i < 2 ? "text-[#7c6af5]" : "text-[#D4D4D8]"} />
                                        {item}
                                        <div className={`ml-auto w-3 h-3 rounded-full border ${i < 2 ? "bg-[#7c6af5] border-[#7c6af5]" : "border-[#D4D4D8]"}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Enterprise Security */}
                    <BentoCard
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="overflow-hidden min-h-[400px] lg:col-span-2"
                    >
                        <div className="flex flex-col lg:flex-row w-full h-full">
                            <div className="p-6 pb-0 lg:p-8 lg:pb-8 flex-1 relative z-10 max-w-md lg:shrink-0 flex items-center">
                                <div>
                                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                                        <Users size={20} className="text-slate-600" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-[#18181B] mb-3">Enterprise Security</h3>
                                    <p className="text-[#52525B] text-base leading-relaxed">
                                        Built with SOC2-ready processes, end-to-end encryption, GDPR compliance, and priority support for enterprise clients.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex-1 min-h-[340px] lg:min-h-full flex items-center justify-center mt-[-2rem] lg:mt-0">
                                <div className="absolute inset-x-0 inset-y-8 md:inset-0 w-full h-full flex items-center justify-center scale-90 lg:scale-[0.85] xl:scale-100">
                                    <SecurityOrbit />
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                {/* ── Routing Flow — full-width card ── */}
                <BentoCard
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-5 px-8 pt-8 pb-4"
                >
                    <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#A1A1AA] mb-1">Under the Hood</p>
                    <h3 className="font-display text-lg font-bold text-[#18181B] mb-2">How Every Call Gets Handled</h3>

                    {/* aspect-[2/1] — SVG scales proportionally with card width */}
                    <div className="relative w-full aspect-[2/1]">
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full overflow-visible"
                        >
                            {/* Phone → Brain */}
                            <motion.path
                                d="M 140 200 H 330"
                                stroke="#7c6af5" strokeWidth="1.5" strokeDasharray="6 4"
                                variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.2, ease: "easeInOut" }, opacity: { duration: 0.01 } } } }}
                                initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            />
                            {/* Brain → Calendar */}
                            <motion.path
                                d="M 430 200 C 500 200, 500 100, 620 100"
                                stroke="#7c6af5" strokeWidth="1.5" strokeDasharray="6 4"
                                variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.2, ease: "easeInOut" }, opacity: { duration: 0.01 } } } }}
                                initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            />
                            {/* Brain → CRM */}
                            <motion.path
                                d="M 430 200 H 620"
                                stroke="#7c6af5" strokeWidth="1.5" strokeDasharray="6 4"
                                variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.2, ease: "easeInOut" }, opacity: { duration: 0.01 } } } }}
                                initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            />
                            {/* Brain → SMS */}
                            <motion.path
                                d="M 430 200 C 500 200, 500 300, 620 300"
                                stroke="#7c6af5" strokeWidth="1.5" strokeDasharray="6 4"
                                variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.2, ease: "easeInOut" }, opacity: { duration: 0.01 } } } }}
                                initial="hidden" whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            />

                            {/* Phone node */}
                            <foreignObject x="60" y="160" width="80" height="80">
                                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "12%" }}>
                                    <div style={{ width: "100%", height: "100%", background: "white", borderRadius: "22%", border: "1px solid #E4E4E7", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", padding: "18%" }}>
                                        <Phone style={{ width: "100%", height: "100%" }} color="#374151" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </foreignObject>

                            {/* AI Brain node */}
                            <foreignObject x="330" y="150" width="100" height="100">
                                <motion.div
                                    style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%" }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                                >
                                    <div style={{ width: "100%", height: "100%", background: "#6d56eb", borderRadius: "50%", boxShadow: "0 8px 24px rgba(109,86,235,0.35)", outline: "4px solid #ede9fe", display: "flex", alignItems: "center", justifyContent: "center", padding: "20%" }}>
                                        <Brain style={{ width: "100%", height: "100%" }} color="white" strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                            </foreignObject>

                            {/* Calendar node */}
                            <foreignObject x="620" y="60" width="80" height="80">
                                <motion.div
                                    style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.4, duration: 0.45, ease: "easeOut" }}
                                >
                                    <div style={{ width: "58%", height: "58%", background: "white", borderRadius: "20%", border: "1px solid #E4E4E7", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", padding: "18%", color: "#6d56eb" }}>
                                        <Calendar style={{ width: "100%", height: "100%" }} strokeWidth={1.5} />
                                    </div>
                                    <div style={{ fontSize: "9px", fontWeight: "700", marginTop: "6%", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A1A1AA", textAlign: "center" }}>Calendar</div>
                                </motion.div>
                            </foreignObject>

                            {/* CRM node */}
                            <foreignObject x="620" y="160" width="80" height="80">
                                <motion.div
                                    style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.55, duration: 0.45, ease: "easeOut" }}
                                >
                                    <div style={{ width: "58%", height: "58%", background: "white", borderRadius: "20%", border: "1px solid #E4E4E7", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", padding: "18%", color: "#6d56eb" }}>
                                        <Users style={{ width: "100%", height: "100%" }} strokeWidth={1.5} />
                                    </div>
                                    <div style={{ fontSize: "9px", fontWeight: "700", marginTop: "6%", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A1A1AA", textAlign: "center" }}>CRM</div>
                                </motion.div>
                            </foreignObject>

                            {/* SMS node */}
                            <foreignObject x="620" y="260" width="80" height="80">
                                <motion.div
                                    style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.7, duration: 0.45, ease: "easeOut" }}
                                >
                                    <div style={{ width: "58%", height: "58%", background: "white", borderRadius: "20%", border: "1px solid #E4E4E7", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", padding: "18%", color: "#6d56eb" }}>
                                        <MessageSquare style={{ width: "100%", height: "100%" }} strokeWidth={1.5} />
                                    </div>
                                    <div style={{ fontSize: "9px", fontWeight: "700", marginTop: "6%", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A1A1AA", textAlign: "center" }}>SMS</div>
                                </motion.div>
                            </foreignObject>
                        </svg>
                    </div>
                </BentoCard>

            </div>
        </section>
    );
}
