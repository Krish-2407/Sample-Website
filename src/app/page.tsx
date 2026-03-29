import Link from "next/link";
import HeaderNav from "./components/HeaderNav";

export default function Home() {
  return (
    <>
      <HeaderNav activePage="home" />
      <main>
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Signature Dish" className="w-full h-full object-cover grayscale-[20%]" data-alt="Close-up of a high-end gourmet dish with micro-greens and gold leaf, dramatic side lighting on a dark stone plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoutmT1OMOemiki86hYwMs3bLdHsGLH5WT25skqqO58wK8BdoLRbr4ExJ5diUwE-A5ynEufGKXQOtpxMGF2qmiORrGBM0f5d6DPwXilBgkxSTKxn7sRqs8MDE27c_SE-lChf2YEb4j5wd_d-CTTSlOIbkGGILw-T8-is6ns67U-m2aAOG0RJ5HOGBZc9WK43A-0T8UQsY1pXz8nSBehw9FOQhghU3sEgSwIN8U7y0kL_8V_4u8pBNzyBldQkZayTO_O9bDl6j7W-k" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 w-full">
            <div className="max-w-2xl">
              <span className="block font-label uppercase tracking-[0.2em] text-primary mb-6 text-sm">Fine Dining Reimagined</span>
              <h1 className="font-headline text-6xl md:text-8xl text-on-background leading-[1.1] mb-8 tracking-tight">
                The Art of <br /> <span className="italic font-normal">Refined</span> Dining
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-10 max-w-md font-light leading-relaxed">
                An immersive gastronomic journey where classical techniques meet contemporary vision. Each plate is a curated masterpiece.
              </p>
              <div className="flex items-center gap-8">
                <Link href="/reservations" className="bg-gold-gradient text-on-primary px-10 py-5 rounded-md font-label uppercase tracking-widest text-xs font-bold transition-transform hover:scale-[1.02] inline-block text-center">
                  Book Your Experience
                </Link>
                <Link className="font-label uppercase tracking-widest text-xs font-bold text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all" href="/menu">
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Our Story Section */}
        <section className="py-32 bg-surface">
          <div className="px-8 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
            <div className="md:col-span-5 order-2 md:order-1 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img alt="Restaurant Interior" className="w-full h-full object-cover" data-alt="Interior of a luxury restaurant with soft ambient lighting, velvet seating, and architectural gold accents in an editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANyNeTfwFU1YjNvLAvyaTwBHnzPr_WHgfZwXwo1vZvR3eviMZzQFSQdQI6-Mkzgn5BC5sjAsW2JSsasahV6QeQcYS5_po-3wFF4cgDRq5zjDMqx76UmR748cd1x9KnTzyW0UqhbX0myPtHTOpczbi-l5Y4oQkfPcXexf1gaEMuvfVPB6EeYqagqmy371mWIzRhQUN_52O_5enYU1SltGQ6mnlMM6Xn0aEoWK961CK7DXEguTgfPqr9qeUPuYr2mCJHOrhZPnNEtVo" />
              </div>
              {/* Overlapping Decorative Element */}
              <div className="absolute -bottom-10 -right-10 bg-surface-container-lowest p-8 shadow-sm hidden md:block max-w-[240px]">
                <p className="font-headline italic text-primary text-xl mb-2">L'ÉCLAT was born from a desire to return to the essence of gastronomy. We believe that true luxury lies in the purity of ingredients and the precision of the hand that prepares them.</p>
                <p className="text-xs font-label uppercase tracking-widest text-secondary">A Legacy of Excellence</p>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <span className="font-label uppercase tracking-[0.2em] text-primary mb-6 block text-sm">Our Heritage</span>
              <h2 className="font-headline text-5xl text-on-background mb-10 leading-tight">Crafting Moments <br />Through Generations</h2>
              <div className="space-y-8 text-on-surface-variant font-light leading-relaxed text-lg">
                <p>L'ÉCLAT was born from a desire to return to the essence of gastronomy. We believe that true luxury lies in the purity of ingredients and the precision of the hand that prepares them.</p>
                <p>
                  Nestled in the heart of the city, our sanctuary offers an escape into a world of sensory delight, where every detail—from the weight of the linen to the notes of the cellar—is orchestrated for your pleasure.
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-outline-variant/30 flex items-center gap-6">
                <div className="h-16 w-16 rounded-full overflow-hidden grayscale">
                  <img alt="Executive Chef" data-alt="Portrait of a professional chef in white uniform with a serious yet welcoming expression, dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAssBuLj3p2EodsLDpy9FIkq51AcdzS3ACU5pXVNbrG_K-ihBmNto8WsvFbI0-zgG6eqRHen0O-5iTJQg7peWp_gW3kxsflbh6DTgKSx3HAfwFjzB5voTrqErlKpZz1hVciOvzqx43NvJ409lb1Z7dFo35-d1J3T8AOxS_q0MfLAMNCpDLu0LlmfQCvO4KmqDExDO0LZmH1TGebQ36QP-b05SPvMujFct7RXlH_lRFo_26-m8kiHKg5yuapFazrQd65q5E2Zlzn9Oc" />
                </div>
                <div>
                  <p className="font-headline italic text-xl">L'ÉCLAT was born from a desire to return to the essence of gastronomy. We believe that true luxury lies in the purity of ingredients and the precision of the hand that prepares them.</p>
                  <p className="font-label uppercase tracking-widest text-[10px] text-secondary">Executive Chef &amp; Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* A Taste of Perfection Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="px-8">
            <div className="text-center mb-24">
              <span className="font-label uppercase tracking-[0.2em] text-primary mb-6 block text-sm">The Curated Selection</span>
              <h2 className="font-headline text-5xl text-on-background">A Taste of Perfection</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {/* Item 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-md mb-8">
                  <img alt="Lobster Thermidor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High-end presentation of lobster thermidor on a white porcelain plate with artistic garnish and micro-herbs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVUniD4KbeIt41f89hlzaT-AqoADJD54VhrT9tWy44Gyb6vp9rgE9LctDEgoY6fSR_gtEV-keX-bEbEBGiE-icvIey_EbrGwiu5RJQiwdwKBKbDjfJrkNwiLxset6lsVqYI0y2V_zxt6kWJToMupYdthZeSkaHB7dLEtyT3pPDyVnMmUI1b_xVscmkFHCzLDM3AUTBasDOCrn2CU-C33EbHtOhk95mGPI_aazxIaQaqcPLqcC0wZaWv4jGqfl0M0aGglI49gjkJf0" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">Coastal Majesty</h3>
                  <span className="font-headline text-primary text-xl">€68</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed">Butter-poached blue lobster, saffron-infused foam, and young spring peas from our garden.</p>
              </div>
              {/* Item 2 (Asymmetric shift) */}
              <div className="group cursor-pointer lg:mt-16">
                <div className="aspect-[3/4] overflow-hidden rounded-md mb-8">
                  <img alt="Aged Wagyu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Thin slices of premium Wagyu beef served on a dark slate with edible flowers and aged balsamic reduction" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCki3qDtr9H388COHL6Qt4ltFPFHQq2jrIsKrUihmplHZgls0ycu4qIOLvUh-GNxhGjquTt45G86XdjUKEuNYFRcof-nbMDNXN1rM-C-XALAZaFhMBvTZeN3mDLAdkgnhCzFH4PsR23wWkWwWnf01miAISVGWCYXIDJpVX-v_JB78ChOtLOvMSXVbMdASEauUh3iGiPYYzyZ4lyRNHeR-NSakvyduwfGiyToy219mudJ3XrfR_UDdA4YLEzGJxA68-ulJa4heuAAm8" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">Terroir Symphony</h3>
                  <span className="font-headline text-primary text-xl">€82</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed">45-day dry-aged wagyu, smoked bone marrow, and wild forest mushrooms with truffle jus.</p>
              </div>
              {/* Item 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-md mb-8">
                  <img alt="White Chocolate Ganache" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Exquisite white chocolate dessert shaped like a pearl sitting on a bed of citrus crumble and gold flakes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC63mJmluCoAKiDjH3Zy-slKgitLSEwxQKdKX9YR8hSnpIZiLlbDW6BptBWncidz5oRZIFaPKYSVMsOS_TfmXeK7MHl-mkUrxIgkVVAGlQtg8Bw6HWOqiT-9KbLtrKgsuTQYrTssbpMj2mOLPk-eN9b5sJloXZ0r6oZKVn_-GFywXMxEvZoedGHAveUpOXhU-nVjStFATCfExX9R7xevJe1Nc43-KjEqMuVvBvafFoSPe7hKBsEQBbm7gkWzTwQ3G8DldYZXo8Ch1Q" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">The Pearl</h3>
                  <span className="font-headline text-primary text-xl">€24</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed">White chocolate ganache sphere, yuzu heart, and almond praline sand with 24k gold leaf.</p>
              </div>
            </div>
            <div className="mt-24 text-center">
              <button className="font-label uppercase tracking-widest text-xs font-bold text-primary border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
                Explore Full Menu
              </button>
            </div>
          </div>
        </section>
        {/* Final CTA Banner */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Dining Ambience" className="w-full h-full object-cover" data-alt="Blurry wide shot of a luxury dining room with golden warm lighting and people enjoying fine food, high contrast black and gold theme" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAclytN8d3a3XVQVOpb0bIl97o8sdAS53PuBQ-KN2mf3ATgQ-3YndZRU660aSwjuY8JYvI6ZdVgTumf46gY0C-TijxpjK7AzLg2VpjhvlKbKLZp71O1uqqKt59e3vCsIl8hpg8kOSw_DeMkAtCx2BUfnNyvymWVE4pGMOu27jOE2J59ivtjvLmmT7RzJhNht-qAi18YcITeuXRrITds0ewTJZFMmKn1-ywd8NLF31EF1EIRoJbFQaibBXD7H8_UfY69yWs2Adr4tB0" />
            <div className="absolute inset-0 bg-on-background/80 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 px-8 text-center">
            <span className="font-label uppercase tracking-[0.4em] text-primary-fixed-dim mb-8 block text-sm">Your Table Awaits</span>
            <h2 className="font-headline text-5xl md:text-7xl text-surface-bright mb-12">Experience the <br /><span className="italic">Extraordinary</span></h2>
            <Link href="/reservations" className="bg-gold-gradient text-on-primary px-12 py-6 rounded-md font-label uppercase tracking-[0.2em] text-xs font-bold transition-all hover:scale-105 hover:brightness-110 shadow-2xl shadow-primary/20 inline-block">
              Secure a Reservation
            </Link>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-950 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8">
          <div className="space-y-6">
            <p className="text-lg font-headline text-zinc-900 dark:text-zinc-100">L'ÉCLAT</p>
            <p className="text-zinc-500 font-body text-sm leading-relaxed">
              Elevating the culinary landscape with devotion and artistry since 1984.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">language</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">restaurant</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">wine_bar</span>
            </div>
          </div>
          <div>
            <p className="font-headline italic text-primary mb-6">Explore</p>
            <ul className="space-y-4">
              <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/menu">The Menu</Link></li>
              <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/gallery">Gallery</Link></li>
              <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/philosophy">Philosophy</Link></li>
              <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/location">Location</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-headline italic text-primary mb-6">Contact</p>
            <ul className="space-y-4 text-zinc-500 font-body text-sm">
              <li>127 Avenue de l'Opéra</li>
              <li>75002 Paris, France</li>
              <li>+33 (0) 1 42 36 00 00</li>
              <li>reservations@leclat.com</li>
            </ul>
          </div>
          <div>
            <p className="font-headline italic text-primary mb-6">Newsletter</p>
            <p className="text-zinc-500 text-xs mb-4 font-body leading-relaxed">Join our inner circle for exclusive updates and seasonal previews.</p>
            <div className="relative">
              <input className="w-full bg-transparent border-b border-outline-variant py-2 pr-10 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Email Address" type="email" />
              <button className="absolute right-0 bottom-2 text-primary">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-label tracking-widest text-zinc-400 uppercase">© 2024 L'ÉCLAT GASTRONOMY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a className="text-[10px] font-label tracking-widest text-zinc-500 hover:text-primary transition-colors uppercase" href="#">Privacy Policy</a>
            <a className="text-[10px] font-label tracking-widest text-zinc-500 hover:text-primary transition-colors uppercase" href="#">Terms of Service</a>
            <a className="text-[10px] font-label tracking-widest text-zinc-500 hover:text-primary transition-colors uppercase" href="#">Press</a>
          </div>
        </div>
      </footer>
    </>
  );
}
