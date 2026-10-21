import React, { useState, useEffect, useCallback } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Credibility } from './components/Credibility';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { FitZoneDemo } from './demos/FitZoneDemo';
import { SmileCareDemo } from './demos/SmileCareDemo';
import { AutoShineDemo } from './demos/AutoShineDemo';

import { AppRoute, normalizeRoute } from './utils/validation';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    return normalizeRoute(window.location.pathname);
  });
  const [selectedService, setSelectedService] = useState<string>('Digital Marketing');

  // Sync route on browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizeRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((route: AppRoute) => {
    const targetPath = route === 'home' ? '/' : `/demos/${route}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not currently on home page, return to home first then scroll
    if (currentRoute !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('contact');
  };

  const handleSelectTier = (tierName: string) => {
    setSelectedService(tierName);
    scrollToSection('contact');
  };

  // Render individual Demo Websites if on /demos/*
  if (currentRoute === 'fitzone') {
    return <FitZoneDemo onBackToPortfolio={() => navigateTo('home')} />;
  }

  if (currentRoute === 'smilecare') {
    return <SmileCareDemo onBackToPortfolio={() => navigateTo('home')} />;
  }

  if (currentRoute === 'autoshine') {
    return <AutoShineDemo onBackToPortfolio={() => navigateTo('home')} />;
  }

  // Main Portfolio Website
  return (
    <div className="relative min-h-screen bg-[#121212] text-white selection:bg-[#39FF14] selection:text-black">
      {/* Background with continuous particles, orbs, and digital grid */}
      <AnimatedBackground />

      {/* Main Header / Navigation */}
      <Navbar onNavigateSection={scrollToSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onNavigateSection={scrollToSection} />
        <About />
        <Services onSelectService={handleSelectService} />
        <Portfolio onOpenDemo={navigateTo} />
        <Credibility />
        <Pricing onSelectTier={handleSelectTier} />
        <FAQ />
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Sticky Floating WhatsApp Quick Connect */}
      <FloatingWhatsApp />
    </div>
  );
}
