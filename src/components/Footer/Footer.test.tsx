import { it, expect, describe } from 'vitest';
import { Footer } from './Footer';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('Should render current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const testedPhrase = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'p' &&
        content.includes(currentYear.toString())
      );
    });
    expect(testedPhrase).toBeInTheDocument();
  });

  it('Should render link to GitHub Profile', () => {
    render(<Footer />);
    const link = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'a' && content.includes('Asya');
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/AsyaDanilova');
  });
});
