"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, BarChart3, Globe2, Sparkles } from "lucide-react";

const benefits = [
    {
        title: "Renewable & Sustainable",
        description: "Solar energy is derived from the sun, a virtually unlimited source, making it one of the most sustainable energy options.",
        icon: RefreshCw,
        accent: "from-green-400/20 to-emerald-500/20",
    },
    {
        title: "Increased Property Value",
        description: "Homes and businesses with solar installations often see a significant boost in market value and buyer appeal.",
        icon: BarChart3,
        accent: "from-blue-400/20 to-cyan-500/20",
    },
    {
        title: "Government Incentives",
        description: "Take advantage of various tax credits, rebates, and grants designed to make renewable energy affordable.",
        icon: Globe2,
        accent: "from-amber-400/20 to-orange-500/20",
    },
];

export default function Benefits() {
    return (
        <section className="relative py-16 bg-white overflow-hidden">
            {/* Minimalist Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '48px 48px' }} />

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/5 border border-black/10 text-black/60 text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Sparkles size={14} className="text-black" />
                        Why Choose Solar?
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0a0f0a] tracking-tighter leading-[0.95]"
                    >
                        Efficiency Meets <br className="hidden md:block" />
                        <span className="text-black italic font-light">Elegance</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-[4rem] p-10 md:p-14 border border-black/5 hover:border-black/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-start text-left">
                                <div className="w-20 h-20 rounded-[2.5rem] bg-black flex items-center justify-center mb-12 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-3xl font-bold text-[#0a0f0a] mb-6 leading-tight">
                                    {benefit.title}
                                </h3>

                                <p className="text-black/50 text-lg leading-relaxed mb-10 flex-grow font-medium">
                                    {benefit.description}
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 text-black font-black text-sm uppercase tracking-widest group/btn"
                                >
                                    Learn More
                                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-all duration-300">
                                        <RefreshCw size={18} className="rotate-45" />
                                    </div>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

