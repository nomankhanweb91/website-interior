import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { NAV_CATEGORIES } from '../data/navigationData';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { ContactForm } from '../components/ContactForm';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { currentPath } = useRouter();

  // Find matched category by currentPath
  const category = NAV_CATEGORIES.find((c) => c.path === currentPath) || NAV_CATEGORIES[1];

  const getVisualType = () => {
    if (category.path.includes('kitchen')) return 'kitchen' as const;
    if (category.path.includes('bedroom')) return 'bedroom' as const;
    if (category.path.includes('commercial')) return 'office' as const;
    if (category.path.includes('bathroom')) return 'bathroom' as const;
    if (category.path.includes('living')) return 'living' as const;
    return 'turnkey' as const;
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. Category Hero Banner */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link to="/" className="hover:text-[#C5A059] transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#C5A059] uppercase">{category.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
                Architectural Domain Hub
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                {category.title} Interior Design
              </h1>
              <p className="text-base text-neutral-300 max-w-xl leading-relaxed">
                {category.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getServiceWhatsAppUrl(`${category.title} Interior Design`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get {category.title} WhatsApp Quote</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-[340px]">
              <ArchitecturalVisual
                type={getVisualType()}
                title={`${category.title} Practice`}
                subtitle="ELITE INTERIOR & DECORE · MUMBAI"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Grid: Every item has its own dedicated URL! */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
              Dedicated Service Pages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Explore {category.title} Services
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Select any specialized service below to review design approaches, technical specifications, process timelines, and instant estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((subItem, idx) => (
              <Link
                key={subItem.path}
                to={subItem.path}
                className="group p-6 bg-[#121212] border border-white/10 hover:border-[#C5A059]/60 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-[#C5A059]">
                    <span>SERVICE 0{idx + 1}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-[#C5A059] transition-colors mb-2">
                    {subItem.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {subItem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A059]">
                  <span className="font-medium">View Detailed Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. In-Depth Architectural Standard */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#141414] border border-white/10 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-white">Precision Ergonomics</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Spatial dimensions and joinery depths are calculated to human anthropometry and clearance pathways, ensuring effortless movement and flow.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-white/10 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-white">Factory-Made Millwork</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Cabinetry is pressed and edge-banded in high-tech factory environments using hot PUR adhesives, ensuring zero bubbling, peeling, or rough seams.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-white/10 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-white">Single-Point Accountability</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                One contract, one supervisor, one schedule. We eliminate the blame games common with disconnected freelance carpenters and sub-contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Consultation Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#0A0A0A]">
        <div className="max-w-[1600px] mx-auto">
          <ContactForm
            initialService={`${category.title} Interior Design`}
            title={`Consult Our ${category.title} Architects`}
            subtitle={`Share your apartment, villa or office dimensions for a tailored itemized estimate.`}
          />
        </div>
      </section>
    </div>
  );
};
