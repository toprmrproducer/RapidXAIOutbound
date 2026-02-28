"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

/* ── Data ── */
const stats = [
    { value: 999, suffix: ".9%", label: "Uptime Guarantee" },
    { value: 1, suffix: "s", prefix: "<", label: "Response Latency" },
    { value: 3, suffix: "×", label: "More Connects vs Human SDR" },
    { value: 24, suffix: "/7", label: "Active Inbound Coverage" },
];

const brands = ["Groww", "Zomato", "Meesho", "Nykaa", "BharatPe", "Razorpay", "OYO", "CRED"];

const PATH = "M 0 130 L 80 110 L 160 120 L 240 70 L 320 80 L 400 35 L 480 45 L 500 15";
const CHART_W = 500;
const CHART_H = 150;

/* ── Animated counter ── */
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const motionVal = useMotionValue(0);

    useEffect(() => {
        if (!inView) return;
        const ctrl = animate(motionVal, to, {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = prefix + Math.round(v) + suffix;
            },
        });
        return ctrl.stop;
    }, [inView, to, motionVal, prefix, suffix]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
}

/* ── Self-Drawing Line Chart ── */
function GrowthChart() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const progress = useMotionValue(0);
    const offsetDist = useTransform(progress, (v) => `${v}%`);

    useEffect(() => {
        if (isInView) {
            const ctrl = animate(progress, 100, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
            return ctrl.stop;
        }
    }, [isInView, progress]);

    return (
        <div ref={ref} className="px-6 pb-6 pt-0">
            <div className="bg-white border border-[#E4E4E7] rounded-2xl p-6 overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-end mb-5">
                    <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#A1A1AA] mb-0.5">Growth Velocity</p>
                        <p className="font-display text-base font-bold text-[#18181B]">Meetings Booked</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-[#A1A1AA] mb-0.5">This Quarter</p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1.4 }}
                            className="font-display text-xl font-extrabold text-emerald-500"
                        >
                            +184%
                        </motion.p>
                    </div>
                </div>

                {/* Chart SVG */}
                <div className="relative h-[150px] w-full">
                    <svg
                        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Grid lines */}
                        {[0, 50, 100, 150].map((y) => (
                            <line key={y} x1="0" y1={y} x2={CHART_W} y2={y} stroke="#F4F4F5" strokeWidth="1" />
                        ))}

                        {/* Area fill */}
                        <motion.path
                            d={`${PATH} L ${CHART_W} ${CHART_H} L 0 ${CHART_H} Z`}
                            fill="url(#chartFill)"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Line */}
                        <motion.path
                            d={PATH}
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                        />

                        {/* Tracing dot */}
                        <circle
                            r="5"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                            style={{
                                offsetPath: `path("${PATH}")`,
                                offsetRotate: "0deg",
                                // @ts-ignore
                                offsetDistance: offsetDist,
                            }}
                        />
                    </svg>
                </div>

                {/* X labels */}
                <div className="flex justify-between mt-3 text-[9px] font-bold text-[#A1A1AA] uppercase tracking-[0.15em]">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => <span key={m}>{m}</span>)}
                </div>
            </div>
        </div>
    );
}

export default function Metrics() {
    return (
        <section className="bg-white border-t border-b border-[#E4E4E7]">

            {/* Stat grid */}
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-6">
                <p className="text-center text-[#A1A1AA] text-[11px] font-bold tracking-[0.2em] uppercase mb-12">
                    Real Results from Real Businesses
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E4E4E7] border border-[#E4E4E7] rounded-2xl overflow-hidden">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white p-8 text-center hover:bg-[#FAFAFA] transition-colors"
                        >
                            <div className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] mb-2 tabular-nums">
                                <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
                            </div>
                            <p className="text-[#71717A] text-sm leading-snug">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Self-drawing growth chart */}
            <div className="max-w-6xl mx-auto">
                <GrowthChart />
            </div>

        </section>
    );
}
