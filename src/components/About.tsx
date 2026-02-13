"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-16 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-black/[0.02] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl group bg-[#f8f8f8]">
                            <Image
                                src="/owner.png"
                                alt="Dr. Mahmoud Aboudakka"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                        </div>

                        {/* Experience Card Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-10 -right-10 bg-white/80 p-4 rounded-2xl border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-2xl max-w-[340px] hidden md:block"
                        >
                            <div className="space-y-6 w-40 h-40">
                                <div className="w-16 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-2xl">
                                    <Award size={22} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-1xl font-bold text-[#0a0f0a]  text-[15px] leading-tight tracking-tight">Expert Engineering Consulting</h4>
                                    <p className="text-black/40 text-sm mt-3 text-[10px]   font-medium leading-relaxed">Leading the transition to sustainable power with 20+ years of expertise.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-black" />
                                <p className="text-xs font-bold text-black uppercase tracking-[0.3em]">About the Founder</p>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-[#0a0f0a] tracking-tight leading-[1.1]">
                                Engineering <span className="italic font-light">Excellence</span>, Shaping the Future
                            </h2>
                            <p className="text-xl text-black/60 leading-relaxed max-w-xl font-light">
                                Based in Edmonton, <span className="text-black font-medium">Solar Energy & Power Consulting</span> is led by Dr. Mahmoud Aboudakka, a distinguished electrical engineer with a global vision for renewable energy.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: "Academic Depth",
                                    desc: "Combining years of industry experience with deep scientific research to deliver optimized power systems."
                                },
                                {
                                    icon: MapPin,
                                    title: "Edmonton Roots",
                                    desc: "Serving the Alberta region with specialized engineering designs, certifications, and sustainable solutions."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-black/5 border border-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                                        <item.icon size={28} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-[#0a0f0a]">{item.title}</h4>
                                        <p className="text-black/50 leading-relaxed max-w-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8 flex flex-wrap gap-8">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black transition-all">
                                    <Mail size={20} />
                                </div>
                                <span className="text-black/60 font-medium group-hover:text-black transition-colors">contact@solarpower.ca</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black transition-all">
                                    <Phone size={20} />
                                </div>
                                <span className="text-black/60 font-medium group-hover:text-black transition-colors">+1 (780) 555-0123</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
