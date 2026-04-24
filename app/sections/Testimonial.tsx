"use client";
import { useState } from "react";
import { TestimonialsData } from "../types";

export default function TestimonialSection({ data }: { data: TestimonialsData }) {
  const [activeTab, setActiveTab] = useState(0);

  const total = data.testimonials.length;
  const displayed =
    activeTab + 1 < total
      ? data.testimonials.slice(activeTab, activeTab + 2)
      : data.testimonials.slice(total - 2, total);

  return (
    <section id="testimonials" className="py-24 bg-[#0d0d10] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-3 block">Success Stories</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Testimonials from <span className="grad-text">Our Partners</span>
          </h2>
          <p className="mt-4 text-zinc-500 font-medium max-w-xl mx-auto">
            Discover how we've helped leading organizations scale their technical excellence.
          </p>
        </div>

        {/* Cards - Obsidian Glass Style */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12 min-h-[300px]">
          {displayed.map((t, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="glass glass-hover rounded-[2.5rem] border border-white/10 p-10 flex flex-col items-center gap-8 transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Logo Container with Glow */}
              <div className="h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={t.logo} 
                  alt="Partner" 
                  className="h-full w-auto object-contain relative z-10 brightness-0 invert opacity-70 group-hover:opacity-100 transition-all" 
                />
              </div>

              <div className="relative text-center">
                {/* SVG Quote Icon */}
                <svg className="absolute -top-4 -left-2 w-8 h-8 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.851h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-zinc-400 font-medium text-base sm:text-lg leading-relaxed italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots - Neon Style */}
        <div className="flex justify-center gap-3 mb-24">
          {Array.from({ length: total - 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeTab === i 
                ? "bg-pink-500 w-12 shadow-[0_0_12px_rgba(236,72,153,0.5)]" 
                : "bg-white/10 w-3 hover:bg-white/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Banner - Premium Dark Gradient */}
        <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10 sm:p-16">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.1),transparent_50%)]" />

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Icon Box */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 glass rounded-3xl border border-white/20 flex items-center justify-center shrink-0 shadow-2xl">
              <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {data.ctaBanner.title}
              </h3>
              <p className="text-zinc-500 font-bold text-sm sm:text-base mt-2 uppercase tracking-widest">
                {data.ctaBanner.subtitle}
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto bg-white text-black hover:bg-zinc-200 px-10 py-4 rounded-2xl font-black text-base transition-all active:scale-95 flex items-center justify-center gap-3 group/btn">
                {data.ctaBanner.cta}
                <span className="inline-block group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}