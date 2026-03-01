"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mic, MicOff, Settings, MessageSquare, Volume2,
    Sparkles, Activity, User, Check, Zap, Database, Repeat
} from "lucide-react";
import WaveformCard from "./WaveformCard";

/* ── Deterministic waveform bars (SSR-safe, no Math.random on render) ── */
const WAVE_BARS = Array.from({ length: 14 }, (_, i) => {
    const pr = ((i * 1234567) % 100) / 100;
    return { active: 4 + pr * 20 };
});

/* ── Living Aura ──────────────────────────────────────────────────── */
function LivingAura({ isListening, isProcessing }: { isListening: boolean; isProcessing: boolean }) {
    return (
        <div className="relative w-36 h-36 flex items-center justify-center pointer-events-none">
            <motion.div
                animate={isListening ? { scale: [1, 1.4, 1.1, 1.3, 1], opacity: [0.1, 0.3, 0.15, 0.25, 0.1] } : { scale: 1, opacity: 0.1 }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-emerald-400 rounded-full blur-[50px]"
            />
            <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 overflow-visible">
                <defs>
                    <radialGradient id="dcAuraGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#34d399" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </radialGradient>
                    <filter id="dcSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
                    </filter>
                </defs>
                <g filter="url(#dcSoftBlur)">
                    <motion.circle
                        cx="100" cy="100" r={isListening ? 55 : 45}
                        fill="url(#dcAuraGrad)"
                        animate={isListening ? { scale: [1, 1.15, 0.9, 1.1, 1], opacity: [0.5, 0.9, 0.6, 0.8, 0.5] } : { scale: 1, opacity: 0.4 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {[0, 1, 2, 3].map((i) => (
                        <motion.circle
                            key={i} cx="100" cy="100" r="25"
                            fill="url(#dcAuraGrad)"
                            animate={isListening ? {
                                cx: [100, 100 + Math.cos(i * 1.5) * 40, 100],
                                cy: [100, 100 + Math.sin(i * 1.5) * 40, 100],
                                scale: [0.8, 1.3, 0.7, 1], opacity: [0, 0.4, 0],
                            } : { opacity: 0 }}
                            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        />
                    ))}
                </g>
                {/* Core icon */}
                <foreignObject x="75" y="75" width="50" height="50">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50px" }}>
                        <AnimatePresence mode="wait">
                            {isProcessing ? (
                                <motion.div key="proc" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                                    <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}>
                                        <Sparkles color="white" size={26} strokeWidth={2} style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }} />
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    style={{ width: 14, height: 14, background: "white", borderRadius: "50%", border: "2px solid #d1fae5", boxShadow: "0 0 20px #10b981" }}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
}

/* ── Fluid Waveform ───────────────────────────────────────────────── */
function FluidWaveform({ active }: { active: boolean }) {
    return (
        <div className="flex items-center gap-1 h-7 px-4 bg-[#F9F9FB] rounded-full border border-[#E4E4E7]">
            {WAVE_BARS.map((bar, i) => (
                <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-emerald-500"
                    animate={active ? { height: [3, bar.active, 3], opacity: [0.4, 1, 0.4] } : { height: 3, opacity: 0.2 }}
                    transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

/* ── Message bubble ───────────────────────────────────────────────── */
function MessageItem({ text, isAI }: { text: string; isAI: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className={`flex w-full ${isAI ? "justify-start" : "justify-end"}`}
        >
            <div className={`flex max-w-[88%] items-end gap-2 ${isAI ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 border text-[11px] ${isAI ? "bg-emerald-500 text-white border-emerald-400" : "bg-[#F4F4F5] text-[#71717A] border-[#E4E4E7]"
                    }`}>
                    {isAI ? <Sparkles size={11} /> : <User size={11} />}
                </div>
                <div className={`px-3 py-2.5 rounded-2xl text-[12.5px] leading-relaxed font-medium border ${isAI
                    ? "bg-emerald-50 text-emerald-900 border-emerald-100/60 rounded-bl-none"
                    : "bg-white text-[#18181B] border-[#E4E4E7] rounded-br-none"
                    }`}>
                    {text}
                </div>
            </div>
        </motion.div>
    );
}

/* ── Voice Agent card ─────────────────────────────────────────────── */
function VoiceAgentCard() {
    const [status, setStatus] = useState<"idle" | "listening" | "processing">("idle");
    const [chat, setChat] = useState([
        { id: 1, text: "Happy to help! We have three tiers from ₹7,000/mo. Are you looking for inbound, outbound — or both?", isAI: true },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [chat]);

    const runDemo = () => {
        if (status !== "idle") return;
        setStatus("listening");
        setTimeout(() => {
            setChat((p) => [...p, { id: Date.now(), text: "Probably both. Do you have a combined package?", isAI: false }]);
            setStatus("processing");
            setTimeout(() => {
                setChat((p) => [...p, { id: Date.now() + 1, text: "Yes! Our Omnichannel package is ₹25,000/mo — first 1000 mins free. Want me to book a 30-min demo?", isAI: true }]);
                setStatus("idle");
            }, 2000);
        }, 2800);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <style>{`
                .dc-no-scrollbar::-webkit-scrollbar { display: none; }
                .dc-no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .dc-mask { mask-image: linear-gradient(to bottom, transparent, black 18%, black 88%); }
            `}</style>

            <div className="flex flex-col w-full h-full max-h-[580px] rounded-[2.5rem] bg-white border border-[#E4E4E7] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.10)] overflow-hidden">

                {/* Header */}
                <div className="px-6 pt-6 pb-3 flex justify-between items-center bg-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                            <Activity size={18} />
                        </div>
                        <div>
                            <h2 className="font-display text-[#18181B] font-bold text-sm tracking-tight">RapidXAI Assistant</h2>
                            <div className="flex items-center gap-1.5">
                                <div className={`w-1.5 h-1.5 rounded-full ${status !== "idle" ? "bg-emerald-500 animate-pulse" : "bg-[#D4D4D8]"}`} />
                                <span className="text-[9px] text-[#A1A1AA] uppercase tracking-[0.22em] font-bold">
                                    {status === "idle" ? "System Ready" : `${status} mode`}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="p-2.5 rounded-xl bg-[#F9F9FB] text-[#A1A1AA] hover:text-[#18181B] transition-all border border-[#E4E4E7]">
                        <Settings size={16} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col min-h-0">
                    {/* Aura viz */}
                    <div className="flex justify-center pt-2 pb-3 shrink-0">
                        <LivingAura isListening={status === "listening"} isProcessing={status === "processing"} />
                    </div>

                    {/* Chat scroll */}
                    <div ref={scrollRef} className="flex-1 px-5 pb-3 overflow-y-auto dc-no-scrollbar dc-mask">
                        <div className="space-y-3">
                            {chat.map((m) => <MessageItem key={m.id} text={m.text} isAI={m.isAI} />)}
                            {status === "listening" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end pr-4">
                                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        Live Transcription
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-7 pt-3 bg-gradient-to-t from-white via-white to-transparent shrink-0">
                    <div className="flex flex-col items-center gap-5">
                        <FluidWaveform active={status === "listening"} />
                        <div className="flex items-center justify-between w-full">
                            <button className="p-3.5 rounded-2xl bg-[#F9F9FB] text-[#A1A1AA] hover:text-[#52525B] transition-all border border-[#E4E4E7]">
                                <MessageSquare size={18} />
                            </button>

                            <motion.button
                                onClick={runDemo}
                                disabled={status !== "idle"}
                                whileHover={status === "idle" ? { scale: 1.06, boxShadow: "0 20px 40px -10px rgba(16,185,129,0.35)" } : {}}
                                whileTap={{ scale: 0.93 }}
                                className={`w-16 h-16 rounded-[1.8rem] flex items-center justify-center transition-all duration-500 border-4 shadow-xl ${status === "listening"
                                    ? "bg-emerald-500 border-emerald-50 shadow-emerald-500/25"
                                    : "bg-[#18181B] border-white text-white"
                                    }`}
                            >
                                {status === "listening"
                                    ? <MicOff size={24} strokeWidth={2.5} color="white" />
                                    : <Mic size={24} strokeWidth={2.5} color="white" />
                                }
                            </motion.button>

                            <button className="p-3.5 rounded-2xl bg-[#F9F9FB] text-[#A1A1AA] hover:text-[#52525B] transition-all border border-[#E4E4E7]">
                                <Volume2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Peripheral stats */}
            <div className="mt-5 flex justify-center gap-8 opacity-50 shrink-0">
                {["Latency: 12ms", "Precision: 99.9%", "Model: RapidXAI Agent"].map((tag, i) => {
                    const [label, val] = tag.split(": ");
                    return (
                        <div key={i} className="text-center">
                            <div className="text-[8px] font-bold text-[#A1A1AA] uppercase tracking-widest mb-0.5">{label}</div>
                            <div className="text-[11px] font-bold text-[#71717A]">{val ?? tag}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function DemoChat() {
    return (
        <section id="demo" className="py-24 px-6 bg-[#F5F6F7]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left side text */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                        <span className="text-[#a196f3] text-lg font-light">└</span>
                        <span className="text-[10px] font-bold text-[#a196f3] uppercase tracking-[0.2em] mt-0.5">Hear It for Yourself</span>
                        <span className="text-[#a196f3] text-lg font-light">┐</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-[3.2rem] leading-tight font-bold tracking-tight mb-6">
                        <span className="text-[#18181B]">Human-Grade</span>{" "}
                        <span className="text-[#71717A]">Dialogue.</span>
                    </h2>
                    <p className="text-[17px] text-[#52525B] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                        Our AI sounds natural and confident. It understands context, handles
                        interruptions smoothly, and guides prospects toward booking a meeting.
                    </p>

                    <div className="flex flex-col gap-4 max-w-xl mx-auto lg:mx-0 text-left">
                        {[
                            "Sub-second response latency",
                            "Custom knowledge base integration",
                            "Real-time CRM note syncing"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#f0ecff] flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-[#7c6af5]" strokeWidth={3} />
                                </div>
                                <span className="text-[15px] text-[#52525B]">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side interactive card */}
                <div className="flex-1 w-full max-w-[480px]">
                    <VoiceAgentCard />
                </div>

            </div>
        </section>
    );
}
