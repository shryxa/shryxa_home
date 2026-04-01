"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 py-6",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-5 rounded-[2.5rem] shadow-2xl border border-white/20"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/20">
            <Image
              src="/logo.png"
              alt="Shryxa Logo"
              fill
              sizes="40px"
              priority
              className="object-contain group-hover:scale-125 transition-transform duration-500"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-brand-text uppercase group-hover:text-brand-indigo transition-colors">
            Shryxa
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-black uppercase tracking-widest text-brand-muted hover:text-brand-indigo transition-all group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-indigo transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-8 py-4 bg-brand-indigo text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-brand-indigo/90 transition-all shadow-xl shadow-brand-indigo/30 hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-text p-3 hover:bg-brand-pearl rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 glass border border-white/20 md:hidden p-8 rounded-[3rem] shadow-2xl flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black uppercase tracking-widest text-brand-text hover:text-brand-indigo transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 bg-brand-indigo text-white rounded-2xl text-center font-black uppercase tracking-widest text-lg shadow-xl"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
