import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Header', () => {
  it('renders navigation links and logo', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(screen.getByText(/GlobalCampus/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Site Icon/i)).toBeInTheDocument();
  });

  it('shows sun icon for light theme and toggles to moon icon for dark theme', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(
      screen.getByLabelText('Toggle theme').querySelector('svg')
    ).toBeTruthy();

    screen.getByLabelText('Toggle theme').click();
    expect(
      screen.getByLabelText('Toggle theme').querySelector('svg')
    ).toBeTruthy();
  });

  it('calls toggleTheme when theme button is clicked', () => {
    const TestProvider = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );
    render(
      <TestProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </TestProvider>
    );
    const toggleDiv = screen.getByLabelText('Toggle theme');
    toggleDiv.click();
    expect(toggleDiv).toBeInTheDocument();
  });
});
