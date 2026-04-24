import { SkillEnhancementData } from "../types";

const ICON_MAP: Record<string, React.ReactNode> = {
  monitor: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>,
  cpu: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} /><rect x="9" y="9" width="6" height="6" strokeWidth={2} /><path strokeLinecap="round" strokeWidth={2} d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>,
  graduation: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
  briefcase: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
};

export default function SkillEnhancementSection({ data }: { data: SkillEnhancementData }) {
  return (
    <section id="skill" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-[2rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 relative overflow-hidden shadow-2xl shadow-blue-200">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-[60px] pointer-events-none" />

          {/* Left label + title */}
          <div className="relative z-10 lg:w-1/3 text-white">
            <p className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-3">{data.badge}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-8">
              {data.sectionTitle}
            </h2>
            {/* Placeholder circle */}
            <div className="hidden lg:flex mx-auto  items-center justify-center text-blue-200 text-sm italic">
              <img src="image.png" alt="" />
            </div>
          </div>

          {/* Right grid of professional types */}
          <div className="relative z-10 lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {data.professionals.map((p, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="shrink-0 w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-600 transition-all duration-200">
                  {ICON_MAP[p.iconName]}
                </div>
                <div className="text-white">
                  <h4 className="font-black text-lg leading-tight mb-1">{p.title}</h4>
                  <p className="text-blue-100/75 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
