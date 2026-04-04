"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMapActive, setIsMapActive] = useState(false);

  // --- Scroll Progress for Hero ---
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // --- Hero Animations (Stay Dark as requested) ---
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const textSplitLeft = useTransform(heroScroll, [0, 0.5], [0, -100]);
  const textSplitRight = useTransform(heroScroll, [0, 0.5], [0, 100]);
  const textFade = useTransform(heroScroll, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-background relative">
      <HeaderNav activePage="location" theme="dark" />

      {/* 1. Cinematic Hero: The Threshold (Dark/Cinematic) */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLnWhmxlczW-BdjhThwnDe9lJd-_ycqR4cXg5H7l2NzgwqiMlQT_4Gm-GfbtXr_rFDi-JNwr-ppal4unwDFaKThHVNd6q7puPo9kdvzPkQacdkLhytGDUOFjOMdpKwUGFVKDpo65s9FcgOEIhDRxLdGDHUocBn6npkps3aRCzMdeGx2gOR6yPjM4cPKJUXa3l9KPbdhoR0m8mmiNSGYenxDxarjXgSDSjYtO7UgRzYXpCiP0opW6lMKyl5baqOilq3UqVY5Mb8nfU" 
            alt="L'ÉCLAT Sanctuary Entrance"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </motion.div>

        <div className="relative z-10 text-center px-5 flex flex-col items-center">
          <motion.span 
            style={{ opacity: textFade }}
            className="font-label text-xs uppercase tracking-[0.8em] text-primary-fixed mb-8 block"
          >
            PARIS 8E ARR.
          </motion.span>
          <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
            <motion.h1 
              style={{ x: textSplitLeft }}
              className="font-luxury text-6xl sm:text-8xl md:text-[10rem] text-white leading-none tracking-tighter"
            >
              LOCA
            </motion.h1>
            <motion.h1 
              style={{ x: textSplitRight }}
              className="font-luxury text-6xl sm:text-8xl md:text-[10rem] text-white leading-none tracking-tighter"
            >
              TION
            </motion.h1>
          </div>
          <motion.p 
            style={{ opacity: textFade }}
            className="font-headline italic text-2xl md:text-3xl text-primary-fixed mt-10 max-w-lg"
          >
            Where time slows to the rhythm of the city.
          </motion.p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
           <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* 2. Integrated Discovery & Map (Light Theme - Combined) */}
      <section className="bg-background relative z-20 py-20 md:py-40">
        <div className="px-5 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            
            {/* Left Column: Address and Sanctuary Details */}
            <div className="flex flex-col justify-center space-y-16">
              <div className="space-y-8">
                <span className="font-label text-lg uppercase tracking-[0.6em] text-primary block">Discovery</span>
                <h2 className="font-luxury text-5xl md:text-7xl text-zinc-900 leading-[1.1]">
                  9¾, Aurora Borealis Avenue <br />
                  <span className="italic font-normal">Crystal Peak</span>
                </h2>
                <p className="font-body text-zinc-400 text-lg tracking-widest uppercase">
                  Floating Isles, Mumbai — 888888
                </p>
                <div className="w-16 h-px bg-primary/30"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                   <p className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/60">Reservations</p>
                   <a href="tel:+919876543210" className="font-luxury text-2xl text-zinc-900 hover:text-primary transition-colors">+91 98765 43210</a>
                </div>
                <div className="space-y-4">
                   <p className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/60">Inquiry</p>
                   <p className="font-body text-zinc-700 border-b border-zinc-200 pb-1 text-sm tracking-widest">reservations@leclat.void</p>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/reservations" className="inline-block bg-zinc-900 text-white py-5 px-12 text-[11px] uppercase tracking-[0.4em] font-bold transition-all hover:bg-primary-container hover:text-on-primary-container editorial-shadow">
                  Prepare Your Arrival
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Map Integration (Always Open) */}
            <div className="relative h-[500px] md:h-auto min-h-[600px] bg-zinc-100 overflow-hidden editorial-shadow">
               {/* Real Map layer (Google Maps Embed) - Always Active */}
               <div className="absolute inset-0 w-full h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.357874983056!2d72.8155986871582!3d18.925573400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c5d0130f4d%3A0x86b033320c29571e!2sNariman%20Point%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712222222222!5m2!1sen!2sin" 
                    className="w-full h-full border-0 grayscale brightness-95 contrast-125 opacity-90"
                    allowFullScreen 
                    style={{ filter: "grayscale(1) contrast(1.2) brightness(0.9) sepia(0.1)" }}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                  {/* Subtle Grain/Overlay for Texture */}
                  <div className="absolute inset-0 pointer-events-none bg-zinc-900/5 mix-blend-multiply opacity-20"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Atelier Hours (Unified White Theme) */}
      <section className="py-16 md:py-24 bg-white relative z-30 border-y border-zinc-100">
        <div className="px-5 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label text-[14px] uppercase tracking-[0.7em] text-zinc-400 mb-6 block">Service Hours</span>
              <h2 className="font-luxury text-5xl md:text-8xl text-zinc-950 leading-[0.95]">The <br /><span className="italic font-normal">Rhythm</span></h2>
              <p className="font-body text-zinc-500 text-sm mt-8 max-w-xs leading-relaxed tracking-widest uppercase">of the dining hall and the passage of moments.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 w-full pt-6">
               {[
                 { day: "MON — THU", time: "12:00 — 23:00", note: "CLASSIC SERVICE" },
                 { day: "FRI — SAT", time: "12:00 — 00:00", note: "CANDLELIGHT" },
                 { day: "SUN BRUNCH", time: "11:00 — 16:00", note: "THE FLOATING" },
                 { day: "SUN DINNER", time: "19:00 — 22:30", note: "REFLECTION" },
               ].map((slot, i) => (
               <div key={i} className="space-y-5 pb-8 border-b border-zinc-100">
                  <span className="font-label text-[13px] uppercase tracking-[0.4em] text-zinc-400 block">{slot.day}</span>
                  <h4 className="font-luxury text-[45px] text-zinc-950 leading-none">{slot.time}</h4>
                  <p className="font-label text-[13px] uppercase tracking-[0.4em] text-zinc-400">{slot.note}</p>
               </div>
               ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
