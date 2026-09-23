import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';

// Pages
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { NAV_CATEGORIES } from './data/navigationData';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    // 2. About & Sub-about pages
    if (currentPath.startsWith('/about')) {
      return <AboutPage />;
    }

    // 3. Portfolio & Individual Project Detail pages
    if (currentPath.startsWith('/portfolio/')) {
      return <ProjectDetailPage />;
    }
    if (currentPath === '/portfolio') {
      return <PortfolioPage />;
    }

    // 4. Clients
    if (currentPath === '/our-clients') {
      return <ClientsPage />;
    }

    // 5. Contact
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // 6. Legal pages
    if (currentPath === '/privacy-policy' || currentPath === '/terms-and-conditions') {
      return <LegalPage />;
    }

    // 7. Check if path is a Category Hub Page (e.g. /residential, /commercial, /modular-kitchen)
    const isCategoryHub = NAV_CATEGORIES.some((c) => c.path === currentPath);
    if (isCategoryHub) {
      return <CategoryPage />;
    }

    // 8. Check if path is a Sub-Service Page under any category (e.g. /modular-kitchen/l-shaped-kitchen)
    const isSubService = NAV_CATEGORIES.some((c) =>
      c.items.some((item) => item.path === currentPath)
    );
    if (isSubService) {
      return <ServiceDetailPage />;
    }

    // If it starts with any category prefix, allow ServiceDetailPage as dynamic fallback
    const matchedPrefix = NAV_CATEGORIES.find((c) => currentPath.startsWith(`${c.path}/`));
    if (matchedPrefix) {
      return <ServiceDetailPage />;
    }

    // 9. 404 Fallback
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#C5A059]/30 selection:text-[#F3E8CE]">
      <SEOHead />
      <LoadingScreen />
      <CustomCursor />
      <Header />
      
      <main className="flex-grow w-full">
        {renderPage()}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
