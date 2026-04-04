"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

const menuData = {
  appetizers: {
    title: "Appetizers",
    subtitle: "The Inception",
    image: "/images/menu/appetizer_new.png",
    items: [
      { name: "Punjabi Samosa", price: "₹185", desc: "Crispy triangular pastries stuffed with spiced potatoes and green peas, served with mint chutney." },
      { name: "Crispy Onion Pakora", price: "₹210", desc: "Thinly sliced onions coated in a spiced chickpea flour batter and fried until golden crisp." },
      { name: "Aloo Tikki Chaat", price: "₹245", desc: "Spiced potato patties topped with yogurt, tamarind sauce, mint chutney, and sev." }
    ]
  },
  starters: {
    title: "Small Plates",
    subtitle: "The Offering",
    image: "/images/menu/starter_new.png",
    items: [
      { name: "Paneer Tikka", price: "₹345", desc: "Cubes of cottage cheese marinated in spiced yogurt and grilled in a traditional tandoor oven." },
      { name: "Veg Manchurian", price: "₹295", desc: "Crispy mixed vegetable dumplings tossed in a sweet, tangy, and slightly spicy soy-garlic sauce." },
      { name: "Gobi 65", price: "₹280", desc: "Spicy, deep-fried cauliflower florets marinated with ginger, garlic, and robust South Indian spices." }
    ]
  },
  mains: {
    title: "Main Courses",
    subtitle: "The Core Essence",
    image: "/images/menu/main.png",
    items: [
      { name: "Dal Makhani", price: "₹385", desc: "Whole black lentils simmered overnight on a slow fire and finished with fresh cream and butter." },
      { name: "Kadai Paneer", price: "₹410", desc: "Cottage cheese cooked in a thick gravy of tomatoes, bell peppers, and freshly ground spices." },
      { name: "Malai Kofta", price: "₹435", desc: "Soft potato and paneer dumplings cooked in a rich, mild, and creamy cashew-tomato gravy." },
      { name: "Vegetable Biryani", price: "₹395", desc: "Aromatic basmati rice cooked with mixed vegetables, caramelized onions, mint, and special biryani spices." }
    ]
  },
  desserts: {
    title: "Sweet Finales",
    subtitle: "The Sweetness",
    image: "/images/menu/dessert_new.png",
    items: [
      { name: "Rasmalai", price: "₹195", desc: "Soft, spongy cottage cheese discs soaked in sweetened, thickened milk flavored with cardamom." },
      { name: "Gulab Jamun", price: "₹165", desc: "Warm, deep-fried milk solid dumplings soaked in a fragrant rose and cardamom sugar syrup." },
      { name: "Gajar Ka Halwa", price: "₹185", desc: "Traditional sweet carrot pudding slow-cooked with milk, ghee, almonds, and pistachios." }
    ]
  }
};

const MenuItem = ({ name, price, desc }: { name: string; price: string; desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group py-8 border-b border-zinc-100 last:border-0"
  >
    <div className="flex justify-between items-baseline mb-3">
      <h3 className="font-luxury text-2xl md:text-3xl text-zinc-950 group-hover:text-primary transition-colors cursor-default">{name}</h3>
      <span className="font-label text-sm text-zinc-400 tracking-widest">{price}</span>
    </div>
    <p className="font-body text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide max-w-lg italic">
      {desc}
    </p>
  </motion.div>
);

const ViewMore = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mt-12 flex justify-start"
  >
    <Link href="/menu/full" className="group flex items-center space-x-4">
      <span className="font-label text-[10px] uppercase tracking-[0.4em] text-zinc-400 group-hover:text-primary transition-colors">
        [ View Full Category ]
      </span>
      <div className="w-8 h-px bg-zinc-200 group-hover:w-12 group-hover:bg-primary transition-all duration-300"></div>
    </Link>
  </motion.div>
);

