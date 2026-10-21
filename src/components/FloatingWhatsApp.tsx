import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/validation';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsAppUrl = generateWhatsAppUrl(
    '+91 7618030348',
    'Hello Arun, I am interested in your services.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] border border-[#303030] text-xs text-white px-3 py-1.5 rounded-lg shadow-xl animate-fade-in">
          <span>Chat with Arun</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#888888] hover:text-white ml-1 cursor-pointer"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with Arun"
        className="relative group flex items-center justify-center w-13 h-13 rounded-full bg-[#39FF14] text-black shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.7)] transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#39FF14] animate-ping opacity-25 pointer-events-none" />

        <MessageSquare className="w-6 h-6 fill-black text-black relative z-10" />
      </a>
    </div>
  );
};
