import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { getServiceDetail } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';

export const SEOHead: React.FC = () => {
  const { currentPath } = useRouter();

  useEffect(() => {
    let title = 'Elite Interior and Decore – Luxury Interior Architecture Mumbai';
    let description = 'Elite Interior and Decore: Bespoke luxury residential & commercial interior architecture, modular kitchens, and turnkey execution in Mumbai since 2007.';

    if (currentPath === '/') {
      title = 'Elite Interior and Decore – Luxury Interior Architecture Mumbai';
      description = 'Creating exceptional luxury spaces since 2007. Bespoke interior design & turnkey architectural execution in Mumbai.';
    } else if (currentPath.startsWith('/about')) {
      title = 'About Us – Elite Interior and Decore | Mumbai Interior Architecture';
      description = 'Discover the legacy of Elite Interior and Decore, crafting timeless luxury interiors and turnkey architectural spaces across Mumbai since 2007.';
    } else if (currentPath.startsWith('/portfolio/')) {
      const projectSlug = currentPath.replace('/portfolio/', '');
      const project = PROJECTS_DATA.find((p) => p.slug === projectSlug);
      if (project) {
        title = `${project.title} (${project.location}) | Elite Interior and Decore`;
        description = `Explore architectural case study: ${project.title}, designed and executed by Elite Interior and Decore.`;
      } else {
        title = 'Portfolio & Selected Works | Elite Interior and Decore';
        description = 'Explore our portfolio of luxury residential, commercial, modular kitchen, and turnkey projects across India.';
      }
    } else if (currentPath === '/portfolio') {
      title = 'Portfolio & Architectural Case Studies | Elite Interior and Decore';
      description = 'Curated showcase of premier residential and commercial interior projects by Elite Interior and Decore.';
    } else if (currentPath === '/our-clients') {
      title = 'Our Corporate & Developer Clients | Elite Interior and Decore';
      description = 'Trusted by leading corporate and real estate brands including Sunfarma, IREO, Supertech, L&T, and Prestige Group.';
    } else if (currentPath === '/contact') {
      title = 'Contact Us – Request Consultation | Elite Interior and Decore';
      description = 'Schedule a private interior architecture consultation with Elite Interior and Decore in Mumbai. Phone / WhatsApp: +91 97167 86164.';
    } else if (currentPath === '/privacy-policy') {
      title = 'Privacy Policy | Elite Interior and Decore';
    } else if (currentPath === '/terms-and-conditions') {
      title = 'Terms and Conditions | Elite Interior and Decore';
    } else {
      // Dynamic service detail
      const detail = getServiceDetail(currentPath);
      title = `${detail.title} | Elite Interior and Decore Mumbai`;
      description = detail.shortIntro.slice(0, 155) + '...';
    }

    document.title = title;

    // Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://eliteinteriordecore.com${currentPath}`);
  }, [currentPath]);

  return null;
};
