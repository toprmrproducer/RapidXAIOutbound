"use client";

import { motion } from "framer-motion";

const tools = [
    { name: "HubSpot", icon: "H" },
    { name: "Salesforce", icon: "S" },
    { name: "Zoho CRM", icon: "Z" },
    { name: "Calendly", icon: "C" },
    { name: "Slack", icon: "Sl" },
    { name: "WhatsApp", icon: "W" },
    { name: "Airtable", icon: "A" },
    { name: "Google", icon: "G" },
    { name: "Zapier", icon: "Z" },
    { name: "n8n", icon: "n" },
    { name: "Twilio", icon: "T" },
    { name: "Webhook", icon: "{}" },
];

export default function Integrations() {
    return (
        <section className="bg-[#060010] py-24 px-6 pb-32">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3 text-center">
                        Integrations
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight text-center">
                        Connects with your stack
                    </h2>
                    <p className="text-white/50 mb-16 max-w-lg mx-auto text-center text-lg">
                        Works seamlessly with the tools your team already uses — no rip and replace required.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="rounded-2xl border border-white/10 bg-white/5 py-6 px-3 flex flex-col items-center gap-3 hover:border-[#7C3AED]/50 hover:bg-white/10 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base font-bold text-white/50 group-hover:text-white group-hover:border-[#7C3AED]/30 transition-colors shadow-inner">
                                {tool.icon}
                            </div>
                            <span className="text-white/50 text-sm font-medium tracking-wide group-hover:text-white/90 transition-colors">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
