"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 w-[90%] max-w-5xl z-50 px-6 py-3 rounded-full bg-[#050510]/80 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="font-bold text-white text-lg">R</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">RapidXAI</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#services" className="hover:text-white transition-colors">Services</a>
                    <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                </div>

                {/* CTA */}
                <div className="hidden md:flex">
                    <button className="bg-white text-indigo-950 font-semibold px-5 py-2.5 rounded-full hover:bg-slate-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Book Call
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-xl glass-card flex flex-col gap-4"
                >
                    <a href="#services" className="text-slate-300 font-medium" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#benefits" className="text-slate-300 font-medium" onClick={() => setIsOpen(false)}>Benefits</a>
                    <a href="#pricing" className="text-slate-300 font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
                    <button className="bg-white text-indigo-950 font-semibold px-4 py-2 mt-2 rounded-lg w-full">
                        Book Call
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
