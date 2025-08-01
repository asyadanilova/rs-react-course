export const basicMockUniversities: University[] = [
  {
    domains: ['harvard.edu'],
    country: 'USA',
    stateProvince: null,
    name: 'Harvard University',
    web_pages: ['https://www.harvard.edu'],
    alpha_two_code: 'US',
  },
  {
    domains: ['ox.ac.uk'],
    country: 'United Kingdom',
    stateProvince: null,
    name: 'Oxford University',
    web_pages: ['https://www.ox.ac.uk'],
    alpha_two_code: 'UK',
  },
];

export const paginatedMockUniversities: University[] = Array.from(
  { length: 30 },
  (_, index) => ({
    domains: [`domain${index}.com`],
    country: `Country ${index}`,
    name: `University ${index}`,
    web_pages: [`https://www.domain${index}.com`],
    stateProvince: null,
    alpha_two_code: 'XX',
  })
);

export const singleMockUniversity: University[] = [
  {
    domains: ['harvard.edu'],
    country: 'USA',
    stateProvince: null,
    name: 'Harvard University',
    web_pages: ['https://www.harvard.edu'],
    alpha_two_code: 'US',
  },
];
