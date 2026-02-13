"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rachel Thuchel",
        role: "Homeowner",
        quote: "Having solar power has made us more self-reliant. With the battery backup, we never worry about power outages, and our energy bills have never been lower. It's a huge relief, especially during storm season.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000",
        summary: "We wanted to reduce our carbon footprint, and going solar was the perfect way.",
    },
    {
        id: 2,
        name: "James Wilson",
        role: "Business Owner",
        quote: "The commercial installation was seamless. Our overhead costs dropped by nearly 40% in the first quarter alone. Highly recommend for any business looking to future-proof their operations.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2000",
        summary: "A game-changer for our manufacturing facility's energy management.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const testimonial = testimonials[current];

    return (
        <section className="py-12 md:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-4 text-left order-2 lg:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold text-[#0a0f0a] mb-8 tracking-tight leading-tight"
                        >
                            What Say Our <br />
                            Valuable Clients
                        </motion.h2>

                        <motion.p
                            key={`summary-${current}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-black/50 text-base md:text-lg mb-12 max-w-sm leading-relaxed"
                        >
                            {testimonial.summary}
                        </motion.p>

                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prev}
                                className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl bg-white text-black"
                            >
                                <ArrowLeft size={24} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={next}
                                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl"
                            >
                                <ArrowRight size={24} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="lg:col-span-4 order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`image-${current}`}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                whileHover={{ scale: 1.02 }}
                                className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Quote Card */}
                    <div className="lg:col-span-4 order-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`quote-${current}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                                className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[3rem] relative border border-black/5 shadow-xl"
                            >
                                <div className="text-accent mb-8 flex">
                                    <Quote size={48} fill="currentColor" className="opacity-20 rotate-180" />
                                    <Quote size={48} fill="currentColor" className="opacity-20 -ml-4" />
                                </div>

                                <p className="text-[#0a0f0a]/80 text-lg md:text-xl leading-relaxed mb-8 italic font-medium">
                                    "{testimonial.quote}"
                                </p>

                                <div className="border-t border-black/5 pt-8">
                                    <h4 className="text-xl font-bold text-[#0a0f0a]">{testimonial.name}</h4>
                                    <p className="text-black/40 font-semibold uppercase tracking-widest text-[10px]">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
