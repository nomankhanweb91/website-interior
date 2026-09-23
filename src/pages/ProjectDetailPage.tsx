import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { ContactForm } from '../components/ContactForm';
import { getProjectWhatsAppUrl } from '../utils/whatsapp';
import {
  ChevronRight,
  MessageCircle,
  MapPin,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { currentPath } = useRouter();

  // Extract slug from "/portfolio/:slug"
  const slug = currentPath.replace('/portfolio/', '');
  const project = PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0];

  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. Case Study Hero */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link to="/" className="hover:text-[#C5A059]">HOME</Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <Link to="/portfolio" className="hover:text-[#C5A059]">PORTFOLIO</Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#C5A059] uppercase">{project.client}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#C5A059]/40 rounded text-[11px] font-mono text-[#C5A059] uppercase">
                <span>CASE STUDY · {project.category}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400 border-y border-white/10 py-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Area: {project.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{project.year}</span>
                </div>
              </div>

              <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
                {project.overview}
              </p>

              <div className="pt-2">
                <a
                  href={getProjectWhatsAppUrl(project.title, project.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire About Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-[380px]">
              <ArchitecturalVisual
                type={project.category === 'Commercial' ? 'office' : 'living'}
                title={project.title}
                subtitle={`${project.client.toUpperCase()} · ${project.city.toUpperCase()}`}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Architectural Concept & Scope */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Design Concept */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block">
                Design Intent
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Architectural Concept
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.designConcept}
              </p>

              {/* Scope of Work */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-serif text-xl text-white mb-4">
                  Turnkey Scope of Execution
                </h4>
                <ul className="space-y-3">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Highlights & Materiality */}
            <div className="lg:col-span-6 space-y-6 bg-[#121212] border border-white/10 p-8 rounded-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block">
                Execution Deliverables
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                Project Highlights
              </h3>
              <ul className="space-y-4">
                {project.highlights.map((hl, idx) => (
                  <li key={idx} className="p-4 bg-white/5 rounded border border-white/5 text-xs sm:text-sm text-neutral-300">
                    {hl}
                  </li>
                ))}
              </ul>

              {/* Color Palette Indicators */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Material & Color Harmony
                </span>
                <div className="flex items-center gap-3">
                  {project.colorPalette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div
                        className="w-10 h-10 rounded border border-white/20 shadow-inner"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] font-mono text-neutral-400 uppercase">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Projects */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Related Project Case Studies
            </h3>
            <Link to="/portfolio" className="text-xs font-mono text-[#C5A059] hover:text-white">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                to={`/portfolio/${p.slug}`}
                className="group p-6 bg-[#141414] border border-white/10 hover:border-[#C5A059]/50 rounded-xl transition-all block"
              >
                <span className="text-[10px] font-mono text-[#C5A059] block mb-1">
                  {p.location.toUpperCase()}
                </span>
                <h4 className="font-serif text-xl text-white group-hover:text-[#C5A059] transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                  {p.overview}
                </p>
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-[#C5A059]">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <section className="py-20 px-6 lg:px-12 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto">
          <ContactForm
            initialService={project.category === 'Commercial' ? 'Commercial & Corporate Office' : 'Full Home Interior'}
            title={`Discuss Requirements Similar to ${project.client}`}
            subtitle="Share your space layout to receive an architectural feasibility assessment."
          />
        </div>
      </section>
    </div>
  );
};
