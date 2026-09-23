import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { DISPLAY_PHONE, getServiceWhatsAppUrl } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end print:hidden">
      {/* Phone Call CTA */}
      <a
        href={`tel:+${DISPLAY_PHONE.replace(/[^0-9]/g, '')}`}
        className="group flex items-center gap-2 bg-[#121212] border border-white/10 hover:border-[#C5A059]/60 text-white px-3.5 py-2.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
        title="Direct Phone Call"
        aria-label="Call Elite Interior and Decore"
      >
        <span className="hidden sm:inline text-xs font-medium tracking-wide text-neutral-300 group-hover:text-white">
          +91 97167 86164
        </span>
        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
          <Phone className="w-4 h-4" />
        </div>
      </a>

      {/* WhatsApp Floating CTA */}
      <a
        href={getServiceWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#0B2518] border border-[#25D366]/40 hover:border-[#25D366] text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105"
        title="Direct WhatsApp Consultation"
        aria-label="Chat on WhatsApp with Elite Interior and Decore"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
        </span>
        <span className="text-xs font-semibold tracking-wide text-emerald-100 group-hover:text-white">
          WhatsApp Quote
        </span>
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
      </a>
    </div>
  );
};
