import { describe, it, expect, vi, afterEach, Mock, beforeEach } from 'vitest';
import { makeApiRequest } from './makeApiRequest';

import { basicMockUniversities } from '../test-utils/mocks/mockData';

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
    mockedMakeApiRequest.mockResolvedValueOnce(basicMockUniversities);

    const result = await getAllUniversities();

    expect(makeApiRequest).toHaveBeenCalledWith('/search?&offset=1&limit=9');
    expect(result).toEqual(basicMockUniversities);
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
