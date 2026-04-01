"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-indigo mb-6">
              Get in Touch
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-brand-text mb-8 uppercase tracking-tighter">
              Start The <br /> Conversation
            </h3>
            <p className="text-xl text-brand-muted font-medium mb-12 leading-relaxed">
              Whether you are a developer seeking AI integration or an enterprise looking for end-to-end software engineering, we are ready to assist.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-[2rem] bg-brand-pearl border border-zinc-100 flex items-center justify-center text-brand-indigo shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                   <div className="text-xs font-black uppercase tracking-widest text-brand-muted mb-1">Email Transmission</div>
                   <a href="mailto:shryxa.contact@gmail.com" className="text-2xl font-black text-brand-text hover:text-brand-indigo transition-colors">
                      shryxa.contact@gmail.com
                   </a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                 <div className="w-16 h-16 rounded-[2rem] bg-brand-pearl border border-zinc-100 flex items-center justify-center text-brand-indigo shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                 </div>
                 <div>
                    <div className="text-xs font-black uppercase tracking-widest text-brand-muted mb-1">Direct Communication</div>
                    <a href="tel:+919102916841" className="text-2xl font-black text-brand-text hover:text-brand-indigo transition-colors">
                      +91 9102916841
                    </a>
                 </div>
              </div>

              <div className="flex items-center gap-8 group">
                 <div className="w-16 h-16 rounded-[2rem] bg-brand-pearl border border-zinc-100 flex items-center justify-center text-brand-indigo shadow-sm group-hover:scale-110 transition-transform">
                    <Calendar size={28} />
                 </div>
                 <div>
                    <div className="text-xs font-black uppercase tracking-widest text-brand-muted mb-1">Elite Consultation</div>
                    <a href="https://cal.com/shryxa" target="_blank" className="text-2xl font-black text-brand-text hover:text-brand-indigo transition-colors">
                       Schedule Meeting via Cal.com
                    </a>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-brand-pearl rounded-[4rem] border-2 border-dashed border-zinc-200 p-8 flex items-center justify-center">
                <div className="text-center p-12">
                   <div className="w-24 h-24 bg-brand-indigo/10 rounded-full flex items-center justify-center text-brand-indigo mx-auto mb-8 animate-pulse">
                      <Send size={40} />
                   </div>
                   <h4 className="text-3xl font-black text-brand-text mb-4 uppercase tracking-tighter">Ready to Deploy?</h4>
                   <p className="text-brand-muted font-medium mb-10">We prioritize high-impact projects that push the boundaries of AI engineering.</p>
                   <a 
                      href="mailto:shryxa.contact@gmail.com"
                      className="inline-block w-full py-6 bg-brand-text text-white rounded-[2rem] font-black uppercase tracking-widest text-xl hover:bg-brand-indigo transition-all shadow-xl shadow-brand-indigo/20 text-center"
                   >
                      Initiate Project Inquiry
                   </a>
                </div>
             </div>
             
             {/* Abstract Decor */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-sage/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
