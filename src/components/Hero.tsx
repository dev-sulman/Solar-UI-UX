"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen h-[110vh] w-full flex flex-col overflow-hidden bg-white md:p-4 ">
            {/* White Border Frame */}
            <div className="absolute inset-2 md:inset-4 z-0 rounded-[2.5rem] md:rounded-[4rem] border-10 border-white" />

            {/* Background Video */}
            <div className="absolute inset-2 md:inset-4 z-0 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/hero-video/video1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content Area */}
            <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-12 md:px-24 w-full pt-16 mb-30 mr-25 mr-55">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >


                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-[4.5rem]  font-bold text-white mb-6 tracking-[-0.04em] leading-[0.9]"
                    >
                        Solar Solutions for <br className="hidden lg:block" />
                        a Greener Planet
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/60 mb-10  max-w-xl leading-relaxed"
                    >
                        Discover renewable energy with our cutting-edge solar panels.
                        Designed for sustainability and cost-efficiency.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap gap-5"
                    >
                        <button className="bg-white text-black hover:bg-white/90 px-10 py-5 rounded-full font-bold text-base transition-all flex items-center gap-3 group shadow-2xl">
                            Get Started
                            <div className="bg-black rounded-full p-1 group-hover:bg-accent transition-colors">
                                <ArrowUpRight className="text-white w-4 h-4" />
                            </div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Stats Area - Aligned with new thinner frame edges */}
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-30">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-2xl rounded-tr-[4rem] md:rounded-tr-[5.5rem] p-10 md:p-12 pr-20 md:pr-32 flex items-start gap-10 md:gap-20 border-t border-r border-white/20 shadow-[20px_-20px_60px_-15px_rgba(0,0,0,0.1)]"
                >
                    {/* Stat Item 1 */}
                    <div className="shrink-0 group">
                        <h4 className="text-5xl md:text-7xl font-bold text-[#0a0f0a] mb-2 tracking-tighter leading-none group-hover:scale-110 transition-transform origin-left duration-500">$6m</h4>
                        <p className="text-[10px] md:text-xs font-bold text-[#0a0f0a]/40 uppercase tracking-widest leading-tight">
                            The company's <br /> annual net income
                        </p>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="shrink-0 group">
                        <h4 className="text-5xl md:text-7xl font-bold text-[#0a0f0a] mb-2 tracking-tighter leading-none group-hover:scale-110 transition-transform origin-left duration-500">315</h4>
                        <p className="text-[10px] md:text-xs font-bold text-[#0a0f0a]/40 uppercase tracking-widest leading-tight">
                            Projects completed <br /> worldwide
                        </p>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="shrink-0 group">
                        <h4 className="text-5xl md:text-7xl font-bold text-[#0a0f0a] mb-2 tracking-tighter leading-none group-hover:scale-110 transition-transform origin-left duration-500">120k</h4>
                        <p className="text-[10px] md:text-xs font-bold text-[#0a0f0a]/40 uppercase tracking-widest leading-tight">
                            Employees work in all <br /> parts of the world
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
