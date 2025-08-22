export type Country = {
  code: string;
  name: string;
  capital?: string;
  region?: string;
  population?: number;
};

export const AVAILABLE_COLUMNS = [
  'population',
  'gdp',
  'co2',
  'co2_per_capita',
  'cement_co2',
  'methane',
  'oil_co2',
  'temperature_change_from_co2',
];
