"use client";

import Hero from "@/components/Hero";
import Experts from "@/components/Experts";
import PoweringFuture from "@/components/PoweringFuture";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001    
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left rounded-full"
        style={{ scaleX }}
      />

      <Hero />
      <Experts />
      <PoweringFuture />
      <Services />
      <Benefits />
      <Process />
      <Blog />
      <Testimonials />
      <About />
      <Contact />
      <Footer />


    </main>
  );
}
