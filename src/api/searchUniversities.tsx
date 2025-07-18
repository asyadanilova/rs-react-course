import { makeApiRequest } from './makeApiRequest';

export async function searchUniversities(
  country: string
): Promise<University[]> {
  const endpoint = `/search?&country=${country}`;
  try {
    return await makeApiRequest(endpoint);
  } catch (error) {
    console.log(`Error fetching universities for ${country}:`, error);
    throw error;
  }
}
