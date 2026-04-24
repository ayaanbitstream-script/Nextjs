"use client";
import { useState } from "react";
import { FaqData } from "../types";
import { useModal } from "../components/ModalProvider"; // Adjust path as necessary

export default function FaqSection({ data }: { data: FaqData }) {
  const [activeCategory, setActiveCategory] = useState(data.categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openModal } = useModal(); // Initialize the global trigger

  return (
    <section id="faqs" className="py-24 bg-[#0d0d10] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 block">Support</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Frequently Asked <span className="grad-text">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">

          {/* Category tabs - Glass Style */}
          <div className="w-full lg:w-72 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 shrink-0">
            {data.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`shrink-0 lg:w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 border text-center lg:text-left whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-violet-500/10 border-violet-500/50 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                    : "bg-white/5 border-white/5 text-zinc-500 hover:bg-white/10 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion - Obsidian Glass */}
          <div className="flex-1 glass rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5">
            {data.faqs[activeCategory]?.map((faq, i) => (
              <div key={i} className="group transition-colors hover:bg-white/[0.02]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
                >
                  <span className={`text-base font-bold leading-snug transition-all duration-300 ${openIndex === i ? "text-violet-400" : "text-zinc-200"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? "border-violet-500/50 bg-violet-500/10 rotate-180" : "border-white/10 bg-white/5"
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors ${openIndex === i ? "text-violet-400" : "text-zinc-500"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-8 pb-7">
                    <div className="h-px w-12 bg-violet-500/30 mb-4" />
                    <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Button Trigger */}
        <div className="mt-16 flex justify-center">
          <button onClick={openModal} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0d0d10] border border-white/10 hover:border-white/20 text-white px-12 py-4 rounded-2xl font-bold shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
              Enquire Now
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}