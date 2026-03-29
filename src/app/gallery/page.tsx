import Link from "next/link";
import GalleryReveal from "./GalleryReveal";
import HeaderNav from "../components/HeaderNav";

export default function Gallery() {
  return (
    <>
      <HeaderNav activePage="gallery" />
      
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

        <GalleryReveal />

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
              <li><Link className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="/gallery">Gallery</Link></li>
              <li><Link className="text-zinc-500 hover:text-primary transition-colors font-body text-sm" href="/philosophy">Philosophy</Link></li>
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
