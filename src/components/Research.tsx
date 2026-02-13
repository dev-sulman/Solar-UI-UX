"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ShieldAlert, Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";



export default function Research() {
    return (
        <section id="research" className="py-32 bg-white relative overflow-hidden border-t border-black/5">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '48px 48px' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/5 border border-black/10 text-[#0a0f0a] text-sm font-bold mb-8">
                            <BookOpen size={18} /> <span>Language Advocacy</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-[#0a0f0a] mb-8 tracking-tight leading-[1.0]">
                            Bridging Global <br />
                            <span className="italic font-light">Knowledge</span>
                        </h2>

                        <p className="text-xl text-black/60 mb-12 leading-relaxed max-w-xl font-light">
                            Dr. Aboudakka is the designated translator of Richard Dunlap's seminal sustainability textbook into Arabic, making complex renewable energy concepts accessible to millions in the Middle East.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: ShieldAlert,
                                    color: "bg-black",
                                    title: "Strategic Impact",
                                    desc: "Safeguarding the environment by promoting modern power management education in emerging markets."
                                },
                                {
                                    icon: Heart,
                                    color: "bg-black/5",
                                    iconColor: "text-black",
                                    title: "Educational Core",
                                    desc: "A cornerstone project that empowers Arabic-speaking engineers with world-class academic resources."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-black/5 border border-black/10 group cursor-default"
                                >
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-xl", item.color, item.iconColor)}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#0a0f0a] mb-2">{item.title}</h4>
                                        <p className="text-black/50 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-black/20 transition-all font-outfit"
                        >
                            Scientific Publications <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>

                    {/* Book Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative aspect-[3/4] max-w-[480px] mx-auto group perspective-1000">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-black/5 blur-[100px] rounded-full translate-y-12 opacity-50" />

                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-[12px] border-[#f8f8f8] shadow-3xl transform transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6">
                                <Image
                                    src="/images/{7A02E34A-0E89-42E6-AFA1-6A100052EB50}.png"
                                    alt="Sustainable Energy Textbook - Arabic Translation"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Badge Overlay */}
                            <motion.div
                                animate={{ rotate: [12, 8, 12], scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -right-12 w-40 h-40 bg-black rounded-full flex items-center justify-center text-center p-6 border-8 border-white shadow-2xl rotate-12 z-20"
                            >
                                <span className="font-black text-white leading-tight text-sm uppercase tracking-tighter">ARABIC <br /> VOLUME ONE</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
