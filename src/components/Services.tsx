import React from 'react';
import {
  Globe,
  Instagram,
  MapPin,
  Laptop,
  Target,
  Megaphone,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceItems = [
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      description: 'Build a stronger online presence with practical digital marketing strategies.',
      icon: Globe,
    },
    {
      id: 'instagram-growth',
      name: 'Instagram Page Growth',
      description: 'Improve your Instagram profile, content presentation, and audience engagement.',
      icon: Instagram,
    },
    {
      id: 'google-business-profile',
      name: 'Google Business Profile Optimization',
      description: 'Help local customers discover your business through a well-organized Google Business Profile.',
      icon: MapPin,
    },
    {
      id: 'nocode-website',
      name: 'No-Code Website Creation',
      description: 'Create modern, mobile-friendly websites using no-code and AI-assisted tools.',
      icon: Laptop,
    },
    {
      id: 'lead-generation',
      name: 'Lead Generation',
      description: 'Build clear enquiry pathways that help turn interested visitors into potential leads.',
      icon: Target,
    },
    {
      id: 'local-promotion',
      name: 'Local Business Promotion',
      description: 'Improve local visibility with focused digital promotion strategies.',
      icon: Megaphone,
    },
  ];

  return (
    <section id="services" className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Services That Help Businesses Grow
          </h2>
          <p className="text-base text-[#B3B3B3]">
            Practical, modern digital solutions tailored to local businesses, startups, and growing brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#1A1A1A] border border-[#303030] hover:border-[#39FF14]/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(57,255,20,0.12)]"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#242424] border border-[#333333] flex items-center justify-center text-[#39FF14] mb-5 group-hover:scale-105 group-hover:bg-[#2a2a2a] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262626]">
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#39FF14] transition-colors focus:outline-none focus-visible:underline cursor-pointer"
                  >
                    <span>Enquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
