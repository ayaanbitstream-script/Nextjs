"use client";
import { useState } from "react";
import { FaqData } from "../types";

export default function FaqSection({ data }: { data: FaqData }) {
  const [activeCategory, setActiveCategory] = useState(data.categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">

          {/* Category tabs */}
          <div className="w-full lg:w-72 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 shrink-0">
            {data.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`shrink-0 lg:w-full py-3.5 px-6 rounded-xl font-bold text-base transition-all duration-200 border-2 text-center whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white border-blue-600 text-blue-600 shadow-xl shadow-blue-100"
                    : "bg-white border-slate-200 text-slate-400 hover:border-blue-200 hover:text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
            {data.faqs[activeCategory]?.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className={`text-base font-bold leading-snug transition-colors ${openIndex === i ? "text-blue-600" : "text-slate-800"}`}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-14 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-xl font-bold shadow-xl shadow-blue-200 transition-all hover:-translate-y-0.5 active:scale-95">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
