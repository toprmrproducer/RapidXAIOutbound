"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Headphones, Target, Database, Users, Phone, Brain, Calendar, MessageSquare } from "lucide-react";

const inboundFlow = ["Greet", "Qualify", "Route", "Schedule"];
const outboundFlow = ["Target", "Connect", "Pitch", "Book"];

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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card p-8 flex flex-col"
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
                    </motion.div>

                    {/* Outbound — 2 col */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="card p-8 lg:col-span-2 relative overflow-hidden"
                    >
                        {/* Background watermark */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none pr-6">
                            <span className="font-display font-extrabold text-[9rem] leading-none text-[#F4F4F5] tracking-widest">
                                SDR
                            </span>
                        </div>

                        <div className="relative z-10">
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

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[#F9F9FB] border border-[#E4E4E7] rounded-xl p-4">
                                    <p className="font-display text-2xl font-bold text-[#18181B] mb-0.5">3×</p>
                                    <p className="text-xs text-[#71717A]">More connects vs human SDR</p>
                                </div>
                                <div className="bg-[#F9F9FB] border border-[#E4E4E7] rounded-xl p-4">
                                    <p className="font-display text-2xl font-bold text-[#18181B] mb-0.5">14,293</p>
                                    <p className="text-xs text-[#71717A]">Contacts reached today</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom row — 2 × 1 col */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

                    {/* CRM Integration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="card p-8 flex flex-col md:flex-row gap-7 items-start"
                    >
                        <div className="flex-1">
                            <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                                <Database size={20} className="text-indigo-600" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-[#18181B] mb-2">CRM &amp; Calendar Sync</h3>
                            <p className="text-[#71717A] text-sm leading-relaxed">
                                Connects directly with HubSpot, Salesforce, and Google Calendar. Every note, status update, and meeting is synced automatically.
                            </p>
                        </div>
                        {/* Mini checklist */}
                        <div className="w-full md:w-52 shrink-0 bg-[#F9F9FB] border border-[#E4E4E7] rounded-2xl p-4">
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
                    </motion.div>

                    {/* Enterprise Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="card p-8 flex flex-col md:flex-row gap-7 items-start"
                    >
                        {/* Animated security viz */}
                        <div className="w-full md:w-44 shrink-0 bg-[#F9F9FB] border border-[#E4E4E7] rounded-2xl overflow-hidden h-36 flex items-center justify-center relative">
                            <svg viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

                                {/* Outer pulse ring 1 */}
                                <motion.circle cx="70" cy="52" r="34"
                                    stroke="#7c6af5" strokeWidth="1"
                                    animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0, 0.35] }}
                                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                                    style={{ transformOrigin: "70px 52px", transformBox: "fill-box" }}
                                />
                                {/* Outer pulse ring 2 — offset */}
                                <motion.circle cx="70" cy="52" r="34"
                                    stroke="#7c6af5" strokeWidth="0.7"
                                    animate={{ scale: [1, 1.65, 1], opacity: [0.2, 0, 0.2] }}
                                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.0 }}
                                    style={{ transformOrigin: "70px 52px", transformBox: "fill-box" }}
                                />

                                {/* Shield body */}
                                <motion.path
                                    d="M70 22 L90 32 L90 54 Q90 68 70 76 Q50 68 50 54 L50 32 Z"
                                    fill="#ede9fe" stroke="#7c6af5" strokeWidth="1.5" strokeLinejoin="round"
                                    initial={{ scale: 0.75, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                                    style={{ transformOrigin: "70px 49px", transformBox: "fill-box" }}
                                />

                                {/* Animated checkmark */}
                                <motion.path
                                    d="M61 49 L67.5 56 L81 42"
                                    stroke="#6d56eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
                                />

                                {/* SOC2 badge — top-left */}
                                <motion.g initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.35 }}>
                                    <rect x="3" y="7" width="36" height="15" rx="7.5" fill="white" stroke="#E4E4E7" strokeWidth="1" />
                                    <text x="21" y="18" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6d56eb" fontFamily="system-ui,sans-serif">SOC2</text>
                                    {/* connector */}
                                    <line x1="39" y1="14" x2="52" y2="36" stroke="#ddd6fe" strokeWidth="1" strokeDasharray="3 2.5" />
                                </motion.g>

                                {/* GDPR badge — top-right */}
                                <motion.g initial={{ opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.18, duration: 0.35 }}>
                                    <rect x="101" y="7" width="36" height="15" rx="7.5" fill="white" stroke="#E4E4E7" strokeWidth="1" />
                                    <text x="119" y="18" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6d56eb" fontFamily="system-ui,sans-serif">GDPR</text>
                                    {/* connector */}
                                    <line x1="101" y1="14" x2="88" y2="36" stroke="#ddd6fe" strokeWidth="1" strokeDasharray="3 2.5" />
                                </motion.g>

                                {/* E2E badge — bottom-center */}
                                <motion.g initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.35, duration: 0.35 }}>
                                    <rect x="50" y="88" width="40" height="15" rx="7.5" fill="white" stroke="#E4E4E7" strokeWidth="1" />
                                    <text x="70" y="99" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6d56eb" fontFamily="system-ui,sans-serif">E2E ENC</text>
                                    {/* connector */}
                                    <line x1="70" y1="76" x2="70" y2="88" stroke="#ddd6fe" strokeWidth="1" strokeDasharray="3 2.5" />
                                </motion.g>

                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5">
                                <Users size={20} className="text-slate-600" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-[#18181B] mb-2">Enterprise Security</h3>
                            <p className="text-[#71717A] text-sm leading-relaxed">
                                Built with SOC2-ready processes, end-to-end encryption, GDPR compliance, and priority support for enterprise clients.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ── Routing Flow — full-width card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="card mt-5 px-8 pt-8 pb-4"
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
                </motion.div>

            </div>
        </section>
    );
}
