import { CatData } from "../types";

const ICON_MAP: Record<string, React.ReactNode> = {
  lightbulb: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  monitor: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>,
  settings: <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

export default function CatSection({ data }: { data: CatData }) {
  return (
    <section id="cat" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="mt-2 text-slate-500 font-medium">
            Our Proven Approach to{" "}
            <span className="text-blue-600">Learning Excellence</span>
          </p>
        </div>

        {/* Desktop: horizontal with connecting curves */}
        <div className="hidden lg:flex items-center justify-center gap-0 relative">
          {/* Dashed curved connector */}
          <svg
            className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[640px] h-20 pointer-events-none"
            viewBox="0 0 640 80" fill="none"
          >
            <path
              d="M60 40 C 160 40, 200 10, 320 40 C 440 70, 480 40, 580 40"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 5"
              opacity="0.3"
            />
            <path
              d="M60 40 C 160 40, 200 10, 320 40 C 440 70, 480 40, 580 40"
              stroke="#2563eb"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>

          {data.steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center w-64 px-4">
              {/* Circle */}
              <div className="w-40 h-40 rounded-full border-4 border-blue-600 bg-white flex flex-col items-center justify-center gap-2 shadow-xl shadow-blue-100 mb-6 group hover:bg-blue-600 transition-all duration-300">
                <div className="text-blue-600 group-hover:text-white transition-colors">
                  {ICON_MAP[step.iconName]}
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm font-medium text-center leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {data.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full border-4 border-blue-600 bg-white flex flex-col items-center justify-center gap-2 shadow-lg mb-4">
                <div className="text-blue-600">{ICON_MAP[step.iconName]}</div>
                <h3 className="text-lg font-black text-slate-900">{step.title}</h3>
              </div>
              <p className="text-slate-600 text-sm font-medium max-w-xs leading-relaxed">{step.desc}</p>
              {i < data.steps.length - 1 && (
                <div className="w-px h-8 bg-blue-200 mt-6" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
