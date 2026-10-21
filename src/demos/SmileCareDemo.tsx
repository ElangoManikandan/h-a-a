import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  ShieldCheck,
  Stethoscope,
  Smile,
  X,
  Menu,
} from 'lucide-react';

interface SmileCareDemoProps {
  onBackToPortfolio: () => void;
}

export const SmileCareDemo: React.FC<SmileCareDemoProps> = ({ onBackToPortfolio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientService, setPatientService] = useState('Routine Checkup & Cleaning');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim() || !appointmentDate) {
      setError('Please provide your name, phone number, and preferred date.');
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Demo Banner */}
      <aside aria-label="Demo notice" className="bg-slate-900 text-white text-xs py-2 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Hustle With Arun"
              className="h-5 w-auto object-contain rounded-xs"
            />
            <span className="text-slate-300 font-medium">
              Concept Demo: SmileCare Dental Clinic · Created by Hustle With Arun
            </span>
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </aside>

      {/* SmileCare Header */}
      <header className="bg-white/95 backdrop-blur border-b border-slate-200 sticky top-9 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Smile<span className="text-teal-600">Care</span>
              </span>
              <span className="block text-[11px] text-slate-700 tracking-wide">
                Family &amp; Cosmetic Dentistry
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-800">
            <button onClick={() => scrollTo('treatments')} className="hover:text-teal-600 transition-colors cursor-pointer">
              Treatments
            </button>
            <button onClick={() => scrollTo('why-us')} className="hover:text-teal-600 transition-colors cursor-pointer">
              Clinic Standards
            </button>
            <button onClick={() => scrollTo('book-appointment')} className="text-teal-700 font-semibold hover:underline cursor-pointer">
              Book Appointment
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('book-appointment')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-sm cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 text-sm">
            <button onClick={() => scrollTo('treatments')} className="block w-full text-left text-slate-700 py-1">
              Treatments
            </button>
            <button onClick={() => scrollTo('why-us')} className="block w-full text-left text-slate-700 py-1">
              Clinic Standards
            </button>
            <button onClick={() => scrollTo('book-appointment')} className="block w-full text-left text-teal-600 font-semibold py-1">
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-800 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Compassionate, Modern Dentistry</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Gentle Dental Care for the <span className="text-teal-600">Whole Family</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-xl">
              From routine cleanings to advanced smile transformations, our clinic delivers
              stress-free dental health using low-radiation digital imaging and modern comfort protocols.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('book-appointment')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md shadow-teal-600/20 cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => scrollTo('treatments')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
              >
                Explore Treatments
              </button>
            </div>
          </div>

          <div id="why-us" className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm scroll-mt-24">
            <h3 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-4">
              Our Clinical Highlights
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-50 text-teal-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Hospital-Grade Sterilization</h4>
                  <p className="text-xs text-slate-700">Autoclave sterilization and single-use hygienic barriers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-50 text-teal-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Zero Wait Time Policy</h4>
                  <p className="text-xs text-slate-700">Organized digital schedules respecting your appointment window.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-50 text-teal-600 shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Transparent Pricing</h4>
                  <p className="text-xs text-slate-700">Clear cost breakdown before any procedure begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest block mb-2">
              Comprehensive Services
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Modern Clinical Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Preventative Dentistry',
                desc: 'Ultrasonic scaling, enamel polishing, and proactive cavity detection.',
              },
              {
                title: 'Cosmetic Teeth Whitening',
                desc: 'Safe, in-office laser whitening and custom home-maintenance trays.',
              },
              {
                title: 'Clear Aligners & Braces',
                desc: 'Digital orthodontic scans for discreet tooth alignment.',
              },
              {
                title: 'Restorative & Implants',
                desc: 'Natural tooth crowns, bio-compatible fillings, and precision dental implants.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <button
                  onClick={() => {
                    setPatientService(item.title);
                    scrollTo('book-appointment');
                  }}
                  className="text-xs font-semibold text-teal-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  Book for this service →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-appointment" className="py-16 px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase text-teal-600 tracking-wider block mb-1">
              Online Registration
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Request Your Consultation
            </h2>
            <p className="text-xs text-slate-700 mt-1">
              Select your preferred service and day to receive our confirmation call.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label htmlFor="smilecare-patient-name" className="block text-xs font-medium text-slate-700 mb-1">
                Patient Full Name *
              </label>
              <input
                id="smilecare-patient-name"
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Priya Nair"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="smilecare-patient-phone" className="block text-xs font-medium text-slate-700 mb-1">
                Contact Phone Number *
              </label>
              <input
                id="smilecare-patient-phone"
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="e.g. +91 91234 56789"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="smilecare-service" className="block text-xs font-medium text-slate-700 mb-1">
                  Treatment Required
                </label>
                <select
                  id="smilecare-service"
                  value={patientService}
                  onChange={(e) => setPatientService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-teal-500 focus:outline-none"
                >
                  <option>Routine Checkup &amp; Cleaning</option>
                  <option>Teeth Whitening</option>
                  <option>Clear Aligners Consultation</option>
                  <option>Restorative / Cavity Filling</option>
                  <option>Emergency Toothache</option>
                </select>
              </div>

              <div>
                <label htmlFor="smilecare-date" className="block text-xs font-medium text-slate-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  id="smilecare-date"
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm cursor-pointer mt-2"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>
      </section>

      {/* Simulated Booking Modal */}
      {isBooked && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-teal-200 rounded-2xl max-w-md w-full p-6 text-center shadow-xl">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
              Demo Simulation Notice
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Appointment Request Received</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Thank you, <strong className="text-slate-900">{patientName}</strong>! In a real clinic deployment, our dental receptionist would call{' '}
              <strong className="text-slate-900">{patientPhone}</strong> to confirm your slot on{' '}
              <strong className="text-slate-900">{appointmentDate}</strong> for <strong className="text-slate-900">{patientService}</strong>.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsBooked(false);
                  setPatientName('');
                  setPatientPhone('');
                }}
                className="flex-1 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                Dismiss Preview
              </button>
              <button
                onClick={onBackToPortfolio}
                className="flex-1 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} SmileCare Dental Clinic · Concept Demo for Portfolio
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBackToPortfolio();
            }}
            className="inline-flex items-center gap-2 text-teal-600 hover:underline cursor-pointer"
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
