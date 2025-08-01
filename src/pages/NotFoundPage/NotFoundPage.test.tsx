import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { describe, it, expect } from 'vitest';

describe('NotFoundPage', () => {
  it('renders 404 heading and message', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '404 - Page Not Found'
    );
    expect(
      screen.getByText(/Oops! The page you.*does not exist/i)
    ).toBeInTheDocument();
  });

  it('renders the not found image', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('renders a link to home', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /go back to home/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders a button wrapping the home link', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    const link = screen.getByRole('link', { name: /go back to home/i });
    expect(button).toContainElement(link);
  });
});
