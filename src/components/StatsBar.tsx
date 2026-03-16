"use client";

import { Phone, IndianRupee, Clock, Shield, Infinity } from "lucide-react";

const stats = [
    { icon: Phone, label: "500+ Calls Handled" },
    { icon: IndianRupee, label: "₹3.5/Min Flat" },
    { icon: Clock, label: "Live in 3 Days" },
    { icon: Shield, label: "Zero Setup Fees" },
    { icon: Infinity, label: "24/7 Always On" },
];

export default function StatsBar() {
    return (
        <div
            className="w-full border-t border-b overflow-x-auto"
            style={{ background: "#0F0F14", borderColor: "#1E1E2E", height: "64px" }}
        >
            <div className="flex items-center justify-center md:justify-between h-full max-w-5xl mx-auto px-6 min-w-max md:min-w-0 gap-0">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="flex items-center">
                            <div className="flex items-center gap-2 px-6 md:px-8">
                                <Icon size={14} style={{ color: "#7C3AED" }} />
                                <span
                                    className="font-semibold uppercase"
                                    style={{ color: "#9CA3AF", fontSize: "13px", letterSpacing: "0.08em", whiteSpace: "nowrap" }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                            {i < stats.length - 1 && (
                                <div className="w-px h-5 shrink-0" style={{ background: "#1E1E2E" }} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
