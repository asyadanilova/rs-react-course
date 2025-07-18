import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { makeApiRequest } from './makeApiRequest';

global.fetch = vi.fn();
const mockedFetch = fetch as Mock;

describe('makeApiRequest', () => {
  const apiUrl = 'https://react-app-danilovaasya.netlify.app/api';

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should call fetch with the correct URL and defaults for GET requests', async () => {
    const endpoint = '/test-endpoint';
    const mockResponse = { success: true };

    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await makeApiRequest(endpoint);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    expect(result).toEqual(mockResponse);
  });

  it('should log and throw an error for a failed response', async () => {
    const endpoint = '/test-endpoint';
    const errorStatus = 500;
    const errorText = 'Internal Server Error';

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (fetch as Mock).mockResolvedValueOnce({
      ok: false,
      status: errorStatus,
      text: async () => errorText,
    });

    await expect(makeApiRequest(endpoint)).rejects.toThrow(
      `API request failed: ${errorStatus} - ${errorText}`
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `API request failed: ${errorStatus} - ${errorText}`
    );

    consoleErrorSpy.mockRestore();
  });
});
