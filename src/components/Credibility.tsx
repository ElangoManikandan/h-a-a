import React from 'react';
import { Compass, Smartphone, Target, Cpu } from 'lucide-react';

export const Credibility: React.FC = () => {
  const pillars = [
    {
      title: 'Clear User Journeys',
      description:
        'Guiding website visitors directly toward key information and contact channels without confusion or dead-ends.',
      icon: Compass,
    },
    {
      title: 'Mobile-Friendly Design',
      description:
        'Crafting responsive layouts that look and perform effortlessly across smartphones, tablets, and desktops.',
      icon: Smartphone,
    },
    {
      title: 'Conversion-Focused Layouts',
      description:
        'Placing prominent calls-to-action, click-to-WhatsApp links, and clean enquiry forms at decisive user moments.',
      icon: Target,
    },
    {
      title: 'Practical Digital Solutions',
      description:
        'Leveraging agile no-code systems and modern tools that keep builds maintainable, budget-friendly, and quick to market.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
            Execution Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Built With a Business-First Mindset
          </h2>
          <p className="text-base text-[#B3B3B3]">
            Every page, headline, and button is planned around how real prospective customers explore
            and take action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#1A1A1A] border border-[#303030] rounded-xl p-6 flex flex-col justify-between hover:border-[#39FF14]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#242424] border border-[#333333] flex items-center justify-center text-[#39FF14] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#B3B3B3] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
