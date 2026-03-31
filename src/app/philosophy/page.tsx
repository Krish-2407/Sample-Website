import Link from "next/link";
import Image from "next/image";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function Philosophy() {
  return (
    <>
      <HeaderNav activePage="philosophy" theme="light" />

      <main className="pt-20 md:pt-24 overflow-x-hidden">
        {/* Hero: Heritage & Vision */}
        <section className="relative py-16 md:py-40 px-5 md:px-20 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-6 z-10">
              <span className="font-label uppercase tracking-[0.4em] text-primary mb-5 md:mb-8 block font-semibold text-xs">Heritage & Vision</span>
              <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-on-surface leading-[0.9] mb-8 md:mb-12 tracking-tight">
                The <br /><span className="italic font-normal">Soul</span> of the <br />Atelier
              </h1>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="w-px h-16 md:h-24 bg-primary/30 hidden md:block"></div>
                <p className="font-body text-sm md:text-lg text-on-surface-variant max-w-sm leading-relaxed opacity-80">
                  Founded in 2012, L'Éclat is more than a restaurant. It is a sanctuary for the senses where French culinary heritage meets a vision of purity.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl editorial-shadow">
                <img alt="Heritage Dining" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8OCKSjFwNVrVv7jY2sXSVevi4TwxiZ2PZ3irerSbyWt-Y3PSmb4V8v_dC2a1cExrW1doj2Z9TXegsorxe6eZHLaUf0-WJfA77FvcyObu5csFxoaiY8oQeUDQ3CoWTYCw3t8LYW5XSN-goSsXLQ4VNBoyOlA3IDjLc6Zk4oydn8ObSxiV6L6k9D8A6ASS2tMxGNHSZBDaKdWRkzd1XLPHxz4Dp32SWMxa1d73Qo1YVgGTdMHjqU_6G4p_UtKqCBCL8m3yH2FfXDY" />
              </div>
              {/* Overlapping Element */}
              <div className="absolute -bottom-16 -right-8 md:-right-16 bg-surface-container-lowest p-10 md:p-14 editorial-shadow rounded-xl max-w-xs hidden md:block z-20">
                <span className="font-headline italic text-primary text-4xl block mb-4">"</span>
                <p className="font-headline italic text-xl text-on-surface leading-snug">
                  A return to the essence of the plate, where every ingredient tells a century-old story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy: Minimalist Icons & Elegant Numbers */}
        <section className="bg-surface-container-low py-40 px-6 md:px-20 relative border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="font-headline italic text-primary text-xl mb-4 block">Our Philosophy</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-surface">The Three Pillars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <div className="group">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-6xl font-headline text-primary/10 group-hover:text-primary/30 transition-colors duration-500">01</span>
                  <span className="material-symbols-outlined text-primary text-4xl opacity-40 group-hover:opacity-100 transition-opacity">energy_savings_leaf</span>
                </div>
                <h3 className="font-headline text-2xl mb-6">Regenerative Sourcing</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-80">
                  We collaborate exclusively with independent farmers who treat the soil as a living legacy, ensuring every harvest is a gift of nature.
                </p>
              </div>
              <div className="group md:mt-16">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-6xl font-headline text-primary/10 group-hover:text-primary/30 transition-colors duration-500">02</span>
                  <span className="material-symbols-outlined text-primary text-4xl opacity-40 group-hover:opacity-100 transition-opacity">architecture</span>
                </div>
                <h3 className="font-headline text-2xl mb-6">Mathematical Finesse</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-80">
                  Our techniques are precise, rooted in the chemistry of flavor but guided by the intuition of the artisan's hand.
                </p>
              </div>
              <div className="group">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-6xl font-headline text-primary/10 group-hover:text-primary/30 transition-colors duration-500">03</span>
                  <span className="material-symbols-outlined text-primary text-4xl opacity-40 group-hover:opacity-100 transition-opacity">palette</span>
                </div>
                <h3 className="font-headline text-2xl mb-6">Culinary Composition</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-80">
                  A dish is a canvas. We curate textures, temperatures, and tones to create a sensory landscape that lingers in the memory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Chef: Immersive Vision */}
        <section id="the-visionary" className="py-0 px-5 md:px-0 bg-on-background text-surface relative overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Large Scale Portrait */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-screen lg:sticky lg:top-0">
              <img alt="Chef Julian Saint-Clair" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-[2.5s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg_79S7P8n_Q-4qXfoo4Nw-NOouQPIwbOOQ18kdRb6ldBWnOOo_boLOhEoFzkPnYMxLkgLUnzxeqmp50ANXMYDilTsKwWBVfuZXClnrsxlf5J17jdTc87PZjN8nLvpsoA0guHtXbsoXtXYpiqxYDqmKBJBkzt-Zam_73phc6NQikFbLrz0udDtEEy4-Wpl2B1ZgLfkzM7MQUahjDTkI82WSLUahiguXJfq1SSwAxRI6Wbn6c3T8hqEgN_mjfdajw1LbwdbuzMUX8U" />
              <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                <span className="font-headline italic text-primary-container/60 text-sm tracking-widest uppercase">Master of the Craft</span>
              </div>
            </div>
            {/* Immersive Quote & Text */}
            <div className="w-full lg:w-1/2 py-16 md:py-24 px-5 md:px-24 flex flex-col justify-center bg-on-background relative z-10">
              <div className="max-w-xl">
                <span className="font-label uppercase tracking-[0.4em] text-primary-container/40 mb-6 md:mb-10 block text-xs">The Visionary</span>
                <h2 className="font-headline text-4xl md:text-7xl mb-10 md:mb-16 text-surface leading-tight">Julian <br /><span className="italic text-primary-container">Saint-Clair</span></h2>
                <div className="relative mb-20">
                  <span className="absolute -top-12 -left-8 text-8xl font-headline text-primary/20 opacity-30">“</span>
                  <p className="font-headline text-3xl md:text-4xl italic text-primary-container leading-snug relative z-10">
                    Gastronomy is the only art form that engages all five senses simultaneously. My mission is to ensure they all leave with a memory.
                  </p>
                </div>
                <p className="font-body text-lg text-surface/60 leading-relaxed mb-12 font-light">
                  Trained in the Michelin-starred kitchens of Lyons and Tokyo, Chef Julian brings a unique technical mastery to L'Éclat. His vision is one of restraint—where the complexity of the dish lies hidden beneath a veneer of elegant simplicity.
                </p>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-px bg-primary transition-all duration-500 group-hover:w-20"></div>
                  <span className="font-body font-bold text-xs uppercase tracking-widest text-primary-container">3 Michelin Stars since 2018</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline: Asymmetrical Layout */}
        <section className="bg-surface py-40 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
              <div className="lg:col-span-4 sticky top-40">
                <h2 className="font-headline text-6xl text-on-surface mb-8 tracking-tighter">A Legacy of <span className="italic font-normal">Excellence</span></h2>
                <p className="font-body text-on-surface-variant text-lg opacity-70">Tracing the lineage of our commitment to the avant-garde.</p>
              </div>
              <div className="lg:col-span-8 space-y-40">
                {/* Event 1 */}
                <div className="flex flex-col md:flex-row gap-12 items-center group">
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                    <span className="font-headline text-7xl text-primary/10 group-hover:text-primary/30 transition-colors duration-700 block mb-6">2012</span>
                    <h4 className="font-headline text-2xl text-on-surface mb-4">The Genesis</h4>
                    <p className="text-on-surface-variant font-body leading-relaxed opacity-80">
                      L'Éclat opens its doors in a restored 19th-century atelier, driven by a desire to return to the architectural roots of French dining.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 order-1 md:order-2 aspect-[4/3] rounded-xl overflow-hidden editorial-shadow -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                    <img alt="The Genesis" className="w-full h-full object-cover grayscale brightness-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxf7bUS8M1e93cLKNdbOHapiCq-PZZtDHtVXG7_AVqGPcHJKdB841zsu9eS0IKOpsKlp7Dc88Eks6_wZwCBXzRm5HYM0WglMgtk-m1uPM65_36PpV69SOd-Rk3UvPuFuwDVnm8R4yoCrSHyQjNg3pi3s33TS8tbXrBls_EVFcIABpGr6241tZeKnBanc1boj6Esc6aR98XGolRN5x7Jnk2cwRr-lUXWxRzpP_4HCSjw6DjvyaUYFeGfOVGL_vE5hcHHCHZkkRLb0A" />
                  </div>
                </div>
                {/* Event 2 */}
                <div className="flex flex-col md:flex-row gap-12 items-center group">
                  <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden editorial-shadow rotate-2 group-hover:rotate-0 transition-transform duration-700">
                    <img alt="The Recognition" className="w-full h-full object-cover brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8OCKSjFwNVrVv7jY2sXSVevi4TwxiZ2PZ3irerSbyWt-Y3PSmb4V8v_dC2a1cExrW1doj2Z9TXegsorxe6eZHLaUf0-WJfA77FvcyObu5csFxoaiY8oQeUDQ3CoWTYCw3t8LYW5XSN-goSsXLQ4VNBoyOlA3IDjLc6Zk4oydn8ObSxiV6L6k9D8A6ASS2tMxGNHSZBDaKdWRkzd1XLPHxz4Dp32SWMxa1d73Qo1YVgGTdMHjqU_6G4p_UtKqCBCL8m3yH2FfXDY" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="font-headline text-7xl text-primary/10 group-hover:text-primary/30 transition-colors duration-700 block mb-6">2016</span>
                    <h4 className="font-headline text-2xl text-on-surface mb-4">The First Star</h4>
                    <p className="text-on-surface-variant font-body leading-relaxed opacity-80">
                      Recognition from the culinary elite arrives. L'Éclat is praised for its "unflinching dedication to the purity of the ingredient."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA: Magazine Style */}
        <section className="relative py-24 md:py-48 bg-on-background text-surface overflow-hidden">
          <div className="absolute inset-0">
            <img alt="Ambiance" className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACMHKdd7YANac_u9Ts7-vqE3Z9dVmpP0LujYB5XcqkNP-Uab2xKztbcMQ1UU4wwaWfCkHjg7C7Wjib0tRqcna8RSqSPMM75pDrDJS7y6_GeCkqkkleIRZTmGf6SgM5gmwnW8T5fyXdVgMpXe6K-qm9KPZBV8ZAiupyzeWetoAFi8M1nDvfnkqdK1-Jw_K_vVEOVW_jPacMwhvwMG1qkJRErjTjXlJNNcm0KPpjXuzVts0B88nzAhjpNjI9q6FLPJ2j5SOq660S9nI" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <span className="font-label uppercase tracking-[0.6em] text-primary-container mb-12 block text-xs">A Table Awaits</span>
            <h2 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-16 leading-none tracking-tight">Become Part of <br /><span className="italic text-primary-container">The Narrative</span></h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link href="/reservations">
                <button className="bg-primary text-on-primary px-16 py-6 text-xs uppercase tracking-[0.3em] font-bold rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all duration-500 shadow-2xl">
                  Book a Table
                </button>
              </Link>
              <Link href="/menu">
                <button className="border border-surface/20 text-surface px-16 py-6 text-xs uppercase tracking-[0.3em] font-bold rounded-lg hover:bg-surface hover:text-on-background transition-all duration-500">
                  Explore The Menu
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
