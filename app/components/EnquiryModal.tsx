"use client";
import { X } from "lucide-react"; // or use your SVG icons

export default function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl glass border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Image (From your provided design) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img 
            src="business-v2.webp" // Reference image bfc538
            alt="Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d10]/40" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-[#0d0d10]/90 relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-3xl font-black text-white mb-8">
            Enquire <span className="grad-text">Now</span>
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Enter Name" className="w-full bg-white/5 border-b border-white/10 py-3 px-1 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors" />
            <input type="email" placeholder="Enter Email" className="w-full bg-white/5 border-b border-white/10 py-3 px-1 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors" />
            
            <div className="flex gap-2 border-b border-white/10 py-3">
               <span className="text-zinc-400">🇮🇳 +91</span>
               <input type="tel" placeholder="Phone Number" className="bg-transparent flex-1 focus:outline-none text-zinc-200" />
            </div>

            <input type="text" placeholder="Enter company name" className="w-full bg-white/5 border-b border-white/10 py-3 px-1 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors" />
            
            <select className="w-full bg-transparent border-b border-white/10 py-3 px-1 text-zinc-400 focus:outline-none focus:border-violet-500">
              <option>Select Domain</option>
            </select>

            <input type="number" placeholder="Enter No. of candidates" className="w-full bg-white/5 border-b border-white/10 py-3 px-1 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors" />

            {/* Submit Button */}
            <button className="w-full mt-6 bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}