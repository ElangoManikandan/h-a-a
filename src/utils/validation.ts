/**
 * Contact form data structure and pure validation logic
 */

export interface ContactFormData {
  name: string;
  email: string;
  businessName?: string;
  service: string;
  projectDetails: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    service?: string;
    projectDetails?: string;
  };
}

export const VALID_SERVICES = [
  'Digital Marketing',
  'Lead Generation',
  'No-Code Website Development',
  'Instagram Page Growth',
  'Google Business Profile Optimization',
  'Local Business Promotion',
  'Custom Solution',
  'Starter Plan Quote',
  'Growth Plan Quote',
] as const;

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  // Standard robust email regex (user@domain.tld)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(trimmed);
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Please enter your name.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Please provide an email address.';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address (e.g. name@company.com).';
  }

  // Service validation
  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Please select a service or enquiry type.';
  }

  // Project details validation
  if (!data.projectDetails || data.projectDetails.trim().length === 0) {
    errors.projectDetails = 'Please provide a brief description of your project or goals.';
  } else if (data.projectDetails.trim().length < 10) {
    errors.projectDetails = 'Please share a few more details (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  // Strip non-digits from phone number
  const cleanPhone = phoneNumber.replace(/[^\d]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

export function generateMailtoUrl(recipient: string, subject: string, body: string): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
}

export type AppRoute = 'home' | 'fitzone' | 'smilecare' | 'autoshine';

export function normalizeRoute(pathname: string): AppRoute {
  const clean = pathname.replace(/\/+$/, '').toLowerCase();
  if (clean === '/demos/fitzone' || clean.endsWith('/fitzone')) {
    return 'fitzone';
  }
  if (clean === '/demos/smilecare' || clean.endsWith('/smilecare')) {
    return 'smilecare';
  }
  if (clean === '/demos/autoshine' || clean.endsWith('/autoshine')) {
    return 'autoshine';
  }
  return 'home';
}
