import { CatData } from "../types";

const ICON_MAP: Record<string, React.ReactNode> = {
  lightbulb: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  monitor: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>,
  settings: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const COLORS = [
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
];

export default function CatSection({ data }: { data: CatData }) {
  return (
    <section id="cat" className="py-24 bg-[#0d0d10] relative overflow-hidden">
      {/* Top Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Matching Edge Section Style */}
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Our Methodology</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            The <span className="grad-text">CAT</span> Framework
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            A scientifically designed approach to ensure your learning translates into real-world career growth.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-12 relative">
          {/* Neon Connector Path */}
          <svg
            className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[700px] h-24 pointer-events-none"
            viewBox="0 0 640 80" fill="none"
          >
            <path
              d="M60 40 C 160 40, 200 10, 320 40 C 440 70, 480 40, 580 40"
              stroke="currentColor"
              className="text-cyan-500/20"
              strokeWidth="2"
              strokeDasharray="8 5"
            />
            <path
              d="M60 40 C 160 40, 200 10, 320 40 C 440 70, 480 40, 580 40"
              stroke="currentColor"
              className="text-cyan-500/40"
              strokeWidth="2"
            />
          </svg>

          {data.steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center w-72 group">
              {/* Glass Circle */}
              <div className={`w-40 h-40 rounded-full border glass glass-hover flex flex-col items-center justify-center gap-2 mb-8 transition-all duration-500 ${COLORS[i % COLORS.length].split(' ').slice(2).join(' ')}`}>
                <div className={`transition-transform duration-500 group-hover:scale-110 ${COLORS[i % COLORS.length].split(' ')[0]}`}>
                  {ICON_MAP[step.iconName]}
                </div>
                <h3 className="text-xl font-black text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-zinc-500 text-sm font-medium text-center leading-relaxed px-4 group-hover:text-zinc-300 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-12">
          {data.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={`w-36 h-36 rounded-full border glass flex flex-col items-center justify-center gap-2 mb-6 ${COLORS[i % COLORS.length].split(' ').slice(2).join(' ')}`}>
                <div className={COLORS[i % COLORS.length].split(' ')[0]}>{ICON_MAP[step.iconName]}</div>
                <h3 className="text-lg font-black text-white">{step.title}</h3>
              </div>
              <p className="text-zinc-500 text-sm font-medium max-w-xs leading-relaxed">{step.desc}</p>
              
              {i < data.steps.length - 1 && (
                <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent mt-8" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}