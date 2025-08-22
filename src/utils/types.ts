import type { Country } from './consts';

export interface CountryDataPayload {
  iso_code?: string;
  data: Country[];
}

export type CountryPayload = {
  iso_code?: string;
  data: Array<{
    year: number;
    population?: number;
    co2?: number;
    co2_per_capita?: number;
  }>;
};

export type DataRow = {
  [key: string]: string | number;
};

export interface CountryTableProps {
  data: DataRow[];
}

export type CountryRowData = {
  country: string;
  iso_code: string;
  population: number | 'N/A';
  co2: number | 'N/A';
  co2_per_capita: number | 'N/A';
};

export interface CountryRowProps {
  rowData: CountryRowData;
}

export interface ColumnSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  allColumns: string[];
  selectedColumns: string[];
  onColumnToggle: (column: string) => void;
}

export interface ControlsProps {
  onSearch: (term: string) => void;
  onSort: (key: string) => void;
  onShowColumnModal: () => void;
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export type Co2Data = Record<string, CountryDataPayload>;
