import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MainContainer } from './MainContainer';

vi.mock('../SearchContainer/SearchContainer', () => ({
  SearchContainer: () => <div data-testid="search-container" />,
}));

vi.mock('../ResultsContainer/ResultsContainer', () => ({
  ResultsContainer: () => <div data-testid="results-container" />,
}));

describe('MainContainer', () => {
  it('Should render the app description', () => {
    render(<MainContainer />);
    const description = screen.getByText(
      /Discover universities around the world!/i
    );
    expect(description).toBeInTheDocument();
  });

  it('Should render the graduation image', () => {
    render(<MainContainer />);
    const img = screen.getByAltText('graduation');
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('graduation.png')
    );
  });

  it('Should render the SearchContainer component', () => {
    render(<MainContainer />);
    const seacrhContainer = screen.getByTestId('search-container');
    expect(seacrhContainer).toBeInTheDocument();
  });
});
