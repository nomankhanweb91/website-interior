import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { NAV_CATEGORIES } from '../data/navigationData';
import { PROJECTS_DATA, CLIENT_BRANDS, MUMBAI_LOCATIONS } from '../data/projectsData';
import { ContactForm } from '../components/ContactForm';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  Building,
  Home,
  UtensilsCrossed,
  Hammer
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const heroSlides = [
    {
      title: 'Creating Exceptional Spaces Since 2007',
      subtitle: 'Premium Interior Design & Turnkey Solutions for Residential and Commercial Spaces in Mumbai.',
      tag: 'RESIDENTIAL & COMMERCIAL TURNKEY',
      type: 'living' as const,
      highlight: 'Bespoke Architectural Execution'
    },
    {
      title: 'Monolithic Living & Volumetric Purity',
      subtitle: 'Bookmatched Italian marble, discreet acoustic paneling, and circadian magnetic track lighting.',
      tag: 'SIGNATURE LIVING ROOMS',
      type: 'bedroom' as const,
      highlight: 'Luxury Living Lounges'
    },
    {
      title: 'German Precision Modular Kitchens',
      subtitle: 'Ergonomic culinary architecture with anti-fingerprint acrylics, Dekton stone and soft-close lift systems.',
      tag: 'MODULAR KITCHEN SYSTEMS',
      type: 'kitchen' as const,
      highlight: 'Island & Galley Configurations'
    },
    {
      title: 'Corporate Headquarters & Executive Suites',
      subtitle: 'High-performance commercial architecture engineered for corporate leadership and agile productivity.',
      tag: 'COMMERCIAL ARCHITECTURE',
      type: 'office' as const,
      highlight: 'Turnkey Office Fitouts'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'Detailed requirement briefing, aesthetic preferences, and budget alignment.' },
    { num: '02', title: 'Requirement Understanding', desc: 'Anthropometric study of client habits, storage needs, and family lifestyle.' },
    { num: '03', title: 'Site Discussion', desc: 'Laser dimension capture, structural beam mapping, and MEP verification.' },
    { num: '04', title: 'Concept / Planning', desc: '2D spatial circulation options, wall reallocations, and zoning blueprints.' },
    { num: '05', title: 'Design Development', desc: 'Photorealistic 4K 3D renders with lighting angles and joinery details.' },
    { num: '06', title: 'Material Selection', desc: 'Physical tactile boards with veneers, Italian marbles, fabrics, and hardware.' },
    { num: '07', title: 'Execution', desc: 'Supervised civil, electrical, plumbing, ceiling, and gypsum structural fitout.' },
    { num: '08', title: 'Installation', desc: 'Factory-pressed cabinetry assembly, quartz countertops, and designer hardware.' },
    { num: '09', title: 'Final Handover', desc: 'Deep cleaning, hardware calibration, warranty kit, and key presentation.' }
  ];

  const faqs = [
    {
      q: 'How does Elite Interior and Decore manage turnkey projects?',
      a: 'We operate as a single-point architectural contractor. From 3D space planning, civil alterations, electrical rewiring, and false ceilings to factory-made modular cabinetry, Italian marble polishing, and soft furnishings, our dedicated site supervisors oversee every stage with weekly milestone updates.'
    },
    {
      q: 'What are your primary service areas across Mumbai?',
      a: 'We execute luxury residential and corporate projects across Mumbai, including South Mumbai (Malabar Hill, Worli, Cuffe Parade), Bandra, Juhu, Andheri, Powai, Goregaon, Borivali, Thane, and Navi Mumbai.'
    },
    {
      q: 'Can we visit ongoing project sites before signing?',
      a: 'Yes. Upon initial consultation and requirement alignment, we are pleased to arrange a guided walkthrough of our active residential or commercial sites in Mumbai to demonstrate our joinery and civil standards.'
    },
    {
      q: 'What is the typical completion timeline for a 3 BHK or 4 BHK turnkey project?',
      a: 'Full home turnkey interiors typically require 60 to 90 days from 3D design approval, depending on the extent of civil modifications, custom carpentry, and stone laying.'
    },
    {
      q: 'How do you handle warranty and post-handover support?',
      a: 'We provide a 10-year warranty on factory woodwork against termites and delamination, pass through lifetime manufacturer warranties for Blum/Hafele hardware, and offer 1-year complimentary site maintenance support.'
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0]">
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-grain pointer-events-none" />

        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Line-by-Line Hero Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#C5A059]/40 rounded text-[11px] font-mono tracking-widest text-[#C5A059] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              {heroSlides[currentSlide].tag}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-light leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-300 shadow-[0_4px_25px_rgba(197,160,89,0.35)] flex items-center gap-3 group"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/portfolio"
                className="px-8 py-4 border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059] text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-3 bg-white/5"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Slider Controls & Counter */}
            <div className="pt-8 flex items-center gap-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#C5A059] text-white hover:text-[#C5A059] transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#C5A059] text-white hover:text-[#C5A059] transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400">
                <span className="text-[#C5A059] font-bold">0{currentSlide + 1}</span>
                <span>/</span>
                <span>0{heroSlides.length}</span>
              </div>

              <span className="hidden sm:inline text-xs font-mono text-neutral-400">
                {heroSlides[currentSlide].highlight}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Visual Framing */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] w-full">
            <ArchitecturalVisual
              type={heroSlides[currentSlide].type}
              title={heroSlides[currentSlide].title}
              subtitle="ELITE ARCHITECTURAL CONCEPT SPECIFICATION"
              className="h-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Giant 2007 Typography */}
            <div className="lg:col-span-4 relative border-l-2 border-[#C5A059] pl-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
                ESTABLISHED IN MUMBAI
              </span>
              <div className="font-serif text-7xl sm:text-8xl lg:text-9xl font-light text-white/90 leading-none tracking-tighter">
                2007
              </div>
              <p className="text-xs font-mono text-neutral-400 mt-4 uppercase tracking-widest">
                18+ Years of Architecture & Turnkey Interiors
              </p>
            </div>

            {/* Content & Core Pillars */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono">
                Pioneering Luxury Since 2007
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                Designing Spaces. Defining Experiences.
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                Elite Interior and Decore was founded in 2007 with a clear commitment: to replace fragmented vendor coordination with cohesive architectural discipline. We specialize in comprehensive residential interiors, prestigious commercial environments, custom modular furniture, and complete turnkey civil execution throughout Mumbai.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <h4 className="font-serif text-sm text-white mb-1">Residential</h4>
                  <p className="text-neutral-400">Penthouses, villas & urban luxury apartments.</p>
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white mb-1">Commercial</h4>
                  <p className="text-neutral-400">Corporate offices, clinics & executive suites.</p>
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white mb-1">Modular Kitchens</h4>
                  <p className="text-neutral-400">German precision hardware & ergonomic layouts.</p>
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white mb-1">Turnkey Execution</h4>
                  <p className="text-neutral-400">Single-window civil, MEP and joinery handover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE CATEGORY EXPERIENCE */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
                Curated Practice Disciplines
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
                Complete Design Categories
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              Every design vertical is supported by dedicated architectural draftsmen, factory joinery units, and on-site MEP engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {NAV_CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.title}
                to={cat.path}
                className="group relative bg-[#121212] border border-white/10 hover:border-[#C5A059]/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/5 rounded-full blur-xl group-hover:bg-[#C5A059]/15 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                      CAT 0{idx + 1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#C5A059] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-white">
                  <span>{cat.items.length} Specialized Sub-Services</span>
                  <span className="text-[#C5A059]">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESIDENTIAL SHOWCASE (Editorial Masonry) */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
                Residential Practice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
                Residential Interior Design
              </h2>
            </div>
            <Link
              to="/residential"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] hover:text-white"
            >
              <span>Explore All Residential Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <ArchitecturalVisual
                type="living"
                title="Full Home & Penthouse Architectural Turnkey"
                subtitle="RESIDENTIAL ARCHITECTURE · 3 BHK / 4 BHK & PENTHOUSES"
                className="h-[400px]"
              />
            </div>
            <div className="md:col-span-4">
              <ArchitecturalVisual
                type="bedroom"
                title="Master Bedroom Suites & Walk-In Wardrobes"
                subtitle="PRIVATE SANCTUARY · ACOUSTIC COVES"
                className="h-[400px]"
              />
            </div>
            <div className="md:col-span-4">
              <ArchitecturalVisual
                type="kitchen"
                title="German Modular Island Kitchens"
                subtitle="CULINARY SPACES · QUARTZ & DEKTON"
                className="h-[360px]"
              />
            </div>
            <div className="md:col-span-8">
              <ArchitecturalVisual
                type="living"
                title="Luxury Villa & Duplex Apartment Transformations"
                subtitle="STRUCTURAL EXPANSION · CUSTOM WOODWORK"
                className="h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL SHOWCASE */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
                Commercial Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
                Commercial & Corporate Interiors
              </h2>
            </div>
            <Link
              to="/commercial"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] hover:text-white"
            >
              <span>Explore Commercial Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#121212] border border-white/10 rounded-xl space-y-4">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                CORPORATE WORKSPACES
              </span>
              <h3 className="font-serif text-2xl text-white">
                Executive Cabins & Boardrooms
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Acoustically isolated committee suites, monolithic dark marble conference tables, and concealed presentation tech.
              </p>
              <Link to="/commercial/conference-room" className="text-xs text-[#C5A059] hover:text-white inline-flex items-center gap-1">
                View Conference Specs →
              </Link>
            </div>

            <div className="p-8 bg-[#121212] border border-white/10 rounded-xl space-y-4">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                BRAND FIRST IMPRESSION
              </span>
              <h3 className="font-serif text-2xl text-white">
                Monolithic Reception Lounges
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sculptural backlit reception desks, fluted acoustic timber walls, and corporate branding galleries that reflect prestige.
              </p>
              <Link to="/commercial/reception-area" className="text-xs text-[#C5A059] hover:text-white inline-flex items-center gap-1">
                View Reception Specs →
              </Link>
            </div>

            <div className="p-8 bg-[#121212] border border-white/10 rounded-xl space-y-4">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                AGILE COLLABORATION
              </span>
              <h3 className="font-serif text-2xl text-white">
                Startup Offices & Workstations
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High-density ergonomic benching with integrated wiring ducts, sound-absorbing phone pods, and hospitality cafeterias.
              </p>
              <Link to="/commercial/startup-office" className="text-xs text-[#C5A059] hover:text-white inline-flex items-center gap-1">
                View Workstation Specs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SELECTED PROJECTS */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
                Project Archives
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
                Selected Landmark Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] hover:text-white"
            >
              <span>View Full Portfolio Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((proj) => (
              <Link
                key={proj.id}
                to={`/portfolio/${proj.slug}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#C5A059]/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-56 w-full">
                  <ArchitecturalVisual
                    type={proj.category === 'Commercial' ? 'office' : 'living'}
                    title={proj.title}
                    subtitle={`${proj.category.toUpperCase()} · ${proj.location.toUpperCase()}`}
                    className="h-full rounded-none border-0"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>{proj.year}</span>
                    <span className="text-[#C5A059]">{proj.area}</span>
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-[#C5A059] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {proj.overview}
                  </p>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A059]">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR 9-STEP PROCESS */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
              Architectural Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
              Our 9-Step Turnkey Process
            </h2>
            <p className="text-sm text-neutral-400 mt-3">
              From first consultation to white-glove handover, our structured workflow eliminates surprises, delays, and budget creep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-[#121212] border border-white/10 hover:border-[#C5A059]/40 rounded-xl transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl text-[#C5A059] font-light">
                    {step.num}
                  </span>
                  <div className="w-6 h-[1px] bg-white/20 group-hover:bg-[#C5A059] transition-colors" />
                </div>
                <h3 className="font-serif text-lg text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MATERIALS & CRAFTSMANSHIP */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
                Material Authenticity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                Honoring the Purity of Stone, Timber & Metal
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Luxury interior architecture derives its soul from tactile honesty. We partner directly with quarry importers and certified timber mills to guarantee authentic Calacatta & Statuario marble slabs, sustainably harvested Burma teak, smoked European oak, and architectural brushed brass.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400">
                    <strong className="text-white">BWP Marine Grade Plywood (IS 710):</strong> 100% boiling waterproof, calibrated core plywood treated against termites and borer.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400">
                    <strong className="text-white">Blum & Hafele Motion Hardware:</strong> Austrian and German soft-close hinges, servo-drive lifts, and tandem boxes rated for 200,000 cycles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400">
                    <strong className="text-white">Diamond Polish Italian Marble:</strong> Precision epoxied, fiber-backed, and polished using multi-stage diamond resin abrasives.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 h-[440px]">
              <ArchitecturalVisual
                type="materials"
                title="Curated Material Library & Joinery Standards"
                subtitle="IS 710 MARINE PLY · ITALIAN STONES · GERMAN HARDWARE"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLIENT BRANDS (Typographic Presentation) */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-3">
            Institutional & Enterprise Trust
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-light mb-12">
            Selected Corporate & Developer Clients
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {CLIENT_BRANDS.map((client) => (
              <div
                key={client.name}
                className="p-6 bg-[#121212] border border-white/5 hover:border-[#C5A059]/40 rounded-lg text-center transition-all duration-300"
              >
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-wide">
                  {client.name}
                </h3>
                <p className="text-[10px] font-mono text-neutral-400 mt-1 uppercase">
                  {client.sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS (Clearly Marked Editable Reviews) */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10 bg-[#0A0A0A]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
                Client Experiences
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
                What Our Clients Say
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Verified Residential & Commercial Client Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#121212] border border-white/10 rounded-xl space-y-4">
              <div className="flex gap-1 text-[#C5A059] text-xs">★★★★★</div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic font-light">
                "Elite Interior and Decore delivered our 4 BHK apartment in Bandra on time and within the committed budget. The false ceiling details and modular kitchen execution are impeccable."
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-semibold text-white">Ananya & Rajesh K.</p>
                <p className="text-[11px] text-neutral-400 font-mono">Bandra West, Mumbai · 4 BHK Turnkey</p>
              </div>
            </div>

            <div className="p-8 bg-[#121212] border border-white/10 rounded-xl space-y-4">
              <div className="flex gap-1 text-[#C5A059] text-xs">★★★★★</div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic font-light">
                "Managing corporate fitouts requires strict site discipline and zero delays. Their team handled our corporate executive floor with complete professionalism."
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-semibold text-white">V. Singhania</p>
                <p className="text-[11px] text-neutral-400 font-mono">Corporate Client · Executive Office</p>
              </div>
            </div>

            <div className="p-8 bg-[#121212] border border-white/10 rounded-xl space-y-4">
              <div className="flex gap-1 text-[#C5A059] text-xs">★★★★★</div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic font-light">
                "Their 3D design team listened to every small ergonomic detail for our modular kitchen. The soft-close fittings and quartz finish are stunning."
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-semibold text-white">Meera & Devendra P.</p>
                <p className="text-[11px] text-neutral-400 font-mono">Powai, Mumbai · Island Kitchen & Living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-24 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
              Clarity & Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg text-white font-normal">
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

      {/* 12. CONTACT CTA & FORM SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
                Direct Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                Ready to Transform Your Space?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Connect with our senior interior architects in Mumbai. Whether you have an architectural floor plan or an initial bare-shell possession, we provide transparent estimates and itemized spatial proposals.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                <p>📍 Mumbai, Maharashtra, India</p>
                <p>📞 +91 97167 86164</p>
                <p>✉️ info@eliteinteriordecore.com</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                title="Request Turnkey Interior Quote"
                subtitle="Select your preferred service and location to receive a tailored estimate directly on WhatsApp."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
