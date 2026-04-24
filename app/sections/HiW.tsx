import { HiwData } from "../types";

const ICON_MAP: Record<number, React.ReactNode> = {
  1: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  2: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  3: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

export default function HiwSection({ data }: { data: HiwData }) {
  return (
    <section id="hiw" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-2 text-slate-500 font-medium">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">Skill Development</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {data.steps.map((step, i) => (
            <div
              key={i}
              className="relative group bg-blue-50/60 rounded-3xl p-10 border border-blue-100/60 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-5 left-5 w-7 h-7 rounded-full border border-blue-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                {step.number}
              </div>

              {/* Side accents */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-blue-600 rounded-r-full" />
              <div className="absolute right-0 top-1/4 bottom-1/4 w-1.5 bg-blue-600 rounded-l-full" />

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mb-7 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  {ICON_MAP[step.number]}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{step.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
