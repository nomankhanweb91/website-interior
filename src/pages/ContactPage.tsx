import React from 'react';
import { Link } from '../context/RouterContext';
import { ContactForm } from '../components/ContactForm';
import { DISPLAY_PHONE, DISPLAY_EMAIL, getServiceWhatsAppUrl } from '../utils/whatsapp';
import { MUMBAI_LOCATIONS } from '../data/projectsData';
import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link to="/" className="hover:text-[#C5A059]">HOME</Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#C5A059]">CONTACT</span>
          </nav>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
            Direct Architectural Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            Connect With Our Design Studio
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl leading-relaxed mt-4">
            Whether preparing for possession of a new home or planning a corporate office fitout, our team is ready to review your floor plans and provide transparent estimates.
          </p>
        </div>
      </section>

      {/* 2. Contact Matrix & Form */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-[#121212] border border-white/10 rounded-2xl space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block">
                  Studio Headquarters
                </span>
                <h3 className="font-serif text-2xl text-white">
                  Elite Interior and Decore
                </h3>

                <div className="space-y-4 text-sm">
                  <a
                    href={`tel:+${DISPLAY_PHONE.replace(/[^0-9]/g, '')}`}
                    className="flex items-start gap-4 text-neutral-300 hover:text-[#C5A059] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Phone Consultation</span>
                      <span className="font-medium text-white">{DISPLAY_PHONE}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${DISPLAY_EMAIL}`}
                    className="flex items-start gap-4 text-neutral-300 hover:text-[#C5A059] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Official Email</span>
                      <span className="font-medium text-white">{DISPLAY_EMAIL}</span>
                    </div>
                  </a>

                  <a
                    href={getServiceWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-neutral-300 hover:text-emerald-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Instant WhatsApp</span>
                      <span className="font-medium text-emerald-300">+91 97167 86164</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 text-neutral-300">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Primary Market</span>
                      <span className="font-medium text-white">Mumbai, Maharashtra, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-neutral-300">
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Operating Hours</span>
                      <span className="font-medium text-white">Mon – Sat: 10:00 AM – 7:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mumbai Service Hubs */}
              <div className="p-8 bg-[#121212] border border-white/10 rounded-2xl space-y-4">
                <h4 className="font-serif text-lg text-white">
                  Mumbai Metro Consultation Zones
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our site supervisors and senior designers conduct on-site dimension surveys and consultation visits across:
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                  {MUMBAI_LOCATIONS.map((loc) => (
                    <span key={loc} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Initiate Project Inquiry"
                subtitle="Complete the specifications below to receive an itemized proposal and quotation via WhatsApp."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
