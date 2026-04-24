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
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="mt-2 text-slate-500 font-medium">
            What <span className="text-blue-600">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-7 mb-10 min-h-[280px]">
          {displayed.map((t, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-50 p-9 flex flex-col items-center gap-6 hover:shadow-2xl hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-400"
            >
              <div className="h-10 flex items-center justify-center">
                <img src={t.logo} alt="Partner" className="h-full w-auto object-contain" />
              </div>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed text-center italic flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2.5 mb-20">
          {Array.from({ length: total - 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeTab === i ? "bg-blue-600 w-8" : "bg-slate-200 w-2.5"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-600 rounded-[2rem] p-9 sm:p-14 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex items-center gap-5 z-10 flex-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 rounded-2xl border-2 border-white/20 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">{data.ctaBanner.title}</h3>
              <p className="text-blue-100/70 font-medium text-sm mt-1">{data.ctaBanner.subtitle}</p>
            </div>
          </div>

          <div className="shrink-0 z-10">
            <button className="bg-white text-blue-600 hover:bg-slate-50 px-9 py-3.5 rounded-xl font-bold text-base shadow-xl transition-all active:scale-95 group flex items-center gap-2">
              {data.ctaBanner.cta}
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
