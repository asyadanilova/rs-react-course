type RequestBody =
  | Record<string, unknown>
  | unknown[]
  | string
  | number
  | boolean
  | null;

export async function makeApiRequest<T>(
  endpoint: string,
  method: string = 'GET',
  body?: RequestBody
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };

  const requestOptions: RequestInit = {
    method,
    headers,
  };

  const apiUrl = 'http://universities.hipolabs.com';

  if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${apiUrl}${endpoint}`, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API request failed: ${response.status} - ${errorText}`);
      throw new Error(`API request failed: ${response.status} - ${errorText}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`Error API request ${endpoint}:`, error);
    throw error;
  }
}
