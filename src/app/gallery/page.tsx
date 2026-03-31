"use client";

import { useState } from "react";
import Link from "next/link";
import GalleryReveal from "./GalleryReveal";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function Gallery() {
  const [headerTransparent, setHeaderTransparent] = useState(false);

  return (
    <>
      <HeaderNav activePage="gallery" forceTransparent={headerTransparent} />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="px-5 md:px-8 mb-12 md:mb-24">
          <div className="flex flex-col items-start gap-3 mb-6 md:mb-12">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-primary">A Visual Narrative</span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl leading-none tracking-tighter">Artistry <br /><span className="italic ml-6 md:ml-32">on a Plate</span></h1>
          </div>
          <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden rounded-sm group mb-8 md:mb-12">
            <img alt="Artistry on a Plate - Premium Indian Plating" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="/images/gallery/hero_artistry.png" />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 bg-white p-4 md:p-10 max-w-[200px] md:max-w-sm shadow-2xl border-l-4 border-primary hidden sm:block">
              <p className="font-serif italic text-base md:text-2xl leading-relaxed text-zinc-900">&quot;Atmosphere is the secret ingredient that turns a meal into a lasting memory.&quot;</p>
              <div className="mt-3 md:mt-6 flex items-center gap-4">
                <span className="w-8 md:w-12 h-px bg-primary"></span>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">The Vision</span>
              </div>
            </div>
          </div>
        </section>

        <GalleryReveal onRevealActive={setHeaderTransparent} />

        {/* Experience Banner */}
        <section className="bg-surface-container-highest py-16 md:py-32 overflow-hidden">
          <div className="px-5 md:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
              <div className="space-y-6 md:space-y-10">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Curated Atmosphere</span>
                <h2 className="font-serif text-4xl md:text-6xl leading-tight">A Symphony <br />of Senses</h2>
                <p className="font-body text-secondary text-base md:text-xl leading-relaxed">From the tactile grain of our bespoke furniture to the acoustic resonance of our dining hall, we curate the "vibe" as carefully as we curate our rare vintages.</p>
                <button className="px-8 py-3 md:px-10 md:py-4 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 text-sm">
                  Our Philosophy
                </button>
              </div>
              <div className="relative group">
                <div className="absolute -top-8 md:-top-16 -left-8 md:-left-16 w-40 md:w-64 h-40 md:h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="gallery-item relative overflow-hidden rounded-sm shadow-2xl">
                  <img alt="Expert cocktail service" className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGh5UC4fqdf8LHVx65eznMhVAZ_VnZqpFbRMV6GENwUUNc08QSYZz8_wskJN5Vn5E_RI405JCwvXz5t82nnPUK1k-4fsPgA2TlNnL6oVwgp2YNY9X_PgBavXWKNavKVXApiWOGAvvMvwdIZKIMgtWcxnvRtJkP-J0buNVPuNHW_xD-WHPLp0EUhvcdlr4b38PRCCFLeX4z1Z6cyCiTo_PQG1meEkpYzAhQ0wDWzzG1ARwR2jC2-HcRU9fT_tzFyjUmjQ7v-xIQDdk" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refined High-Converting CTA */}
        <section className="relative h-[80vh] flex items-center justify-center text-center parallax-cta bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6UwpuJR5gF9jU6LGG7PUbIWCSGcQ-1BKoZR_Q0AIkTJdoEOk7MrWGoaDCTUIZS-S0ruXgSLlBbPmHoAK9E2nArO97i-o2EjKahXwooKe934YkK-jiDa909Xwu5SZBVZvaEsPC3Dp9RpAwqJ9OJhQRtZhvc_8ycVfPFYsidqj7Fvhp6w57qDQ7VfGbWo6QZQecMylmfG8MusZvXjnLdpaHE_6gdXAbrbZPUD9FZd4WFos5F9ClgU5CPNu9JFKc-wvqHZBj2xETO-8')" }}>
          <div className="relative z-10 px-8 max-w-4xl space-y-10 md:space-y-12">
            <div className="space-y-6">
              <span className="font-label text-xs uppercase tracking-[0.5em] text-primary-fixed block">Final Chapter</span>
              <h2 className="font-serif text-5xl md:text-8xl text-white leading-tight">Your Table is Waiting.</h2>
              <p className="text-white/70 font-body text-lg md:text-xl tracking-wide max-w-2xl mx-auto">Reservations for the upcoming season are now open. Experience the radiance of true gastronomy.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/reservations" className="bg-primary hover:bg-primary-container text-on-primary px-16 py-6 rounded-sm font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-xl inline-block">
                Secure a Reservation
              </Link>
              <Link className="text-white font-label text-xs uppercase tracking-[0.3em] hover:text-primary transition-colors border-b border-white/20 pb-1" href="/reservations">Check Availability</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
