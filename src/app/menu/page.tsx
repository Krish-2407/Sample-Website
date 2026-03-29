import Link from "next/link";
import HeaderNav from "../components/HeaderNav";

export default function Menu() {
  return (
    <>
      <HeaderNav activePage="menu" />
      <main className="pt-32 pb-20">
        {/* Hero Header */}
        <header className="px-8 mb-24">
          <div className="max-w-2xl">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">Gastronomic Journey</span>
            <h1 className="text-6xl md:text-7xl font-headline font-bold leading-tight mb-8 tracking-tighter">The Seasonal <span className="italic font-normal">Menu</span></h1>
            <p className="font-body text-lg text-secondary leading-relaxed font-light">
              A curated selection of seasonal flavors, meticulously crafted by our culinary artisans to celebrate the heritage of French haute cuisine.
            </p>
          </div>
        </header>
        {/* Categories Navigation / Filter */}
        <div className="px-8 mb-16 overflow-x-auto">
          <div className="flex space-x-10 border-b border-outline-variant/20 pb-4 min-w-max">
            <a className="font-label uppercase text-[10px] tracking-[0.2em] text-primary font-bold" href="#entrees">01. Appetizers</a>
            <a className="font-label uppercase text-[10px] tracking-[0.2em] text-zinc-400 hover:text-primary transition-colors" href="#plats">02. Main Courses</a>
            <a className="font-label uppercase text-[10px] tracking-[0.2em] text-zinc-400 hover:text-primary transition-colors" href="#desserts">03. Desserts</a>
            <a className="font-label uppercase text-[10px] tracking-[0.2em] text-zinc-400 hover:text-primary transition-colors" href="#vins">04. Wines &amp; Spirits</a>
          </div>
        </div>
        {/* Menu Section: Entrées */}
        <section className="px-8 mb-32" id="entrees">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 order-2 lg:order-1">
              <h2 className="text-4xl font-headline mb-12">Appetizers</h2>
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-headline text-xl text-on-surface">Scallop Carpaccio</h3>
                    <span className="font-headline text-primary">28</span>
                  </div>
                  <p className="font-body text-secondary text-sm leading-relaxed">Thinly sliced scallops, citrus emulsion, black truffle pearls, and micro-herbs.</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-headline text-xl text-on-surface">Duck Foie Gras</h3>
                    <span className="font-headline text-primary">34</span>
                  </div>
                  <p className="font-body text-secondary text-sm leading-relaxed">Pan-seared duck liver, fig compote, toasted brioche, and aged balsamic reduction.</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-headline text-xl text-on-surface">White Asparagus</h3>
                    <span className="font-headline text-primary">24</span>
                  </div>
                  <p className="font-body text-secondary text-sm leading-relaxed">Poached white asparagus, hollandaise sauce, chives, and cured egg yolk.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="relative h-[500px] w-full bg-surface-container-low overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover" data-alt="exquisite carpaccio of scallops elegantly plated with edible flowers and citrus droplets on a dark slate plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbEhTiGKxzuwvoR-Pvm-H_ohxFPchr9NInJUESfHTqYsuKdoIS2vhzDo27CTJwTRDz_h3NIq_PG9NdcsEENmLqJuTLCl2-co_VzpibfVFgCInAdiNlkcsuD0lIpOYSOsAjPnOx-O_kbSa_34vzcI_Cp6wOOq-c0rMgbTHEL2dIXSagB5oHR03psUSugZQ2f-tZHcwRfrNNvJtT00DXSFggkXFzRHV18N3KCTNXJD9PWA4iajCC_tAl2fK5l-KVaM62-cdtp84vfLc" />
                <div className="absolute bottom-8 -left-8 bg-surface-container-lowest p-8 shadow-sm max-w-sm hidden md:block">
                  <p className="font-label uppercase tracking-widest text-[10px] text-primary mb-2">Chef's Signature</p>
                  <h4 className="font-headline text-2xl mb-2 italic">The Spring Garden</h4>
                  <p className="font-body text-xs text-secondary leading-relaxed">A delicate composition of seasonal garden vegetables and light vegetable foam.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Menu Section: Plats Principaux (Asymmetric Flip) */}
        <section className="bg-surface-container-low py-32 mb-32" id="plats">
          <div className="px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mt-12">
                    <img className="w-full h-full object-cover" data-alt="perfectly seared wagyu beef steak resting on a bed of truffle potato puree with red wine reduction drizzle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPZRFqiA2ff9MJp258yLTD3wogOCboekOPEZCmY057JTuAzp_pOlPlVHq3xpWb3D6TlXj2j0OS_R2Gj9ynXBuEOqWeXPCqksVY-mpkT-8bHggYuJce0Q7qpaZYqCzeF9OiC2_EPMjs3hPv7I15KEJeYMAp8wHSHVI9ScbhOSwm8UiZnduWiOaCYUBE1GQjDBybEnqc185nG2UAd9cxm0PDwbifEcttlzlRVcHGC8A4kD9ma_phrH5Ghh3rO1cTU-WVlXyH4UOZyEU" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-headline mb-12">Main Courses</h2>
                    <div className="space-y-12">
                      <div className="group cursor-pointer">
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="font-headline text-xl text-on-surface">Wagyu Beef Fillet</h3>
                          <span className="font-headline text-primary">62</span>
                        </div>
                        <p className="font-body text-secondary text-sm">A5 Wagyu, smoked bone marrow butter, pommes dauphine, and bordelaise sauce.</p>
                      </div>
                      <div className="group cursor-pointer">
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="font-headline text-xl text-on-surface">Line-Caught Turbot</h3>
                          <span className="font-headline text-primary">54</span>
                        </div>
                        <p className="font-body text-secondary text-sm">Wild-caught turbot, champagne beurre blanc, caviar d'Aquitaine, and braised leeks.</p>
                      </div>
                      <div className="group cursor-pointer">
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="font-headline text-xl text-on-surface">Truffle Risotto</h3>
                          <span className="font-headline text-primary">48</span>
                        </div>
                        <p className="font-body text-secondary text-sm">Acquerello rice, seasonal black truffle, 36-month aged Parmesan, and hazelnut butter.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-surface p-12 lg:p-16 h-full flex flex-col justify-center border border-outline-variant/10">
                  <span className="font-label uppercase tracking-widest text-[10px] text-primary mb-4 block">The Art of the Main</span>
                  <p className="font-body text-xl text-on-surface leading-relaxed font-light mb-8 italic">
                    "The secret of cooking is that the food should taste of what it is."
                  </p>
                  <p className="font-body text-secondary leading-relaxed font-light text-sm">
                    Our main courses are designed as complete sensory experiences, balancing texture, aroma, and visual elegance to showcase the purity of each ingredient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Menu Section: Desserts & Drinks (Grid) */}
        <section className="px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Desserts */}
            <div id="desserts">
              <div className="mb-12">
                <h2 className="text-4xl font-headline mb-2">Desserts</h2>
                <span className="h-0.5 w-12 bg-primary inline-block"></span>
              </div>
              <div className="space-y-10">
                <div className="flex justify-between group">
                  <div>
                    <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Chocolate Sphere</h3>
                    <p className="font-body text-xs text-secondary mt-1">Valrhona dark chocolate, salted caramel, gold leaf.</p>
                  </div>
                  <span className="font-headline text-primary">18</span>
                </div>
                <div className="flex justify-between group">
                  <div>
                    <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Vanilla Mille-Feuille</h3>
                    <p className="font-body text-xs text-secondary mt-1">Madagascar vanilla cream, caramelized pastry layers.</p>
                  </div>
                  <span className="font-headline text-primary">16</span>
                </div>
                <div className="flex justify-between group">
                  <div>
                    <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Grand Marnier Soufflé</h3>
                    <p className="font-body text-xs text-secondary mt-1">Classic airy soufflé, citrus zest, crème anglaise.</p>
                  </div>
                  <span className="font-headline text-primary">20</span>
                </div>
              </div>
              <div className="mt-16 aspect-video overflow-hidden rounded-lg bg-surface-container-low">
                <img className="w-full h-full object-cover" data-alt="a perfect golden brown soufflé served with a side of vanilla sauce in a fine dining atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgr49C51vEJJZZJXWPaHoFIfv5ZVRS-Fato7jvvS_st_Joswyzu5SghpaJiYnO8FUKMXLJwC7lw3NQMiC5XeI32pR2ItY1S37QGtzrTGdwGFhKj374sgyC1BlyxBSdvLxSB74jtLbz1MJW7E3uo4GJv1Y-0SIA-Yl3Nv0UWMIYm3uDlx6gy2VIp762xtvtrEkirenh8RmLpFq4h4bcm0rS8DA1EjM3CeUAwYZD9kM5eL8fs1pg2iXbdDVnomfxUiXGMFsDIAhtZgw" />
              </div>
            </div>
            {/* Vins & Spiritueux */}
            <div id="vins">
              <div className="mb-12">
                <h2 className="text-4xl font-headline mb-2">Wines &amp; Spirits</h2>
                <span className="h-0.5 w-12 bg-primary inline-block"></span>
              </div>
              <div className="space-y-10">
                <div className="flex justify-between group">
                  <div>
                    <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Château Margaux 2015</h3>
                    <p className="font-body text-xs text-secondary mt-1">Bordeaux, France | Glass</p>
                  </div>
                  <span className="font-headline text-primary">45</span>
                </div>
                <div className="flex justify-between group">
                  <div>
                    <h3 className="font-headline text-lg group-hover:text-primary transition-colors">Dom Pérignon Luminous</h3>
                    <p className="font-body text-xs text-secondary mt-1">Champagne, France | Bottle</p>
                  </div>
                  <span className="font-headline text-primary">380</span>
                </div>
                <div className="flex justify-between group">
                  <div>
                    <h3 className="font-headline text-lg group-hover:text-primary transition-colors">The Macallan 18 Years</h3>
                    <p className="font-body text-xs text-secondary mt-1">Sherry Oak, Speyside | 40ml</p>
                  </div>
                  <span className="font-headline text-primary">55</span>
                </div>
              </div>
              <div className="mt-16 p-8 border border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <span className="material-symbols-outlined text-4xl text-primary" data-icon="wine_bar">wine_bar</span>
                  <div>
                    <h4 className="font-headline text-lg italic">Sommelier Selection</h4>
                    <p className="font-body text-xs text-secondary">Discover our full wine cellar collection</p>
                  </div>
                </div>
                <button className="text-primary hover:opacity-70 transition-opacity">
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Chef's Highlight Signature Component */}
        <section className="px-8 mb-32">
          <div className="relative min-h-[600px] flex items-center">
            <div className="absolute inset-0 w-3/4 ml-auto overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" data-alt="professional chef in a clean white coat plating a dish with precision in a modern high-end kitchen with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbER2lb3IrcCuiN1DzXaui1jpdHlhm-J4htIDoSzdEmvpcQU4Dah466lWStQ3RPZjNK47-u670bjh3DYiA_-N5ks7BdGloqUGJAZ0LE91zV7hDRgWNjZsA-7AUXTrhLTeLsMPn5ab0VawWLPf3TKhldfZJ0Awr5LwkCsLjUjWMAoh1LYkskXlVtMtDk8i__0D6Q3n3xnF76MVJPQ1V713pBC0qW0yOqroXlmpMZ0SM463FgMt4VwJAlH4SCGbJVjEk1kbk6V2memU" />
            </div>
            <div className="relative z-10 w-full md:w-1/2 bg-surface-container-lowest p-12 md:p-20 shadow-xl border border-outline-variant/10">
              <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary mb-6 block">The Vision</span>
              <h2 className="text-4xl md:text-5xl font-headline mb-8 leading-tight">Authenticity in <br /><span className="italic font-normal">Every Texture</span></h2>
              <p className="font-body text-secondary leading-relaxed mb-10">
                Our philosophy is rooted in the respect for the raw ingredient. We source directly from sustainable farms and artisanal producers to ensure that every dish tells the story of its origin.
              </p>
              <a className="inline-block font-label text-xs uppercase tracking-[0.2em] font-bold border-b border-primary pb-2 text-primary hover:pb-3 transition-all" href="#">Meet the Chef</a>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-zinc-100 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 mb-20">
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-zinc-900">L'ÉCLAT</h3>
            <p className="font-body text-sm text-zinc-500 leading-relaxed font-light">
              Redefining gastronomy through the lens of modern luxury and classical French foundations.
            </p>
          </div>
          <div>
            <h4 className="font-label uppercase tracking-widest text-[10px] mb-8 text-zinc-900">Experience</h4>
            <ul className="space-y-4">
              <li><Link className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="/menu">Menu</Link></li>
              <li><Link className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="/gallery">Gallery</Link></li>
              <li><Link className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="/philosophy">Philosophy</Link></li>
              <li><Link className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="/location">Location</Link></li>
              <li><Link className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="/reservations">Reservations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label uppercase tracking-widest text-[10px] mb-8 text-zinc-900">Company</h4>
            <ul className="space-y-4">
              <li><a className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Terms of Service</a></li>
              <li><a className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Careers</a></li>
              <li><a className="font-body text-sm text-zinc-500 hover:text-zinc-800 transition-colors" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label uppercase tracking-widest text-[10px] mb-8 text-zinc-900">Contact</h4>
            <p className="font-body text-sm text-zinc-500 leading-relaxed font-light">
              22 Place Vendôme, Paris, France<br />
              +33 1 42 61 57 58<br />
              contact@leclat.com
            </p>
          </div>
        </div>
        <div className="px-8 pt-8 border-t border-zinc-200">
          <p className="font-label uppercase tracking-widest text-[9px] text-zinc-400 text-center">
            © 2024 L'ÉCLAT GASTRONOMY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}
