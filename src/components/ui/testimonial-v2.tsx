"use client";

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

// --- Data ---
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
        text: "Its robust features and quick deployment have transformed our workflow, making our outbound campaigns significantly more efficient.",
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

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25), 0 10px 10px -5px rgba(99, 102, 241, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    whileFocus={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25), 0 10px 10px -5px rgba(99, 102, 241, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-8 md:p-10 rounded-3xl glass-card border-t border-l border-white/20 shadow-2xl max-w-xs w-full transition-all duration-300 cursor-default select-none group focus:outline-none"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="text-slate-300 leading-relaxed font-normal m-0 transition-colors duration-300 text-sm md:text-base">
                                            "{text}"
                                        </p>
                                        <footer className="flex items-center gap-4 mt-8">
                                            <img
                                                width={48}
                                                height={48}
                                                src={image}
                                                alt={`Avatar of ${name}`}
                                                className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/50 group-hover:ring-indigo-400 transition-all duration-300 ease-in-out"
                                            />
                                            <div className="flex flex-col">
                                                <cite className="font-semibold not-italic tracking-tight leading-5 text-white transition-colors duration-300">
                                                    {name}
                                                </cite>
                                                <span className="text-xs leading-5 tracking-tight text-indigo-300 mt-0.5 transition-colors duration-300">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export default function TestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="bg-transparent py-24 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 0.8 }
                }}
                className="max-w-7xl px-6 z-10 mx-auto"
            >
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="border border-indigo-500/30 py-1.5 px-5 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-300 bg-indigo-500/10 transition-colors">
                            Social Proof
                        </div>
                    </div>

                    <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight text-center text-white transition-colors">
                        Trusted by High-Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Sales Teams</span>
                    </h2>
                    <p className="text-center mt-6 text-slate-400 text-lg leading-relaxed transition-colors">
                        Discover how traditional boundaries are being shattered by our always-on AI workforce.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling Testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
                </div>
            </motion.div>
        </section>
    );
};
