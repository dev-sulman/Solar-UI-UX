"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const serviceRows = [
    {
        id: "diagnostics",
        title: "Diagnostics",
        description: "This diagram shows the general principle behind the HF polarisation/depolarisation cable measurement technique*…",
        active: false,
    },
    {
        id: "engineering",
        title: "Electrical Engineering and Design",
        description: "Design, review, certification and implementation of electrical plans for residential commercial…",
        active: true,
    },
    {
        id: "renewables",
        title: "Renewables",
        description: "Renewable energy consultations for rooftop solar generation system or large-scale solar farm projects.",
        active: false,
    },
];

export default function Services() {
    return (
        <section className="py-12 md:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">

                {/* Header Content */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-[#0a0f0a] mb-6 tracking-tight"
                    >
                        Futures That We Provide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-black/50 text-lg md:text-xl leading-relaxed"
                    >
                        Access harmony on mobile app to get new experience. With the app your can interaction and communication on the road more easily
                    </motion.p>
                </div>

                {/* Dual Image Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=2070"
                            alt="Solar Innovation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2072"
                            alt="Renewable Energy Farm"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </motion.div>
                </div>

                {/* Service Rows */}
                <div className="flex flex-col">
                    {serviceRows.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group border-t border-black/10 py-10 md:py-14 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 items-center cursor-pointer hover:bg-black/[0.02] transition-colors relative"
                        >
                            <div className="md:col-span-4 w-full">
                                <h3 className="text-3xl md:text-5xl font-bold text-[#0a0f0a] tracking-tight group-hover:transform group-hover:translate-x-4 transition-transform duration-300">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="md:col-span-6 w-full">
                                <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-xl">
                                    {item.description}
                                </p>
                            </div>

                            <div className="md:col-span-2 w-full flex justify-end">
                                {item.active ? (
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110">
                                        <ArrowUpRight size={32} />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 flex items-center justify-end text-black group-hover:transform group-hover:-translate-y-2 transition-transform">
                                        <ArrowUpRight size={40} strokeWidth={1.5} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-black/10" />
                </div>

            </div>
        </section>
    );
}
