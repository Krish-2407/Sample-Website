"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Page = "home" | "menu" | "gallery" | "philosophy" | "location" | "reservations";

interface HeaderNavProps {
  activePage: Page;
}

export default function HeaderNav({ activePage }: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Set initial state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase = "font-label uppercase tracking-widest text-xs transition-colors";
  const linkDefault = "text-zinc-600 dark:text-zinc-400 hover:text-amber-800";
  const linkActive = "text-amber-700 dark:text-amber-500 border-b border-amber-700/30 pb-1";

  const getLinkClass = (page: Page) =>
    `${linkBase} ${activePage === page ? linkActive : linkDefault}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-transparent"
          : "bg-zinc-900/80 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <nav className="flex justify-between items-center px-8 py-4 md:py-6">
        <Link className="text-2xl font-serif tracking-tighter text-amber-800 dark:text-amber-200 uppercase" href="/">
          L&apos;ÉCLAT
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link className={getLinkClass("home")} href="/">Home</Link>
          <Link className={getLinkClass("menu")} href="/menu">Menu</Link>
          <Link className={getLinkClass("gallery")} href="/gallery">Gallery</Link>
          <Link className={getLinkClass("philosophy")} href="/philosophy">Philosophy</Link>
          <Link className={getLinkClass("location")} href="/location">Location</Link>
        </div>
        <Link href="/reservations">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all hover:bg-primary/90 active:scale-95">
            Book a Table
          </button>
        </Link>
      </nav>
    </header>
  );
}
