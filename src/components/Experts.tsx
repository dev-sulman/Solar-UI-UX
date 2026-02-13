"use client";

import React from "react";
import { motion } from "framer-motion";
import { TreePine, Settings, Globe } from "lucide-react";

const features = [
    {
        title: "Environmentally Friendly",
        description: "Solar energy reduces greenhouse gases and air pollutants, helping combat climate change.",
        icon: TreePine,
    },
    {
        title: "Low Maintenance",
        description: "Solar panels are durable, with low maintenance costs, requiring only occasional cleaning and minimal repair.",
        icon: Settings,
    },
];

const countries = [
    { name: "USA", x: "15%", y: "40%", flag: "https://flagcdn.com/w160/us.png" },
    { name: "Brazil", x: "30%", y: "75%", flag: "https://flagcdn.com/w160/br.png" },
    { name: "Canada", x: "18%", y: "25%", flag: "https://flagcdn.com/w160/ca.png" },
    { name: "China", x: "80%", y: "40%", flag: "https://flagcdn.com/w160/cn.png" },
    { name: "Iraq", x: "58%", y: "55%", flag: "https://flagcdn.com/w160/iq.png" },
    { name: "Russia", x: "75%", y: "20%", flag: "https://flagcdn.com/w160/ru.png" },
];

