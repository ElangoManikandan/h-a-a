import React from 'react';
import { Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0E0E] border-t border-[#262626] relative z-10 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Hustle With Arun"
                className="h-8 w-auto object-contain rounded shrink-0"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Hustle With Arun
              </span>
            </div>
            <p className="text-sm text-[#AAAAAA] leading-relaxed max-w-sm mb-4">
              Digital Marketer &amp; No-Code Website Developer dedicated to helping local businesses,
              shops, and startups build a credible online footprint and capture high-intent leads.
            </p>
            <div className="text-xs text-[#777777]">
              Based in India · Collaborating globally with ambitious businesses.
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B3B3B3]">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-[#39FF14] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[#39FF14] transition-colors cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-[#39FF14] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('portfolio')}
                  className="hover:text-[#39FF14] transition-colors cursor-pointer"
                >
                  Portfolio Demos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-[#39FF14] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Channels & Direct Connect */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-[#B3B3B3] mb-6">
              <a
                href="mailto:grozentech@gmail.com"
                className="flex items-center gap-2 hover:text-[#39FF14] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#39FF14]" />
                <span>grozentech@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/hustlewitharun/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#39FF14] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#39FF14]" />
                <span>instagram.com/hustlewitharun</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arun-kumar-grozentech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#39FF14] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#39FF14]" />
                <span>linkedin.com/in/arun-kumar-grozentech</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#AAAAAA] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#39FF14]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© {currentYear} Hustle With Arun. All rights reserved.</p>
          <p className="text-[11px] text-[#666666]">
            Designed with minimal Swiss aesthetic · Powered by modern web standards
          </p>
        </div>
      </div>
    </footer>
  );
};
