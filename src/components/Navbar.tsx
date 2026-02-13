"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Wind, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "#contact" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <>
            <nav
                className={cn(
                    "fixed z-50 transition-all duration-500",
                    isScrolled
                        ? "top-6 left-1/2 -translate-x-1/2 w-auto min-w-[300px]"
                        : "top-0 left-0 right-0 w-full"
                )}
            >
                <div
                    className={cn(
                        "mx-auto transition-all duration-500 flex items-center justify-between",
                        isScrolled
                            ? "bg-black/80 backdrop-blur-xl rounded-full border px-6 py-3 shadow-2xl"
                            : "px-8 md:px-16 py-5 bg-transparent"
                    )}
                >
                    <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-8">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center gap-4 group shrink-0">
                            <div className="flex-shrink-0">
                                <div className="text-accent group-hover:rotate-45 transition-transform duration-500">
                                    <Sun size={isScrolled ? 28 : 36} strokeWidth={1} className="fill-accent/5" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "font-bold tracking-tighter text-accent leading-none",
                                    isScrolled ? "text-xl" : "text-2xl"
                                )}>SEPC</span>
                                <span className={cn(
                                    "font-light text-white/90 transition-all duration-500 uppercase tracking-[0.2em] whitespace-nowrap",
                                    isScrolled ? "text-[6px] mt-1" : "text-[8px] mt-1.5"
                                )}>
                                    Solar Energy & Power Consulting
                                </span>
                            </div>
                        </Link>

                        {/* Centered Nav Links */}
                        <div className="hidden lg:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[16px] font-semibold text-zinc-100  hover:text-white transition-colors relative group whitespace-nowrap tracking-tighter"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Button */}
                        <div className="hidden md:block shrink-0">
                            <Link href="#contact">
                                <button className={cn(
                                    "backdrop-blur-md border transition-all duration-500 rounded-full font-bold flex items-center gap-3 group",
                                    isScrolled
                                        ? "bg-white text-black border-transparent px-5 py-2 text-xs"
                                        : "bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-2.5 text-sm"
                                )}>
                                    Contact Us
                                    <div className={cn(
                                        "rounded-full p-1 transition-colors",
                                        isScrolled ? "bg-black" : "bg-white"
                                    )}>
                                        <ArrowUpRight className={cn(
                                            "w-3 h-3",
                                            isScrolled ? "text-white" : "text-black"
                                        )} />
                                    </div>
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu - Outside the nav to avoid transform issues */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] lg:hidden"
                    >
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content - Centered Full Screen Overlay */}
                        <motion.div
                            initial={{ y: "20%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "20%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative h-full w-full flex flex-col items-center justify-center p-8 gap-12"
                        >
                            <button
                                className="absolute top-10 right-10 text-white/60 hover:text-white p-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={40} strokeWidth={1} />
                            </button>

                            <div className="flex flex-col items-center gap-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-5xl md:text-7xl font-bold text-white hover:text-accent transition-colors text-center block"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 w-full max-w-xs flex flex-col items-center gap-12"
                            >
                                <Link href="#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="w-full bg-accent text-white py-6 rounded-full font-bold text-xl active:scale-95 flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,165,0,0.3)]">
                                        Get in Touch <ArrowUpRight />
                                    </button>
                                </Link>

                                <div className="flex items-center justify-center gap-12 text-white/20">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                            <Sun size={20} />
                                        </div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Expertise</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                            <Wind size={20} />
                                        </div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Renewable</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
