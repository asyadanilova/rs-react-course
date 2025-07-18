import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { searchUniversities } from './searchUniversities';
import { makeApiRequest } from './makeApiRequest';

vi.mock('./makeApiRequest', () => ({
  makeApiRequest: vi.fn(),
}));

const mockedMakeApiRequest = makeApiRequest as Mock;

describe('searchUniversities', () => {
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

    const country = 'USA';
    const result = await searchUniversities(country);

    expect(makeApiRequest).toHaveBeenCalledWith('/search?&country=USA');
    expect(result).toEqual(mockUniversities);
  });

  it('should log an error and throw when makeApiRequest throws an error', async () => {
    const mockError = new Error('Network error');

    const consoleErrorSpy = vi
      .spyOn(console, 'log')
      .mockImplementation(() => {});
    mockedMakeApiRequest.mockRejectedValueOnce(mockError);

    await expect(searchUniversities('USA')).rejects.toThrow(mockError);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('Error fetching universities for USA:'),
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });
});
