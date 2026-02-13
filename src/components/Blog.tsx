"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
    {
        title: "10 Reasons to Switch to Solar Energy Today",
        date: "August 5, 2023",
        description: "Explore the top financial, environmental, and personal benefits of solar energy to motivate and inspire your transition to renewable power.",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "How Solar Energy Can Save You Money on Utility Bills",
        date: "August 5, 2025",
        description: "Break down the financial impact of solar energy, including potential savings, government incentives, and long-term cost benefits.",
        image: "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Solar Panel Installation: What to Expect from Start to Finish",
        date: "August 5, 2026",
        description: "Guide potential customers through the installation process, from initial consultation to the final power-up and monitoring setup.",
        image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Blog() {
    return (
        <section className="py-12 md:py-16 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0a0f0a] leading-[1.0] tracking-tight max-w-4xl mx-auto">
                        Insights, Trends, And Tips From Industry Experts
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group flex flex-col"
                        >
                            {/* Image Container with Frame Effect */}
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-black/5 shadow-2xl">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col space-y-5 px-2">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-black" />
                                    <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em]">
                                        {post.date}
                                    </p>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0a0f0a] leading-tight transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-black/50 leading-relaxed line-clamp-3 text-lg">
                                    {post.description}
                                </p>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-3 text-black font-bold text-base mt-auto pt-4 group/btn"
                                >
                                    Read more
                                    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-all duration-300">
                                        <ArrowUpRight size={20} />
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
