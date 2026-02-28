"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Benefits" },
    { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-5 left-1/2 w-[92%] max-w-4xl z-50 px-5 py-2.5 rounded-full transition-all duration-500 ${scrolled
                    ? "bg-[#030308]/90 backdrop-blur-2xl border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
                    : "bg-white/[0.04] backdrop-blur-xl border border-white/8"
                }`}
        >
            <div className="flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-[0_0_16px_rgba(124,106,245,0.4)] group-hover:shadow-[0_0_24px_rgba(124,106,245,0.6)] transition-shadow">
                        <span className="font-display font-bold text-white text-sm">R</span>
                    </div>
                    <span className="font-display font-semibold text-lg tracking-tight text-white">RapidXAI</span>
                </a>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHovered(link.href)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-full"
                        >
                            {hovered === link.href && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/7 rounded-full"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.label}</span>
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="btn-shimmer flex items-center gap-1.5 bg-white text-slate-900 font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-slate-100 hover:scale-[1.02] transition-all active:scale-95 shadow-[0_0_24px_rgba(255,255,255,0.15)]">
                        Book Call
                        <ChevronRight size={14} />
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-white border border-white/10 glass"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-3 p-4 rounded-2xl glass-card flex flex-col gap-3"
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-300 font-medium py-2 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="bg-white text-slate-900 font-semibold px-4 py-3 mt-1 rounded-xl text-sm w-full">
                            Book Call
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
