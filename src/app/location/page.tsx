import Link from "next/link";

export default function Location() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6">
          <Link className="text-2xl font-headline tracking-tighter text-amber-800 uppercase" href="/">L'ÉCLAT</Link>
          <div className="hidden md:flex items-center space-x-12">
            <Link className="font-label uppercase tracking-widest text-xs text-zinc-600 hover:text-amber-800 transition-colors" href="/">Home</Link>
            <Link className="font-label uppercase tracking-widest text-xs text-zinc-600 hover:text-amber-800 transition-colors" href="/menu">Menu</Link>
            <Link className="font-label uppercase tracking-widest text-xs text-zinc-600 hover:text-amber-800 transition-colors" href="/gallery">Gallery</Link>
            <Link className="font-label uppercase tracking-widest text-xs text-amber-700 border-b border-amber-700/30 pb-1" href="/location">Location</Link>
          </div>
          <Link href="/reservations">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label uppercase tracking-widest text-[10px] px-6 py-3 rounded-lg shadow-sm active:scale-95 transition-transform">
              Book a Table
            </button>
          </Link>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-8 mb-32">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7 z-10">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6 block">The Paris Sanctuary</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] mb-8 text-on-surface">
                Our <span className="italic font-normal">Sanctuary</span>
              </h1>
              <p className="font-body text-lg text-secondary max-w-lg leading-relaxed">
                Nestled in the golden triangle of Paris, L'ÉCLAT offers a refined escape from the rhythmic pulse of the Avenue des Champs-Élysées.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover" data-alt="Luxurious golden facade of a high-end Parisian restaurant at dusk with soft glowing lanterns and architectural details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLnWhmxlczW-BdjhThwnDe9lJd-_ycqR4cXg5H7l2NzgwqiMlQT_4Gm-GfbtXr_rFDi-JNwr-ppal4unwDFaKThHVNd6q7puPo9kdvzPkQacdkLhytGDUOFjOMdpKwUGFVKDpo65s9FcgOEIhDRxLdGDHUocBn6npkps3aRCzMdeGx2gOR6yPjM4cPKJUXa3l9KPbdhoR0m8mmiNSGYenxDxarjXgSDSjYtO7UgRzYXpCiP0opW6lMKyl5baqOilq3UqVY5Mb8nfU" />
              </div>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="bg-surface-container-low py-32">
          <div className="px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              {/* Contact Column */}
              <div className="space-y-12">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-4 block">Direct Contact</span>
                  <div className="space-y-4">
                    <p className="font-headline text-2xl text-on-surface">+33 (0) 1 45 62 11 00</p>
                    <p className="font-body text-secondary border-b border-outline-variant/30 pb-2 inline-block">concierge@leclat-gastronomy.fr</p>
                  </div>
                </div>
                <div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-4 block">The Address</span>
                  <address className="not-italic font-headline text-2xl text-on-surface leading-snug">
                    128 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </address>
                </div>
              </div>
              
              {/* Hours Column */}
              <div className="md:col-span-2 bg-surface-container-lowest p-12 shadow-[0_40px_100px_-20px_rgba(26,28,26,0.04)] rounded-lg">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-8 block">Service Hours</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
                  <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                    <span className="font-label text-xs uppercase tracking-widest">Monday — Thursday</span>
                    <span className="font-headline italic text-primary">12:00 — 23:00</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                    <span className="font-label text-xs uppercase tracking-widest">Friday — Saturday</span>
                    <span className="font-headline italic text-primary">12:00 — 00:00</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                    <span className="font-label text-xs uppercase tracking-widest">Sunday Brunch</span>
                    <span className="font-headline italic text-primary">11:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                    <span className="font-label text-xs uppercase tracking-widest">Sunday Dinner</span>
                    <span className="font-headline italic text-primary">19:00 — 22:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-32 overflow-hidden">
          <div className="px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 order-2 md:order-1">
              <h2 className="font-headline text-4xl mb-8">How to <span className="italic font-normal">Reach Us</span></h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-2">Valet Service</h3>
                  <p className="font-body text-sm leading-relaxed text-secondary">
                    Private valet parking is available at the main entrance. For guests arriving with chauffeured services, a dedicated drop-off point is located at the side arcade.
                  </p>
                </div>
                <div>
                  <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-2">Public Transport</h3>
                  <p className="font-body text-sm leading-relaxed text-secondary">
                    The nearest station is George V (Line 1), situated a mere two-minute stroll from our doorstep.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8 order-1 md:order-2">
              <div className="relative w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden group">
                <img className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" data-alt="Clean and minimal light-themed map style illustration of Paris 8th arrondissement centered on Champs-Élysées with a gold pin icon" data-location="Paris, France" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA93ntpwALb8IMJAzLRhUp6bdoggWrKBkHNx7EiyX5IO407HZIEF5UnufzwdkqM_emrrXFpTnrzYRxD8BFVKgj__KTGpAFoYD87Eb-9l2blG_A3cQ9P1RM3wA3d2LvsAzu5sT3ZT2f8uTsCyRE12wNDrKHvFwgvUPpFXbL6Pys7QF4mzrKpCoeavXr0HT1MLwaLkPEfVPGaJ43_-xEwQla6DhI0d9qIWxUSeB7cMrMswjsAmgFbAKI-xO2CKWrOxtWrZZxas4DaaZk" />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arrival Gallery */}
        <section className="pb-32">
          <div className="px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" data-alt="Close up of a luxury restaurant entrance with polished brass handle and a subtle shadow cast on a limestone wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVxKktsy8LToEIdO5h4TLqBVGIgCE0kPqH9roRriGHXu5PiRAp3sCli1cdBa1dCPgAS8yu8kzcPIvgYuNNjnU6I6B18lIariAqIypoh_7yBiZWT7WHXMvnoPegpo4FYFrV5jgTuDRkaMaYPdtv5Jp15sXvDFxBxvg6RV_vDuGuPWWlUHXQtQGuvBN-kHm_QPLmHDMAM3b_WUSZ2pIWzF_ZocrRXfMhWeHGe4S-00RKEAu8n1YcysGXTB1R-rSzm9C78ZfZ6FxQ_M4" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-12">
              <img className="w-full h-full object-cover" data-alt="Iconic view of Eiffel Tower in the distance seen from a classic Parisian street during sunset with soft warm light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMAa9XRmhI_364Xas28A_a919_YVbmIzdO0slo2RZl1BxiHE7heupmPlTQCn7YKsYgoyMdpRXTSw7UBdENtcKEAawAgXsMbyE58boNXjmfcP2DeHx5u7_kAE3tjQo5g-tjl--Fi8pD5bxbOI7C_vGTPr_5tKdFv2k2HrKu1yc3nisGTwu8ME-x5Yvfr06bpHO8NuotjiZLWdm3fakw97X8ameJIwpv3kDU2WtcJp4BUi4Ra9QysG6N5oW2oSkSd5ju-hcf1oWf5Q" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" data-alt="Interior view of a high-end restaurant foyer with a large bouquet of white lilies in a crystal vase on a marble table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoT7F-EZJLZBCucKHJS4fiwhNnCOxZAS37jveZFIIk2tG4PpeXLgqwcJLgc_ZhcyAA0YJDWYjiXDXyoO3qw-pAt-DhhMm6tub37Akqm2xqw2c0jh_-0cbfVJ7cJ5C1Za-iuTSeNsLDPVPZebrCKmrilXU1VYwHDe9hQN_EOujw3sT6q25DQiuW6OiHPEFYGFsy5CR-W0w-JgfAGWfDSfsU5VUHElSs6Yx7MQXxyVL9LwKGfipnpJyO95ddERbZh86YqVi5XxAh61A" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-950 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8">
          <div className="md:col-span-1">
            <span className="text-lg font-headline text-zinc-900 dark:text-zinc-100 block mb-4 uppercase">L'ÉCLAT</span>
            <p className="font-body font-light text-zinc-500 text-sm leading-relaxed">
              Elevating the art of gastronomy to an unparalleled sensory experience in the heart of Paris.
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-headline italic text-amber-700 dark:text-amber-500 block">Experience</span>
            <ul className="space-y-2">
              <li><Link className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="/">Home</Link></li>
              <li><Link className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="/menu">Menu</Link></li>
              <li><Link className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="/gallery">Gallery</Link></li>
              <li><Link className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="/reservations">Reservations</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <span className="font-headline italic text-amber-700 dark:text-amber-500 block">Legal</span>
            <ul className="space-y-2">
              <li><a className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="#">Privacy Policy</a></li>
              <li><a className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="#">Terms of Service</a></li>
              <li><a className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="#">Careers</a></li>
              <li><a className="font-body font-light text-zinc-500 hover:text-zinc-800 text-sm" href="#">Press</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <span className="font-headline italic text-amber-700 dark:text-amber-500 block">Social</span>
            <div className="flex space-x-4">
              <a className="text-zinc-500 hover:text-amber-700 transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">share_reviews</span>
              </a>
              <a className="text-zinc-500 hover:text-amber-700 transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">camera_alt</span>
              </a>
            </div>
          </div>
        </div>
        <div className="px-8 mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-[10px] font-label tracking-widest text-zinc-400 uppercase">
            © 2024 L'ÉCLAT GASTRONOMY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}
