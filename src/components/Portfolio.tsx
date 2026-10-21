import React from 'react';
import { Dumbbell, Smile, Car, ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onOpenDemo: (route: 'fitzone' | 'smilecare' | 'autoshine') => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenDemo }) => {
  const projects = [
    {
      id: 'fitzone' as const,
      name: 'FitZone',
      subtitle: 'Gym & Fitness Center',
      category: 'Fitness & Wellness',
      description:
        'A bold fitness website concept featuring membership plans, trainer information, a transformation gallery, and a free-trial enquiry section.',
      themeStyle: 'Black, white, and electric lime green',
      accentColor: '#39FF14',
      badgeClass: 'text-[#39FF14]',
      borderHover: 'hover:border-[#39FF14]/60',
      icon: Dumbbell,
      // CSS-based UI preview wireframe
      preview: (
        <div className="w-full h-44 bg-[#0D0D0D] p-3 flex flex-col justify-between text-left select-none overflow-hidden relative border-b border-[#262626]">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="text-[11px] font-black tracking-wider text-white uppercase">
              FIT<span className="text-[#39FF14]">ZONE</span>
            </span>
            <div className="flex gap-2">
              <span className="w-8 h-1.5 bg-[#2B2B2B] rounded" />
              <span className="w-8 h-1.5 bg-[#2B2B2B] rounded" />
              <span className="w-10 h-3 bg-[#39FF14] rounded text-[8px] text-black font-bold flex items-center justify-center">PASS</span>
            </div>
          </div>
          <div className="my-auto py-1">
            <span className="text-[9px] uppercase font-mono text-[#39FF14] block">Performance Club</span>
            <span className="text-sm font-extrabold text-white leading-tight block">FORGE YOUR STRONGEST SELF</span>
            <span className="text-[9px] text-[#888888] block mt-0.5">Olympic equipment &amp; 24/7 access pass</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#222222]">
            <div className="bg-[#181818] p-1.5 rounded text-center">
              <span className="text-[8px] text-[#888888] block">Day Pass</span>
              <span className="text-[10px] font-bold text-[#39FF14]">₹299</span>
            </div>
            <div className="bg-[#1F1F1F] border border-[#39FF14]/40 p-1.5 rounded text-center">
              <span className="text-[8px] text-[#39FF14] block">Pro Monthly</span>
              <span className="text-[10px] font-bold text-white">₹2,499</span>
            </div>
            <div className="bg-[#181818] p-1.5 rounded text-center">
              <span className="text-[8px] text-[#888888] block">Annual</span>
              <span className="text-[10px] font-bold text-[#39FF14]">₹18,999</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'smilecare' as const,
      name: 'SmileCare',
      subtitle: 'Dental Clinic Website',
      category: 'Healthcare',
      description:
        'A clean dental clinic website concept featuring treatments, clinic information, a demo testimonial section, and appointment enquiries.',
      themeStyle: 'White, teal, and light neutral colors',
      accentColor: '#0D9488',
      badgeClass: 'text-teal-400',
      borderHover: 'hover:border-teal-500/60',
      icon: Smile,
      preview: (
        <div className="w-full h-44 bg-[#F8FAFC] p-3 flex flex-col justify-between text-left select-none overflow-hidden relative border-b border-[#262626]">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-[11px] font-bold text-slate-900">
              Smile<span className="text-teal-600">Care</span>
            </span>
            <div className="flex gap-2 items-center">
              <span className="w-8 h-1.5 bg-slate-200 rounded" />
              <span className="w-12 h-3 bg-teal-600 rounded text-[8px] text-white font-semibold flex items-center justify-center">Book</span>
            </div>
          </div>
          <div className="my-auto py-1">
            <span className="text-[9px] uppercase font-bold text-teal-600 block">Family &amp; Cosmetic</span>
            <span className="text-sm font-extrabold text-slate-900 leading-tight block">Gentle Dental Care For All</span>
            <span className="text-[9px] text-slate-500 block mt-0.5">Low-radiation imaging &amp; transparent plans</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-200">
            <div className="bg-white border border-slate-200 p-1 rounded text-center">
              <span className="text-[8px] font-medium text-slate-700">Checkups</span>
            </div>
            <div className="bg-white border border-slate-200 p-1 rounded text-center">
              <span className="text-[8px] font-medium text-slate-700">Whitening</span>
            </div>
            <div className="bg-white border border-slate-200 p-1 rounded text-center">
              <span className="text-[8px] font-medium text-slate-700">Aligners</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'autoshine' as const,
      name: 'AutoShine',
      subtitle: 'Car Detailing Studio',
      category: 'Automotive',
      description:
        'A modern car detailing website concept featuring detailing packages, service information, vehicle care highlights, and booking enquiries.',
      themeStyle: 'Dark charcoal, silver, and electric blue',
      accentColor: '#38BDF8',
      badgeClass: 'text-[#38BDF8]',
      borderHover: 'hover:border-[#38BDF8]/60',
      icon: Car,
      preview: (
        <div className="w-full h-44 bg-[#0F141C] p-3 flex flex-col justify-between text-left select-none overflow-hidden relative border-b border-[#262626]">
          <div className="flex items-center justify-between border-b border-[#202938] pb-2">
            <span className="text-[11px] font-black uppercase text-white">
              AUTO<span className="text-[#38BDF8]">SHINE</span>
            </span>
            <div className="flex gap-2 items-center">
              <span className="w-8 h-1.5 bg-[#253246] rounded" />
              <span className="w-12 h-3 bg-[#38BDF8] rounded text-[8px] text-black font-bold flex items-center justify-center">QUOTE</span>
            </div>
          </div>
          <div className="my-auto py-1">
            <span className="text-[9px] uppercase font-mono text-[#38BDF8] block">Studio Detailing</span>
            <span className="text-sm font-extrabold text-white leading-tight block">Showroom Shine. Enduring Shield.</span>
            <span className="text-[9px] text-[#94A3B8] block mt-0.5">9H Ceramic coating &amp; paint correction</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-[#202938]">
            <div className="bg-[#18212F] p-1 rounded text-center">
              <span className="text-[8px] text-[#94A3B8] block">Essential</span>
              <span className="text-[9px] font-bold text-white">₹2,999</span>
            </div>
            <div className="bg-[#1C283B] border border-[#38BDF8]/40 p-1 rounded text-center">
              <span className="text-[8px] text-[#38BDF8] block">9H Ceramic</span>
              <span className="text-[9px] font-bold text-white">₹14,999</span>
            </div>
            <div className="bg-[#18212F] p-1 rounded text-center">
              <span className="text-[8px] text-[#94A3B8] block">Deep Spa</span>
              <span className="text-[9px] font-bold text-white">₹5,499</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
            Demonstrated Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Selected Work &amp; Website Demos
          </h2>
          <p className="text-base text-[#B3B3B3]">
            Explore concept websites created to demonstrate my approach to layout, user experience,
            responsive design, and business-focused website creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-[#1A1A1A] border border-[#303030] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${project.borderHover} hover:shadow-2xl group`}
            >
              <div>
                {/* Visual Preview Wireframe */}
                <div className="relative">
                  {project.preview}
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-white">
                      Live Concept
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#B3B3B3] mb-2 font-medium">
                    <span className={project.badgeClass}>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Responsive Concept</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs text-[#999999] block mb-3 font-medium">
                    {project.subtitle}
                  </span>

                  <p className="text-sm text-[#B3B3B3] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="text-xs text-[#888888] pt-2 border-t border-[#262626]">
                    <span className="text-[#AAAAAA] font-semibold">Visual Theme:</span>{' '}
                    {project.themeStyle}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenDemo(project.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] group-hover:border-white/30 transition-all cursor-pointer"
                >
                  <span>View Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
