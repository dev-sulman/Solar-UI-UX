"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Instagram, Youtube, Sun, Wind } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-4 pb-8 pt-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#f8f8f8] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-20 text-[#0a0f0a] relative overflow-hidden border border-black/5 shadow-xl">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 mb-20">
                        {/* Brand & Description */}
                        <div className="max-w-xs space-y-10">
                            <Link href="/" className="flex items-center gap-4 group cursor-pointer inline-flex">
                                <div className="text-black group-hover:rotate-45 transition-transform duration-500">
                                    <Sun size={36} strokeWidth={1} className="fill-black/5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold tracking-tighter leading-none">SEPC</span>
                                    <span className="text-[8px] font-bold text-black uppercase tracking-[0.2em] mt-1">
                                        Solar Energy & <br /> Power Consulting
                                    </span>
                                </div>
                            </Link>
                            <p className="text-black/40 leading-relaxed font-medium">
                                Solar energy reduces greenhouse gases and air pollutants, helping combat climate change. Explore the top financial.
                            </p>
                            <div className="space-y-4">
                                <p className="text-black/30 text-[10px] font-bold uppercase tracking-[0.3em]">Browse Archive</p>
                                <h4 className="text-2xl font-bold leading-tight tracking-tight">
                                    Topics: Countries & Regions, Energy Systems, Programmes
                                </h4>
                            </div>
                        </div>

                        {/* Newsletter signup */}
                        <div className="flex-1 max-w-xl">
                            <div className="space-y-4">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className="w-full bg-transparent border-b border-black/10 pb-8 text-3xl md:text-5xl font-bold tracking-tighter focus:outline-none focus:border-black transition-all duration-500 placeholder:text-black/[0.05] text-black"
                                    />
                                    <button className="absolute right-0 bottom-6 w-14 h-14 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
                                        <ArrowUpRight size={32} strokeWidth={2} />
                                    </button>
                                </div>
                                <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em] mt-8">Subscribe to our cinematic newsletter</p>
                            </div>

                            {/* Link Columns */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">
                                <div className="space-y-6">
                                    <h5 className="text-black/30 font-medium uppercase tracking-widest text-sm">Learn</h5>
                                    <ul className="space-y-4 text-black/60">
                                        <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                                        <li><Link href="#" className="hover:text-black transition-colors">Pricing</Link></li>
                                        <li><Link href="#" className="hover:text-black transition-colors">Our mission</Link></li>
                                        <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h5 className="text-black/30 font-medium uppercase tracking-widest text-sm">Contact</h5>
                                    <ul className="space-y-4 text-black/60">
                                        <li><Link href="#" className="hover:text-black transition-colors">Community</Link></li>
                                        <li><Link href="#" className="hover:text-black transition-colors">Knowledge base</Link></li>
                                        <li><Link href="#" className="hover:text-black transition-colors">Academy</Link></li>
                                        <li><Link href="#" className="hover:text-black transition-colors">Support</Link></li>
                                    </ul>
                                </div>
                                <div className="space-y-6 col-span-2 md:col-span-1">
                                    <h5 className="text-black/30 font-medium uppercase tracking-widest text-sm">Address</h5>
                                    <p className="text-black/60 leading-normal">
                                        475 Cherry Dr, Troy, Michigan 46546 United States <br className="hidden md:block" /> (258 525-2353)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-black/40 text-sm font-medium">
                            <Link href="#" className="hover:text-black transition-colors">Terms</Link>
                            <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-black transition-colors">Cookies</Link>
                            <Link href="#" className="hover:text-black transition-colors">Legal</Link>
                            <Link href="#" className="hover:text-black transition-colors">Recalls</Link>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {[Facebook, Instagram, Youtube, Wind].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Nova Tech Studio Credit */}
                    <div className="mt-8 pt-6 border-t border-black/5 flex justify-center">
                        <p className="text-[11px] font-semibold text-black/25 uppercase tracking-[0.25em]">
                            Powered by{" "}
                            <span className="text-black/40 hover:text-black transition-colors duration-300 cursor-default">
                                Nova Tech Studio
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
