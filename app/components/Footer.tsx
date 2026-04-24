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

  return (
    <footer className="bg-white border-t border-slate-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-10">
          <div>
            <div className="flex flex-col mb-5">
              <span className="text-2xl font-black tracking-tighter text-blue-600 leading-none">accredian</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400">credentials that matter</span>
            </div>
            <div className="flex gap-5 text-slate-400">
              {["facebook", "linkedin", "twitter", "instagram", "youtube"].map((s) => (
                <a key={s} href="#" className="hover:text-blue-600 transition-colors">{SOCIAL_ICONS[s]}</a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all shadow hover:shadow-xl active:scale-95">
              Enquire Now
            </button>
            <span className="text-sm text-slate-500 font-medium">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="border-slate-100 mb-10" />

        {/* Middle row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-5">Accredian</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 text-base mb-5">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Email: </span>
                <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline">enterprise@accredian.com</a>
              </p>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                <span className="font-semibold text-slate-700 block mb-0.5">Office Address:</span>
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-50 pt-7 text-center">
          <p className="text-xs text-slate-400 font-medium">
            © {year} Accredian. A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
