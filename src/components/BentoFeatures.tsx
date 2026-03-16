"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const BENTOS = [
    {
        title: "Speed",
        description: "Faster time-to-value with our enterprise AI solutions and AI agent marketplace.",
        image: "/images/bento-speed.png",
        span: "md:col-span-5 md:row-span-1",
        aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]",
    },
    {
        title: "Deep capabilities",
        description: "An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise.",
        image: "/images/bento-brain.png",
        span: "md:col-span-7 md:row-span-1",
        aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]",
    },
    {
        title: "Control",
        description: "The power of a standardized platform built for the demands of strict compliance.",
        image: "/images/bento-control.png",
        span: "md:col-span-4 md:row-span-1",
        aspect: "aspect-[3/4] md:aspect-auto md:h-[420px]",
    },
    {
        title: "Flexibility",
        description: "Our design approach is ecosystem agnostic, allowing you to choose any integration.",
        image: "/images/bento-flexibility.png",
        span: "md:col-span-4 md:row-span-1",
        aspect: "aspect-[3/4] md:aspect-auto md:h-[420px]",
    },
];

export default function BentoFeatures() {
    return (
        <section className="bg-[#040108] py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white/50 text-xs font-bold tracking-[0.15em] uppercase">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                                <circle cx="5" cy="12" r="1" />
                            </svg>
                            Exceptionalities
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
                            What sets RAPIDX apart
                        </h2>
                    </div>
                    <p className="text-white/60 text-sm max-w-[280px] leading-relaxed">
                        Smarter, faster, and more adaptive than traditional AI solutions.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-8">

                    {/* The 4 Image Bentos */}
                    {BENTOS.map((bento, idx) => (
                        <motion.div
                            key={bento.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative group rounded-[2rem] overflow-hidden bg-[#0A0512] border border-white/10 ${bento.span} ${bento.aspect} flex flex-col justify-end p-4`}
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-screen pointer-events-none" />

                            {/* Background Image */}
                            <Image
                                src={bento.image}
                                alt={bento.title}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
                            />

                            {/* Frost Glass Panel */}
                            <div className="relative z-20 bg-[#060010]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                {/* Subtle inner highlight line */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <h3 className="text-xl text-white font-medium tracking-tight mb-2">{bento.title}</h3>
                                <p className="text-white/60 text-[14px] leading-relaxed pr-4">{bento.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* 5th Bento: CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-[2rem] overflow-hidden bg-[#0A0512]/50 border border-white/10 md:col-span-4 aspect-[3/4] md:aspect-auto md:h-[420px] p-8 flex flex-col justify-between"
                    >
                        <div className="relative z-20">
                            <h3 className="text-3xl md:text-[2rem] leading-[1.15] text-white font-medium tracking-tight mb-4">
                                Ready to get<br />started?
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-[90%]">
                                Let's make this happen. We're ready when you are.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 relative z-20 w-full mt-8">
                            {/* Primary Button */}
                            <button
                                className="relative flex items-center justify-center text-white w-full py-4 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden"
                                style={{
                                    background: "#000",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                }}
                            >
                                {/* Glowing edges */}
                                <div className="absolute inset-0 bg-blue-500 opacity-40 group-hover:opacity-70 blur-xl transition-opacity duration-300 pointer-events-none" />
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                                <span className="relative z-10">Get Started</span>
                            </button>

                            {/* Secondary Button */}
                            <button className="flex justify-center items-center w-full py-4 rounded-xl text-sm font-semibold text-white/70 bg-[#120B1C]/60 hover:bg-[#1A102A] border border-white/5 transition-colors">
                                <span className="text-white/60 group-hover:text-white transition-colors">Get in <span className="text-blue-400">touch</span></span>
                            </button>
                        </div>

                        {/* Faint subtle background noise or radial gradient for CTA card */}
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
