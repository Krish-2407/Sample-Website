"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Page = "home" | "menu" | "gallery" | "philosophy" | "location" | "reservations";

interface HeaderNavProps {
  activePage: Page;
  forceTransparent?: boolean;
  theme?: "light" | "dark";
}

const navLinks: { href: string; page: Page; label: string }[] = [
  { href: "/", page: "home", label: "Home" },
  { href: "/menu", page: "menu", label: "Menu" },
  { href: "/gallery", page: "gallery", label: "Gallery" },
  { href: "/philosophy", page: "philosophy", label: "Philosophy" },
  { href: "/location", page: "location", label: "Location" },
];

export default function HeaderNav({
  activePage,
  forceTransparent = false,
  theme = "dark",
}: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getHeaderBg = () => {
    if (forceTransparent) return "bg-transparent border-transparent";
    if (menuOpen) return "bg-[#1a1c1a]/98 border-b border-white/10";
    if (scrolled) {
      // Scrolled state: Reduced glass blur
      return "bg-[#1a1c1a]/85 backdrop-blur-[10px] border-b border-white/10 shadow-2xl";
    }
    // Top state: Solid glass blur effect as requested
    return "bg-[#1a1c1a]/90 backdrop-blur-[7px] border-b border-white/5";
  };

  const getLinkColor = (page: Page) => {
    const isActive = activePage === page;
    
    // Always using light/gold colors now because the header is always dark glass
    return isActive
      ? "text-[#c5a059] after:bg-[#c5a059]"
      : "text-white/80 hover:text-[#c5a059]";
  };

  const getLogoColor = () => {
    return "text-[#c5a059]";
  };

  const getHamburgerColor = () => {
    return "bg-[#c5a059]";
  };

  const linkBase =
    "font-label uppercase tracking-[0.18em] text-[10.5px] font-medium transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full";

  const getLinkClass = (page: Page) => {
    return `${linkBase} ${getLinkColor(page)} ${activePage === page ? "after:w-full" : ""}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${getHeaderBg()}`}
      >
        <div className="max-w-[1600px] mx-auto">
          <nav className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 h-[72px] md:h-[80px] gap-4 md:gap-8">
            {/* Logo */}
            <div className="flex justify-start">
              <Link
                className={`text-xl md:text-2xl font-serif tracking-[0.09em] transition-colors uppercase font-normal hover:opacity-80 ${getLogoColor()}`}
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                L&apos;ÉCLAT
              </Link>
            </div>

            {/* Desktop links — centered */}
            <div className="hidden md:flex justify-center items-center gap-7 lg:gap-9">
              {navLinks.map((l) => (
                <Link key={l.page} className={getLinkClass(l.page)} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex justify-end items-center">
              <Link href="/reservations">
                <button
                  className="px-7 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 font-label rounded-none bg-[#c5a059] text-white hover:bg-[#b08d48] active:scale-95 shadow-lg shadow-black/20"
                >
                  Book a Table
                </button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex justify-end md:hidden">
              <button
                className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div
        className={`fixed top-0 left-0 w-full z-40 bg-[#1a1c1a]/98 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-24 pb-10 px-8 flex flex-col gap-7 items-center text-center">
          {navLinks.map((l) => (
            <Link
              key={l.page}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`font-label text-sm tracking-[0.2em] uppercase transition-colors ${
                activePage === l.page
                  ? "text-[#c5a059]"
                  : "text-white/60 hover:text-[#c5a059]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 pt-7 border-t border-white/10 w-full">
            <Link href="/reservations" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#c5a059] text-white py-4 text-xs font-bold uppercase tracking-widest rounded-none active:scale-95 transition-all font-label">
                Book a Table
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
