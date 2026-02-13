"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PoweringFuture() {
    const specs = [
        { label: "Certifications:", value: "IEC/UL 61730\nCEC Listed" },
        { label: "Inverter Power:", value: "3.8 KW/7.6KW" },
        { label: "Dimensions:", value: "74.4\"x41.2\"x1.57\"\n(including frame)" },
        { label: "Certifications:", value: "IEC/UL 61730\nCEC Listed" },
    ];

    // Radial ticks for the central visual
    const ticks = Array.from({ length: 40 }).map((_, i) => ({
        rotation: (i * 360) / 40,
        length: i % 10 === 0 ? "w-8" : "w-4",
    }));

    return (
        <section className="py-12 md:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left Content Area (Cols 1-4) */}
                    <div className="lg:col-span-4 flex flex-col items-start text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold text-[#0a0f0a] mb-6 tracking-tight leading-[1.05]"
                        >
                            Powering <br />
                            Your Future <br />
                            With Clean,
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-black/50 text-sm md:text-base mb-8 max-w-xs leading-relaxed"
                        >
                            Join Hundred Of Companying Embracing Strategies Global wth global
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-4 group mb-16"
                        >
                            Learn more
                            <div className="bg-white rounded-full p-1 group-hover:bg-accent transition-colors">
                                <ArrowUpRight className="text-black w-4 h-4" />
                            </div>
                        </motion.button>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl">Environmentally friendly</h3>
                            <p className="text-black/60 text-sm leading-relaxed max-w-[280px]">
                                Renewable energy little or no corban emissions, helping to reduce global
                            </p>
                            <button className="text-black font-bold text-sm underline underline-offset-4 hover:text-accent transition-colors inline-flex">
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* Central Visual (Cols 5-8) */}
                    <div className="lg:col-span-4 relative flex items-center justify-center py-12">
                        {/* Radial Ticks Animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
                            >
                                {ticks.map((tick, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{ transform: `rotate(${tick.rotation}deg) translate(0, -${160}px)` }}
                                    >
                                        <div className={`${tick.length} h-[1px] bg-black/10`} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Central Oval Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[280px] h-[420px] md:w-[350px] md:h-[550px] rounded-[10rem] overflow-hidden border-8 border-white shadow-2xl z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2070"
                                alt="Renewable Energy Landscape"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                        </motion.div>
                    </div>

                    {/* Right Tech Specs (Cols 9-12) */}
                    <div className="lg:col-span-4 flex flex-col gap-12 lg:pl-12">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="text-left"
                            >
                                <span className="text-black/40 text-[10px] font-bold uppercase tracking-widest block mb-2">
                                    {spec.label}
                                </span>
                                <p className="text-black font-bold text-lg md:text-xl whitespace-pre-line leading-tight">
                                    {spec.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
