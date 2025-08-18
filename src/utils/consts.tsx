import { createContext } from 'react';
import en from '../../messages/en.json';
import ru from '../../messages/ru.json';

export const ITEM_PER_PAGE = 15;
export type Theme = 'light' | 'dark';
export const MESSAGES: Record<string, typeof en | typeof ru> = {
  en,
  ru,
};

export const SUPPORTED_LOCALES = ['en', 'ru'];

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export interface University {
  domains: string[];
  country: string;
  stateProvince: string | null;
  name: string;
  web_pages: string[];
  alpha_two_code: string;
}

export interface OutletContext {
  universities: University[];
  handleCloseDetailsPage: () => void;
}
