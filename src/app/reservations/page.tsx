"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function Reservations() {
  return (
    <div className="bg-surface overflow-x-hidden">
      <HeaderNav activePage="reservations" theme="dark" />
      
      <main className="relative min-h-screen">
        {/* Full-Bleed Arrival Hero Background (Fixed) */}
        <div className="fixed inset-0 z-0">
          <img 
            src="/images/reservations/reservation_hero.png" 
            alt="L'ÉCLAT Sanctuary" 
            className="w-full h-full object-cover brightness-[0.55] contrast-[1.1] scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40"></div>
        </div>

        {/* Dynamic Content Overlay */}
        <section className="relative z-10 pt-32 md:pt-44 pb-20 px-6 md:px-12 lg:px-20 max-w-[1750px] mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left: Editorial Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 space-y-12"
          >
            <div className="space-y-10">
              <span className="font-label uppercase tracking-[0.7em] text-[#EAD8B1] text-lg font-bold block mb-4">The Sanctum</span>
              <h1 className="font-luxury text-7xl md:text-8xl lg:text-[10rem] leading-[0.82] tracking-tighter mb-10 bg-gradient-to-r from-white via-[#F5E6CA] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-2xl">
                A Table <br />Awaits.
              </h1>
              <p className="font-headline text-2xl md:text-3xl text-white max-w-lg leading-relaxed font-light opacity-100">
                Step into a sanctuary where every flavor is a revelation and time slows to the art of the craft.
              </p>
            </div>

            {/* Atelier Selection Insight - Luxury Content Block (Whiter Glass) */}
            <div className="bg-white/15 backdrop-blur-[40px] border border-white/20 p-10 md:p-14 rounded-sm max-w-md shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-8 mb-10">
                <span className="w-20 h-px bg-primary/80"></span>
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-extrabold">The Seasonal Odyssée</span>
              </div>
              <h3 className="font-luxury text-4xl text-white mb-6">Signature 12-Course</h3>
              <p className="font-body text-sm text-white/85 leading-[2] font-light">
                An immersive exploration of forgotten roots and avant-garde technique, curated for the true enthusiast.
              </p>
              <div className="mt-12 flex justify-between items-center text-[9px] font-label uppercase tracking-[0.4em] text-primary/75 border-t border-white/10 pt-10">
                <span>2.5 Hours Experience</span>
                <span>Bespoke Pairings</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating Luxury Glass Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-surface/90 backdrop-blur-[50px] p-8 md:p-16 lg:p-24 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] rounded-none border border-white/5 relative overflow-hidden group">
              {/* Luxury Accent Glow */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full -mr-[300px] -mt-[300px] blur-[150px] pointer-events-none group-hover:bg-primary/20 transition-all duration-[2s]"></div>
              
              <div className="relative z-10">
                <h2 className="font-luxury text-5xl md:text-7xl text-on-surface mb-20 border-b border-outline-variant/10 pb-12 tracking-tight">Curate Your Experience</h2>
                
                <form className="space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="relative group">
                      <label className="font-label text-sm uppercase tracking-[0.5em] text-primary mb-5 block font-bold">Preferred Date</label>
                      <input 
                        type="date" 
                        defaultValue="2026-04-20"
                        className="w-full bg-transparent border-0 border-b border-outline-variant/80 focus:border-primary focus:ring-0 px-0 py-5 font-body text-on-surface text-xl transition-all"
                      />
                    </div>
                    <div className="relative group">
                      <label className="font-label text-sm uppercase tracking-[0.5em] text-primary mb-5 block font-bold">Planned Séance</label>
                      <select className="w-full bg-transparent border-0 border-b border-outline-variant/80 focus:border-primary focus:ring-0 px-0 py-5 font-body text-on-surface text-xl appearance-none cursor-pointer">
                        <option className="bg-on-background text-white">19:30 — Sunset Seating</option>
                        <option className="bg-on-background text-white">20:45 — Candlelight Selection</option>
                        <option className="bg-on-background text-white">22:00 — Night Nocturne</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="relative">
                      <label className="font-label text-sm uppercase tracking-[0.5em] text-primary mb-5 block font-bold">The Party Size</label>
                      <select className="w-full bg-transparent border-0 border-b border-outline-variant/80 focus:border-primary focus:ring-0 px-0 py-5 font-body text-on-surface text-xl appearance-none cursor-pointer">
                        <option className="bg-on-background text-white">2 Guests — Intimate Sanctum</option>
                        <option className="bg-on-background text-white">4 Guests — Shared Discovery</option>
                        <option className="bg-on-background text-white">6+ — Private Enclave (Consult)</option>
                      </select>
                    </div>
                    <div className="relative">
                      <label className="font-label text-sm uppercase tracking-[0.5em] text-primary mb-5 block font-bold">The Sentiment</label>
                      <select className="w-full bg-transparent border-0 border-b border-outline-variant/80 focus:border-primary focus:ring-0 px-0 py-5 font-body text-on-surface text-xl appearance-none cursor-pointer">
                        <option className="bg-on-background text-white">Culinary Exploration</option>
                        <option className="bg-on-background text-white">Anniversary Celebration</option>
                        <option className="bg-on-background text-white">Elegant Business Dinner</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="font-label text-sm uppercase tracking-[0.5em] text-primary mb-5 block font-bold">Special Requests & Nuances</label>
                    <textarea 
                      rows={2}
                      placeholder="Share any specific dietary paths or preferences..."
                      className="w-full bg-transparent border-0 border-b border-outline-variant/80 focus:border-primary focus:ring-0 px-0 py-5 font-body text-on-surface text-xl placeholder:text-on-surface/40 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-16">
                    <button className="w-full bg-primary text-on-primary py-9 md:py-12 font-label uppercase tracking-[0.6em] text-xs font-bold hover:bg-primary-container hover:text-on-primary-container transition-all duration-1000 shadow-2xl relative overflow-hidden group">
                      <span className="relative z-10">Confirm Safe Passage</span>
                      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"></div>
                    </button>
                    <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6 opacity-80">
                      <p className="text-xs font-body uppercase tracking-[0.3em] text-on-surface/80">Dress Code: Smart Casual</p>
                      <p className="text-xs font-body uppercase tracking-[0.3em] text-on-surface/80">Convenient Parking Available</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Visual grounding spacer */}
        <div className="h-20 bg-transparent relative z-10"></div>
      </main>

      {/* Footer with fixed background fix */}
      <div className="relative z-[20] bg-[#0a0a0a] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}
