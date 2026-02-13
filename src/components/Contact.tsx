"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-black/[0.02] blur-[150px] rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-stretch">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-between"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-black" />
                                <p className="text-xs font-bold text-black uppercase tracking-[0.3em]">Get in Touch</p>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-[#0a0f0a] tracking-tight leading-[1.1]">
                                Let's Start Your <br />
                                <span className="italic font-light">Solar Journey</span>
                            </h2>
                            <p className="text-xl text-black/60 leading-relaxed max-w-md font-light">
                                Have questions about solar energy for your home or business? We're here to help you navigate the transition to sustainable power.
                            </p>

                            <div className="grid gap-10 mt-12">
                                {[
                                    {
                                        icon: MapPin,
                                        title: "Our Location",
                                        info: "475 Cherry Dr, Troy, Michigan 46546"
                                    },
                                    {
                                        icon: Phone,
                                        title: "Call Us",
                                        info: "+1 (258) 525-2353"
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email Us",
                                        info: "contact@solix.ca"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-14 h-14 shrink-0 rounded-[1.25rem] bg-black flex items-center justify-center text-white shadow-lg">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest">{item.title}</h4>
                                            <p className="text-xl font-bold text-[#0a0f0a]">{item.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links or Extra Info */}
                        <div className="mt-16 pt-12 border-t border-black/5 flex items-center gap-8">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-black/40 uppercase tracking-widest mb-4">Availability</span>
                                <p className="text-black/60 font-medium">Monday — Friday: 09:00 - 18:00</p>
                                <p className="text-black/60 font-medium">Saturday: Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="bg-[#f8f8f8] p-10 md:p-16 rounded-[4rem] border border-black/5 shadow-2xl relative">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-black/40 uppercase tracking-widest ml-1">Your Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white rounded-3xl px-8 py-5 border border-black/5 focus:border-black/20 focus:outline-none transition-all text-black font-medium text-lg placeholder:text-black/10 shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-black/40 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white rounded-3xl px-8 py-5 border border-black/5 focus:border-black/20 focus:outline-none transition-all text-black font-medium text-lg placeholder:text-black/10 shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-black/40 uppercase tracking-widest ml-1">How can we help?</label>
                                    <textarea
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        className="w-full bg-white rounded-[2.5rem] px-8 py-6 border border-black/5 focus:border-black/20 focus:outline-none transition-all text-black font-medium text-lg placeholder:text-black/10 shadow-sm resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-black text-white py-6 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-4 group mt-4"
                                >
                                    Send Message
                                    <div className="bg-white/10 rounded-full p-2 group-hover:bg-white group-hover:text-black transition-all">
                                        <Send size={20} />
                                    </div>
                                </motion.button>
                            </form>

                            <p className="text-center text-black/30 text-xs mt-8 px-4">
                                By submitting this form, you agree to our <span className="text-black font-medium underline">Privacy Policy</span> and <span className="text-black font-medium underline">Terms of Service</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
