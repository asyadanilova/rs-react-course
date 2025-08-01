import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

const TestComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
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

  it('throws error if useTheme is used outside ThemeProvider', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const BrokenComponent = () => {
      useTheme();
      return <div />;
    };
    expect(() => render(<BrokenComponent />)).toThrow(
      /useTheme must be used within ThemeProvider/
    );
    errorSpy.mockRestore();
  });
});
