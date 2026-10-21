import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      badge: 'Fast Setup',
      headline: 'For single locations or emerging solo ventures',
      description:
        'A streamlined foundation designed to establish your initial online presence, clean contact channel, and business discoverability.',
      features: [
        'Single-page modern responsive website',
        'Google Business Profile setup / audit',
        'Direct WhatsApp and enquiry form setup',
        'Clean mobile-friendly user journey',
      ],
      isPopular: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      badge: 'Most Popular',
      headline: 'For established local shops and active service brands',
      description:
        'A comprehensive digital presence setup with multi-section layout, organic social profile alignment, and structured lead capture.',
      features: [
        'Multi-section or multi-page modern website',
        'Lead generation pathway & form validation',
        'Instagram profile alignment & content structure',
        'Google Business Profile local optimization',
        'Conversion-focused call-to-actions',
      ],
      isPopular: true,
    },
    {
      id: 'custom',
      name: 'Custom Solution',
      badge: 'Tailored Scope',
      headline: 'For specific campaigns, startups, or distinctive needs',
      description:
        'A fully tailored scope developed around your distinctive business objectives, existing systems, or specialized brand requirements.',
      features: [
        'Tailored website architecture & interactive elements',
        'Custom lead capture and messaging flows',
        'Integrated local visibility campaigns',
        'Flexible iterative roadmap',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
            Pricing &amp; Engagements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Flexible Solutions for Your Business
          </h2>
          <p className="text-base text-[#B3B3B3]">
            Every business has unique requirements. All engagements are custom-scoped and quote-based to align with your exact goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? 'bg-[#181818] border-2 border-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.12)]'
                  : 'bg-[#1A1A1A] border border-[#303030] hover:border-[#39FF14]/40'
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full">
                  {tier.badge}
                </span>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-xs text-[#AAAAAA]">{tier.headline}</p>
                </div>

                <div className="mb-5 pb-5 border-b border-[#2A2A2A]">
                  <div className="text-2xl font-extrabold text-white">Custom Quote</div>
                  <span className="text-xs text-[#888888]">Scope-based &amp; transparent</span>
                </div>

                <p className="text-xs text-[#B3B3B3] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#AAAAAA] block">
                    What&apos;s Included:
                  </span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                      <Check className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectTier(`${tier.name} Plan Quote`)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    tier.isPopular
                      ? 'bg-[#39FF14] text-black hover:bg-[#32e012] shadow-[0_0_15px_rgba(57,255,20,0.25)]'
                      : 'bg-[#252525] text-white hover:bg-[#2C2C2C] border border-[#3A3A3A]'
                  }`}
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
