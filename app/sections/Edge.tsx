import { EdgeData } from "../types";

const ICONS: Record<string, React.ReactNode> = {
  lightbulb: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  users:     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>,
  refresh:   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>,
  cpu:       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.8}/><rect x="9" y="9" width="6" height="6" strokeWidth={1.8}/></svg>,
  expand:    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>,
  target:    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" strokeWidth={1.8}/><circle cx="12" cy="12" r="7" strokeWidth={1.8}/><circle cx="12" cy="12" r="11" strokeWidth={1.8}/></svg>,
  cube:      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
};

const COLORS = [
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-pink-400 bg-pink-500/10 border-pink-500/20",
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "text-sky-400 bg-sky-500/10 border-sky-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20",
];

export default function EdgeSection({ data }: { data: EdgeData }) {
  return (
    <section id="edge" className="py-24 bg-[#0d0d10] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — left-aligned editorial style */}
        <div className="mb-16 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 block">Why us</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            The <span className="grad-text">Accredian</span><br />Edge
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed">{data.sectionSubtitle}</p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.features.map((f, i) => (
            <div key={i}
              className={`glass glass-hover rounded-2xl p-6 transition-all duration-300 group border ${COLORS[i % COLORS.length].split(' ').slice(2).join(' ')}`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 border ${COLORS[i % COLORS.length]}`}>
                {ICONS[f.iconName]}
              </div>
              <h4 className="font-bold text-zinc-200 text-sm mb-1.5 leading-snug">{f.title}</h4>
              <p className="text-zinc-600 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
