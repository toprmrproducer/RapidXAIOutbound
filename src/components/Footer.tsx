"use client";

import { Bot, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 md:py-24 border-t border-white/10 bg-[#020205] relative z-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                
                {/* Brand Column */}
                <div className="flex flex-col gap-6 md:col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <Bot size={20} className="text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">RapidXAI</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Scale your revenue momentum with enterprise-grade autonomous voice agents. Your 24/7 SDR and Receptionist.
                    </p>
                    <div className="flex items-center gap-4 text-slate-400">
                        <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><MapPin size={20} /></a>
                    </div>
                </div>

                {/* Product Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold mb-2">Product</h4>
                    <a href="#services" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Inbound Agent</a>
                    <a href="#services" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Outbound Agent</a>
                    <a href="#demo" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Live Demo</a>
                    <a href="#pricing" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Pricing</a>
                </div>

                {/* Company Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold mb-2">Company</h4>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">About Us</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Careers</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Contact Sales</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Partners</a>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold mb-2">Legal</h4>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Security (SOC2)</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Data Processing Addendum</a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} RapidXAI. All rights reserved.
                </p>
                
                {/* Trust Badges placeholder */}
                <div className="flex gap-4">
                    <div className="px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase border border-white/10 text-slate-400">SOC2 Type II</div>
                    <div className="px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase border border-white/10 text-slate-400">GDPR Ready</div>
                </div>
            </div>
        </footer>
    );
}
