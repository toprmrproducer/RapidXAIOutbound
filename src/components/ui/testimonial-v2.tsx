"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        text: "RapidXAI revolutionized our operations, streamlining our inbound leads. The AI agent keeps us productive, even outside of hours.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Priya Sharma",
        role: "Operations Manager",
    },
    {
        text: "Implementing this AI SDR was smooth and quick. It seamlessly books meetings straight onto my reps' calendars.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rahul Verma",
        role: "Head of Sales",
    },
    {
        text: "The support team is exceptional, guiding us through the custom knowledge base setup and ensuring our AI sounds perfect.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Saman Malik",
        role: "Customer Support Lead",
    },
    {
        text: "This AI's seamless CRM integration enhanced our business operations. Highly recommend for its human-grade dialogue.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Omar Raza",
        role: "CEO",
    },
    {
        text: "Its robust features and quick deployment have transformed our workflow, making our outbound campaigns more efficient.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Zainab Hussain",
        role: "Project Manager",
    },
    {
        text: "The smooth implementation exceeded expectations. It handled objections perfectly, improving overall business performance.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Aliza Khan",
        role: "Business Analyst",
    },
    {
        text: "Our lead generation improved with 24/7 availability and positive customer feedback from the natural-sounding voice.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "They delivered an AI solution that exceeded expectations, understanding our Indian market needs perfectly.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sana Sheikh",
        role: "Sales Manager",
    },
    {
        text: "Using RapidXAI, our conversion rates significantly improved, boosting direct calls into scheduled meetings.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Hassan Ali",
        role: "Go-to-Market Manager",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

/* ── Single card ──────────────────────────────── */
function TestimonialCard({ text, image, name, role }: Testimonial) {
    return (
        <li className="bg-white border border-[#E4E4E7] rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-shadow duration-300 w-full max-w-xs list-none">
            <blockquote className="m-0 p-0">
                <p className="text-[#52525B] text-sm leading-relaxed m-0">
                    "{text}"
                </p>
                <footer className="flex items-center gap-3 mt-6">
                    <img
                        src={image}
                        alt={`Photo of ${name}`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ede9fe]"
                    />
                    <div>
                        <cite className="not-italic font-semibold text-[#18181B] text-sm block leading-tight">
                            {name}
                        </cite>
                        <span className="text-[#7c6af5] text-xs leading-tight block mt-0.5">
                            {role}
                        </span>
                    </div>
                </footer>
            </blockquote>
        </li>
    );
}

/* ── Scrolling column ─────────────────────────── */
function TestimonialsColumn({
    testimonials,
    duration = 25,
    className = "",
}: {
    testimonials: Testimonial[];
    duration?: number;
    className?: string;
}) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.ul
                animate={{ translateY: "-50%" }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-5 pb-5 m-0 p-0"
            >
                {[...Array(2)].map((_, rep) => (
                    <React.Fragment key={rep}>
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={`${rep}-${i}`} {...t} />
                        ))}
                    </React.Fragment>
                ))}
            </motion.ul>
        </div>
    );
}

/* ── Section ──────────────────────────────────── */
export default function TestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="py-24 bg-[#F5F6F7] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9fe] border border-[#ddd6fe] text-[#6d56eb] text-[11px] font-bold uppercase tracking-wider mb-5">
                        Social Proof
                    </div>
                    <h2
                        id="testimonials-heading"
                        className="font-display text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight mb-5"
                    >
                        Trusted by High-Growth{" "}
                        <span className="text-gradient-violet">Sales Teams</span>
                    </h2>
                    <p className="text-[#71717A] text-lg leading-relaxed">
                        Discover how traditional boundaries are being shattered by our always-on AI workforce.
                    </p>
                </div>

                {/* Columns */}
                <div
                    className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] max-h-[720px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={28} />
                    <TestimonialsColumn testimonials={secondColumn} duration={38} className="hidden md:block" />
                    <TestimonialsColumn testimonials={thirdColumn} duration={33} className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
