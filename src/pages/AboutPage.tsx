import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { ContactForm } from '../components/ContactForm';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { CheckCircle2, Shield, Award, Clock, ArrowRight, MessageCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { currentPath } = useRouter();

  const isExperience = currentPath.includes('our-experience');
  const isProcess = currentPath.includes('our-process');
  const isWhyUs = currentPath.includes('why-choose-us');

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. Hero Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link to="/" className="hover:text-[#C5A059]">HOME</Link>
            <span>/</span>
            <span className="text-[#C5A059] uppercase">
              {isExperience ? 'OUR EXPERIENCE' : isProcess ? 'OUR PROCESS' : isWhyUs ? 'WHY CHOOSE US' : 'ABOUT US'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
                Architectural Heritage · Mumbai Est. 2007
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                {isExperience
                  ? 'Over 18 Years Shaping Luxury Mumbai Spaces'
                  : isProcess
                  ? 'Architectural Precision From Concept to Key Handover'
                  : isWhyUs
                  ? 'Why Connoisseurs Choose Elite Interior & Decore'
                  : 'Designing Spaces. Defining Experiences.'}
              </h1>
              <p className="text-base text-neutral-300 max-w-2xl leading-relaxed">
                Founded in 2007, Elite Interior and Decore has evolved into one of Mumbai’s premier luxury interior architecture practices. We unify aesthetic vision, structural civil engineering, and factory-precision joinery into a seamless turnkey experience.
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href={getServiceWhatsAppUrl('Architectural Consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Connect With Our Principal Lead</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-[340px]">
              <ArchitecturalVisual
                type="turnkey"
                title="Elite Interior & Decore"
                subtitle="EST. 2007 · MUMBAI ARCHITECTURE"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Tabs */}
      <div className="border-b border-white/10 bg-[#0E0E0E] px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto flex items-center gap-8 overflow-x-auto py-4 text-xs font-mono uppercase tracking-wider">
          <Link
            to="/about"
            className={`pb-1 transition-colors whitespace-nowrap ${
              currentPath === '/about' ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Overview
          </Link>
          <Link
            to="/about/our-experience"
            className={`pb-1 transition-colors whitespace-nowrap ${
              isExperience ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Our Experience
          </Link>
          <Link
            to="/about/our-process"
            className={`pb-1 transition-colors whitespace-nowrap ${
              isProcess ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Our 9-Step Process
          </Link>
          <Link
            to="/about/why-choose-us"
            className={`pb-1 transition-colors whitespace-nowrap ${
              isWhyUs ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Why Choose Us
          </Link>
        </div>
      </div>

      {/* 3. Core Narrative / Details */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">
                The Elite Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Eliminating Compromise in High-End Fitouts
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                In a market plagued by uncoordinated contractors, inflated quotes, and missed deadlines, Elite Interior and Decore was established to provide absolute clarity. We control the complete value chain—from initial spatial drawings and BIM modeling to our dedicated factory joinery units and certified civil teams.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Whether executing a high-rise luxury residence in Bandra or an expansive corporate facility in Gurgaon for Sunfarma, our methodology remains identical: meticulous engineering drawings, verified raw material certificates, and white-glove site delivery.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="p-4 bg-[#121212] rounded border border-white/5">
                  <span className="font-serif text-2xl text-[#C5A059] block">2007</span>
                  <span className="text-neutral-400 font-mono">Established Year</span>
                </div>
                <div className="p-4 bg-[#121212] rounded border border-white/5">
                  <span className="font-serif text-2xl text-[#C5A059] block">10-Year</span>
                  <span className="text-neutral-400 font-mono">Structural Warranty</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-[#121212] border border-white/10 rounded-xl space-y-2">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#C5A059]" />
                  <h4 className="font-serif text-lg text-white">Fixed Price & On-Time Guarantee</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We lock bill-of-quantities (BOQ) with zero mid-project escalations. Every milestone carries an agreed calendar timeline.
                </p>
              </div>

              <div className="p-6 bg-[#121212] border border-white/10 rounded-xl space-y-2">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                  <h4 className="font-serif text-lg text-white">Authentic Branded Sourcing</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We verify every sheet of IS 710 marine plywood and install genuine Blum/Hafele hardware with official serial certifications.
                </p>
              </div>

              <div className="p-6 bg-[#121212] border border-white/10 rounded-xl space-y-2">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#C5A059]" />
                  <h4 className="font-serif text-lg text-white">Dedicated Site Supervisor</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  A resident project lead remains on your site daily, transmitting photo updates and quality audits directly to your WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation Form */}
      <section className="py-20 px-6 lg:px-12 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto">
          <ContactForm
            title="Discuss Your Architectural Requirement"
            subtitle="Connect with our design directors for a dedicated discussion."
          />
        </div>
      </section>
    </div>
  );
};
