import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';
import { MUMBAI_LOCATIONS } from '../data/projectsData';

interface ContactFormProps {
  initialService?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = 'Full Home Interior',
  className = '',
  title = 'Initiate Architectural Consultation',
  subtitle = 'Share your spatial scope and receive an itemized turnkey estimate via WhatsApp or scheduled site visit.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: initialService,
    location: MUMBAI_LOCATIONS[0],
    customLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.mobile.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.mobile)) {
      errs.mobile = 'Valid 10-digit mobile number required';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const chosenLoc = formData.location === 'Other Area' ? formData.customLocation : formData.location;
    const waUrl = getServiceWhatsAppUrl(formData.service, chosenLoc, formData.name);

    // Save lead locally
    setSubmitted(true);

    // Open WhatsApp in new tab with prefilled tailored prompt
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  if (submitted) {
    const chosenLoc = formData.location === 'Other Area' ? formData.customLocation : formData.location;
    return (
      <div className={`p-8 md:p-12 bg-[#121212] border border-[#C5A059]/30 rounded-2xl text-center ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-light text-white mb-2">
          Consultation Request Prepared
        </h3>
        <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. Your inquiry for{' '}
          <span className="text-[#C5A059]">{formData.service}</span> in{' '}
          <span className="text-white">{chosenLoc}</span> has been transferred to our senior interior lead.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={getServiceWhatsAppUrl(formData.service, chosenLoc, formData.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-black font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Continue on WhatsApp
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 border border-white/20 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors text-sm"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-10 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
          Direct WhatsApp Estimate
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 mt-2">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-mono">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Vikram Singhania"
              className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none transition-colors"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-mono">
              Mobile Number (WhatsApp) *
            </label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none transition-colors"
            />
            {errors.mobile && <p className="text-xs text-red-400 mt-1">{errors.mobile}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-mono">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@domain.com"
              className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none transition-colors"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-mono">
              Service Required
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none transition-colors"
            >
              <option value="Full Home Interior">Full Home Interior (Turnkey)</option>
              <option value="2 BHK / 3 BHK Luxury Interior">2 BHK / 3 BHK Luxury Interior</option>
              <option value="4 BHK & Penthouse Interior">4 BHK & Penthouse Interior</option>
              <option value="Modular Kitchen Design">Modular Kitchen Design</option>
              <option value="Living Room Interior & TV Wall">Living Room Interior & TV Wall</option>
              <option value="Master Bedroom & Wardrobes">Master Bedroom & Wardrobes</option>
              <option value="Commercial & Corporate Office">Commercial & Corporate Office</option>
              <option value="Retail & Showroom Fitout">Retail & Showroom Fitout</option>
              <option value="False Ceiling & Smart Lighting">False Ceiling & Smart Lighting</option>
              <option value="Home Renovation & Civil Work">Home Renovation & Civil Work</option>
              <option value="Interior Design Consultation">Interior Design Consultation</option>
            </select>
          </div>
        </div>

        {/* Location Selection */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-mono">
            Project Location (Mumbai Metropolitan Region)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none transition-colors"
            >
              {MUMBAI_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
              <option value="Other Area">Other Location / NCR / Bangalore</option>
            </select>
            {formData.location === 'Other Area' && (
              <input
                type="text"
                placeholder="Specify city or locality"
                value={formData.customLocation}
                onChange={(e) => setFormData({ ...formData, customLocation: e.target.value })}
                className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none"
              />
            )}
          </div>
        </div>

        {/* Requirement / Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-mono">
            Spatial Requirement / Scope Details
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your carpet area, possession date, or specific interior preferences..."
            className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#C5A059] rounded-lg text-white text-sm outline-none transition-colors resize-none"
          />
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="w-full py-4 px-6 bg-[#C5A059] hover:bg-[#d8b368] text-black font-semibold rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.45)] group"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="tracking-wide">GET QUOTE ON WHATSAPP</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-[11px] text-neutral-500 text-center font-mono">
          Strict confidentiality guaranteed. Direct communication with Elite Interior and Decore senior team.
        </p>
      </form>
    </div>
  );
};
