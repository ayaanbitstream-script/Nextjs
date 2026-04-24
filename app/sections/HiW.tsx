import { HiwData } from "../types";

const ICON_MAP: Record<number, React.ReactNode> = {
  1: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  2: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  3: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

const COLORS = [
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "text-pink-400 bg-pink-500/10 border-pink-500/20",
];

export default function HiwSection({ data }: { data: HiwData }) {
  return (
    <section id="hiw" className="py-24 bg-[#0d0d10] relative overflow-hidden">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Left Aligned Editorial Style */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Methodology</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            How We <span className="grad-text">Deliver Results</span><br />That Matter
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed max-w-md">
            Our structured three-step approach ensures your transition from theory to industry-ready expertise is seamless.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {data.steps.map((step, i) => (
            <div
              key={i}
              className={`relative group glass glass-hover rounded-3xl p-10 border transition-all duration-500 hover:-translate-y-2 ${COLORS[i % COLORS.length].split(' ').slice(2).join(' ')}`}
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-[10px] uppercase tracking-tighter">
                Step 0{step.number}
              </div>

              {/* Glowing Side Accents */}
              <div className={`absolute left-0 top-1/3 bottom-1/3 w-1 rounded-r-full transition-opacity duration-500 group-hover:opacity-100 opacity-30 ${COLORS[i % COLORS.length].split(' ')[1].replace('/10', '/60')}`} />
              <div className={`absolute right-0 top-1/3 bottom-1/3 w-1 rounded-l-full transition-opacity duration-500 group-hover:opacity-100 opacity-30 ${COLORS[i % COLORS.length].split(' ')[1].replace('/10', '/60')}`} />

              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-6 ${COLORS[i % COLORS.length]}`}>
                  {ICON_MAP[step.number as keyof typeof ICON_MAP]}
                </div>
                
                <h3 className="text-xl font-black text-white mb-4 leading-tight group-hover:text-emerald-50 hover:transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {step.desc}
                </p>
              </div>
              
              {/* Subtle radial glow on hover */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}