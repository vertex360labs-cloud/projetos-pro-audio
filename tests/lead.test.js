import { describe, expect, it } from 'vitest';
import { buildLeadEmail, routeLead, validateLead } from '../api/lead.js';

const valid = {
  nome: 'Rodrigo',
  whatsapp: '11999999999',
  email: 'rodrigo@example.com',
  interesse: 'studio',
  cenario: 'Quero revisar a monitoração.',
  consentimento: 'sim',
};

describe('lead validation', () => {
  it('accepts a valid lead', () => expect(validateLead(valid).ok).toBe(true));
  it('rejects honeypot', () => expect(validateLead({ ...valid, website: 'bot' }).ok).toBe(false));
  it('rejects invalid email', () => expect(validateLead({ ...valid, email: 'invalid' }).ok).toBe(false));
  it('requires consent', () => expect(validateLead({ ...valid, consentimento: '' }).ok).toBe(false));
});

describe('lead routing', () => {
  const env = { STUDIO_LEAD_TO: 'studio@test.com', LIVE_LEAD_TO: 'live@test.com', COMPLEX_LEAD_TO: 'tech@test.com' };
  it('routes studio directly', () => expect(routeLead('studio', env).to).toBe('studio@test.com'));
  it('routes church to live team', () => expect(routeLead('igreja', env).to).toBe('live@test.com'));
  it('routes other to technical triage', () => expect(routeLead('outro', env).to).toBe('tech@test.com'));
});

it('escapes HTML in email output', () => {
  const parsed = validateLead({ ...valid, nome: '<script>' });
  expect(buildLeadEmail(parsed.lead, 'studio')).not.toContain('<script>');
});

it('preserves product and source context', () => {
  const parsed = validateLead({
    ...valid,
    produto: 'SSL 18',
    categoriaOrigem: 'Interfaces e conversão',
    referencia: 'https://projetosproaudio.com.br/guia-de-equipamentos',
  });
  expect(parsed.lead.produto).toBe('SSL 18');
  expect(buildLeadEmail(parsed.lead, 'studio')).toContain('Interfaces e conversão');
});
