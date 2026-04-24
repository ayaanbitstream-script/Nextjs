"use client";
import React from "react";
import { useModal } from "./ModalProvider"; // Ensure the path matches your file structure

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
  instagram: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  youtube: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
};

const footerLinks = ["About", "Blog", "Why Accredian"];

export default function Footer() {
  const year = new Date().getFullYear();
  const { openModal } = useModal(); // Hook to trigger the global popup

  return (
    <footer className="bg-[#0d0d10] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Bottom Glow Aesthetic */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter text-white leading-none">
                accredian<span className="text-violet-500">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 mt-1">
                credentials that matter
              </span>
            </div>
            
            <div className="flex gap-6">
              {["facebook", "linkedin", "twitter", "instagram", "youtube"].map((s) => (
                <a 
                  key={s} 
                  href="#" 
                  className="text-zinc-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  {SOCIAL_ICONS[s]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
            {/* ENQUIRE NOW TRIGGER */}
            <button 
              onClick={openModal}
              className="w-full md:w-auto relative group"
            >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white text-black font-black px-10 py-4 rounded-xl transition-all active:scale-95 text-center">
                    Enquire Now
                </div>
            </button>
            <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                Speak with our Advisor
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* Middle row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h4 className="font-black text-white text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-500 hover:text-violet-400 transition-colors text-sm font-semibold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-white text-sm uppercase tracking-widest mb-6">Contact Us</h4>
            <div className="space-y-5">
              <div className="group">
                <span className="text-[10px] text-zinc-600 font-black uppercase block mb-1">Email</span>
                <a href="mailto:enterprise@accredian.com" className="text-zinc-300 hover:text-cyan-400 transition-colors font-bold">
                  enterprise@accredian.com
                </a>
              </div>
              <div>
                <span className="text-[10px] text-zinc-600 font-black uppercase block mb-1">Office Address</span>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-medium">
                  4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col justify-end">
            <div className="glass p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-[11px] text-zinc-500 leading-relaxed font-medium italic">
                    "Empowering professionals with industry-leading credentials and real-world skills."
                </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            © {year} Accredian. A Brand of FullStack Education Pvt Ltd.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-zinc-600 hover:text-zinc-400 font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-[10px] text-zinc-600 hover:text-zinc-400 font-bold uppercase tracking-widest">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}