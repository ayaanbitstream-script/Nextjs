"use client";
import { useState, useEffect } from "react";
import { useModal } from "./ModalProvider"; // Import the hook

const NAV_LINKS = [
  { name: "Home",        href: "#home" },
  { name: "Track Record", href: "#stats" },
  { name: "Partners",    href: "#clients" },
  { name: "Edge",        href: "#edge" },
  { name: "Courses",     href: "#courses" },
  { name: "CAT",         href: "#cat" },
  { name: "How It Works",href: "#hiw" },
  { name: "FAQs",        href: "#faqs" },
  { name: "Testimonials",href: "#testimonials" },
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId]     = useState("home");
  const { openModal } = useModal(); // Initialize the modal trigger

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveId(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={(e) => go(e, "#home")} className="flex flex-col group">
          <span className="text-xl font-black tracking-tighter leading-none grad-text">accredian</span>
          <span className="text-[8px] uppercase tracking-[0.25em] font-semibold text-zinc-500 mt-0.5">credentials that matter</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <a key={link.name} href={link.href} onClick={(e) => go(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active ? "text-violet-400 bg-violet-500/10" : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                }`}>
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Trigger Button Desktop */}
          <button 
            onClick={openModal}
            className="hidden sm:flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95">
            Enquire Now
          </button>
          
          <button className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[520px]" : "max-h-0"}`}>
        <div className="bg-[#09090b]/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => go(e, link.href)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeId === link.href.slice(1) ? "text-violet-400 bg-violet-500/10" : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}>
              {link.name}
            </a>
          ))}
          {/* Trigger Button Mobile */}
          <button 
            onClick={() => { openModal(); setMobileOpen(false); }}
            className="mt-2 bg-violet-600 text-white text-sm font-semibold py-3 rounded-xl text-center shadow-lg active:scale-95">
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
}