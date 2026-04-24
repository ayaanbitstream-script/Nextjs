import { StatsData } from "../types";

const ICONS = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a4 4 0 00-5-5M9 20H4v-2a4 4 0 015-5m6 0a4 4 0 10-8 0 4 4 0 008 0zm6-4a4 4 0 10-8 0 4 4 0 008 0z"/></svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>,
];

const ACCENTS = ["from-violet-500 to-violet-600", "from-cyan-500 to-cyan-600", "from-emerald-500 to-emerald-600"];

export default function StatsSection({ data }: { data: StatsData }) {
  return (
    <section id="stats" className="py-24 bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label + heading */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 block">By the numbers</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Our <span className="grad-text">Track Record</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            The numbers behind <span className="text-zinc-300 font-semibold">our success</span> — earned through relentless commitment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {data.stats.map((stat, i) => (
            <div key={stat.id}
              className="glass glass-hover rounded-3xl p-8 transition-all duration-300 group relative overflow-hidden">
              {/* Glow spot */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${ACCENTS[i]} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className={`inline-flex w-10 h-10 rounded-xl bg-gradient-to-br ${ACCENTS[i]} items-center justify-center text-white mb-6`}>
                {ICONS[i]}
              </div>
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tighter mb-3">
                {stat.value}
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