export default function Menu() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Refined Hero animations (Unified Reveal instead of split)
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const textRise = useTransform(heroScroll, [0, 0.4], [0, -50]);
  const textOpacity = useTransform(heroScroll, [0, 0.3], [1, 0]);
  const subtitleFade = useTransform(heroScroll, [0, 0.2], [1, 0]);

  return (
    <div className="relative bg-white selection:bg-primary/20" ref={containerRef}>
      <HeaderNav activePage="menu" theme="dark" />

      {/* 1. Cinematic Hero: Unified Reveal */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/menu/main.png" 
            alt="L'ÉCLAT Gastronomic Journey"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80"></div>
        </motion.div>

        <div className="relative z-10 text-center px-5 flex flex-col items-center">
          <motion.span 
            style={{ opacity: subtitleFade, y: textRise }}
            className="font-label text-xs uppercase tracking-[0.8em] text-primary mb-8 block"
          >
            A SYMPHONY OF FLAVORS
          </motion.span>
          
          <motion.h1 
            style={{ opacity: textOpacity, y: textRise, scale: useTransform(heroScroll, [0, 0.4], [1, 1.05]) }}
            className="font-luxury text-7xl sm:text-9xl md:text-[12rem] text-white leading-none tracking-normal select-none"
          >
            MENU
          </motion.h1>

          <motion.p 
            style={{ opacity: subtitleFade, y: textRise }}
            className="font-headline italic text-2xl md:text-3xl text-zinc-300 mt-10 max-w-lg"
          >
            Crafting the soul of Indian heritage with precision.
          </motion.p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
           <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* 2. Menu Sections */}
      <main className="relative z-20">
        
        {/* Sticky Nav */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 py-6 px-10 hidden md:block">
           <div className="max-w-7xl mx-auto flex justify-center space-x-16 font-label text-[10px] uppercase tracking-[0.4em] text-zinc-400">
             {Object.entries(menuData).map(([key, section]) => (
               <a key={key} href={`#${key}`} className="hover:text-primary transition-colors hover:scale-105 inline-block">
                 {section.title}
               </a>
             ))}
           </div>
        </nav>

        {/* Chapter 1: Appetizers */}
        <section id="appetizers" className="relative py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1">
                 <div className="mb-16">
                    <span className="font-label text-[13px] uppercase tracking-[0.6em] text-primary mb-4 block">01 / Chapter</span>
                    <h2 className="font-luxury text-6xl md:text-8xl text-zinc-950 mb-6">{menuData.appetizers.title}</h2>
                    <p className="font-body text-zinc-500 text-sm tracking-[0.4em] uppercase">{menuData.appetizers.subtitle}</p>
                 </div>
                 <div className="space-y-4">
                    {menuData.appetizers.items.map((item, i) => (
                      <MenuItem key={i} {...item} />
                    ))}
                    <ViewMore />
                 </div>
               </div>
               <div className="order-1 lg:order-2">
                 <motion.div 
                   initial={{ scale: 0.95, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   className="relative aspect-[4/5] bg-zinc-100 editorial-shadow overflow-hidden group"
                 >
                    <Image src={menuData.appetizers.image} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" alt="Exquisite Indian Appetizers" />
                    <div className="absolute inset-0 bg-zinc-950/10 mix-blend-overlay"></div>
                    <div className="absolute bottom-10 left-10 text-white max-w-md">
                      <p className="font-label text-[10px] uppercase tracking-[0.4em] mb-3 text-primary">The Signature</p>
                      <h3 className="font-luxury text-4xl italic">Punjabi Samosa</h3>
                      <p className="font-body text-sm mt-4 text-zinc-300 leading-relaxed tracking-wider">Our signature handmade samosas, prepared daily with heirloom spices and served with artisanal chutneys.</p>
                    </div>
                 </motion.div>
               </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Small Plates */}
        <section id="starters" className="relative py-24 md:py-40 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <motion.div 
                   initial={{ scale: 0.95, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ once: true }}
                    className="relative aspect-[4/5] bg-zinc-100 editorial-shadow overflow-hidden group"
                  >
                      <Image src={menuData.starters.image} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" alt="Artisanal Paneer Tikka" />
                      <div className="absolute inset-0 bg-zinc-950/10 mix-blend-overlay"></div>
                      <div className="absolute bottom-10 left-10 text-white max-w-md">
                        <p className="font-label text-[10px] uppercase tracking-[0.4em] mb-3 text-primary">The Signature</p>
                        <h3 className="font-luxury text-4xl italic">Paneer Tikka</h3>
                        <p className="font-body text-sm mt-4 text-zinc-300 leading-relaxed tracking-wider">Cubes of cottage cheese marinated for twelve hours in stone-ground spices before being charred in the tandoor.</p>
                      </div>
                  </motion.div>
               </div>
               <div>
                 <div className="mb-16">
                    <span className="font-label text-[13px] uppercase tracking-[0.6em] text-primary mb-4 block">02 / Chapter</span>
                    <h2 className="font-luxury text-6xl md:text-8xl text-zinc-950 mb-6">{menuData.starters.title}</h2>
                    <p className="font-body text-zinc-500 text-sm tracking-[0.4em] uppercase">{menuData.starters.subtitle}</p>
                 </div>
                 <div className="space-y-4">
                    {menuData.starters.items.map((item, i) => (
                      <MenuItem key={i} {...item} />
                    ))}
                    <ViewMore />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Main Courses */}
        <section id="mains" className="relative py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-20">
               <span className="font-label text-[13px] uppercase tracking-[0.6em] text-primary mb-4 block">03 / Chapter</span>
               <h2 className="font-luxury text-6xl md:text-9xl text-zinc-950 mb-6 leading-none">{menuData.mains.title}</h2>
               <p className="font-body text-zinc-500 text-base tracking-[0.4em] uppercase max-w-lg mx-auto leading-relaxed">{menuData.mains.subtitle}</p>
            </div>

            <div className="relative w-full aspect-video md:h-[600px] mb-24 editorial-shadow overflow-hidden group">
               <Image src={menuData.mains.image} fill className="object-cover brightness-90 transition-transform duration-1000 group-hover:scale-110" alt="Signature Dal Makhani" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
               <div className="absolute bottom-10 left-10 text-white max-w-md">
                 <p className="font-label text-[10px] uppercase tracking-[0.4em] mb-3 text-primary">The Signature</p>
                 <h3 className="font-luxury text-4xl italic">Dal Makhani</h3>
                 <p className="font-body text-sm mt-4 text-zinc-300 leading-relaxed tracking-wider">Our house special whole black lentils, simmered overnight on a slow fire and finished with fresh cream and butter. Served with fresh garlic naan.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                {menuData.mains.items.map((item, i) => (
                  <MenuItem key={i} {...item} />
                ))}
            </div>
            <div className="mt-16 flex justify-center">
              <ViewMore />
            </div>
          </div>
        </section>

        {/* Chapter 4: Sweet Finales */}
        <section id="desserts" className="relative py-24 md:py-40 bg-zinc-50 text-zinc-950 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div>
                 <div className="mb-16">
                    <span className="font-label text-[13px] uppercase tracking-[0.6em] text-primary mb-4 block">04 / Chapter</span>
                    <h2 className="font-luxury text-6xl md:text-8xl text-zinc-950 mb-6">{menuData.desserts.title}</h2>
                    <p className="font-body text-zinc-500 text-sm tracking-[0.4em] uppercase">{menuData.desserts.subtitle}</p>
                 </div>
                 <div className="space-y-4">
                    {menuData.desserts.items.map((item, i) => (
                      <div key={i} className="group py-8 border-b border-zinc-200 last:border-0">
                         <div className="flex justify-between items-baseline mb-3">
                           <h3 className="font-luxury text-2xl md:text-3xl text-zinc-950 group-hover:text-primary transition-colors cursor-default">{item.name}</h3>
                           <span className="font-label text-sm text-zinc-400 tracking-widest">{item.price}</span>
                         </div>
                         <p className="font-body text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide max-w-lg italic">{item.desc}</p>
                      </div>
                    ))}
                    <div className="mt-12 flex justify-start">
                      <Link href="/menu/full" className="group flex items-center space-x-4">
                        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-zinc-900 group-hover:text-primary transition-colors">
                          [ View Full Category ]
                        </span>
                        <div className="w-8 h-px bg-zinc-200 group-hover:w-12 group-hover:bg-primary transition-all duration-300"></div>
                      </Link>
                    </div>
                 </div>
               </div>
               <div>
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[4/5] bg-zinc-100 editorial-shadow overflow-hidden group"
                  >
                      <Image src={menuData.desserts.image} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" alt="Deconstructed Saffron Dessert" />
                      <div className="absolute inset-0 bg-zinc-950/20 mix-blend-overlay"></div>
                      <div className="absolute bottom-10 left-10 text-white max-w-md">
                        <p className="font-label text-[10px] uppercase tracking-[0.4em] mb-3 text-primary">The Signature</p>
                        <h3 className="font-luxury text-4xl italic">Rasmalai</h3>
                        <p className="font-body text-sm mt-4 text-zinc-300 leading-relaxed tracking-wider">Delicate poached discs of milk-solid dough, served in a pool of chilled, cardamom-infused saffron cream.</p>
                      </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* 3. Pre-Footer Call to Action: Magazine Style */}
      <section className="relative py-20 md:py-32 bg-zinc-900 text-white overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/menu/cta_bg.png" 
            fill 
            className="object-cover opacity-60 brightness-75" 
            alt="Luxury Dining Ambiance" 
          />
          <div className="absolute inset-0 bg-zinc-950/40"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-label text-[11px] uppercase tracking-[0.6em] text-primary mb-8 block"
           >
             A Table Awaits
           </motion.span>
           
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="font-luxury text-5xl md:text-7xl lg:text-8xl mb-12 leading-none tracking-tight"
           >
             Become Part of <br /><span className="italic text-primary-fixed-dim">The Narrative</span>
           </motion.h2>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex flex-col md:flex-row gap-8 justify-center items-center"
           >
             <Link href="/reservations">
               <button className="bg-gold-gradient text-on-primary px-16 py-6 text-[11px] uppercase tracking-[0.3em] font-bold editorial-shadow transition-all hover:scale-105 hover:brightness-110">
                 Book a Table
               </button>
             </Link>
             <Link href="/menu/full">
               <button className="border border-white/20 text-white px-16 py-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-zinc-950 transition-all">
                 Explore Full Menu
               </button>
             </Link>
           </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
