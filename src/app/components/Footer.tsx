import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 w-full pt-16 md:pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-5 md:px-8">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <p className="text-lg font-headline text-zinc-900 dark:text-zinc-100">L&apos;ÉCLAT</p>
          <p className="text-zinc-500 font-body text-sm leading-relaxed">
            Elevating the culinary landscape with devotion and artistry since 2010.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">language</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">restaurant</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">wine_bar</span>
          </div>
        </div>
        <div>
          <p className="font-headline italic text-primary mb-4 md:mb-6">Explore</p>
          <ul className="space-y-3 md:space-y-4">
            <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/menu">The Menu</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/gallery">Gallery</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/philosophy">Philosophy</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-800 font-label text-xs uppercase tracking-widest transition-colors" href="/location">Location</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-headline italic text-primary mb-4 md:mb-6">Contact</p>
          <ul className="space-y-3 md:space-y-4 text-zinc-500 font-body text-sm whitespace-pre-line">
            <li>9¾, Aurora Borealis Avenue</li>
            <li>Crystal Peak, Floating Isles</li>
            <li>Mumbai - 888888</li>
            <li>Maharashtra, India</li>
            <li><a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a></li>
            <li><a href="mailto:reservations@leclat.void" className="hover:text-primary transition-colors">reservations@leclat.void</a></li>
          </ul>
        </div>
        <div>
          <p className="font-headline italic text-primary mb-4 md:mb-6">Follow Us</p>
          <p className="text-zinc-500 text-xs mb-6 font-body leading-relaxed">Join our digital journey and share your experiences with the world.</p>
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 text-zinc-500 hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-base">share</span>
              <span className="font-label text-[10px] uppercase tracking-widest">Share Experience</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-500 hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-base">photo_camera</span>
              <span className="font-label text-[10px] uppercase tracking-widest">Instagram</span>
            </a>
            <a href="mailto:reservations@leclat.void" className="flex items-center gap-3 text-zinc-500 hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-base">mail</span>
              <span className="font-label text-[10px] uppercase tracking-widest">Message Us</span>
            </a>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-8 mt-12 md:mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-[10px] font-label tracking-widest text-zinc-400 uppercase">© 2026 L&apos;ÉCLAT GASTRONOMY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 md:gap-8">
          <a className="text-[10px] font-label tracking-widest text-zinc-500 hover:text-primary transition-colors uppercase" href="#">Privacy Policy</a>
          <a className="text-[10px] font-label tracking-widest text-zinc-500 hover:text-primary transition-colors uppercase" href="#">Terms of Service</a>
          <a className="text-[10px] font-label tracking-widest text-zinc-500 hover:text-primary transition-colors uppercase" href="#">Press</a>
        </div>
      </div>
    </footer>
  );
}
