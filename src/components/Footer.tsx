import React from 'react';
import { Link } from '../context/RouterContext';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_EMAIL, getServiceWhatsAppUrl } from '../utils/whatsapp';
import { MUMBAI_LOCATIONS } from '../data/projectsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060606] text-neutral-300 border-t border-white/10 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Top Tier: Brand Statement & Direct Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
              Established 2007 · Mumbai
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
              Elite Interior and Decore
            </h3>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Pioneering bespoke luxury interior architecture, turnkey contracting, and precision millwork across Mumbai. We transform residential sanctuaries and corporate headquarters into environments of enduring elegance.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
              <span className="text-[#C5A059]">✦ 18+ Years Legacy</span>
              <span>·</span>
              <span>Turnkey Execution</span>
              <span>·</span>
              <span>Factory Precision</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono block mb-2">
              Inquiries & Consultations
            </span>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:+${DISPLAY_PHONE.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-3 text-neutral-200 hover:text-[#C5A059] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{DISPLAY_PHONE}</span>
              </a>
              <a
                href={`mailto:${DISPLAY_EMAIL}`}
                className="flex items-center gap-3 text-neutral-200 hover:text-[#C5A059] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{DISPLAY_EMAIL}</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono block mb-2">
                Instant Quotation
              </span>
              <p className="text-xs text-neutral-400 mb-4">
                Chat directly with our senior interior consultants on WhatsApp for initial floor plan reviews.
              </p>
            </div>
            <a
              href={getServiceWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C5A059] hover:bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-[0_4px_15px_rgba(197,160,89,0.25)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Middle Tier: Navigation Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-white/10 text-xs">
          {/* Col 1: Residential */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
              Residential
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/residential/full-home-interior" className="hover:text-[#C5A059]">Full Home Interior</Link></li>
              <li><Link to="/residential/2-bhk-interior" className="hover:text-[#C5A059]">2 BHK Interior</Link></li>
              <li><Link to="/residential/3-bhk-interior" className="hover:text-[#C5A059]">3 BHK Interior</Link></li>
              <li><Link to="/residential/4-bhk-luxury-home" className="hover:text-[#C5A059]">4 BHK & Penthouse</Link></li>
              <li><Link to="/residential/villa-interior" className="hover:text-[#C5A059]">Villa Interiors</Link></li>
              <li><Link to="/residential/home-renovation" className="hover:text-[#C5A059]">Home Renovation</Link></li>
            </ul>
          </div>

          {/* Col 2: Commercial */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
              Commercial
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/commercial/office-interior" className="hover:text-[#C5A059]">Office Interior</Link></li>
              <li><Link to="/commercial/corporate-office" className="hover:text-[#C5A059]">Corporate Office</Link></li>
              <li><Link to="/commercial/startup-office" className="hover:text-[#C5A059]">Startup Spaces</Link></li>
              <li><Link to="/commercial/reception-area" className="hover:text-[#C5A059]">Reception Area</Link></li>
              <li><Link to="/commercial/conference-room" className="hover:text-[#C5A059]">Conference Rooms</Link></li>
              <li><Link to="/commercial/cabin-design" className="hover:text-[#C5A059]">Executive Cabins</Link></li>
            </ul>
          </div>

          {/* Col 3: Signature Spaces */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
              Key Spaces
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/living-room/modern-living-room" className="hover:text-[#C5A059]">Modern Living Room</Link></li>
              <li><Link to="/living-room/tv-wall-panel" className="hover:text-[#C5A059]">TV Wall Paneling</Link></li>
              <li><Link to="/bedroom/master-bedroom" className="hover:text-[#C5A059]">Master Bedroom</Link></li>
              <li><Link to="/bedroom/walk-in-wardrobe" className="hover:text-[#C5A059]">Walk-in Wardrobe</Link></li>
              <li><Link to="/modular-kitchen/island-kitchen" className="hover:text-[#C5A059]">Island Kitchen</Link></li>
              <li><Link to="/bathroom/luxury-bathroom" className="hover:text-[#C5A059]">Luxury Bathroom</Link></li>
            </ul>
          </div>

          {/* Col 4: Craft & Turnkey */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
              Specialized
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/turnkey-interior" className="hover:text-[#C5A059]">Turnkey Interiors</Link></li>
              <li><Link to="/custom-furniture" className="hover:text-[#C5A059]">Custom Furniture</Link></li>
              <li><Link to="/ceiling-lighting/false-ceiling" className="hover:text-[#C5A059]">False Ceilings</Link></li>
              <li><Link to="/wall-flooring/marble-work" className="hover:text-[#C5A059]">Marble Work</Link></li>
              <li><Link to="/space-planning/3d-interior-design" className="hover:text-[#C5A059]">3D Walkthroughs</Link></li>
              <li><Link to="/specialized-services/smart-home-interior" className="hover:text-[#C5A059]">Smart Homes</Link></li>
            </ul>
          </div>

          {/* Col 5: Landmark Case Studies */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
              Portfolio
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/portfolio/sunfarma-gurgaon" className="hover:text-[#C5A059]">Sunfarma — Gurgaon</Link></li>
              <li><Link to="/portfolio/ireo-gurgaon" className="hover:text-[#C5A059]">IREO — Gurgaon</Link></li>
              <li><Link to="/portfolio/supertech-noida-sector-94" className="hover:text-[#C5A059]">Supertech — Noida</Link></li>
              <li><Link to="/portfolio/lt-project-aiims-gorakhpur" className="hover:text-[#C5A059]">L&T — AIIMS Gorakhpur</Link></li>
              <li><Link to="/portfolio/prestige-group-bangalore" className="hover:text-[#C5A059]">Prestige Group — Bangalore</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C5A059]">All Projects</Link></li>
            </ul>
          </div>

          {/* Col 6: Company & Legal */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/about" className="hover:text-[#C5A059]">About Us</Link></li>
              <li><Link to="/about/our-experience" className="hover:text-[#C5A059]">Our Experience</Link></li>
              <li><Link to="/about/our-process" className="hover:text-[#C5A059]">9-Step Process</Link></li>
              <li><Link to="/our-clients" className="hover:text-[#C5A059]">Our Clients</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#C5A059]">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-[#C5A059]">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Mumbai Coverage Strip (SEO Essential) */}
        <div className="py-8 border-b border-white/10 text-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">
              Turnkey Interior Architecture Across Mumbai Metropolitan Region:
            </span>
            <span className="text-[11px] text-[#C5A059] font-mono">
              Direct Site Consultations Available
            </span>
          </div>
          <p className="text-neutral-500 leading-relaxed text-[11px]">
            {MUMBAI_LOCATIONS.join(' · ')} · Juhu Tara Road · Cuffe Parade · Malabar Hill · Kharghar · Seawoods · Mira Road.
          </p>
        </div>

        {/* Bottom Tier: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="font-mono text-[11px]">
            © 2007–{new Date().getFullYear()} Elite Interior and Decore. All rights reserved. eliteinteriordecore.com
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              Instagram
            </a>
            <span>·</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              Facebook
            </a>
            <span>·</span>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              YouTube
            </a>
            <span>·</span>
            <a href={getServiceWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
