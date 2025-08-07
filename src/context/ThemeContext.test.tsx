import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from '../hooks/useTheme';

const TestComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

const ThemeConsumer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="current-theme">Current theme: {theme}</p>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

describe('ThemeContext', () => {
  it('provides default theme as light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('toggles theme between light and dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const themeSpan = screen.getByTestId('theme');
    const toggleBtn = screen.getByText('Toggle');

    expect(themeSpan).toHaveTextContent('light');
    toggleBtn.click();
    expect(themeSpan).toHaveTextContent('light');
  });

  it('provides correct theme value to children', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent(
      'Current theme: light'
    );
  });
});
