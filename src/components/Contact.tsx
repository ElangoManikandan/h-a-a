import React, { useState, useEffect } from 'react';
import {
  Mail,
  MessageSquare,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import {
  ContactFormData,
  VALID_SERVICES,
  validateContactForm,
  generateWhatsAppUrl,
  generateMailtoUrl,
} from '../utils/validation';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    businessName: '',
    service: initialService || VALID_SERVICES[0],
    projectDetails: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    service?: string;
    projectDetails?: string;
  }>({});

  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...formData });
  };

  const whatsAppGeneralUrl = generateWhatsAppUrl(
    '+91 7618030348',
    'Hello Arun, I am interested in your services.'
  );

  const customWhatsAppUrl = submittedData
    ? generateWhatsAppUrl(
        '+91 7618030348',
        `Hello Arun, my name is ${submittedData.name}${
          submittedData.businessName ? ` from ${submittedData.businessName}` : ''
        }. I am interested in ${submittedData.service}. Project details: ${submittedData.projectDetails}`
      )
    : whatsAppGeneralUrl;

  const customMailtoUrl = submittedData
    ? generateMailtoUrl(
        'grozentech@gmail.com',
        `Project Enquiry: ${submittedData.service} - ${submittedData.name}`,
        `Hi Arun,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nBusiness: ${
          submittedData.businessName || 'N/A'
        }\nService: ${submittedData.service}\n\nProject Overview:\n${submittedData.projectDetails}\n\nBest regards,\n${submittedData.name}`
      )
    : generateMailtoUrl('grozentech@gmail.com', 'Project Enquiry', 'Hi Arun, I would like to discuss a project.');

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Quick Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
                Start a Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-base text-[#B3B3B3] leading-relaxed mb-8">
                Let&apos;s discuss how digital marketing, lead generation, or a modern website can
                support your business goals.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <a
                  href="mailto:grozentech@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1A1A1A] border border-[#303030] hover:border-[#39FF14]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#242424] text-[#39FF14] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#888888] block">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#39FF14] transition-colors">
                      grozentech@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsAppGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1A1A1A] border border-[#303030] hover:border-[#39FF14]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#242424] text-[#39FF14] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#888888] block">Instant WhatsApp Chat</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#39FF14] transition-colors">
                      +91 7618030348
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#888888] block mb-3">
                  Connect on Social Media
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/hustlewitharun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1A1A1A] border border-[#303030] hover:border-[#39FF14]/50 text-xs text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#39FF14]" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-[#666666]" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/arun-kumar-grozentech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1A1A1A] border border-[#303030] hover:border-[#39FF14]/50 text-xs text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#39FF14]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#666666]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222222] text-xs text-[#777777]">
              <span>Response Window: Typically within 24 hours on business days.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1A1A1A] border border-[#303030] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-[#B3B3B3] mb-6">
                Fill in your project details. We validate fields and provide instant email draft &amp; WhatsApp forwarding.
              </p>

              {submittedData ? (
                /* Clear Demo Confirmation State */
                <div className="bg-[#141414] border border-[#39FF14]/60 rounded-xl p-6 text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#39FF14]/20 text-[#39FF14] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Details Validated Successfully</h4>
                      <p className="text-xs text-[#39FF14]">Demo Form Ready for Dispatch</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#CCCCCC] leading-relaxed">
                    Hello <strong className="text-white">{submittedData.name}</strong>, your message for{' '}
                    <strong className="text-white">{submittedData.service}</strong> has been structured. Choose how you would like to transmit it directly to Arun:
                  </p>

                  <div className="p-3 bg-[#1C1C1C] rounded-lg border border-[#2B2B2B] text-xs space-y-1 text-[#AAAAAA]">
                    <div><span className="text-[#FFFFFF] font-semibold">Sender:</span> {submittedData.name} ({submittedData.email})</div>
                    {submittedData.businessName && (
                      <div><span className="text-[#FFFFFF] font-semibold">Business:</span> {submittedData.businessName}</div>
                    )}
                    <div><span className="text-[#FFFFFF] font-semibold">Selected Focus:</span> {submittedData.service}</div>
                    <div><span className="text-[#FFFFFF] font-semibold">Notes:</span> {submittedData.projectDetails}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-[#39FF14] hover:bg-[#32e012] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </a>

                    <a
                      href={customMailtoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold text-white bg-[#262626] hover:bg-[#333333] border border-[#3A3A3A] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="text-xs text-[#888888] hover:text-[#CCCCCC] underline cursor-pointer"
                    >
                      Edit or submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#CCCCCC] mb-1">
                      Your Name <span className="text-[#39FF14]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Patel"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border text-white text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#333333] focus:border-[#39FF14]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Business Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[#CCCCCC] mb-1">
                        Email Address <span className="text-[#39FF14]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border text-white text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#333333] focus:border-[#39FF14]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-business-name" className="block text-xs font-medium text-[#CCCCCC] mb-1">
                        Business / Brand Name <span className="text-[#888888] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-business-name"
                        name="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Artisan Cafe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#333333] focus:border-[#39FF14] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-medium text-[#CCCCCC] mb-1">
                      Service Required <span className="text-[#39FF14]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#333333] focus:border-[#39FF14] text-white text-sm focus:outline-none"
                    >
                      {VALID_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-project-details" className="block text-xs font-medium text-[#CCCCCC] mb-1">
                      Project Details &amp; Objectives <span className="text-[#39FF14]">*</span>
                    </label>
                    <textarea
                      id="contact-project-details"
                      name="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Share your goals, target audience, preferred timeline, or current challenges..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border text-white text-sm focus:outline-none transition-colors ${
                        errors.projectDetails
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#333333] focus:border-[#39FF14]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-black bg-[#39FF14] hover:bg-[#32e012] transition-all shadow-[0_0_20px_rgba(57,255,20,0.25)] hover:shadow-[0_0_30px_rgba(57,255,20,0.45)] cursor-pointer"
                  >
                    <span>Submit Project Details</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
