import { DomainData } from "../types";

const ICONS: Record<string, React.ReactNode> = {
  lightbulb: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  brain:     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2"/></svg>,
  settings:  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  globe:     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  wallet:    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>,
};

const TAGS = ["Product", "AI/ML", "Leadership", "Data", "Operations", "Digital", "Fintech"];

export default function DomainSection({ data }: { data: DomainData }) {
  return (
    <section id="domain" className="py-24 bg-[#09090b] relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left sticky label */}
          <div className="lg:w-80 lg:sticky lg:top-24 shrink-0">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Specializations</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Domain<br /><span className="grad-text-em">Expertise</span>
            </h2>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
              {data.sectionSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-semibold rounded-full glass border border-white/5 text-zinc-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: domain cards list */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.domains.map((d, i) => (
              <div key={i}
                className="flex items-center gap-4 glass glass-hover rounded-2xl px-5 py-5 transition-all duration-300 group cursor-default">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
                  {ICONS[d.iconName] ?? ICONS.brain}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-200 text-sm leading-tight">{d.title}</h3>
                  <span className="text-zinc-600 text-xs">Specialized track</span>
                </div>
                <svg className="w-4 h-4 text-zinc-700 group-hover:text-violet-400 transition-colors ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
