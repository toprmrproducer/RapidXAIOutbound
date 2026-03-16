"use client";

import { motion } from "framer-motion";

const footerColumns = [
    { heading: "Platform", links: ["Inbound Agents", "Outbound Agents", "Full Stack Voice", "Pricing"] },
    { heading: "Resources", links: ["Documentation", "API Setup", "Use Cases", "Status"] },
    { heading: "Company", links: ["About Us", "Contact", "Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
    return (
        <footer className="bg-[#040008] border-t border-[#1E1E2E] pt-24 pb-12 px-6 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col gap-16">
                
                {/* Top Section: Brand & Links */}
                <div className="flex flex-col md:flex-row justify-between gap-16">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <span className="text-white font-bold text-2xl font-display tracking-tight flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-sm text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                                <span className="opacity-90 font-black">C</span>
                            </div>
                            CR/<span className="text-[#A78BFA] font-light">AI</span>
                        </span>
                        <p style={{ color: "#9CA3AF", fontSize: "15px", lineHeight: "1.6" }}>
                            Enterprise-grade AI voice agents tailored for Indian businesses. Built to scale your sales and support without scaling your headcount.
                        </p>
                        
                        {/* Founder Link */}
                        <div className="mt-2 p-4 rounded-xl border border-[#2D2D3D] bg-[#0F0F14] hover:border-[#7C3AED]/50 transition-all duration-300 w-fit group">
                            <p className="text-[13px] text-[#A78BFA] font-semibold tracking-wider uppercase mb-1">
                                THE FOUNDER
                            </p>
                            <a 
                                href="https://www.youtube.com/@ShreyasRaj" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-white"
                            >
                                <span className="text-sm font-medium">Powered and built by <span className="font-bold underline decoration-[#7C3AED]/50 underline-offset-4 group-hover:decoration-[#7C3AED] transition-colors">Shreyas Raj</span></span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div className="flex gap-12 md:gap-24 flex-wrap">
                        {footerColumns.map(col => (
                            <div key={col.heading} className="flex flex-col gap-6">
                                <p className="text-white text-sm font-semibold tracking-wide">
                                    {col.heading}
                                </p>
                                <ul className="flex flex-col gap-4">
                                    {col.links.map((link) => {
                                        let href = "#";
                                        if (link === "Pricing") href = "/#pricing";
                                        if (link === "Privacy Policy") href = "/privacy";
                                        if (link === "Terms of Service") href = "/terms";

                                        return (
                                        <li key={link}>
                                            <a href={href} className="text-[#9CA3AF] text-[14px] hover:text-[#A78BFA] transition-colors duration-200 block">
                                                {link}
                                            </a>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1E1E2E] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#6B7280] text-[13px] font-medium tracking-wide">
                        © {new Date().getFullYear()} CR/AI Networks. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[#9CA3AF] text-[13px] font-medium bg-[#0F0F14] px-4 py-2 rounded-full border border-[#1E1E2E]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                            All systems nominal
                        </div>
                        <p className="text-[#6B7280] text-[13px] font-medium hidden md:block">
                            Built with precision in India 🇮🇳
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
