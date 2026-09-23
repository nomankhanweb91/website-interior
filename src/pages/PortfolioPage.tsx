import React, { useState } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { ArrowUpRight, Filter, ChevronRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const { currentPath } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Turnkey', 'Modular Kitchen'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. Portfolio Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link to="/" className="hover:text-[#C5A059]">HOME</Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#C5A059]">PORTFOLIO</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono">
              Selected Works & Case Studies
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
              Architectural Portfolio
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed">
              Explore our landmark residential commissions, corporate enterprise facilities, and turnkey fitouts delivered across Mumbai, Gurgaon, Noida, Gorakhpur, and Bangalore.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#C5A059] text-black font-semibold shadow-lg'
                    : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Portfolio Showcase Grid */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <Link
                key={proj.id}
                to={`/portfolio/${proj.slug}`}
                className="group bg-[#121212] border border-white/10 hover:border-[#C5A059]/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                data-cursor="view"
              >
                <div className="h-64 w-full">
                  <ArchitecturalVisual
                    type={proj.category === 'Commercial' ? 'office' : 'living'}
                    title={proj.title}
                    subtitle={`${proj.category.toUpperCase()} · ${proj.location.toUpperCase()}`}
                    className="h-full rounded-none border-0"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="text-[#C5A059]">{proj.category}</span>
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white group-hover:text-[#C5A059] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {proj.overview}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A059] font-medium">
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
