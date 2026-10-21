import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validateContactForm,
  generateWhatsAppUrl,
  generateMailtoUrl,
  normalizeRoute,
} from './validation.ts';

test('validateEmail checks standard email patterns', () => {
  assert.equal(validateEmail('test@example.com'), true);
  assert.equal(validateEmail('arun.kumar@grozentech.co.in'), true);
  assert.equal(validateEmail('user+tag@domain.org'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('user@'), false);
  assert.equal(validateEmail('@domain.com'), false);
});

test('validateContactForm rejects empty required fields', () => {
  const result = validateContactForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.service);
  assert.ok(result.errors.projectDetails);
});

test('validateContactForm validates valid input', () => {
  const result = validateContactForm({
    name: 'Sarah Jenkins',
    email: 'sarah@localbakery.com',
    businessName: 'The Artisan Bakery',
    service: 'No-Code Website Development',
    projectDetails: 'We need a modern 3-page website with menu showcase and WhatsApp order button.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateWhatsAppUrl produces proper encoded link', () => {
  const url = generateWhatsAppUrl('+91 7618030348', 'Hello Arun, I am interested in your services.');
  assert.equal(
    url,
    'https://wa.me/917618030348?text=Hello%20Arun%2C%20I%20am%20interested%20in%20your%20services.'
  );
});

test('generateMailtoUrl builds mailto link with subject and body', () => {
  const url = generateMailtoUrl('grozentech@gmail.com', 'Project Enquiry', 'Hello Arun,\nI need help.');
  assert.ok(url.startsWith('mailto:grozentech@gmail.com?subject=Project%20Enquiry&body='));
});

test('normalizeRoute correctly resolves root and demo paths', () => {
  assert.equal(normalizeRoute('/'), 'home');
  assert.equal(normalizeRoute('/demos/fitzone'), 'fitzone');
  assert.equal(normalizeRoute('/demos/fitzone/'), 'fitzone');
  assert.equal(normalizeRoute('/demos/smilecare'), 'smilecare');
  assert.equal(normalizeRoute('/demos/autoshine'), 'autoshine');
  assert.equal(normalizeRoute('/unknown-path'), 'home');
});
