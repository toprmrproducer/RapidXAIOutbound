"use client";

const footerColumns = [
    { heading: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
    { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Security", "GDPR"] },
];

export default function Footer() {
    return (
        <footer className="bg-[#060010] border-t border-white/5 py-16 px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16">

                {/* Brand Column */}
                <div className="col-span-2 flex flex-col gap-5">
                    <span className="text-white font-bold text-xl font-display tracking-tight flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] flex items-center justify-center text-xs text-white shadow-sm">
                            <span className="opacity-90">R</span>
                        </div>
                        RapidX <span className="text-[#A78BFA] font-light">AI</span>
                    </span>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                        India's most cost-effective enterprise AI voice platform. Built for reliability, security, and scale.
                    </p>
                    <div className="flex gap-3 mt-2">
                        {["𝕏", "in", "▶"].map(icon => (
                            <a
                                key={icon}
                                href="#"
                                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 text-xs hover:border-[#7C3AED]/50 hover:text-white hover:bg-white/10 transition-colors duration-300"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                {footerColumns.map(col => (
                    <div key={col.heading} className="flex flex-col gap-5">
                        <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                            {col.heading}
                        </p>
                        <ul className="flex flex-col gap-3">
                            {col.links.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-white/70 text-sm hover:text-white hover:translate-x-1 block transition-all duration-200 w-fit">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/30 text-xs font-medium">
                    © {new Date().getFullYear()} RapidX AI. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-white/30 text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    All systems operational
                </div>
                <p className="text-white/30 text-xs font-medium">
                    Built in India 🇮🇳
                </p>
            </div>
        </footer>
    );
}
