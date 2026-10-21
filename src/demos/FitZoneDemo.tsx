import React, { useState } from 'react';
import {
  Dumbbell,
  ArrowLeft,
  Check,
  Flame,
  Clock,
  Shield,
  Calendar,
  X,
  Menu,
} from 'lucide-react';

interface FitZoneDemoProps {
  onBackToPortfolio: () => void;
}

export const FitZoneDemo: React.FC<FitZoneDemoProps> = ({ onBackToPortfolio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trialName, setTrialName] = useState('');
  const [trialPhone, setTrialPhone] = useState('');
  const [trialSlot, setTrialSlot] = useState('Morning (6 AM - 10 AM)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialName.trim() || !trialPhone.trim()) {
      setErrorMessage('Please provide your name and phone number.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#39FF14] selection:text-black font-sans">
      {/* Top Concept Demo Bar */}
      <aside aria-label="Demo notice" className="bg-[#181818] border-b border-[#2A2A2A] text-xs py-2 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Hustle With Arun"
              className="h-5 w-auto object-contain rounded-xs"
            />
            <span className="text-[#CCCCCC] font-medium">
              Concept Demo: FitZone Gym Website · Created by Hustle With Arun
            </span>
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#39FF14] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </aside>

      {/* FitZone Header */}
      <header className="border-b border-[#1F1F1F] bg-[#0E0E0E]/90 backdrop-blur-md sticky top-9 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded bg-[#39FF14] text-black flex items-center justify-center font-black">
              <Dumbbell className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-white uppercase">
              FIT<span className="text-[#39FF14]">ZONE</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#AAAAAA]">
            <button
              onClick={() => scrollToSection('fitzone-about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Why FitZone
            </button>
            <button
              onClick={() => scrollToSection('fitzone-plans')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Memberships
            </button>
            <button
              onClick={() => scrollToSection('fitzone-trainers')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Trainers
            </button>
            <button
              onClick={() => scrollToSection('fitzone-trial')}
              className="text-[#39FF14] hover:underline cursor-pointer"
            >
              Free Trial Pass
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('fitzone-trial')}
              className="hidden sm:inline-flex px-4 py-2 rounded text-xs font-bold uppercase tracking-wider text-black bg-[#39FF14] hover:bg-[#32e012] transition-colors cursor-pointer"
            >
              Claim Free Pass
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#CCCCCC] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141414] border-b border-[#2A2A2A] px-4 py-4 space-y-3 text-sm">
            <button
              onClick={() => scrollToSection('fitzone-about')}
              className="block w-full text-left text-white py-1"
            >
              Why FitZone
            </button>
            <button
              onClick={() => scrollToSection('fitzone-plans')}
              className="block w-full text-left text-white py-1"
            >
              Memberships
            </button>
            <button
              onClick={() => scrollToSection('fitzone-trainers')}
              className="block w-full text-left text-white py-1"
            >
              Trainers
            </button>
            <button
              onClick={() => scrollToSection('fitzone-trial')}
              className="block w-full text-left text-[#39FF14] font-semibold py-1"
            >
              Claim Free Pass
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="fitzone-about" className="relative py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1F1F1F] text-xs font-semibold uppercase tracking-wider text-[#39FF14] mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Next-Gen Performance Club</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none mb-6">
              Forge Your <br />
              <span className="text-[#39FF14] underline decoration-4 underline-offset-8">
                Strongest
              </span>{' '}
              Self
            </h1>
            <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed max-w-lg mb-8">
              Experience Olympic-standard equipment, dedicated conditioning zones, and personalized
              coaching structured to elevate your fitness journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('fitzone-trial')}
                className="px-6 py-3.5 rounded text-sm font-bold uppercase tracking-wider text-black bg-[#39FF14] hover:bg-[#32e012] transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] cursor-pointer"
              >
                Get 1-Day Trial Pass
              </button>
              <button
                onClick={() => scrollToSection('fitzone-plans')}
                className="px-6 py-3.5 rounded text-sm font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#252525] border border-[#333333] transition-colors cursor-pointer"
              >
                View Plans
              </button>
            </div>
          </div>

          {/* Clean Graphic Highlight */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#262626] rounded-2xl p-6 relative">
            <div className="text-xs uppercase font-mono tracking-wider text-[#39FF14] mb-3">
              Club Highlights
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D1D1D]">
                <Clock className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">24/7 Access Hours</h4>
                  <p className="text-xs text-[#999999]">Train on your own schedule with secure biometric entry.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D1D1D]">
                <Shield className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Certified S&amp;C Coaches</h4>
                  <p className="text-xs text-[#999999]">Form correction, progressive overload and periodized splits.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D1D1D]">
                <Calendar className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Functional Turf &amp; Racks</h4>
                  <p className="text-xs text-[#999999]">Sled tracks, power cages, kettlebells, and recovery station.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="fitzone-plans" className="py-20 bg-[#0E0E0E] border-t border-[#1C1C1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-[#39FF14] block mb-2">
              Transparent Membership
            </span>
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">
              Choose Your Training Tier
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plan 1 */}
            <div className="bg-[#161616] border border-[#2B2B2B] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider block mb-1">
                  Single Access
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Day Pass</h3>
                <div className="text-3xl font-black text-[#39FF14] mb-4">₹299</div>
                <ul className="space-y-2.5 text-xs text-[#CCCCCC] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Full access to weight floor
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Cardio &amp; functional turf access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Locker and shower facilities
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('fitzone-trial')}
                className="w-full py-2.5 rounded bg-[#222222] hover:bg-[#2C2C2C] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                Select Day Pass
              </button>
            </div>

            {/* Plan 2: Popular */}
            <div className="bg-[#181818] border-2 border-[#39FF14] rounded-xl p-6 flex flex-col justify-between relative shadow-[0_0_25px_rgba(57,255,20,0.15)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-semibold text-[#39FF14] uppercase tracking-wider block mb-1">
                  Unlimited Training
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Monthly Pro</h3>
                <div className="text-3xl font-black text-white mb-4">
                  ₹2,499 <span className="text-xs text-[#999999] font-normal">/ month</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#CCCCCC] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> 24/7 Unlimited club access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Free 1-on-1 fitness induction
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Weekly group conditioning classes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Dedicated mobile app tracking
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('fitzone-trial')}
                className="w-full py-2.5 rounded bg-[#39FF14] hover:bg-[#32e012] text-xs font-bold uppercase tracking-wider text-black transition-colors cursor-pointer"
              >
                Select Monthly Pro
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-[#161616] border border-[#2B2B2B] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider block mb-1">
                  Commitment
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Elite Annual</h3>
                <div className="text-3xl font-black text-[#39FF14] mb-4">
                  ₹18,999 <span className="text-xs text-[#999999] font-normal">/ year</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#CCCCCC] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> All Monthly Pro features included
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> 4 Personal trainer check-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> Free guest passes (2 per month)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#39FF14]" /> FitZone kit bag &amp; shaker
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('fitzone-trial')}
                className="w-full py-2.5 rounded bg-[#222222] hover:bg-[#2C2C2C] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                Select Annual
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="fitzone-trainers" className="py-20 bg-[#0A0A0A] border-t border-[#1C1C1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-[#39FF14] block mb-2">
              Coaching Staff
            </span>
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">
              Elite Certified Trainers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Marcus Vance',
                role: 'Head S&C Coach',
                focus: 'Powerlifting & Hypertrophy',
                desc: 'Specializes in barbell mechanics, injury prevention, and competitive strength periodization.',
              },
              {
                name: 'Elena Rostova',
                role: 'Mobility & Rehab Specialist',
                focus: 'Functional Range Conditioning',
                desc: 'Focused on joint longevity, hip/shoulder mobility protocols, and postural restoration.',
              },
              {
                name: 'Devon Hayes',
                role: 'Conditioning & MetCon Coach',
                focus: 'HIIT & Athletic Speed',
                desc: 'Designs explosive interval routines, sled protocols, and cardiovascular capacity programs.',
              },
            ].map((coach, i) => (
              <div key={i} className="bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#222222] border border-[#303030] flex items-center justify-center text-[#39FF14] font-black text-sm mb-4">
                    COACH
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{coach.name}</h3>
                  <div className="text-xs font-semibold text-[#39FF14] mb-2">{coach.role}</div>
                  <div className="text-[11px] font-mono text-[#888888] mb-3">{coach.focus}</div>
                  <p className="text-xs text-[#AAAAAA] leading-relaxed mb-4">{coach.desc}</p>
                </div>
                <button
                  onClick={() => scrollToSection('fitzone-trial')}
                  className="text-xs font-semibold text-[#39FF14] hover:underline text-left cursor-pointer"
                >
                  Book Session with {coach.name.split(' ')[0]} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
      <section id="fitzone-trial" className="py-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6 sm:p-10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase text-[#39FF14] tracking-widest block mb-2">
              Experience It First-Hand
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">
              Claim Your Free 1-Day Trial Pass
            </h2>
            <p className="text-sm text-[#AAAAAA]">
              Test out our equipment, speak with our trainers, and experience the club atmosphere.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded bg-red-900/40 border border-red-700 text-xs text-red-200">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleTrialSubmit} className="space-y-4">
            <div>
              <label htmlFor="fitzone-name" className="block text-xs font-semibold uppercase tracking-wider text-[#CCCCCC] mb-1.5">
                Full Name *
              </label>
              <input
                id="fitzone-name"
                type="text"
                value={trialName}
                onChange={(e) => setTrialName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded bg-[#1C1C1C] border border-[#333333] text-white text-sm focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="fitzone-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#CCCCCC] mb-1.5">
                Mobile Number *
              </label>
              <input
                id="fitzone-phone"
                type="tel"
                value={trialPhone}
                onChange={(e) => setTrialPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded bg-[#1C1C1C] border border-[#333333] text-white text-sm focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="fitzone-slot" className="block text-xs font-semibold uppercase tracking-wider text-[#CCCCCC] mb-1.5">
                Preferred Time Window
              </label>
              <select
                id="fitzone-slot"
                value={trialSlot}
                onChange={(e) => setTrialSlot(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#1C1C1C] border border-[#333333] text-white text-sm focus:border-[#39FF14] focus:outline-none"
              >
                <option>Morning (6 AM - 10 AM)</option>
                <option>Midday (11 AM - 3 PM)</option>
                <option>Evening (4 PM - 9 PM)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded text-sm font-bold uppercase tracking-wider text-black bg-[#39FF14] hover:bg-[#32e012] transition-colors cursor-pointer mt-2"
            >
              Confirm Free Trial Request
            </button>
          </form>
        </div>
      </section>

      {/* Simulated Submission Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#181818] border border-[#39FF14] rounded-2xl max-w-md w-full p-6 text-center shadow-[0_0_35px_rgba(57,255,20,0.25)]">
            <div className="w-12 h-12 rounded-full bg-[#39FF14]/20 border border-[#39FF14] text-[#39FF14] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#39FF14] block mb-1">
              Demo Simulation Notice
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Trial Pass Requested!</h3>
            <p className="text-xs text-[#B3B3B3] leading-relaxed mb-6">
              Thank you, <strong className="text-white">{trialName}</strong>! In an active commercial deployment, this submission instantly triggers a WhatsApp confirmation to{' '}
              <strong className="text-white">{trialPhone}</strong> with a scannable QR pass for the{' '}
              <strong className="text-white">{trialSlot}</strong> session.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setTrialName('');
                  setTrialPhone('');
                }}
                className="flex-1 py-2.5 rounded bg-[#2B2B2B] hover:bg-[#333333] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <button
                onClick={onBackToPortfolio}
                className="flex-1 py-2.5 rounded bg-[#39FF14] hover:bg-[#32e012] text-xs font-bold text-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#1C1C1C] py-8 text-center text-xs text-[#777777]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} FitZone Performance Club · Concept Demo for Portfolio
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex items-center gap-2 text-[#39FF14] hover:underline cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Hustle With Arun"
              className="h-4 w-auto object-contain rounded-xs"
            />
            <span>Return to Hustle With Arun</span>
          </a>
        </div>
      </footer>
    </div>
  );
};
