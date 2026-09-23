import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { NAV_CATEGORIES } from '../data/navigationData';
import { DISPLAY_PHONE, DISPLAY_EMAIL, getServiceWhatsAppUrl } from '../utils/whatsapp';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Sun,
  Moon,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMegaMenu(null);
  }, [currentPath]);

  const handleMouseEnter = (catTitle: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setOpenMegaMenu(catTitle);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setOpenMegaMenu(null);
    }, 200);
  };

  const toggleMobileAccordion = (title: string) => {
    setMobileExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* 1. TOP BAR */}
      <div className="bg-[#070707] border-b border-white/5 text-[11px] text-neutral-400 py-2 px-4 sm:px-8 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif tracking-widest uppercase text-[#C5A059] font-medium">
            Elite Interior and Decore
          </span>
          <span className="text-white/20">|</span>
          <span className="text-neutral-400">Luxury Architecture & Turnkey Execution · Mumbai Est. 2007</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:+${DISPLAY_PHONE.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{DISPLAY_PHONE}</span>
          </a>
          <a
            href={`mailto:${DISPLAY_EMAIL}`}
            className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#C5A059]" />
            <span>{DISPLAY_EMAIL}</span>
          </a>
          <a
            href={getServiceWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3 px-4 sm:px-8'
            : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5 py-4 px-4 sm:px-8'
        }`}
      >
        <div className="max-w-[1700px] mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col items-start text-left focus:outline-none"
            aria-label="Elite Interior and Decore Homepage"
          >
            <span className="font-serif text-xl sm:text-2xl font-light tracking-wide text-white group-hover:text-[#C5A059] transition-colors">
              ELITE
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A059] -mt-1 font-mono">
              Interior & Decore
            </span>
          </Link>

          {/* Desktop Navigation Links with Multi-Category Bar */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 overflow-x-auto no-scrollbar py-1">
            <Link
              to="/"
              className={`text-[12px] uppercase tracking-wider px-2 py-1.5 rounded transition-colors whitespace-nowrap ${
                currentPath === '/' ? 'text-[#C5A059] font-medium' : 'text-neutral-300 hover:text-white'
              }`}
            >
              HOME
            </Link>

            {NAV_CATEGORIES.map((cat) => {
              const isCategoryActive = currentPath === cat.path || currentPath.startsWith(`${cat.path}/`);
              const isMegaOpen = openMegaMenu === cat.title;

              return (
                <div
                  key={cat.title}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(cat.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={cat.path}
                    className={`flex items-center gap-0.5 text-[11px] xl:text-[12px] uppercase tracking-wider px-2 py-1.5 rounded transition-colors whitespace-nowrap ${
                      isCategoryActive ? 'text-[#C5A059] font-semibold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 opacity-60 group-hover:opacity-100 ${
                        isMegaOpen ? 'rotate-180 text-[#C5A059]' : ''
                      }`}
                    />
                  </Link>
                </div>
              );
            })}

            {/* PORTFOLIO link with dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('PORTFOLIO')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/portfolio"
                className={`flex items-center gap-0.5 text-[11px] xl:text-[12px] uppercase tracking-wider px-2 py-1.5 rounded transition-colors whitespace-nowrap ${
                  currentPath.startsWith('/portfolio') ? 'text-[#C5A059] font-semibold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>PORTFOLIO</span>
                <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </Link>
            </div>

            {/* OUR CLIENTS */}
            <Link
              to="/our-clients"
              className={`text-[11px] xl:text-[12px] uppercase tracking-wider px-2 py-1.5 rounded transition-colors whitespace-nowrap ${
                currentPath === '/our-clients' ? 'text-[#C5A059] font-semibold' : 'text-neutral-300 hover:text-white'
              }`}
            >
              OUR CLIENTS
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`text-[11px] xl:text-[12px] uppercase tracking-wider px-2 py-1.5 rounded transition-colors whitespace-nowrap ${
                currentPath === '/contact' ? 'text-[#C5A059] font-semibold' : 'text-neutral-300 hover:text-white'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 hover:border-[#C5A059]/40 text-neutral-300 hover:text-[#C5A059] transition-all bg-white/5"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Desktop Quick Quote CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059] hover:bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-[0_2px_12px_rgba(197,160,89,0.25)]"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded border border-white/10 text-white hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. DESKTOP FULL-WIDTH MEGA MENU OVERLAY */}
      {openMegaMenu && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-[#0E0E0E]/98 border-b border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-200"
          onMouseEnter={() => {
            if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1700px] mx-auto p-8">
            {openMegaMenu === 'PORTFOLIO' ? (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3 border-r border-white/10 pr-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
                    Signature Architecture
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light mb-3">
                    Selected Portfolio
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Explore landmark residential estates, executive corporate headquarters, and turnkey projects delivered across India.
                  </p>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] hover:text-white transition-colors"
                  >
                    <span>View All Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="col-span-9 grid grid-cols-3 gap-6">
                  <Link
                    to="/portfolio"
                    className="group p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A059]/40 transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#C5A059] block mb-1">CASE STUDY · GURGAON</span>
                    <h4 className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors">
                      Sunfarma Corporate Facility
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">Pharmaceutical executive suites and acoustic boardroom suites.</p>
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A059]/40 transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#C5A059] block mb-1">CASE STUDY · GURGAON</span>
                    <h4 className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors">
                      IREO Luxury Residence
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">4,800 sq.ft. duplex penthouse in bookmatched marble.</p>
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A059]/40 transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#C5A059] block mb-1">CASE STUDY · NOIDA</span>
                    <h4 className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors">
                      Supertech Supernova Suite
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">Metropolitan high-rise interior with custom fluted millwork.</p>
                  </Link>
                </div>
              </div>
            ) : (
              (() => {
                const category = NAV_CATEGORIES.find((c) => c.title === openMegaMenu);
                if (!category) return null;

                return (
                  <div className="grid grid-cols-12 gap-8">
                    {/* Category Overview */}
                    <div className="col-span-3 border-r border-white/10 pr-6">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-mono block mb-1">
                        Domain Category
                      </span>
                      <h3 className="font-serif text-2xl text-white font-light mb-2">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <Link
                        to={category.path}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] hover:text-white transition-colors"
                      >
                        <span>Explore {category.title} Hub</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Submenu Grid */}
                    <div className="col-span-9 grid grid-cols-3 gap-x-6 gap-y-3">
                      {category.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="group p-2.5 rounded hover:bg-white/5 transition-all text-left block"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-neutral-200 group-hover:text-[#C5A059] transition-colors">
                              {subItem.title}
                            </span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#C5A059] transition-all" />
                          </div>
                          <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5 group-hover:text-neutral-300">
                            {subItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      )}

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0A0A0A] z-40 overflow-y-auto px-6 py-6 pb-24 border-t border-white/10">
          <div className="space-y-4">
            {/* Direct Home */}
            <Link
              to="/"
              className="block py-2 text-sm uppercase tracking-wider font-medium text-white hover:text-[#C5A059]"
            >
              Home
            </Link>

            {/* Mobile Category Accordions */}
            {NAV_CATEGORIES.map((cat) => {
              const isOpen = mobileExpanded === cat.title;
              return (
                <div key={cat.title} className="border-b border-white/10 pb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      to={cat.path}
                      className="text-sm uppercase tracking-wider font-medium text-white hover:text-[#C5A059]"
                    >
                      {cat.title}
                    </Link>
                    <button
                      onClick={() => toggleMobileAccordion(cat.title)}
                      className="p-2 text-neutral-400 hover:text-white"
                      aria-label={`Expand ${cat.title} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C5A059]' : ''}`}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-2 pl-4 space-y-2 border-l border-[#C5A059]/30">
                      {cat.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block py-1.5 text-xs text-neutral-300 hover:text-[#C5A059] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className="block py-2 text-sm uppercase tracking-wider font-medium text-white hover:text-[#C5A059] border-b border-white/10"
            >
              Portfolio & Projects
            </Link>

            {/* Our Clients */}
            <Link
              to="/our-clients"
              className="block py-2 text-sm uppercase tracking-wider font-medium text-white hover:text-[#C5A059] border-b border-white/10"
            >
              Our Corporate Clients
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="block py-2 text-sm uppercase tracking-wider font-medium text-white hover:text-[#C5A059] border-b border-white/10"
            >
              Contact & Consultation
            </Link>

            {/* Mobile Contact Quick Action */}
            <div className="pt-6 space-y-3">
              <a
                href={getServiceWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-black font-semibold rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${DISPLAY_PHONE.replace(/[^0-9]/g, '')}`}
                className="w-full py-3 bg-white/10 text-white font-medium rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call +91 97167 86164
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
