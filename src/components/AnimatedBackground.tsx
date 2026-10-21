import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Subtle moving grid */}
      <div className="absolute inset-0 bg-digital-grid opacity-70" />

      {/* Floating blurred lime gradient orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#39FF14] filter blur-[140px] animate-orb-1"
        style={{ willChange: 'transform, opacity' }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#39FF14] filter blur-[160px] animate-orb-2"
        style={{ willChange: 'transform, opacity' }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-[#39FF14] filter blur-[150px] animate-orb-1"
        style={{ animationDuration: '24s', willChange: 'transform, opacity' }}
      />

      {/* Discrete floating lime particles */}
      <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] particle-a" />
      <div className="absolute top-[28%] right-[18%] w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14] particle-b" />
      <div className="absolute top-[45%] left-[22%] w-1 h-1 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14] particle-a" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-[65%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] particle-b" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-[80%] left-[8%] w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14] particle-a" style={{ animationDelay: '-8s' }} />
      <div className="absolute top-[88%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14] particle-b" style={{ animationDelay: '-2s' }} />

      {/* Vignette & contrast protection overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212]/95" />
    </div>
  );
};
