"use client";

import { motion } from "framer-motion";
import { ListChecks, Rocket, Phone, Brain, Calendar, Users, MessageSquare } from "lucide-react";

/* ─── Figma Canvas SVG (Step 02) ───────────────────────────── */
function FigmaCanvasSVG() {
    return (
        <>
            {/* Scoped keyframes — no styled-components needed */}
            <style>{`
        @keyframes rxai-cursor {
          0%   { opacity: 0; transform: translate3d(280px, 40px, 0) scale(1); }
          25%  { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          55%  { opacity: 1; transform: translate3d(-160px, -160px, 0) scale(1); }
          60%  { opacity: 1; transform: translate3d(-160px, -160px, 0) scale(0.93); }
          65%  { opacity: 1; transform: translate3d(-160px, -160px, 0) scale(1); }
          100% { opacity: 1; transform: translate3d(-260px, -30px, 0) scale(1); }
        }
        @keyframes rxai-box {
          0%, 55%  { opacity: 0; }
          60%, 100% { opacity: 1; }
        }
      `}</style>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 614 310"
                width="100%"
                style={{ display: "block", maxWidth: "340px", margin: "0 auto" }}
                aria-hidden="true"
            >
                {/* ── Canvas background ── */}
                <rect x="0" y="0" width="614" height="310" rx="16" fill="#F9FAFB" />

                {/* ── Grid dots for canvas feel ── */}
                <defs>
                    <pattern id="rxai-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#E4E4E7" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="614" height="310" rx="16" fill="url(#rxai-dots)" />

                {/* ── Tool chips (row 1) ── */}
                {/* Qualify */}
                <rect x="40" y="36" width="90" height="32" rx="8" fill="#EDE9FE" stroke="#DDD6FE" strokeWidth="1" />
                <text x="85" y="57" textAnchor="middle" fontSize="12" fontWeight="600" fill="#6D56EB" fontFamily="system-ui,sans-serif">Qualify</text>

                {/* Route */}
                <rect x="148" y="36" width="78" height="32" rx="8" fill="#EDE9FE" stroke="#DDD6FE" strokeWidth="1" />
                <text x="187" y="57" textAnchor="middle" fontSize="12" fontWeight="600" fill="#6D56EB" fontFamily="system-ui,sans-serif">Route</text>

                {/* Schedule */}
                <rect x="244" y="36" width="96" height="32" rx="8" fill="#DCFCE7" stroke="#BBF7D0" strokeWidth="1" />
                <text x="292" y="57" textAnchor="middle" fontSize="12" fontWeight="600" fill="#15803D" fontFamily="system-ui,sans-serif">Schedule</text>

                {/* Follow Up */}
                <rect x="358" y="36" width="100" height="32" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1" />
                <text x="408" y="57" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0369A1" fontFamily="system-ui,sans-serif">Follow Up</text>

                {/* ── Section label ── */}
                <text x="40" y="110" fontSize="10" fontWeight="700" letterSpacing="2" fill="#A1A1AA" fontFamily="system-ui,sans-serif">KNOWLEDGE BASE</text>

                {/* ── Knowledge base blocks (row 2) ── */}
                <rect x="40" y="124" width="160" height="52" rx="10" fill="white" stroke="#E4E4E7" strokeWidth="1.5" />
                <text x="56" y="145" fontSize="10" fontWeight="700" fill="#18181B" fontFamily="system-ui,sans-serif">HubSpot CRM</text>
                <text x="56" y="160" fontSize="10" fill="#71717A" fontFamily="system-ui,sans-serif">Lead + contact sync</text>
                <circle cx="178" cy="150" r="8" fill="#DCFCE7" />
                <text x="178" y="154" textAnchor="middle" fontSize="9" fill="#15803D" fontFamily="system-ui,sans-serif">✓</text>

                <rect x="216" y="124" width="160" height="52" rx="10" fill="white" stroke="#E4E4E7" strokeWidth="1.5" />
                <text x="232" y="145" fontSize="10" fontWeight="700" fill="#18181B" fontFamily="system-ui,sans-serif">Salesforce</text>
                <text x="232" y="160" fontSize="10" fill="#71717A" fontFamily="system-ui,sans-serif">Pipeline + deals</text>
                <circle cx="354" cy="150" r="8" fill="#DCFCE7" />
                <text x="354" y="154" textAnchor="middle" fontSize="9" fill="#15803D" fontFamily="system-ui,sans-serif">✓</text>

                <rect x="392" y="124" width="168" height="52" rx="10" fill="white" stroke="#E4E4E7" strokeWidth="1.5" />
                <text x="408" y="145" fontSize="10" fontWeight="700" fill="#18181B" fontFamily="system-ui,sans-serif">Google Calendar</text>
                <text x="408" y="160" fontSize="10" fill="#71717A" fontFamily="system-ui,sans-serif">Meeting booking</text>
                <circle cx="540" cy="150" r="8" fill="#DCFCE7" />
                <text x="540" y="154" textAnchor="middle" fontSize="9" fill="#15803D" fontFamily="system-ui,sans-serif">✓</text>

                {/* ── Script preview block ── */}
                <text x="40" y="212" fontSize="10" fontWeight="700" letterSpacing="2" fill="#A1A1AA" fontFamily="system-ui,sans-serif">CALL SCRIPT</text>
                <rect x="40" y="226" width="534" height="58" rx="10" fill="white" stroke="#E4E4E7" strokeWidth="1.5" />
                <text x="56" y="247" fontSize="10" fill="#52525B" fontFamily="system-ui,sans-serif">Hi {"{"}lead_name{"}"}, I'm calling from {"{"} company {"}"}. I noticed you showed interest in —</text>
                <text x="56" y="265" fontSize="10" fill="#A1A1AA" fontFamily="system-ui,sans-serif">Handle objection → Ask for time → Book meeting → Log in CRM</text>
                {/* Cursor blink in script */}
                <rect x="295" y="236" width="2" height="14" rx="1" fill="#7C6AF5" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="1.1s" repeatCount="indefinite" />
                </rect>

                {/* ── Animated selection box ── */}
                <g style={{ animation: "rxai-box 5s ease infinite alternate", opacity: 0 }}>
                    <rect
                        x="212" y="120" width="172" height="60"
                        rx="4"
                        fill="rgba(37,99,235,0.06)"
                        stroke="#2563EB"
                        strokeWidth="1.5"
                    />
                    {/* Corner handles */}
                    {[[212, 120], [384, 120], [212, 180], [384, 180]].map(([cx, cy], i) => (
                        <rect key={i} x={cx - 4} y={cy - 4} width="8" height="8" rx="1" fill="white" stroke="#2563EB" strokeWidth="1.5" />
                    ))}
                </g>

                {/* ── Animated cursor ── */}
                <g style={{
                    overflow: "visible",
                    transformOrigin: "center center",
                    transformBox: "fill-box",
                    animation: "rxai-cursor 5s ease infinite alternate",
                }}>
                    {/* Cursor arrow */}
                    <path
                        d="M453.383 255L448 232L468 244L458.5 246L453.383 255Z"
                        fill="#2563EB" stroke="white" strokeWidth="1.5"
                    />
                    {/* Label pill */}
                    <rect x="462" y="255" width="116" height="26" rx="5" fill="#2563EB" />
                    <text x="520" y="272" textAnchor="middle" fontSize="10" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">RapidXAI Agent</text>
                </g>
            </svg>
        </>
    );
}

