"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastY, setLastY] = useState(0);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Smart Header & Scroll detection
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const goingDown = y > lastY;

            if (y < 80) {
                setHidden(false);
            } else {
                setHidden(goingDown);
            }

            setScrolled(y > 16);
            setLastY(y);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastY]);

    // Active section tracking via IntersectionObserver
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        links.forEach(({ href }) => {
            const el = document.querySelector(href);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(href);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <motion.header
            initial={{ y: -24, opacity: 0, x: "-50%" }}
            animate={{
                y: hidden ? -100 : 0,
                opacity: 1,
                x: "-50%"
            }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-8 left-1/2 w-[92%] max-w-6xl z-50 flex items-center justify-between"
        >
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 shrink-0 group">
                <span className="text-2xl font-black tracking-tighter text-white font-display transition-transform duration-300 group-hover:scale-105">
                    RAPIDX AI
                </span>
            </a>

            {/* Desktop Center Pill */}
            <nav
                className="hidden md:flex items-center justify-center gap-8 rounded-full px-8 py-3 transition-all duration-300"
                style={{
                    background: scrolled
                        ? "rgba(10, 10, 15, 0.85)"
                        : "rgba(20, 20, 25, 0.3)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                }}
            >
                <div className="flex items-center gap-8 text-[14px] font-medium text-white/80">
                    {links.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative transition-colors duration-200 group overflow-hidden ${isActive ? "text-white" : "hover:text-white"}`}
                            >
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        );
                    })}
                </div>
            </nav>

            {/* Right CTA Button */}
            <div className="flex items-center gap-4">
                <button
                    className="relative hidden md:flex items-center justify-center text-white px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 group"
                    style={{
                        background: "#000",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    {/* The intense purple glow behind */}
                    <div className="absolute inset-0 rounded-full blur-[10px] bg-violet-500 opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
                    <div className="absolute inset-0 rounded-full blur-[4px] bg-violet-400 opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />

                    <span className="relative z-10">Get Started →</span>
                </button>

                {/* Mobile toggle */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10 backdrop-blur-md"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isOpen ? "close" : "open"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute top-[120%] left-0 w-full mt-2 bg-[#060010]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`text-[15px] font-semibold py-3 px-4 rounded-xl transition-all ${activeSection === link.href
                                        ? "text-white bg-white/10"
                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="mt-3 pt-4 border-t border-white/10">
                            <button className="w-full bg-[#000] text-white border border-white/20 font-bold px-4 py-3.5 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
