"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Benefits" },
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
            className="fixed top-5 left-1/2 w-[92%] max-w-4xl z-50"
        >
            <nav
                className="px-6 py-3 flex items-center justify-between gap-6 rounded-full transition-all duration-300"
                style={{
                    background: scrolled
                        ? "rgba(5, 2, 20, 0.7)"
                        : "rgba(5, 2, 20, 0.4)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: scrolled
                        ? "0 18px 40px rgba(0,0,0,0.45)"
                        : "0 8px 30px rgba(0,0,0,0.2)",
                }}
            >
                {/* Logo */}
                <a href="#" className="flex items-center gap-1.5 shrink-0 group">
                    <span className="text-[22px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 font-display transition-transform duration-300 group-hover:scale-105">
                        RX
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-white/70">
                    {links.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-1.5 transition-colors duration-200 group overflow-hidden rounded-full ${isActive ? "text-white" : "hover:text-white"}`}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {/* Animated underline strictly following Apple motion */}
                                <div className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"}`} />
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="flex items-center gap-1.5 bg-white text-[#05020f] px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,255,255,0.15)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                        Book a Call
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
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
                            {isOpen ? <X size={16} /> : <Menu size={16} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                        className="mt-3 bg-[#060010]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.6)]"
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
                            <button className="w-full bg-white text-[#060010] font-bold px-4 py-3.5 rounded-xl text-sm transition-all hover:bg-white/90">
                                Book a Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
