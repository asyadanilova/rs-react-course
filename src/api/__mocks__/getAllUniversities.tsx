import { vi } from 'vitest';

export const getAllUniversities = vi.fn(() =>
  Promise.resolve<University[]>([
    {
      domains: ['example.edu'],
      country: 'Country',
      stateProvince: null,
      name: 'Name University',
      web_pages: ['https://example.com'],
      alpha_two_code: 'CODE',
    },
  ])
);
