import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { getServiceDetail } from '../data/servicesData';
import { ContactForm } from '../components/ContactForm';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import {
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Ruler,
  Clock,
  Sparkles
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { currentPath } = useRouter();
  const service = getServiceDetail(currentPath);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const getVisualType = () => {
    if (service.path.includes('kitchen')) return 'kitchen' as const;
    if (service.path.includes('bedroom')) return 'bedroom' as const;
    if (service.path.includes('commercial')) return 'office' as const;
    if (service.path.includes('bathroom')) return 'bathroom' as const;
    if (service.path.includes('living')) return 'living' as const;
    return 'turnkey' as const;
  };

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. HERO SECTION & BREADCRUMB */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#C5A059] transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <Link to={`/${service.categorySlug}`} className="hover:text-[#C5A059] transition-colors uppercase">
              {service.categoryTitle}
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#C5A059] uppercase">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block">
                {service.categoryTitle.toUpperCase()} · ARCHITECTURAL PRACTICE
              </span>

              {/* Large H1 */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-[#C5A059] font-light">
                {service.heroTagline}
              </p>

              {/* Short Introduction */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {service.shortIntro}
              </p>

              {/* WhatsApp CTA with dynamic service name */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-all flex items-center gap-3 shadow-lg group"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Quote on WhatsApp for {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-[380px]">
              <ArchitecturalVisual
                type={getVisualType()}
                title={service.title}
                subtitle={`${service.categoryTitle.toUpperCase()} · SPECIFICATION`}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS SERVICE & DESIGN APPROACH */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Why This Service */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block">
                Architectural Rationale
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Why Choose Our {service.title}?
              </h2>
              <ul className="space-y-4 pt-2">
                {service.whyThisService.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Approach */}
            <div className="lg:col-span-6 space-y-6 bg-[#121212] border border-white/10 p-8 rounded-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block">
                Methodology & Spatial Physics
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                Our Architectural Design Approach
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {service.designApproach}
              </p>

              {/* Technical Specifications Table */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C5A059] block mb-2">
                  Technical Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {service.specifications.map((spec, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded border border-white/5">
                      <span className="text-neutral-400 block font-mono text-[10px] uppercase">{spec.label}</span>
                      <span className="text-white font-medium mt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCESS */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
              Execution Roadmap
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Step-by-Step Delivery Process
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              From site laser verification to final finishing, here is how we execute {service.title.toLowerCase()} in Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-[#141414] border border-white/10 hover:border-[#C5A059]/40 rounded-xl transition-all"
              >
                <div className="text-3xl font-serif text-[#C5A059] mb-3">
                  {step.step}
                </div>
                <h4 className="font-serif text-lg text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
              Value Proposition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Key Advantages & Return on Investment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-[#121212] border border-white/10 rounded-xl space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white">
                  {benefit.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RELATED SERVICES */}
      {service.relatedPaths.length > 0 && (
        <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0B0B0B]">
          <div className="max-w-[1600px] mx-auto text-left">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-white">
                Related {service.categoryTitle} Solutions
              </h3>
              <Link to={`/${service.categorySlug}`} className="text-xs font-mono text-[#C5A059] hover:text-white">
                View All {service.categoryTitle} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.relatedPaths.map((path) => {
                const relDetail = getServiceDetail(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    className="p-5 bg-[#121212] border border-white/10 hover:border-[#C5A059]/50 rounded-xl transition-all group block"
                  >
                    <span className="text-[10px] font-mono text-[#C5A059] block mb-1">
                      {relDetail.categoryTitle.toUpperCase()}
                    </span>
                    <h4 className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors">
                      {relDetail.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                      {relDetail.shortIntro}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. SERVICE FAQ */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
              Common Queries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Frequently Asked Questions: {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg text-white">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#C5A059] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CONTACT FORM (Pre-filled with this service) */}
      <section className="py-20 px-6 lg:px-12 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto">
          <ContactForm
            initialService={service.title}
            title={`Get Turnkey Estimate for ${service.title}`}
            subtitle="Share your room dimensions or floor plan to receive an itemized estimate on WhatsApp."
          />
        </div>
      </section>
    </div>
  );
};