/* ─── Steps data ─────────────────────────────────────────────── */
const steps = [
    {
        icon: ListChecks,
        number: "01",
        title: "Define Objectives",
        description: "We study your sales process, ideal customer profile, and common objections — then design conversation flows that match your business.",
        iconBg: "bg-[#ede9fe] border-[#ddd6fe]",
        iconColor: "text-[#6d56eb]",
        numColor: "text-[#7c6af5]",
        illustration: null,
    },
    {
        icon: null,
        number: "02",
        title: "Train & Integrate",
        description: "We train the AI using your knowledge base and connect it to your CRM, calendar, and call scripts.",
        iconBg: "",
        iconColor: "",
        numColor: "text-indigo-500",
        illustration: <FigmaCanvasSVG />,
    },
    {
        icon: Rocket,
        number: "03",
        title: "Launch & Scale",
        description: "Your AI goes live. Every call gets answered, and meetings start filling your calendar.",
        iconBg: "bg-emerald-50 border-emerald-100",
        iconColor: "text-emerald-600",
        numColor: "text-emerald-500",
        illustration: null,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-[#F5F6F7]">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[#7c6af5] text-xl font-light">└</span>
                        <span className="section-label">The Process</span>
                        <span className="text-[#7c6af5] text-xl font-light">┐</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
                        Live in{" "}
                        <span className="text-[#71717A]">48–72 Hours.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5 relative items-start">

                    {/* Connector line — z-0 so it sits BEHIND the z-10 cards */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-[#E4E4E7] pointer-events-none z-0">
                        <motion.div
                            animate={{ left: ["-5%", "105%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                            className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-[#7c6af5]/40 to-transparent"
                        />
                    </div>

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isFeature = step.illustration !== null;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className={`card flex flex-col relative z-10 ${isFeature ? "p-5" : "p-8 items-center text-center"}`}
                            >
                                {isFeature ? (
                                    /* ── Step 02: illustration card ── */
                                    <>
                                        {/* Step number — above canvas */}
                                        <p className={`text-xs font-bold ${step.numColor} tracking-widest font-display mb-3`}>
                                            {step.number}
                                        </p>

                                        {/* Figma canvas illustration */}
                                        <div className="w-full rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#F9FAFB] mb-5">
                                            {step.illustration}
                                        </div>

                                        <h3 className="font-display text-lg font-bold text-[#18181B] mb-2">{step.title}</h3>
                                        <p className="text-[#71717A] text-sm leading-relaxed">{step.description}</p>
                                    </>
                                ) : (
                                    /* ── Steps 01 & 03: icon cards ── */
                                    <>
                                        <p className={`text-xs font-bold ${step.numColor} tracking-widest font-display mb-4`}>
                                            {step.number}
                                        </p>
                                        <div className={`w-14 h-14 rounded-2xl ${step.iconBg} border flex items-center justify-center mb-5`}>
                                            {Icon && <Icon size={24} className={step.iconColor} />}
                                        </div>
                                        <h3 className="font-display text-lg font-bold text-[#18181B] mb-2">{step.title}</h3>
                                        <p className="text-[#71717A] text-sm leading-relaxed">{step.description}</p>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
