"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const marqueeItems = [
  "Full-Stack Engineering",
  "AI Agent Orchestration",
  "RAG Chatbot Integration",
  "Data Science & ETL",
  "Next.js Experts",
  "Machine Learning Solutions",
  "Custom API & MCP Servers",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-brand-pearl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-1.png"
          alt="AI Engineering Hero"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Deep Overlay for maximum contrast */}
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-pearl/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="bg-black/40 backdrop-blur-xl p-10 md:p-20 rounded-[4rem] border border-white/10 shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-8 drop-shadow-2xl"
          >
            AI-Centric <br /> 
            <span className="text-brand-indigo">Engineering</span> <br />
            House
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg md:text-2xl text-zinc-300 font-medium mb-12 leading-relaxed"
          >
            End-to-End Software Engineering & Intelligent Systems. <br className="hidden md:block" />
            Building the next generation of scalable infrastructure for enterprises.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://cal.com/shryxa"
              target="_blank"
              className="px-10 py-5 bg-brand-indigo text-white rounded-full text-xl font-black uppercase tracking-widest hover:bg-brand-indigo/90 transition-all shadow-2xl shadow-brand-indigo/40"
            >
              Consultation
            </a>
            <a
              href="#services"
              className="px-10 py-5 bg-white/5 text-white border-2 border-white/20 backdrop-blur-md rounded-full text-xl font-black uppercase tracking-widest hover:bg-white hover:text-brand-text transition-all"
            >
              Our Solutions
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Moving Marquee */}
      <div className="w-full bg-brand-text py-6 overflow-hidden mt-auto relative z-20 border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest mx-12 flex items-center gap-8"
            >
              {item}
              <div className="w-3 h-3 bg-brand-indigo rounded-full" />
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
