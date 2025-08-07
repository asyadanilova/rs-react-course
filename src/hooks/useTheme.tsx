import { useContext } from 'react';
import { ThemeContext } from '../utils/consts';

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};
