"use client";
import { HeroData } from "../types";
import { useModal } from "../components/ModalProvider"; // Ensure path is correct

export default function HomeSection({ data }: { data: HeroData }) {
  const { openModal } = useModal();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#09090b]">

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {data.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
              {data.headline[0]}{" "}
              <span className="grad-text">{data.headline[1]}</span>
              <br />
              <span className="text-zinc-300">{data.headline[2]}</span>{" "}
              {data.headline[3]}
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              {data.subheadline}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2.5">
              {data.features.map((f, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-zinc-300 text-sm font-medium">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  {f.text}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* TRIGGER BUTTON */}
              <button 
                onClick={openModal}
                className="group flex items-center gap-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95"
              >
                {data.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>

              <button className="text-zinc-400 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors">
                <span className="w-8 h-8 rounded-full glass flex items-center justify-center">▶</span>
                Watch Overview
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
            {/* Rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[520px] h-[520px] rounded-full border border-violet-500/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-cyan-500/10 animate-[spin_20s_linear_infinite_reverse]" />
            </div>

            {/* Image card */}
            <div className="relative w-full max-w-[520px]">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] glass border border-white/10 shadow-2xl">
                <img src="/corporate-big-hero-v4.webp" alt="Enterprise Training"
                  className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#09090b]/60 via-transparent to-violet-900/20" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 glass border border-white/10 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl">
                <div className="text-2xl font-black grad-text">{data.successRate}</div>
                <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mt-0.5">{data.successLabel}</div>
              </div>

              {/* Floating accent chip */}
              <div className="absolute -top-4 -right-4 glass border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-2 rounded-xl">
                ✦ Top Rated Platform
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}