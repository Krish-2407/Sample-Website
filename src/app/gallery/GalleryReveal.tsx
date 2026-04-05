"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

interface GalleryRevealProps {
  onRevealActive?: (active: boolean) => void;
}

export default function GalleryReveal({ onRevealActive }: GalleryRevealProps) {
  const containerRef = useRef(null);
  const sanctuaryRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (onRevealActive) {
      // Consider it "active" when it's within the sticky/zoom range
      // 0.05 to 0.95 gives a bit of buffer
      onRevealActive(latest > 0.01 && latest < 0.99);
    }
  });

  // Sanctuary Parallax (Section 1)
  const { scrollYProgress: sanctuaryProgress } = useScroll({
    target: sanctuaryRef,
    offset: ["start end", "end start"]
  });

  const mainParallax = useTransform(sanctuaryProgress, [0, 1], ["-5%", "5%"]);
  const detailParallax = useTransform(sanctuaryProgress, [0, 1], ["10%", "-10%"]);

  // Responsive Animation Settings
  // Desktop: Original 1.667 -> 1.0 zoom (Range 0.15 - 0.85)
  // Mobile: Custom 2.8 -> 1.1 zoom (Range 0.1 - 0.75) for bug-free Redmi 12 5G
  const startScale = isMobile ? 2.8 : 1.667;
  const endScale = isMobile ? 1.1 : 1.0;
  const range = isMobile ? [0.1, 0.75] : [0.15, 0.85];

  const rawScale = useTransform(scrollYProgress, range, [startScale, endScale], { clamp: true });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const transformOrigin = isMobile ? "center 42%" : "center center";

  return (
    <>
      {/* 1. The Sanctuary (Offset Grid) */}
      <section ref={sanctuaryRef} className="px-5 md:px-8 py-12 md:py-20 min-h-[80vh] flex items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-20 items-start w-full max-w-[1600px] mx-auto">
          <motion.div
            style={{ y: mainParallax }}
            className="hidden md:block md:col-span-7 relative group overflow-hidden gallery-item"
          >
            <img alt="The Sanctuary - Warm Premium Indian Restaurant Interior" className="w-full aspect-square md:aspect-[4/5] object-cover rounded-sm transition-transform duration-700 hover:scale-[1.03]" src="/images/gallery/sanctuary_beside.png" />
            <div className="overlay absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-500 flex items-center justify-center">
              <span className="font-label text-xs text-on-primary uppercase tracking-widest bg-primary px-6 py-3">Explore the Room</span>
            </div>
          </motion.div>
          <div className="md:col-span-5 md:pl-4 flex flex-col h-full space-y-12 md:space-y-16">
            <div className="space-y-6 md:space-y-10 relative pt-2">
              <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
              <div className="space-y-4">
                <span className="font-label text-[10px] md:text-sm uppercase tracking-[0.5em] text-primary flex items-center gap-4">
                  <span className="w-8 h-px bg-primary/30" />
                  Environment
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight">The Sanctuary of <br />Silent Luxury</h2>
              </div>
              <p className="font-body text-secondary text-base md:text-xl leading-relaxed max-w-sm">A space designed to silence the world outside, where every candle flicker is a choreographed note in your evening&apos;s symphony.</p>
            </div>
            {/* Promotion of visual on mobile: Increased size */}
            <motion.div
              style={{ y: detailParallax }}
              className="relative group overflow-hidden gallery-item w-full md:max-w-md md:ml-12 shadow-2xl flex-grow flex items-end"
            >
              <picture className="w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/gallery/sanctuary_vertical.png" />
                <img 
                  alt="Artisanal Sanctuary Corner - Minimalist Indian Luxury" 
                  className="w-full aspect-square md:aspect-auto md:h-full object-cover rounded-sm transition-transform duration-700 hover:scale-[1.03]" 
                  src="/images/gallery/sanctuary_interior.png" 
                />
              </picture>
              <div className="overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">spa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Full Bleed Storytelling */}
      <section className="px-5 md:px-8 mt-12 md:mt-20">
        <div className="relative py-10 md:py-16 -mx-5 md:-mx-8 px-5 md:px-8 bg-surface-container-low overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-16">
            <div className="md:col-span-4 order-1 md:order-2 space-y-5 md:space-y-8">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Mastery</span>
              <h3 className="font-serif text-3xl md:text-5xl leading-tight">The Alchemy of Pure Passion</h3>
              <p className="font-body text-secondary text-sm md:text-lg leading-relaxed">Guided by executive chef Julian Saint-Clair, our kitchen operates with the precision of a Swiss watch and the soul of a poet.</p>
              <Link className="inline-flex items-center gap-4 font-label text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 pb-2 hover:border-primary transition-all group" href="/philosophy#the-visionary">
                Meet the Artisans
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="md:col-span-8 order-2 md:order-1 relative z-10">
              <div className="relative gallery-item group overflow-hidden">
                <img alt="Chef Julian Saint-Clair preparing a signature dish with precision" className="w-full h-[320px] sm:h-[450px] md:h-[600px] object-cover rounded-sm shadow-2xl transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX5focX3Xv4ND-1y46H1ufcNTzEhiV8sgh4Sk0gutEK9qUsbuEF_xFijg7Q1jGj4lMPTCH-1ooVEQUyHOOkotheFAbTnUdU0bCqs9OchBlnU49J3q-5fb6_FJoGmAjUcmJa064Hq7PD0NewHGRk66tnbzow7DpsdOPZnGQzg_la6oT9M5bR-2i6Q6gIo4QUNHLVO_lEYzr1EHPN3mdBiWB6GviKRdPPpMl2_QP-UnZVrvu4IOPdGUb9MgeCpW_lPOHwxQxi9TmvzI" />
              </div>
            </div>
          </div>
          <span className="absolute -bottom-10 md:-bottom-20 -right-10 font-serif text-[8rem] md:text-[20rem] text-surface-container opacity-30 select-none pointer-events-none">02</span>
        </div>
      </section>

      {/* 3. Sticky Full-Screen Zoom-Out Reveal
          Desktop: 300vh | Mobile: 220vh — responsive via min/max */}
      <section ref={containerRef} className="relative h-[220vh] md:h-[300vh] mt-12 md:mt-20">
        <div className={`sticky top-0 ${isMobile ? "h-[100.5vh]" : "h-[100dvh]"} w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center`}>
          <motion.div
            style={{ 
              scale,
              transformOrigin,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            className="absolute inset-0"
          >
            {/* Mobile Image with 1.05x safety bleed */}
            <img
              src="/images/gallery_mobile.png"
              alt="Gallery Showcase Reveal Mobile"
              className="md:hidden min-w-full min-h-full object-cover"
              style={{ transform: "scale(1.05)" }}
            />
            {/* Desktop Image */}
            <img
              src="/images/gallery.png"
              alt="Gallery Showcase Reveal"
              className="hidden md:block w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
