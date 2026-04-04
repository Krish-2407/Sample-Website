"use client";

import React from "react";
import FlipbookMenu from "@/app/components/FlipbookMenu";
import HeaderNav from "@/app/components/HeaderNav";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

export default function FullMenuPage() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col relative selection:bg-primary/20">
      
      {/* 1. Global Header */}
      <HeaderNav activePage="menu" theme="dark" />

      {/* 2. Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center py-24 md:py-32">
        {/* Ambient Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
           {/* Faint Image Texture */}
           <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
              <img src="/images/menu/main.png" alt="" className="w-full h-full object-cover grayscale scale-110" />
           </div>

           {/* Giant Typography Watermark */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
              <h2 className="font-luxury text-[30vw] whitespace-nowrap text-zinc-900 -rotate-[8deg] tracking-widest pl-10">
                 L'ÉCLAT
              </h2>
           </div>
           
           {/* Atmospheric Orbs */}
           <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[140px] mix-blend-multiply"></div>
           <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-primary-container/10 rounded-full blur-[140px] mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-label text-xs uppercase tracking-[0.8em] text-primary mb-6 block"
          >
            THE FULL COLLECTION
          </motion.span>
          
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="font-luxury text-5xl md:text-7xl text-zinc-950 mb-4"
          >
            L'ÉCLAT Menu
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="font-body text-zinc-500 max-w-xl mx-auto italic"
          >
             Flip through the pages to explore our complete culinary narrative, an homage to the timeless traditions of Indian vegetarian gastronomy.
          </motion.p>
        </div>

        {/* 3. The Flipbook Component */}
        <div className="relative z-10 w-full px-4">
           <FlipbookMenu pdfUrl="/resources/Leclat_Menu.pdf" />
        </div>
      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
