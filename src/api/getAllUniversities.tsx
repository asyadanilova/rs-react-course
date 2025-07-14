import { makeApiRequest } from './makeApiRequest';

export async function getAllUniversities(): Promise<University[]> {
  const endpoint = '/search?&offset=1&limit=9';
  try {
    return makeApiRequest(endpoint);
  } catch (error) {
    console.error('Error fetching universities', error);
    throw error;
  }
}
