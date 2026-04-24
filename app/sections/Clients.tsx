import { PartnersData } from "../types";

export default function ClientsSection({ data }: { data: PartnersData }) {
  return (
    <section id="clients" className="py-20 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Proven <span className="grad-text">Partnerships</span>
          </h2>
          <p className="mt-3 text-zinc-500 text-sm">
            Collaborating with the world&apos;s leading organizations
          </p>
        </div>

        {/* Marquee-style row with fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {data.partners.map((p) => (
              <div key={p.name}
                className="flex items-center justify-center p-4 rounded-2xl glass glass-hover transition-all duration-300 group">
                <img src={p.logo} alt={p.name}
                  className="h-7 w-auto object-contain grayscale invert opacity-30 group-hover:opacity-70 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
