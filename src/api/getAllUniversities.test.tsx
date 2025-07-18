import { describe, it, expect, vi, afterEach, Mock, beforeEach } from 'vitest';
import { makeApiRequest } from './makeApiRequest';

vi.mock('./makeApiRequest', () => ({
  makeApiRequest: vi.fn(),
}));

const mockedMakeApiRequest = makeApiRequest as Mock;

let getAllUniversities: typeof import('./getAllUniversities').getAllUniversities;

describe('getAllUniversities', () => {
  beforeEach(async () => {
    ({ getAllUniversities } = await import('./getAllUniversities'));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should call makeApiRequest with the correct endpoint and return data on success', async () => {
    const mockUniversities: University[] = [
      {
        name: 'Harvard University',
        country: 'USA',
        stateProvince: null,
        domains: ['harvard.edu'],
        web_pages: ['https://www.harvard.edu'],
        alpha_two_code: 'US',
      },
      {
        name: 'Oxford University',
        country: 'United Kingdom',
        stateProvince: null,
        domains: ['ox.ac.uk'],
        web_pages: ['https://www.ox.ac.uk'],
        alpha_two_code: 'UK',
      },
    ];
    mockedMakeApiRequest.mockResolvedValueOnce(mockUniversities);

    const result = await getAllUniversities();

    expect(makeApiRequest).toHaveBeenCalledWith('/search?&offset=1&limit=9');
    expect(result).toEqual(mockUniversities);
  });

  it('should log an error and throw when makeApiRequest throws an error', async () => {
    const mockError = new Error('Network error');

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockedMakeApiRequest.mockRejectedValueOnce(mockError);

    await expect(getAllUniversities()).rejects.toThrow(mockError);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('Error fetching universities'),
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });
});
