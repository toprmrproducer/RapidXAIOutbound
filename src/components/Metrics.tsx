"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Animated counter ─────────────────────────────────────── */
function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const step = (now: number) => {
            const elapsed = (now - start) / (duration * 1000);
            const progress = Math.min(elapsed, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, to, duration]);

    return (
        <span ref={ref} className="font-mono-premium tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

/* ── Spotlight card wrapper ───────────────────────────────── */
function SpotlightCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty("--mouse-x", `${x}%`);
        ref.current.style.setProperty("--mouse-y", `${y}%`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={`spotlight-card glass-card rounded-2xl p-8 text-center relative overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
}

const stats = [
    { value: 999, suffix: ".9%", label: "Uptime SLA" },
    { value: 1, suffix: "s", prefix: "<", label: "Response Latency" },
    { value: 3, suffix: "×", label: "More Connects" },
    { value: 24, suffix: "/7", label: "Active Pipeline" },
];

/* ── Scrolling brand logos (placeholder) ─────────────────── */
const brands = [
    "Groww", "Zomato", "Meesho", "Nykaa", "BharatPe", "Razorpay", "OYO", "CRED",
];

export default function Metrics() {
    return (
        <section className="py-20 relative z-10 overflow-hidden">

            {/* ── Stats Grid ────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-center text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
                    Engineered for Scale
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <SpotlightCard>
                                <div className="mb-3">
                                    <span className="text-4xl md:text-5xl font-display font-bold text-gradient-primary">
                                        {s.prefix}
                                        <Counter to={s.value} suffix={s.suffix} />
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm font-medium">{s.label}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Marquee Brand Strip ───────────────────────────────── */}
            <div className="mt-20 border-y border-white/5 py-8 marquee-fade">
                <p className="text-center text-slate-600 text-[10px] font-semibold tracking-[0.25em] uppercase mb-6 px-6">
                    Trusted by revenue teams at
                </p>
                <div className="overflow-hidden">
                    <div className="animate-marquee gap-16 items-center">
                        {[...brands, ...brands].map((brand, i) => (
                            <span
                                key={i}
                                className="font-display font-semibold text-slate-600 text-lg tracking-tight hover:text-slate-400 transition-colors whitespace-nowrap mx-8 inline-block"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
