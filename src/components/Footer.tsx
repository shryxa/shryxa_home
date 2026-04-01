import Link from "next/link";
import { Cpu } from "lucide-react";
import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-3 mb-8 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                  <NextImage
                    src="/logo.png"
                    alt="Shryxa Logo"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-black tracking-tighter text-brand-text uppercase">
                  Shryxa
                </span>
              </Link>
              <p className="text-brand-muted font-medium mb-8">
                AI-Centric Engineering House providing end-to-end software solutions for businesses and professionals.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.instagram.com/shryxa.9009/" 
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-brand-text hover:bg-brand-indigo hover:text-white transition-all p-2.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link 
                  href="https://x.com/shryxa" 
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-brand-text hover:bg-brand-indigo hover:text-white transition-all p-2.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                  </svg>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/shryxa-technologies-0338663b7/" 
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-brand-text hover:bg-brand-indigo hover:text-white transition-all p-2.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link>
              </div>
          </div>

          <div>
             <h5 className="font-black uppercase tracking-widest text-xs text-brand-text mb-8">Company</h5>
             <ul className="space-y-4">
               {["Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                 <li key={item}>
                   <Link 
                     href={
                       item === "Contact Us" ? "#contact" : 
                       item === "Privacy Policy" ? "/privacy" : "/terms"
                     } 
                     className="text-brand-muted hover:text-brand-indigo transition-colors font-medium"
                   >
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-brand-muted font-bold">
            © {new Date().getFullYear()} Shryxa Engineering House. All rights reserved.
          </p>
          <div className="text-sm font-mono uppercase tracking-widest text-brand-muted/50 font-black">
            System Origin: 37.7749° N, 122.4194° W
          </div>
        </div>
      </div>
    </footer>
  );
}
