"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Briefcase, Database, Microscope, Zap } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    title: "Full-Stack Engineering",
    subtitle: "Websites & Apps for All Scales",
    description: "End-to-end development for small businesses, enterprises, and personal portfolios. We build high-performance, responsive digital experiences optimized for conversion.",
    icon: Monitor,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/images/service-fullstack.png",
  },
  {
    title: "B2B AI & Data Science",
    subtitle: "Enterprise Intelligence Solutions",
    description: "RAG Chatbot integration, AI Agents, ML (Recommender systems, Anomaly detection, Clustering), MCP servers, and comprehensive Data Science (EDA, ETL, Scraping).",
    icon: Database,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    image: "/images/service-b2b.png",
  },
  {
    title: "Professional Transformation",
    subtitle: "AI for Health, Legal & Finance",
    description: "Empowering Doctors, CAs, Advocates, and Gym Trainers with AI Agents and RAG systems that fully utilize their capabilities and boost productivity.",
    icon: Briefcase,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    image: "/images/service-pro.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-indigo mb-6">
            Core Ecosystem
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-brand-text mb-8 leading-tight">
            Intelligent Engineering <br /> for Every Industry
          </h3>
          <p className="max-w-3xl text-xl text-brand-muted font-medium">
            At Shryxa, we provide end-to-end software engineering solutions that bridge the gap between traditional development and the AI-first future.
          </p>
        </div>

        <div className="space-y-32">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-16 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className={`inline-flex p-4 rounded-3xl ${pillar.bgColor} ${pillar.color}`}>
                  <pillar.icon size={40} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-muted mb-2">
                    {pillar.subtitle}
                  </h4>
                  <h5 className="text-4xl font-black text-brand-text">
                    {pillar.title}
                  </h5>
                </div>
                <p className="text-lg text-brand-muted leading-relaxed font-medium">
                  {pillar.description}
                </p>
                <div className="flex items-center gap-6">
                  <a 
                    href="#contact"
                    className="px-8 py-4 bg-brand-text text-white rounded-full font-black uppercase tracking-widest hover:bg-brand-indigo transition-all text-sm"
                  >
                    Inquiry Now
                  </a>
                  <div className="h-px w-12 bg-zinc-200" />
                </div>
              </div>

              <div className="flex-1 w-full relative">
                 <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-transparent pointer-events-none" />
                 </div>
                 {/* Floating Accent */}
                 <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-xl border border-zinc-100 z-10"
                 >
                    <Zap className={pillar.color} />
                 </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
