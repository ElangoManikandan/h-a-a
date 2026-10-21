import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'I offer digital marketing strategy, lead generation pathways, no-code website development, Instagram profile growth, Google Business Profile optimization, and targeted local business promotion to help brands build a stronger online footprint.',
    },
    {
      question: 'Can you create websites without traditional coding?',
      answer:
        'Yes. By leveraging modern no-code builders and AI-assisted platforms, I create fast, responsive, and mobile-friendly websites with clean layouts and contact pathways without the lengthy timelines or high overhead of traditional full-stack programming.',
    },
    {
      question: 'Do you work with local businesses?',
      answer:
        'Yes, local shops, clinics, gyms, detailing studios, and neighborhood service providers are a core focus. I help optimize local discoverability via Google Business Profiles and localized digital promotion.',
    },
    {
      question: 'Can I request a custom solution?',
      answer:
        'Absolutely. If your business has specialized workflow requirements, distinct branding guidelines, or combined marketing and website needs, we can define a tailored scope designed specifically for your goals.',
    },
    {
      question: 'How can I discuss my project?',
      answer:
        'You can send a message through the contact form below, reach out directly on WhatsApp (+91 7618030348), or drop an email to grozentech@gmail.com. I will review your requirements and respond promptly.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#B3B3B3]">
            Common questions about my services, collaboration process, and approach.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[#303030] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#222222] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-btn-${index}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#39FF14] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-5 pb-5 text-xs sm:text-sm text-[#B3B3B3] leading-relaxed border-t border-[#252525] pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
