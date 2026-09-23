import React from 'react';
import { useRouter, Link } from '../context/RouterContext';

export const LegalPage: React.FC = () => {
  const { currentPath } = useRouter();
  const isTerms = currentPath.includes('terms');

  return (
    <div className="w-full bg-[#0A0A0A] text-[#F7F5F0] pt-24">
      <section className="py-16 px-6 lg:px-12 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <Link to="/" className="hover:text-[#C5A059]">HOME</Link>
            <span>/</span>
            <span className="text-[#C5A059] uppercase">{isTerms ? 'TERMS & CONDITIONS' : 'PRIVACY POLICY'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
            {isTerms ? 'Terms and Conditions' : 'Privacy Policy'}
          </h1>
          <p className="text-xs font-mono text-neutral-400 mt-2">
            Last Updated: January 2026 · Elite Interior and Decore, Mumbai
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-left space-y-8 text-sm text-neutral-300 leading-relaxed">
          {isTerms ? (
            <>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">1. Scope of Services</h3>
                <p>
                  Elite Interior and Decore provides interior architecture, 3D spatial planning, modular millwork, and turnkey civil contracting services across Mumbai and surrounding metropolitan regions. All project deliverables, timelines, and payment milestones are finalized through formal itemized Bill of Quantities (BOQ) agreements.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">2. Design Revisions & Approvals</h3>
                <p>
                  3D photorealistic renderings and layout schematics are presented for client sign-off prior to factory cutting or civil demolition. Any on-site scope modifications requested after material procurement or structural execution will be evaluated via standard variation orders.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">3. Warranty & Workmanship</h3>
                <p>
                  We provide a 10-year structural warranty against manufacturing defects in factory joinery (IS 710 marine grade plywood) and pass through all official manufacturer warranties for motion hardware (Blum, Hafele) and surface stones.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">4. Jurisdiction</h3>
                <p>
                  All agreements and commercial terms are subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">1. Information Collection</h3>
                <p>
                  We collect information voluntarily submitted through our website contact forms, WhatsApp inquiries, and telephone consultations, including your name, contact phone number, email address, and property location in Mumbai.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">2. Use of Information</h3>
                <p>
                  Your information is utilized solely to prepare itemized design proposals, coordinate site measurement visits, and provide consultation updates. We do not sell, rent, or trade your personal information with third-party advertising brokers.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">3. Communication via WhatsApp</h3>
                <p>
                  By initiating inquiries through our WhatsApp buttons or forms, you agree to receive project proposals, milestone photos, and estimate schedules directly on your registered mobile number. You may opt out at any time.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">4. Contact Inquiries</h3>
                <p>
                  For privacy questions, please email us directly at info@eliteinteriordecore.com or call +91 97167 86164.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
