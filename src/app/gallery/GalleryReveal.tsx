"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

interface GalleryRevealProps {
  onRevealActive?: (active: boolean) => void;
}

export default function GalleryReveal({ onRevealActive }: GalleryRevealProps) {
  const containerRef = useRef(null);
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

  // Desktop: scale from 1.667 → 1.0. Mobile: 2.0 → 1.0 (stronger crop on portrait)
  // Timing: 15% hold → 70% animate → 15% pause
  const rawScale = useTransform(scrollYProgress, [0.15, 0.85], [1.667, 1]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 25, restDelta: 0.001 });

  return (
    <>
      {/* 1. The Sanctuary (Offset Grid) */}
      <section className="px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="md:col-span-7 relative group overflow-hidden gallery-item">
            <img alt="Dining Room" className="w-full aspect-[4/5] object-cover rounded-sm transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxKIk1b2qh9OgfcFiw8RDoDa7wit_Ig1lgb39PLiXHaC3KG3qvdZSrxwbhOZLIuyb9JRwLn6G3rsHv6oobjS3v8a4XsgNpEkOewa8SJC9krKVVZcGZfFWz069j_lL39Wr3gIrXxaKEq2mlQr41vAsg96MGDCiB74PYwHDflBGRg4Z_a9LrHiKL7DE9PjfLvU0xwgC905LhzhOyLWLAToAq-VQubW2eASLkdj77ov1zTlo0ZSerwqHW26alQeOM1wJRAHfgFcWd-4g" />
            <div className="overlay absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-500 flex items-center justify-center">
              <span className="font-label text-xs text-on-primary uppercase tracking-widest bg-primary px-6 py-3">Explore the Room</span>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-12 space-y-6 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Environment</span>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">The Sanctuary of <br />Silent Luxury</h2>
              <p className="font-body text-secondary text-sm md:text-lg leading-relaxed">A space designed to silence the world outside, where every candle flicker is a choreographed note in your evening&apos;s symphony.</p>
            </div>
            <div className="relative group overflow-hidden gallery-item">
              <img alt="Wine Cellar" className="w-full aspect-video md:aspect-square object-cover rounded-sm transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU-LdDMWRBsTrxSWx7wYY4dMpcDyy2dUPY0Gr9rCh3UncK85XfAtgR0itOnSphj2v_kaev1bUSSFDm_cYyAoQq609dqjcftJBDjVhSitimXAk36pUM-_fSOGUhG1QzjvzPEZpyOoUSzdfuJSOPp16ZcBEBfMtVACZVfzIIwhVZVcbc4DN-UCEUCmfZNS1DvOrZ4oz2B3y1wCOqGB29z1iyrTlvHOXBoWrs5Dz0UgRijyFzsOPbhKQND4Cvaq5-7ggGEUtaKzTx-bI" />
              <div className="overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">wine_bar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Bleed Storytelling */}
      <section className="px-5 md:px-8 mt-16 md:mt-32">
        <div className="relative py-12 md:py-20 -mx-5 md:-mx-8 px-5 md:px-8 bg-surface-container-low overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-16">
            <div className="md:col-span-8 relative z-10">
              <div className="relative gallery-item group overflow-hidden">
                <img alt="Chef Julian Saint-Clair preparing a signature dish with precision" className="w-full h-[320px] sm:h-[450px] md:h-[600px] object-cover rounded-sm shadow-2xl transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX5focX3Xv4ND-1y46H1ufcNTzEhiV8sgh4Sk0gutEK9qUsbuEF_xFijg7Q1jGj4lMPTCH-1ooVEQUyHOOkotheFAbTnUdU0bCqs9OchBlnU49J3q-5fb6_FJoGmAjUcmJa064Hq7PD0NewHGRk66tnbzow7DpsdOPZnGQzg_la6oT9M5bR-2i6Q6gIo4QUNHLVO_lEYzr1EHPN3mdBiWB6GviKRdPPpMl2_QP-UnZVrvu4IOPdGUb9MgeCpW_lPOHwxQxi9TmvzI" />
              </div>
            </div>
            <div className="md:col-span-4 space-y-5 md:space-y-8">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Mastery</span>
              <h3 className="font-serif text-3xl md:text-5xl leading-tight">The Alchemy of Pure Passion</h3>
              <p className="font-body text-secondary text-sm md:text-lg leading-relaxed">Guided by executive chef Julian Saint-Clair, our kitchen operates with the precision of a Swiss watch and the soul of a poet.</p>
              <a className="inline-flex items-center gap-4 font-label text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 pb-2 hover:border-primary transition-all group" href="#">
                Meet the Artisans
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          <span className="absolute -bottom-10 md:-bottom-20 -right-10 font-serif text-[8rem] md:text-[20rem] text-surface-container opacity-30 select-none pointer-events-none">02</span>
        </div>
      </section>

      {/* 3. Sticky Full-Screen Zoom-Out Reveal
          Desktop: 300vh | Mobile: 220vh — responsive via min/max */}
      <section ref={containerRef} className="relative h-[220vh] md:h-[300vh] mt-16 md:mt-32">
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]">
          <motion.div
            style={{ scale, transformOrigin: "center center" }}
            className="absolute inset-0"
          >
            <img
              src="/images/gallery.png"
              alt="Gallery Showcase Reveal"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
