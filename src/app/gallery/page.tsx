import Link from "next/link";

export default function Gallery() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-outline-variant/10">
        <nav className="flex justify-between items-center px-8 py-4 md:py-6">
          <Link className="text-2xl font-serif tracking-tighter text-amber-800 dark:text-amber-200 uppercase" href="/">LECLAT</Link>
          <div className="hidden md:flex items-center space-x-12">
            <Link className="text-zinc-600 dark:text-zinc-400 hover:text-amber-800 transition-colors manrope uppercase tracking-widest text-xs" href="/">Home</Link>
            <Link className="text-zinc-600 dark:text-zinc-400 hover:text-amber-800 transition-colors manrope uppercase tracking-widest text-xs" href="/menu">Menu</Link>
            <Link className="text-amber-700 dark:text-amber-500 border-b border-amber-700/30 pb-1 manrope uppercase tracking-widest text-xs" href="/gallery">Gallery</Link>
            <Link className="text-zinc-600 dark:text-zinc-400 hover:text-amber-800 transition-colors manrope uppercase tracking-widest text-xs" href="/location">Location</Link>
          </div>
          <Link href="/reservations">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all hover:bg-primary/90 active:scale-95">
              Book a Table
            </button>
          </Link>
        </nav>
      </header>
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="px-8 mb-20 md:mb-24">
          <div className="flex flex-col items-start gap-4 mb-10 md:mb-12">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-primary">A Visual Narrative</span>
            <h1 className="font-serif text-6xl md:text-8xl leading-none tracking-tighter">Artistry <br /><span className="italic ml-12 md:ml-32">on a Plate</span></h1>
          </div>
          <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-sm group">
            <img alt="Gourmet dish" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOKLfKidMQ9r0XhbHuuRWGaXBSKxN4BK4c0i_q7LY4skshQpbYqU7_RTXFMMezQ2pNQYrqWO5B6lRkwS3ugWpZEeQC88rSBNapuTdvE-3Sl-_6J5wHjG6Lvuai17GKYli3VNPxVjk30vvgI2aIA5vIwmsYFejfy7-3In68TerO3VW_yfisLc4EMUw8en4t5YGHlR0ZUWGRmHFX8ZuvC9wNtUIND1P02-Ekv6xtFNur5VB86rE3nRyb4TlZE4Q8aiKUKCQzxmcBRnU" />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-8 right-8 bg-white p-6 md:p-10 max-w-sm shadow-2xl border-l-4 border-primary">
              <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-zinc-900">"Atmosphere is the secret ingredient that turns a meal into a lasting memory."</p>
              <div className="mt-4 md:mt-6 flex items-center gap-4">
                <span className="w-12 h-px bg-primary"></span>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">The Vision</span>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Gallery Grid */}
        <section className="px-8 space-y-24 md:space-y-32 pb-24 md:pb-32">
          {/* Row 1: The Sanctuary (Offset Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 relative group overflow-hidden gallery-item">
              <img alt="Dining Room" className="w-full aspect-[4/5] object-cover rounded-sm transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxKIk1b2qh9OgfcFiw8RDoDa7wit_Ig1lgb39PLiXHaC3KG3qvdZSrxwbhOZLIuyb9JRwLn6G3rsHv6oobjS3v8a4XsgNpEkOewa8SJC9krKVVZcGZfFWz069j_lL39Wr3gIrXxaKEq2mlQr41vAsg96MGDCiB74PYwHDflBGRg4Z_a9LrHiKL7DE9PjfLvU0xwgC905LhzhOyLWLAToAq-VQubW2eASLkdj77ov1zTlo0ZSerwqHW26alQeOM1wJRAHfgFcWd-4g" />
              <div className="overlay absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-label text-xs text-on-primary uppercase tracking-widest bg-primary px-6 py-3">Explore the Room</span>
              </div>
            </div>
            <div className="md:col-span-5 md:pl-12 space-y-8 md:space-y-12">
              <div className="space-y-6">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Environment</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">The Sanctuary of <br />Silent Luxury</h2>
                <p className="font-body text-secondary text-base md:text-lg leading-relaxed">A space designed to silence the world outside, where every candle flicker is a choreographed note in your evening's symphony.</p>
              </div>
              <div className="relative group overflow-hidden gallery-item">
                <img alt="Wine Cellar" className="w-full aspect-video md:aspect-square object-cover rounded-sm transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU-LdDMWRBsTrxSWx7wYY4dMpcDyy2dUPY0Gr9rCh3UncK85XfAtgR0itOnSphj2v_kaev1bUSSFDm_cYyAoQq609dqjcftJBDjVhSitimXAk36pUM-_fSOGUhG1QzjvzPEZpyOoUSzdfuJSOPp16ZcBEBfMtVACZVfzIIwhVZVcbc4DN-UCEUCmfZNS1DvOrZ4oz2B3y1wCOqGB29z1iyrTlvHOXBoWrs5Dz0UgRijyFzsOPbhKQND4Cvaq5-7ggGEUtaKzTx-bI" />
                <div className="overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl">wine_bar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Full Bleed Storytelling */}
          <div className="relative py-16 md:py-20 -mx-8 px-8 bg-surface-container-low overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-16">
              <div className="md:col-span-8 relative z-10">
                <div className="relative gallery-item group overflow-hidden">
                  <img alt="Chef Julian Saint-Clair preparing a signature dish with precision" className="w-full h-[500px] md:h-[600px] object-cover rounded-sm shadow-2xl transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX5focX3Xv4ND-1y46H1ufcNTzEhiV8sgh4Sk0gutEK9qUsbuEF_xFijg7Q1jGj4lMPTCH-1ooVEQUyHOOkotheFAbTnUdU0bCqs9OchBlnU49J3q-5fb6_FJoGmAjUcmJa064Hq7PD0NewHGRk66tnbzow7DpsdOPZnGQzg_la6oT9M5bR-2i6Q6gIo4QUNHLVO_lEYzr1EHPN3mdBiWB6GviKRdPPpMl2_QP-UnZVrvu4IOPdGUb9MgeCpW_lPOHwxQxi9TmvzI" />
                </div>
              </div>
              <div className="md:col-span-4 space-y-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Mastery</span>
                <h3 className="font-serif text-4xl md:text-5xl leading-tight">The Alchemy of Pure Passion</h3>
                <p className="font-body text-secondary text-base md:text-lg leading-relaxed">Guided by executive chef Julian Saint-Clair, our kitchen operates with the precision of a Swiss watch and the soul of a poet. Every plate is a signature, every garnish a final stanza.</p>
                <a className="inline-flex items-center gap-4 font-label text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 pb-2 hover:border-primary transition-all group" href="#">
                  Meet the Artisans
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* Decorative Large Number */}
            <span className="absolute -bottom-10 md:-bottom-20 -right-10 font-serif text-[12rem] md:text-[20rem] text-surface-container opacity-30 select-none pointer-events-none">02</span>
          </div>

          {/* Row 3: Detail Masonry & White Space */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="space-y-8 md:space-y-12">
              <div className="gallery-item relative overflow-hidden group">
                <img alt="Intricate plating detail" className="w-full aspect-[3/4] object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeElEnpBsLSMA11dPfs0zwWmQjuDqTiDIvKwko3ty1rU9k07WLj-4jEVZTGLi4UrYFk5p4wqCMoqh3_HsOq10G9X2jaXYqBPpwSr4PRioAxacmAFI8yChqdk7u46OAZP5ke2r9dA_HvVtSbrdnDSfyXIE2QZhCHYg_Bkzdu9sa4iM2H-S0e6rOiMDEcLBkTTpzgkiR2bJ--5U10_q0lCLSpUXD-Fcx19RxGTXUuqFseSg0iQ_lEiMjCg0OhcVps9utzARPrK596-w" />
                <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-white font-serif italic text-xl mb-4">"The canvas of flavor"</p>
                  <span className="w-10 h-px bg-white/50"></span>
                </div>
              </div>
              <div className="p-8 md:p-12 border-l border-outline-variant/30 bg-surface-container-lowest">
                <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-primary">"Gastronomy is the divine art of transmuting ingredients into pure emotion."</p>
              </div>
            </div>
            <div className="space-y-8 md:space-y-12 md:pt-16">
              <div className="gallery-item relative overflow-hidden group">
                <img alt="Elegant champagne service" className="w-full aspect-[3/4] object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupzioygZENulPUIDu63kHLR04taTEmqwsTK5dv5-xRfEU5hU6Akeu_uhvmiYqXTRAUqbvXSAo6yS1fJTfqPcIE-BgZNRaYamAu047fvfNt1XvbMzhlqrVRXB9b6u8AWnrB7G6utM-BwprCgxv2YiwgdrA3MCPTLB4-_3Cpb9pKacAxdWLnB90dJvpfLaAGUMGyAjbhqRz50QgW_zGG_BVCnNcuNzetFuGY9Z2nQuTe9MmO79FFNGpY0dE0Hu3YgrXk5I6vWfsP8Y" />
                <div className="overlay absolute inset-0 bg-amber-900/10 opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="gallery-item relative overflow-hidden group">
                <img alt="Exquisite dessert presentation" className="w-full aspect-square object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGyUfRmx4z5jjUcRtT8rEaKME6pS5-ZLfJVQXfIEdxk8oIJpBdDxhx-nj16RcRQ7eW8s6G_C4kfB0NzZyAbmxVVHQ9a8Qfe0ZhHo6KfBOQJHiqKMKcpSxz02RhYkZIm4pCOEmkgJtT5vBewPKFc_aa0sZY3AhT7N3luaJewteeHyTVBGuajfxFR5YNaV8qu5zRCoaRxun6aRlirvo-BnM9a9rO1fKM54ipi0RaisTO311BofCwRywZh8MNj7Dxgpcj9Z6UVHsez6Y" />
                <div className="overlay absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-label text-[10px] text-white uppercase tracking-[0.4em] border border-white/40 px-4 py-2">The Sweet Finale</span>
                </div>
              </div>
            </div>
            <div className="space-y-8 md:space-y-12">
              <div className="gallery-item relative overflow-hidden group">
                <img alt="Gourmet roast meat dish" className="w-full aspect-[4/5] object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjzw9lq5EuZG-qNEbjFK-UsYGndPCn4mhr0l4_jaFdachKJv5E5JpXy4TiPfJF85vbZSld2BLMIGxzG7lKjfs7hidXseJKYTs9FQunutKg3ime-D8QzwN5vXDlD_zLJEEXxA1FIurHoZT_ye1BGVs0xNAQze4bMrm4i9ChWQtmIXz13O6zYD-BXCqVMhsTtO2526RKnw7LLkb6Wm08PudO_B7AMuhs_RNHr5sfsXIRaQ8r48kcRpjM1rMbZtRjKM0jpm3coHcL4Zc" />
              </div>
              <div className="flex flex-col items-end gap-4 text-right">
                <span className="font-serif text-7xl md:text-8xl text-outline-variant/20 select-none">03</span>
                <p className="font-body text-secondary text-sm max-w-[200px]">The interplay of texture and temperature, captured in a single frame.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Banner */}
        <section className="bg-surface-container-highest py-24 md:py-32 overflow-hidden">
          <div className="px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-8 md:space-y-10">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">Curated Atmosphere</span>
                <h2 className="font-serif text-5xl md:text-6xl leading-tight">A Symphony <br />of Senses</h2>
                <p className="font-body text-secondary text-lg md:text-xl leading-relaxed">From the tactile grain of our bespoke furniture to the acoustic resonance of our dining hall, we curate the "vibe" as carefully as we curate our rare vintages.</p>
                <button className="px-10 py-4 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                  Our Philosophy
                </button>
              </div>
              <div className="relative group">
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="gallery-item relative overflow-hidden rounded-sm shadow-2xl">
                  <img alt="Expert cocktail service with aromatic garnishes" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGh5UC4fqdf8LHVx65eznMhVAZ_VnZqpFbRMV6GENwUUNc08QSYZz8_wskJN5Vn5E_RI405JCwvXz5t82nnPUK1k-4fsPgA2TlNnL6oVwgp2YNY9X_PgBavXWKNavKVXApiWOGAvvMvwdIZKIMgtWcxnvRtJkP-J0buNVPuNHW_xD-WHPLp0EUhvcdlr4b38PRCCFLeX4z1Z6cyCiTo_PQG1meEkpYzAhQ0wDWzzG1ARwR2jC2-HcRU9fT_tzFyjUmjQ7v-xIQDdk" />
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

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-950 w-full pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 px-8">
          <div className="space-y-8">
            <div className="text-xl font-serif text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">L'ÉCLAT</div>
            <p className="font-body text-sm text-zinc-500 leading-relaxed">An editorial journey through taste, light, and the art of fine dining. Paris • New York • Tokyo.</p>
          </div>
          <div className="space-y-6">
            <span className="font-serif italic text-primary block text-lg">Navigation</span>
            <ul className="space-y-3">
              <li><Link className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="/">Home</Link></li>
              <li><Link className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="/menu">Our Menu</Link></li>
              <li><Link className="text-primary underline underline-offset-8 font-body font-bold text-sm" href="/gallery">Gallery</Link></li>
              <li><Link className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="/reservations">Reservations</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="font-serif italic text-primary block text-lg">Legal</span>
            <ul className="space-y-3">
              <li><a className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="#">Privacy Policy</a></li>
              <li><a className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="#">Terms of Service</a></li>
              <li><a className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="#">Careers</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <span className="font-serif italic text-primary block text-lg">Follow Us</span>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-primary transition-colors" data-icon="camera">camera</span>
              <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-primary transition-colors" data-icon="share">share</span>
              <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-primary transition-colors" data-icon="mail">mail</span>
            </div>
            <p className="font-body text-xs text-zinc-400 uppercase tracking-widest mt-6">128 Avenue des Champs-Élysées, Paris</p>
          </div>
        </div>
        <div className="px-8 mt-16 md:mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="font-body text-[10px] tracking-[0.4em] text-zinc-400 uppercase">© 2024 L'ÉCLAT GASTRONOMY. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