export default function Experts() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-6 py-2 rounded-full text-black border border-black/60 text-sm font-semibold mb-8">
                            Who are we?
                        </div>
                        <h2 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-[#0a0f0a] mb-12 leading-[1.1]">
                            Experts In The World <br /> Of Solar Energy.
                        </h2>

                        <div className="grid md:grid-cols-2 text-black gap-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center  text-black justify-center text-black">
                                        <feature.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                        <p className="text-sm text-black/60 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual (World Map) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[500px] bg-black/5 rounded-3xl p-8 flex items-center justify-center"
                    >
                        {/* World Map Background Visual */}
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none p-4">
                            <svg
                                viewBox="0 0 1000 500"
                                className="w-full h-full object-contain"
                                fill="currentColor"
                            >
                                <path d="M162.3,161.4c-4.9-3.2-12.2-4.1-16.1-0.3c-2,1.9-2.3,4.7-4.1,6.7c-2.4,2.5-6.5,2.4-9.3,4c-2.6,1.4-4,4.2-6.5,5.6 c-2.9,1.6-6.6,1.4-9.6,2.8c-2.5,1.2-4.1,3.7-6.5,5c-4.5,2.5-10.2,2.4-14.9,4.7c-1.4,0.7-2.3,2.2-3.7,2.9 c-3.5,1.7-7.8,1.4-11.4,3.1c-1,0.5-1.5,1.6-2.6,2c-3.1,1.1-6.7,0.7-9.8,1.7c-1.7,0.6-2.5,2.4-4.2,3c-1.7,0.6-3.8,0.3-5.5,1 s-2.8,2.3-4.5,3c-1.7,0.6-3.8,0.3-5.5,1s-2.8,2.3-4.5,3c-1.7,0.6-3.8,0.3-5.5,1s-2.8,2.3-4.5,3c-1.7,0.6-3.8,0.3-5.5,1 s-2.8,2.3-4.5,3c-1.7,0.6-3.8,0.3-5.5,1s-2.8,2.3-4.5,3c-1.7,0.5-3.8,0-5.5,0.5c-4,1.4-7.4,5-11.4,6.4c-1.4,0.5-3.1,0.2-4.5,0.7 c-2.4,0.9-4.1,3.1-6.5,4.1c-2,0.8-4.4,0.7-6.4,1.5c-1,0.4-1.5,1.3-2.5,1.7c-2,0.8-4.4,0.7-6.4,1.5c-1,0.4-1.5,1.3-2.5,1.7 c-2,0.8-4.4,0.7-6.4,1.5c-1,0.4-1.5,1.3-2.5,1.7c-2,0.8-4.4,0.7-6.4,1.5c-1,0.4-1.5,1.3-2.5,1.7c-2,0.8-4.4,0.7-6.4,1.5 c-1,0.4-1.5,1.3-2.5,1.7c-1.5,0.6-3.3,0.5-4.8,1.1c-3.8,1.4-6.9,4.7-10.7,6.1c-1,0.4-2.1,0.2-3.2,0.5c-3.4,1-6.2,3.7-9.6,4.7 c-0.8,0.2-1.6,0.1-2.4,0.4c-3.5,1.1-6.3,4.2-9.8,5.2c-1.3,0.4-2.7,0.1-4,0.5c-2.4,0.8-4.3,2.8-6.7,3.6 c-2.2,0.8-4.8,0.7-7,1.4c-1,0.3-1.6,1.2-2.7,1.5c-2,0.7-4.4,0.3-6.4,1c-1.2,0.4-1.9,1.5-3.1,1.9c-2.3,0.8-5,0.3-7.3,1 c-1.2,0.4-2,1.5-3.2,1.9c-2.3,0.8-5,0.3-7.3,1c-1.2,0.4-2,1.5-3.2,1.9c-2.3,0.8-5,0.3-7.3,1c-1.2,0.4-2,1.5-3.2,1.9 c-2.3,0.8-5,0.3-7.3,1c-1.2,0.4-2,1.5-3.2,1.9c-2.3,0.8-5,0.3-7.3,1c-1.2,0.4-2,1.5-3.2,1.9c-2.3,0.8-5,0.3-7.3,1 c-1.2,0.4-2,1.5-3.2,1.9c-2.3,0.8-5,0.3-7.3,1c-1.2,0.4-2,1.5-3.2,1.9c-2.3,0.8-5,0.3-7.3,1c-1.2,0.4-2,1.5-3.2,1.9..." />
                                <path d="M500,100c100,0,200,50,300,100s200,50,300,100" opacity="0.1" stroke="currentColor" fill="none" />
                                {/* World Map Silhouette */}
                                <path d="M250,150 L270,140 L290,145 L310,130 L330,135 L350,120 L370,130 L390,125 L410,140 L430,135 L450,150 L470,145 L490,160 L510,155 L530,170 L550,165 L570,180 L590,175 L610,190 L630,185 L650,200 L670,195 L690,210 L710,205 L730,220 L750,215 L770,230 L790,225 L810,240 L830,235 L850,250 L870,245 L890,260 L910,255 L930,270 L950,265 L950,350 L930,345 L910,360 L890,355 L870,370 L850,365 L830,380 L810,375 L790,390 L770,385 L750,400 L730,395 L710,410 L690,405 L670,420 L650,415 L630,430 L610,425 L590,440 L570,435 L550,450 L530,445 L510,460 L490,455 L470,470 L450,465 L430,480 L410,475 L390,490 L370,485 L350,500 L150,500 L150,450 L170,445 L190,460 L210,455 L230,470 L250,465 L270,480 L290,475 L310,490 L330,485 L350,500" opacity="0.2" fill="currentColor" />
                                <path d="M500,50 C400,50 300,100 200,150 S100,250 50,300 S0,400 0,450 L1000,450 C1000,400 950,350 900,300 S800,200 700,150 S600,50 500,50" opacity="0.05" fill="currentColor" />
                                {/* Simple World Map Outline */}
                                <path d="M100,200 Q150,150 200,200 T300,200 T400,200 T500,200 T600,200 T700,200 T800,200 T900,200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1" />
                                <text x="50" y="450" fontSize="200" opacity="0.03" fontWeight="bold">SOLAR</text>
                            </svg>
                        </div>

                        {/* Connecting Lines (Dashed) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                d="M 150 150 Q 250 100 350 150"
                                fill="none"
                                stroke="black"
                                strokeWidth="1"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                            <motion.path
                                d="M 100 250 Q 200 300 300 250"
                                fill="none"
                                stroke="black"
                                strokeWidth="1"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.7 }}
                            />
                            <motion.path
                                d="M 300 100 Q 400 200 500 150"
                                fill="none"
                                stroke="black"
                                strokeWidth="1"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.9 }}
                            />
                        </svg>

                        {/* Country Tags */}
                        {countries.map((country, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.1 * index + 0.5
                                }}
                                className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-xl overflow-hidden cursor-pointer hover:scale-110 transition-transform group z-40"
                                style={{ left: country.x, top: country.y }}
                            >
                                <img
                                    src={country.flag}
                                    alt={country.name}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
