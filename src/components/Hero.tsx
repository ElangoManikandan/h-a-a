import React from 'react';
import { ArrowRight, Code2, TrendingUp, Sparkles, Smartphone, Layers, MousePointerClick } from 'lucide-react';

interface HeroProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateSection }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#303030] text-xs font-medium text-white mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
              </span>
              <span>Available for Freelance Projects</span>
            </div>

            {/* Small introduction */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#39FF14] mb-3">
              HI, I&apos;M ARUN — DIGITAL GROWTH PARTNER
            </p>

            {/* Main Headline with slow animated glow */}
            <div className="relative mb-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] relative z-10 break-words">
                Build Your{' '}
                <span className="text-[#39FF14] animate-headline-glow inline-block">
                  Digital Presence
                </span>
                .<br />
                Generate{' '}
                <span className="text-[#39FF14] animate-headline-glow inline-block">
                  More Leads
                </span>
                .
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#B3B3B3] leading-relaxed max-w-xl mb-8">
              I help small businesses and growing brands improve their online presence through
              digital marketing, lead generation, and modern no-code websites.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigateSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-black bg-[#39FF14] hover:bg-[#32e012] transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.55)] cursor-pointer"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateSection('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#1A1A1A] hover:bg-[#222222] border border-[#303030] hover:border-[#39FF14]/50 transition-colors cursor-pointer"
              >
                <span>Explore My Work</span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Minimal Digital Growth Visual Graphic */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-md bg-[#161616] border border-[#303030] rounded-xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#39FF14]/40 transition-colors">
              {/* Subtle top indicator bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-5 text-xs text-[#B3B3B3]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14]" />
                  <span className="font-mono text-white tracking-wide">Growth Framework</span>
                </div>
                <span className="text-[11px] text-[#B3B3B3]">No-Code & Strategy</span>
              </div>

              {/* Minimal Interactive Architecture Illustration */}
              <div className="space-y-3.5">
                {/* Layer 1: Traffic & Discoverability */}
                <div className="p-3.5 rounded-lg bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-black/50 text-[#39FF14] border border-[#303030]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Targeted Traffic Flow</h4>
                      <p className="text-[11px] text-[#B3B3B3]">Social reach & local search optimization</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#39FF14] bg-[#39FF14]/10 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-[#39FF14]/40">
                  <span className="text-xs">↓</span>
                </div>

                {/* Layer 2: Modern No-Code Platform */}
                <div className="p-3.5 rounded-lg bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-black/50 text-[#39FF14] border border-[#303030]">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Responsive No-Code Website</h4>
                      <p className="text-[11px] text-[#B3B3B3]">Fast mobile loading & structured hierarchy</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#39FF14] bg-[#39FF14]/10 px-2 py-0.5 rounded">
                    Optimized
                  </span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-[#39FF14]/40">
                  <span className="text-xs">↓</span>
                </div>

                {/* Layer 3: Conversion Pathways */}
                <div className="p-3.5 rounded-lg bg-[#1A1A1A] border border-[#2B2B2B] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-black/50 text-[#39FF14] border border-[#303030]">
                      <MousePointerClick className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Lead Enquiry Pathway</h4>
                      <p className="text-[11px] text-[#B3B3B3]">Direct WhatsApp & streamlined forms</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#39FF14] bg-[#39FF14]/10 px-2 py-0.5 rounded">
                    Connected
                  </span>
                </div>
              </div>

              {/* Minimal feature tags */}
              <div className="mt-5 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#B3B3B3]">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span>100% Mobile Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span>Fast Launch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span>Clean UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
