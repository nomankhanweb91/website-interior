import React from 'react';
import { Link } from '../context/RouterContext';
import { CLIENT_BRANDS, PROJECTS_DATA } from '../data/projectsData';
import { ContactForm } from '../components/ContactForm';
import { Building2, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';

export const ClientsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      {/* 1. Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-mono block mb-2">
            Institutional Trust & Enterprise Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            Our Clients & Partners
          </h1>
          <p className="text-base text-neutral-300 max-w-2xl leading-relaxed mt-4">
            Elite Interior and Decore has earned the trust of India’s leading corporations, luxury real estate developers, and discerning homeowners through uncompromising turnkey delivery.
          </p>
        </div>
      </section>

      {/* 2. Client Grid */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLIENT_BRANDS.map((client) => {
              const matchedProject = PROJECTS_DATA.find((p) => p.client === client.name);
              return (
                <div
                  key={client.name}
                  className="p-8 bg-[#121212] border border-white/10 hover:border-[#C5A059]/50 rounded-xl space-y-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block mb-2">
                      {client.sector}
                    </span>
                    <h3 className="font-serif text-3xl text-white font-medium">
                      {client.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2">
                      Key Facility Location: {client.location}
                    </p>
                  </div>

                  {matchedProject && (
                    <div className="pt-4 border-t border-white/5">
                      <Link
                        to={`/portfolio/${matchedProject.slug}`}
                        className="text-xs text-[#C5A059] hover:text-white inline-flex items-center gap-2 font-medium"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Corporate Standards */}
      <section className="py-20 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-[1600px] mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#141414] border border-white/10 rounded-xl space-y-3">
              <Building2 className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-xl text-white">Milestone Governance</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Institutional projects adhere strictly to CPWD/NBC safety and structural norms with scheduled engineering audits.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-white/10 rounded-xl space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-xl text-white">Full Regulatory Compliance</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We handle fire-retardant certifications, electrical load testing, and environmental low-VOC paint compliances.
              </p>
            </div>

            <div className="p-8 bg-[#141414] border border-white/10 rounded-xl space-y-3">
              <ArrowRight className="w-6 h-6 text-[#C5A059]" />
              <h4 className="font-serif text-xl text-white">Pan-India Capabilities</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                While headquartered in Mumbai, our specialized turnkey execution teams deliver flagship commercial spaces nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation Form */}
      <section className="py-20 px-6 lg:px-12 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto">
          <ContactForm
            initialService="Commercial & Corporate Office"
            title="Enterprise & Commercial Fitout Inquiries"
            subtitle="Connect with our institutional project directors for RFP submissions or site audits."
          />
        </div>
      </section>
    </div>
  );
};
