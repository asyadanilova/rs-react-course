import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { searchUniversities } from './searchUniversities';
import { makeApiRequest } from './makeApiRequest';

import { basicMockUniversities } from '../test-utils/mocks/mockData';

vi.mock('./makeApiRequest', () => ({
  makeApiRequest: vi.fn(),
}));

const mockedMakeApiRequest = makeApiRequest as Mock;

describe('searchUniversities', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should call makeApiRequest with the correct endpoint and return data on success', async () => {
    mockedMakeApiRequest.mockResolvedValueOnce(basicMockUniversities);

    const country = 'USA';
    const result = await searchUniversities(country);

    expect(makeApiRequest).toHaveBeenCalledWith('/search?&country=USA');
    expect(result).toEqual(basicMockUniversities);
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
