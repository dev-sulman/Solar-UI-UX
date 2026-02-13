"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01.",
        title: "Free consultation",
        description: "Schedule a chat with our solar specialists.",
    },
    {
        id: "02.",
        title: "Design & install",
        description: "We'll plan, customize, and install your solar system.",
    },
    {
        id: "03.",
        title: "Start saving",
        description: "Enjoy clean energy and reduced bills from day one.",
    },
];

export default function Process() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest text-black/60 mb-8"
                        >
                            Our Process
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-semibold text-[#0a0f0a] mb-16 tracking-tight"
                        >
                            How it works
                        </motion.h2>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <span className="text-2xl font-bold text-black pt-1">
                                        {step.id}
                                    </span>
                                    <div>
                                        <h3 className="text-3xl font-semibold text-[#0a0f0a] mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-black/40 text-lg leading-relaxed max-w-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="lg:col-span-7 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2072"
                                alt="Solar Process"
                                className="w-full h-full object-cover"
                            />

                            {/* Glassmorphic Overlay Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-8 right-8 left-8 md:left-auto md:w-80 bg-black/[0.05] backdrop-blur-[24px] rounded-[2rem] p-8 border border-black/10 shadow-2xl"
                            >
                                <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest block mb-4">
                                    Energy efficiency
                                </span>
                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-6xl font-bold text-black">74%</span>
                                    <span className="text-black/60 pb-2">In the past 30 days</span>
                                </div>

                                {/* Bar Chart Mock */}
                                <div className="flex items-end justify-between h-24 gap-1">
                                    {[40, 60, 35, 75, 45, 90, 65, 85, 55, 100, 70, 80, 50, 45, 60].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8 + i * 0.05, duration: 0.6 }}
                                            className="w-full bg-black rounded-t-sm opacity-80"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
