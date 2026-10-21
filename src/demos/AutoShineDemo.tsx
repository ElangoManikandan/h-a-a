import React, { useState } from 'react';
import {
  Car,
  ArrowLeft,
  Shield,
  Sparkles,
  Droplets,
  CheckCircle2,
  Calendar,
  X,
  Menu,
} from 'lucide-react';

interface AutoShineDemoProps {
  onBackToPortfolio: () => void;
}

export const AutoShineDemo: React.FC<AutoShineDemoProps> = ({ onBackToPortfolio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [packageType, setPackageType] = useState('Full Ceramic Coating (3-Year)');
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName.trim() || !phone.trim() || !vehicleModel.trim()) {
      setError('Please provide your name, phone number, and vehicle model.');
      return;
    }
    setError('');
    setIsBooked(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E2E8F0] font-sans selection:bg-[#38BDF8] selection:text-black">
      {/* Top Demo Banner */}
      <aside aria-label="Demo notice" className="bg-[#171B22] border-b border-[#252C37] text-xs py-2 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Hustle With Arun"
              className="h-5 w-auto object-contain rounded-xs"
            />
            <span className="text-[#94A3B8] font-medium">
              Concept Demo: AutoShine Studio · Created by Hustle With Arun
            </span>
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </aside>

      {/* AutoShine Header */}
      <header className="bg-[#12161E]/95 backdrop-blur border-b border-[#222936] sticky top-9 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0284C7] text-black flex items-center justify-center font-bold shadow-md shadow-[#38BDF8]/20">
              <Car className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                AUTO<span className="text-[#38BDF8]">SHINE</span>
              </span>
              <span className="block text-[10px] text-[#94A3B8] uppercase tracking-widest font-mono">
                Precision Detailing Studio
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors cursor-pointer">
              Detailing Packages
            </button>
            <button onClick={() => scrollTo('craft')} className="hover:text-white transition-colors cursor-pointer">
              Our Process
            </button>
            <button onClick={() => scrollTo('book-detail')} className="text-[#38BDF8] hover:underline cursor-pointer">
              Book Detail
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('book-detail')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#38BDF8] hover:bg-[#7dd3fc] transition-all cursor-pointer shadow-sm shadow-[#38BDF8]/30"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Get Estimate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#94A3B8] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#12161E] border-b border-[#222936] px-4 py-4 space-y-3 text-sm">
            <button onClick={() => scrollTo('packages')} className="block w-full text-left text-white py-1">
              Detailing Packages
            </button>
            <button onClick={() => scrollTo('craft')} className="block w-full text-left text-white py-1">
              Our Process
            </button>
            <button onClick={() => scrollTo('book-detail')} className="block w-full text-left text-[#38BDF8] font-bold py-1">
              Book Detail
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#38BDF8] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Master Ceramic Coating &amp; Paint Correction</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-6">
              Showroom Shine. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-white to-[#38BDF8]">
                Enduring Shield.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
              Preserve your vehicle&apos;s paintwork with multi-stage machine polishing, 9H ceramic coatings,
              and meticulous deep interior steam restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('book-detail')}
                className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#38BDF8] hover:bg-[#7dd3fc] transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer"
              >
                Schedule Detailing Session
              </button>
              <button
                onClick={() => scrollTo('packages')}
                className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#1A202C] hover:bg-[#252E3E] border border-[#2D3748] transition-colors cursor-pointer"
              >
                Explore Packages
              </button>
            </div>
          </div>

          <div id="craft" className="lg:col-span-5 bg-[#161C26] border border-[#273243] rounded-2xl p-6 shadow-xl scroll-mt-24">
            <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-4">
              Precision Standards
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D2533]">
                <Shield className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">9H Hardness Ceramic Armor</h4>
                  <p className="text-xs text-[#94A3B8]">Hydrophobic barrier protecting against bird etchings, UV oxidation, and swirl marks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D2533]">
                <Droplets className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Interior Hot-Steam Extraction</h4>
                  <p className="text-xs text-[#94A3B8]">Deep conditioning of leather, microfiber seats, and climate vent sanitization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D2533]">
                <Sparkles className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Optical Inspection Lighting</h4>
                  <p className="text-xs text-[#94A3B8]">Dual-action polishing under 5500K inspection lights for swirl-free clarity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-[#12161F] border-y border-[#202836]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-[#38BDF8] block mb-2">
              Tailored Detailing
            </span>
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">
              Curated Detailing Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Package 1 */}
            <div className="bg-[#171D27] border border-[#273243] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block mb-1">
                  Maintenance
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Essential Refresh</h3>
                <div className="text-2xl font-black text-[#38BDF8] mb-4">₹2,999</div>
                <ul className="space-y-2.5 text-xs text-[#CBD5E1] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Multi-stage foam wash &amp; wheel decontamination
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Interior vacuum &amp; dashboard dressing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Synthetic paint sealant application
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setPackageType('Essential Refresh');
                  scrollTo('book-detail');
                }}
                className="w-full py-2.5 rounded bg-[#232C3B] hover:bg-[#2C384B] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                Select Essential
              </button>
            </div>

            {/* Package 2: Ceramic Coating */}
            <div className="bg-[#18212D] border-2 border-[#38BDF8] rounded-xl p-6 flex flex-col justify-between relative shadow-[0_0_25px_rgba(56,189,248,0.15)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#38BDF8] text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full">
                Signature Flagship
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] block mb-1">
                  Ultimate Gloss &amp; Shield
                </span>
                <h3 className="text-xl font-bold text-white mb-2">9H Ceramic Shield (3-Year)</h3>
                <div className="text-2xl font-black text-white mb-4">₹14,999</div>
                <ul className="space-y-2.5 text-xs text-[#CBD5E1] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> 2-Stage machine paint correction (swirl removal)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> 2 Layers of 9H Ceramic coating on paint &amp; trim
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Wheel faces &amp; windshield glass coating
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Full interior leather conditioning
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setPackageType('9H Ceramic Shield (3-Year)');
                  scrollTo('book-detail');
                }}
                className="w-full py-2.5 rounded bg-[#38BDF8] hover:bg-[#7dd3fc] text-xs font-bold uppercase tracking-wider text-black transition-colors cursor-pointer"
              >
                Select Ceramic Shield
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-[#171D27] border border-[#273243] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block mb-1">
                  Interior Focus
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Deep Spa &amp; Steam</h3>
                <div className="text-2xl font-black text-[#38BDF8] mb-4">₹5,499</div>
                <ul className="space-y-2.5 text-xs text-[#CBD5E1] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Full upholstery hot-water extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Antibacterial ozone treatment for cabin
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Engine bay detail &amp; dress
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setPackageType('Deep Spa & Steam');
                  scrollTo('book-detail');
                }}
                className="w-full py-2.5 rounded bg-[#232C3B] hover:bg-[#2C384B] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                Select Deep Spa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-detail" className="py-20 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="bg-[#151B24] border border-[#273243] rounded-2xl p-6 sm:p-10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase text-[#38BDF8] tracking-widest block mb-2">
              Studio Reservation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Book Your Detailing Slot
            </h2>
            <p className="text-xs text-[#94A3B8]">
              We limit our intake to 2 vehicles per day to guarantee perfection.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded bg-red-900/40 border border-red-700 text-xs text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label htmlFor="autoshine-owner-name" className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                Owner Name *
              </label>
              <input
                id="autoshine-owner-name"
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="e.g. Vikram Mehta"
                className="w-full px-4 py-3 rounded bg-[#1D2533] border border-[#2D394C] text-white text-sm focus:border-[#38BDF8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="autoshine-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                Contact Phone Number *
              </label>
              <input
                id="autoshine-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98111 22334"
                className="w-full px-4 py-3 rounded bg-[#1D2533] border border-[#2D394C] text-white text-sm focus:border-[#38BDF8] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="autoshine-vehicle-model" className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                  Car Make &amp; Model *
                </label>
                <input
                  id="autoshine-vehicle-model"
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  placeholder="e.g. BMW 3 Series / Creta"
                  className="w-full px-4 py-3 rounded bg-[#1D2533] border border-[#2D394C] text-white text-sm focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="autoshine-package-type" className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                  Package Choice
                </label>
                <select
                  id="autoshine-package-type"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#1D2533] border border-[#2D394C] text-white text-sm focus:border-[#38BDF8] focus:outline-none"
                >
                  <option>9H Ceramic Shield (3-Year)</option>
                  <option>Essential Refresh</option>
                  <option>Deep Spa &amp; Steam</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded text-xs font-bold uppercase tracking-wider text-black bg-[#38BDF8] hover:bg-[#7dd3fc] transition-colors cursor-pointer mt-2"
            >
              Confirm Detailing Request
            </button>
          </form>
        </div>
      </section>

      {/* Simulated Booking Modal */}
      {isBooked && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#18212D] border border-[#38BDF8] rounded-2xl max-w-md w-full p-6 text-center shadow-[0_0_35px_rgba(56,189,248,0.25)]">
            <div className="w-12 h-12 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8] text-[#38BDF8] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] block mb-1">
              Demo Simulation Notice
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Slot Request Recorded</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
              Thank you, <strong className="text-white">{ownerName}</strong>! In an active commercial website, our studio manager would inspect the{' '}
              <strong className="text-white">{vehicleModel}</strong> requirements and text a booking confirmation to{' '}
              <strong className="text-white">{phone}</strong> for the{' '}
              <strong className="text-white">{packageType}</strong> service.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsBooked(false);
                  setOwnerName('');
                  setPhone('');
                  setVehicleModel('');
                }}
                className="flex-1 py-2.5 rounded bg-[#252E3E] hover:bg-[#2F3A4E] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <button
                onClick={onBackToPortfolio}
                className="flex-1 py-2.5 rounded bg-[#38BDF8] hover:bg-[#7dd3fc] text-xs font-bold text-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#202836] py-8 text-center text-xs text-[#64748B]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} AutoShine Studio · Concept Demo for Portfolio
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex items-center gap-2 text-[#38BDF8] hover:underline cursor-pointer"
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
