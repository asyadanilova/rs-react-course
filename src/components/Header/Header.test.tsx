import { describe, it, expect } from 'vitest';
import { Header } from './Header';
import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('Should have navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navigation = screen.getByRole('navigation');
    const navLinks = within(navigation).getAllByRole('link', { name: /.+/ });
    expect(navLinks).toHaveLength(4);
    expect(navLinks[0]).toHaveTextContent('Home');
    expect(navLinks[2]).toHaveTextContent('Login');
  });
});
