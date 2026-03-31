import Link from "next/link";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeaderNav activePage="home" />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Signature Dish" className="w-full h-full object-cover grayscale-[5%]" src="/images/hero_luxury.png" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 px-5 md:px-8 w-full pt-24 md:pt-0">
            <div className="max-w-2xl">
              <span className="block font-label uppercase tracking-[0.18em] text-primary-fixed mb-5 md:mb-7 text-[10px] md:text-xs font-bold">Fine Dining Reimagined</span>
              <h1 className="font-luxury text-[3rem] sm:text-6xl md:text-8xl lg:text-[7rem] text-white leading-[0.9] mb-7 md:mb-10 tracking-[-0.03em] text-luxury-shadow">
                The Art of <br /> <span className="font-normal text-primary-fixed">Refined</span> Dining
              </h1>
              <p className="text-white/90 mb-8 md:mb-10 max-w-md font-manrope font-light leading-[1.75] text-sm md:text-base text-luxury-shadow">
                An immersive gastronomic journey where classical techniques meet contemporary vision. Each plate is a curated masterpiece.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <Link href="/reservations" className="bg-gold-gradient text-on-primary px-8 py-4 md:px-10 md:py-5 rounded-md font-label uppercase tracking-widest text-xs font-bold transition-transform hover:scale-[1.02] inline-block text-center w-full sm:w-auto">
                  Book Your Experience
                </Link>
                <Link className="font-label uppercase tracking-widest text-xs font-bold text-primary-fixed border-b border-primary-fixed/30 pb-1 hover:border-primary-fixed transition-all" href="/menu">
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-32 bg-surface">
          <div className="px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5 order-2 md:order-1 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img alt="Restaurant Interior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANyNeTfwFU1YjNvLAvyaTwBHnzPr_WHgfZwXwo1vZvR3eviMZzQFSQdQI6-Mkzgn5BC5sjAsW2JSsasahV6QeQcYS5_po-3wFF4cgDRq5zjDMqx76UmR748cd1x9KnTzyW0UqhbX0myPtHTOpczbi-l5Y4oQkfPcXexf1gaEMuvfVPB6EeYqagqmy371mWIzRhQUN_52O_5enYU1SltGQ6mnlMM6Xn0aEoWK961CK7DXEguTgfPqr9qeUPuYr2mCJHOrhZPnNEtVo" />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 pt-0 md:pt-2">
              <span className="font-label uppercase tracking-[0.125em] text-primary mb-8 md:mb-12 block text-2xl md:text-[32px] font-bold">Our Heritage</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-background mb-8 md:mb-12 leading-[1.05] tracking-[-0.03em]">Crafting Moments <br />Through Generations</h2>
              <div className="space-y-6 md:space-y-10 text-on-surface-variant font-manrope font-light leading-[1.8] text-base md:text-xl max-w-2xl">
                <p>L&apos;ÉCLAT was born from a desire to return to the essence of gastronomy. We believe that true luxury lies in the purity of ingredients and the precision of the hand that prepares them.</p>
                <p>Nestled in the heart of the city, our sanctuary offers an escape into a world of sensory delight, where every detail—from the weight of the linen to the notes of the cellar—is orchestrated for your pleasure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* A Taste of Perfection Section */}
        <section className="py-10 md:py-16 bg-surface-container-low">
          <div className="px-5 md:px-8">
            <div className="text-center mb-8 md:mb-12">
              <span className="font-label uppercase tracking-[0.18em] text-primary mb-4 block text-[10px] md:text-xs">The Curated Selection</span>
              <h2 className="font-headline text-3xl md:text-5xl text-on-background tracking-[-0.02em]">A Taste of <span className="italic font-normal">Perfection</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
              {/* Dish 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[1/1.3] overflow-hidden rounded-md mb-4 md:mb-6">
                  <img alt="Saffron Malai Paneer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/dishes/malai_paneer.png" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Saffron Malai Paneer</h3>
                  <span className="font-headline text-primary text-base">₹800</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed text-xs">Tandoor-grilled cottage cheese, Kashmiri saffron infusion, and fresh micro-greens.</p>
              </div>

              {/* Dish 2 (Staggered) */}
              <div className="group cursor-pointer lg:mt-12">
                <div className="aspect-[1/1.3] overflow-hidden rounded-md mb-4 md:mb-6">
                  <img alt="Dal Makhani Signature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/dishes/dal_makhani.png" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Dal Makhani Signature</h3>
                  <span className="font-headline text-primary text-base">₹650</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed text-xs">24-hour slow-cooked black lentils, traditional churned butter, and a touch of cream.</p>
              </div>

              {/* Dish 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[1/1.3] overflow-hidden rounded-md mb-4 md:mb-6">
                  <img alt="Smoked Arbi Galouti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/dishes/arbi_galouti.png" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Smoked Arbi Galouti</h3>
                  <span className="font-headline text-primary text-base">₹550</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed text-xs">Smoke-infused taro root patties with traditional spices and soft saffron-brushed paratha.</p>
              </div>

              {/* Dish 4 (Staggered) */}
              <div className="group cursor-pointer lg:mt-12">
                <div className="aspect-[1/1.3] overflow-hidden rounded-md mb-4 md:mb-6">
                  <img alt="Traditional Rose Kulfi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/dishes/rose_kulfi.png" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Traditional Rose Kulfi</h3>
                  <span className="font-headline text-primary text-base">₹450</span>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed text-xs">Hand-churned rose petal kulfi with crushed pistachios and edible silver leaf.</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16 text-center">
              <button className="font-label uppercase tracking-widest text-[10px] font-bold text-primary border-b-2 border-primary/20 pb-1.5 hover:border-primary transition-all">
                Explore Full Menu
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Dining Ambience" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAclytN8d3a3XVQVOpb0bIl97o8sdAS53PuBQ-KN2mf3ATgQ-3YndZRU660aSwjuY8JYvI6ZdVgTumf46gY0C-TijxpjK7AzLg2VpjhvlKbKLZp71O1uqqKt59e3vCsIl8hpg8kOSw_DeMkAtCx2BUfnNyvymWVE4pGMOu27jOE2J59ivtjvLmmT7RzJhNht-qAi18YcITeuXRrITds0ewTJZFMmKn1-ywd8NLF31EF1EIRoJbFQaibBXD7H8_UfY69yWs2Adr4tB0" />
            <div className="absolute inset-0 bg-on-background/80 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 px-5 md:px-8 text-center">
            <span className="font-label uppercase tracking-[0.2em] text-primary-fixed-dim mb-6 md:mb-8 block text-[10px] md:text-xs">Your Table Awaits</span>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl text-surface-bright mb-8 md:mb-12 tracking-[-0.02em]">Experience the <br /><span className="italic font-normal">Extraordinary</span></h2>
            <Link href="/reservations" className="bg-gold-gradient text-on-primary px-8 py-4 md:px-12 md:py-6 rounded-md font-label uppercase tracking-[0.2em] text-xs font-bold transition-all hover:scale-105 hover:brightness-110 shadow-2xl shadow-primary/20 inline-block">
              Secure a Reservation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
