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
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-5 left-1/2 w-[92%] max-w-4xl z-50"
        >
            <nav className="pill-nav px-6 py-3 flex items-center justify-between gap-8">

                {/* Logo */}
                <a href="#" className="flex items-center gap-1 shrink-0">
                    <span className="text-xl font-bold tracking-tight text-white font-display">RapidX</span>
                    <span className="text-xl font-bold text-[#7c6af5] font-display">AI</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1 text-sm font-medium text-white/70">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHovered(link.href)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative px-4 py-2 rounded-full hover:text-white transition-colors"
                        >
                            {hovered === link.href && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center">
                    <button className="btn-shimmer flex items-center gap-1.5 bg-white text-[#18181B] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all">
                        Book a Call
                        <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mt-2 bg-[#18181B] rounded-2xl p-4 flex flex-col gap-2 border border-white/10"
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-white/70 hover:text-white text-sm font-medium py-2 px-3 rounded-xl hover:bg-white/5 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="bg-white text-[#18181B] font-semibold px-4 py-3 mt-1 rounded-xl text-sm w-full">
                            Book a Call
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
