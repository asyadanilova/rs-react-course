import type { Co2Data } from '../utils/types';

let cachedData: Co2Data | null = null;

const createResource = (promise: Promise<Co2Data>) => {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: Co2Data | null;

  const suspender = promise.then(
    (r: Co2Data) => {
      status = 'success';
      result = r;
    },
    (e: null) => {
      status = 'error';
      result = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

const fetchCo2Data = async (): Promise<Co2Data> => {
  if (cachedData) {
    return cachedData;
  }
  const API_URL =
    'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json';
  console.log(
    'Fetching 100MB CO2 data file... This will happen only once. Hopefully.'
  );
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch CO2 data: ${response.statusText}`);
  }
  const data: Co2Data = await response.json();
  cachedData = data;
  return data;
};

export const co2DataResource = createResource(fetchCo2Data());
