"use client";

import { motion } from "framer-motion";

export default function ProductShowcase() {
    return (
        <section className="bg-[#060010] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-3">
                        The Platform
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl font-display tracking-tight leading-tight">
                        All-in-one AI for your sales team
                    </h2>
                </motion.div>

                {/* Feature Row 1 — text left, UI right */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                            📞
                        </div>
                        <h3 className="text-3xl font-bold text-white font-display tracking-tight">
                            Inbound Call Handling
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                            Every incoming call is answered instantly. The agent qualifies the lead using your custom script, captures key info, and books a slot on your calendar — all in one call.
                        </p>
                        <ul className="flex flex-col gap-3 mt-2">
                            {["Natural conversation flow", "Custom qualification scripts", "CRM auto-update after call"].map(item => (
                                <li key={item} className="flex items-center gap-3 text-white/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full rounded-[24px] border border-white/10 bg-[#060010] p-3 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5 bg-[#0a001a] flex items-center justify-center min-h-[340px]">
                            <img src="/images/inbound.png" alt="Inbound Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </motion.div>
                </div>

                {/* Feature Row 2 — UI left, text right */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                            🚀
                        </div>
                        <h3 className="text-3xl font-bold text-white font-display tracking-tight">
                            Outbound Swarm Dialing
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                            Launch campaigns that dial hundreds of leads simultaneously. Each agent handles its own conversation — your team only gets on the call when the lead is ready to buy.
                        </p>
                        <ul className="flex flex-col gap-3 mt-2">
                            {["Parallel outbound dialing", "Live transfer to human agent", "Campaign performance analytics"].map(item => (
                                <li key={item} className="flex items-center gap-3 text-white/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full rounded-[24px] border border-white/10 bg-[#060010] p-3 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5 bg-[#0a001a] flex items-center justify-center min-h-[340px]">
                            <img src="/images/outbound.png" alt="Outbound Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </motion.div>
                </div>

                {/* Feature Row 3 — text left, UI right */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                            🧠
                        </div>
                        <h3 className="text-3xl font-bold text-white font-display tracking-tight">
                            AI Memory & Context
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg">
                            The agent remembers every past interaction with a lead. It picks up where the last call left off — no repetitive questioning, no dropped context.
                        </p>
                        <ul className="flex flex-col gap-3 mt-2">
                            {["Cross-call memory retention", "Lead intent scoring", "Automatic follow-up scheduling"].map(item => (
                                <li key={item} className="flex items-center gap-3 text-white/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full rounded-[24px] border border-white/10 bg-[#060010] p-3 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5 bg-[#0a001a] flex items-center justify-center min-h-[340px]">
                            <img src="/images/memory.png" alt="Memory Timeline" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
