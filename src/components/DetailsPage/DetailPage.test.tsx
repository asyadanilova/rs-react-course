import { describe, it, expect, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DetailsPage } from './DetailsPage';
import * as router from 'react-router-dom';
import { basicMockUniversities } from '../../test-utils/mocks/mockData';

const mockOutletContext = {
  universities: basicMockUniversities,
  handleCloseDetailsPage: vi.fn(),
};

vi.mock('react-router-dom', async (importOriginal) => {
  const original = await importOriginal();
  return {
    ...(typeof original === 'object' ? original : {}),
    useOutletContext: () => mockOutletContext,
    useParams: () => ({ id: 'harvard.edu' }),
  };
});

describe('DetailsPage', () => {
  it('Should display university details when valid data is provided', async () => {
    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    await act(async () => {
      expect(screen.getByText(/Harvard University/i)).toBeInTheDocument();
      const websiteLink = screen.getByText(/https:\/\/www.harvard.edu/i);
      expect(websiteLink).toBeInTheDocument();
      expect(websiteLink).toHaveAttribute('href', 'https://www.harvard.edu');
    });
  });

  it('Should display fallback if there is no universities data', async () => {
    vi.spyOn(router, 'useOutletContext').mockReturnValue({
      universities: [],
      handleCloseDetailsPage: vi.fn(),
    });
    vi.spyOn(router, 'useParams').mockReturnValue({ id: 'harvard.edu' });

    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    await act(async () => {
      expect(
        screen.getByText(/No university data available/i)
      ).toBeInTheDocument();
    });
  });

  it('Should display fallback if universities is null', async () => {
    vi.spyOn(router, 'useOutletContext').mockReturnValue({
      universities: null,
      handleCloseDetailsPage: vi.fn(),
    });
    vi.spyOn(router, 'useParams').mockReturnValue({ id: 'harvard.edu' });

    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    await act(async () => {
      expect(
        screen.getByText(/No university data available/i)
      ).toBeInTheDocument();
    });
  });

  it('Should call handleCloseDetailsPage when close button is clicked', async () => {
    const mockCloseFunction = vi.fn();
    vi.spyOn(router, 'useOutletContext').mockReturnValue({
      universities: basicMockUniversities,
      handleCloseDetailsPage: mockCloseFunction,
    });
    vi.spyOn(router, 'useParams').mockReturnValue({ id: 'harvard.edu' });

    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    const closeButton = screen.getByText(/Close/i);

    await act(async () => {
      closeButton.click();
    });

    expect(mockCloseFunction).toHaveBeenCalledTimes(1);
  });

  it('Should display fallback if id is missing', async () => {
    vi.spyOn(router, 'useOutletContext').mockReturnValue({
      universities: basicMockUniversities,
      handleCloseDetailsPage: vi.fn(),
    });
    vi.spyOn(router, 'useParams').mockReturnValue({ id: undefined });

    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    await act(async () => {
      expect(
        screen.getByText(/No university data available/i)
      ).toBeInTheDocument();
    });
  });

  it('Should display fallback if no matching university is found', async () => {
    vi.spyOn(router, 'useOutletContext').mockReturnValue({
      universities: basicMockUniversities,
      handleCloseDetailsPage: vi.fn(),
    });
    vi.spyOn(router, 'useParams').mockReturnValue({ id: 'nonexistent.edu' });

    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    await act(async () => {
      expect(screen.getByText(/No university found/i)).toBeInTheDocument();
    });
  });
});
