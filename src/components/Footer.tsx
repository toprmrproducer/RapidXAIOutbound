"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-[#E4E4E7]">
            <div className="max-w-6xl mx-auto px-6">

                {/* 4-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="#" className="font-display text-2xl font-extrabold tracking-tight flex items-center gap-0 mb-3">
                            <span className="text-[#18181B]">RapidX</span>
                            <span className="text-[#7c6af5]">AI</span>
                        </a>
                        <p className="text-sm text-[#71717A] leading-relaxed">
                            Enterprise-grade AI that helps you scale revenue — automatically.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h5 className="font-display font-bold text-[#18181B] mb-4 text-sm">Product</h5>
                        <ul className="space-y-2.5 text-sm text-[#71717A]">
                            <li><a href="#services" className="hover:text-[#7c6af5] transition-colors">Inbound Agent</a></li>
                            <li><a href="#services" className="hover:text-[#7c6af5] transition-colors">Outbound Agent</a></li>
                            <li><a href="#pricing" className="hover:text-[#7c6af5] transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h5 className="font-display font-bold text-[#18181B] mb-4 text-sm">Company</h5>
                        <ul className="space-y-2.5 text-sm text-[#71717A]">
                            <li>
                                <a href="#" className="hover:text-[#7c6af5] transition-colors flex items-center gap-1">
                                    LinkedIn <ArrowUpRight size={11} />
                                </a>
                            </li>
                            <li><a href="#" className="hover:text-[#7c6af5] transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-[#7c6af5] transition-colors">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="font-display font-bold text-[#18181B] mb-3 text-sm">Stay Updated</h5>
                        <p className="text-xs text-[#71717A] mb-4 leading-relaxed">
                            AI voice agent insights and product updates — straight to your inbox.
                        </p>
                        <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A1A1AA] text-sm select-none">@</span>
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="w-full bg-[#F5F6F7] border border-[#E4E4E7] rounded-full py-3 pl-9 pr-12 text-sm outline-none focus:border-[#7c6af5] transition-colors text-[#18181B] placeholder:text-[#A1A1AA]"
                            />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#7c6af5] hover:bg-[#6d56eb] text-white p-2.5 rounded-full transition-colors">
                                <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[#E4E4E7] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[#A1A1AA]">
                        © {new Date().getFullYear()} RapidXAI Technologies. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#A1A1AA] items-center">
                        <a href="#" className="hover:text-[#18181B] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#18181B] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#18181B] transition-colors">Cookie Settings</a>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#E4E4E7] text-[#A1A1AA]">SOC2</span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#E4E4E7] text-[#A1A1AA]">GDPR</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
