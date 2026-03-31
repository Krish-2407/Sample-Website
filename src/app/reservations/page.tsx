import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function Reservations() {
  return (
    <>
      <HeaderNav activePage="reservations" theme="light" />
      
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 flex flex-col items-center">
        {/* Editorial Header Section */}
        <header className="text-center max-w-3xl px-5 md:px-8 mb-10 md:mb-16">
          <span className="font-label uppercase tracking-[0.18em] text-[10px] text-primary mb-4 block">Reservations</span>
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl text-on-surface mb-4 md:mb-6 tracking-[-0.02em] leading-[1.05]">Secure Your Table at L&apos;ÉCLAT</h1>
          <p className="font-body text-secondary text-sm md:text-base font-light leading-[1.75] max-w-xl mx-auto">
            Join us for an unforgettable gastronomic journey where every detail is curated to perfection.
          </p>
        </header>

        {/* Reservation Canvas */}
        <div className="w-full max-w-5xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Side: Visual/Context (Chef's Highlight Style) */}
          <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
            <div className="absolute inset-0 bg-surface-container-low rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" data-alt="Intimate view of a high-end restaurant table set with white linen, gold cutlery, and crystal glassware under soft warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYzU5l9PThKz7mkabipLJ-LAjXaNhRHJeFgfTbwa3p6s4d7zeXiaYf4TCdONyZcwv3FpKzTXiJpFkXhcyBZFzRvG1RyPGTxPGvK1PU5v8m9slDZ6xphKz93byKyATanxkWuEWcmCFs3kjYbx9vV5_ep3bFX7gQIafdqrhgx-yQ34qm54ijyegsJDUPhi3uPSKVSJolEtBxw0BRu3HB-5RprfWP_z7B_ArQTdxSwFrQlkqSyWi5TF51yKDPW1TZS3E3lVHjkNuRKic" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-10 shadow-sm max-w-[280px]">
              <span className="material-symbols-outlined text-primary text-4xl mb-4" data-icon="restaurant_menu">restaurant_menu</span>
              <h3 className="font-headline text-xl mb-2 italic tracking-[-0.01em]">The Tasting Room</h3>
              <p className="font-body text-sm text-secondary font-light">Experience our chef's signature 9-course seasonal selection in an intimate setting.</p>
            </div>
          </div>

          {/* Right Side: Reservation Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-12 rounded-xl">
            <form className="space-y-10">
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Date</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 font-body text-on-surface placeholder-secondary/50" type="date" />
                </div>
                <div className="relative">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Time</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 font-body text-on-surface appearance-none">
                    <option>18:00</option>
                    <option>19:30</option>
                    <option>20:45</option>
                    <option>22:00</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Guests & Occasion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Number of Guests</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 font-body text-on-surface appearance-none" defaultValue="2 Guests">
                    <option>1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ (Contact us)</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Occasion</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 font-body text-on-surface appearance-none">
                    <option>Select Occasion</option>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                    <option>Business Dinner</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Special Requests */}
              <div className="relative">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Special Requests</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-2 font-body text-on-surface placeholder-zinc-400" placeholder="Dietary requirements, seating preference..." rows={2}></textarea>
              </div>

              {/* Policy Check */}
              <div className="flex items-start gap-3 pt-4">
                <input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary-container h-4 w-4" id="policy" type="checkbox" />
                <label className="font-body text-xs text-secondary font-light leading-relaxed" htmlFor="policy">
                  I understand and agree to the <a className="text-primary underline underline-offset-4" href="#">Cancellation Policy</a> and terms of service.
                </label>
              </div>

              {/* Submit Action */}
              <div className="pt-8">
                <button className="w-full luxury-gradient text-on-primary font-label uppercase tracking-[0.2em] text-xs font-bold py-6 rounded-lg shadow-lg hover:brightness-105 transition-all active:scale-[0.98]" type="submit">
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
