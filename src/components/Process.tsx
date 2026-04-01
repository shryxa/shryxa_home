"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", name: "Consultation", desc: "Understanding your vision and identifying AI opportunities." },
  { id: "02", name: "Feasibility Trial", desc: "Rapid prototyping to validate data and model performance." },
  { id: "03", name: "Project Scope", desc: "Defining clear objectives, timelines, and technical requirements." },
  { id: "04", name: "System Development", desc: "Engineering the intelligence layer and full-stack integration." },
  { id: "05", name: "Deployment & Testing", desc: "Rigorous stress testing and seamless production launch." },
  { id: "06", name: "Handover", desc: "Complete knowledge transfer and system documentation." },
  { id: "07", name: "Ongoing Support", desc: "Continuous monitoring, scaling, and iterative optimization." },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-brand-pearl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-indigo mb-6">
            The Methodology
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-brand-text mb-8">
            How We Build <br /> End-to-End Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-zinc-100 flex flex-col items-start gap-8 hover:border-brand-indigo transition-all group"
            >
              <div className="text-3xl font-black text-brand-indigo/20 group-hover:text-brand-indigo transition-colors">
                {step.id}
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-text mb-4 uppercase tracking-tighter">
                  {step.name}
                </h4>
                <p className="text-brand-muted font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
