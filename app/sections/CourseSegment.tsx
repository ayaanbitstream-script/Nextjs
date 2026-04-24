import { CourseSegmentData } from "../types";

export default function CourseSegmentSection({ data }: { data: CourseSegmentData }) {
  return (
    <section id="courses" className="py-24 bg-[#0d0d10] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Explore programs</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Tailored <span className="grad-text-em">Course</span><br className="hidden sm:block" /> Segmentation
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto text-sm leading-relaxed">
            {data.sectionSubtitle}
          </p>
        </div>

        {/* Cards — tall cinematic style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.segments.map((seg, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}>
              {/* Image */}
              <img src={seg.img} alt={seg.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Index number */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-black text-white text-base leading-tight mb-1">{seg.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {seg.sub}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <span>Explore</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
