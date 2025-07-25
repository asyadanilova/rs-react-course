import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import { ResultsContainer } from './ResultsContainer';
import { getAllUniversities } from '../../api/getAllUniversities';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import {
  basicMockUniversities,
  paginatedMockUniversities,
  singleMockUniversity,
} from '../../test-utils/mocks/mockData';

const mockedGetAllUniversities = getAllUniversities as Mock;

vi.mock('../../api/getAllUniversities', () => {
  return {
    getAllUniversities: vi.fn(),
  };
});

vi.mock('../../api/searchUniversities', async (importOriginal) => {
  const original = (await importOriginal()) as Record<string, unknown>;
  return {
    ...original,
    searchUniversities: vi.fn(() => Promise.resolve([])),
  };
});

describe('ResultsContainer', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should render loader initially', async () => {
    const mockPromise = new Promise<University[]>(() => []);
    mockedGetAllUniversities.mockReturnValueOnce(mockPromise);

    render(
      <MemoryRouter>
        <ResultsContainer />
      </MemoryRouter>
    );

    const loader = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'p' &&
        content.includes('Loading universities, please wait...')
      );
    });

    expect(loader).toBeInTheDocument();
    mockPromise.catch(() => {});
  });

  it('Should render universities if data is provided', async () => {
    mockedGetAllUniversities.mockResolvedValueOnce(basicMockUniversities);

    render(
      <MemoryRouter>
        <ResultsContainer />
      </MemoryRouter>
    );

    await waitFor(() => {
      const harvard = screen.getByText((content) =>
        content.includes('Harvard University')
      );
      expect(harvard).toBeInTheDocument();
      const oxford = screen.getByText((content) =>
        content.includes('Oxford University')
      );
      expect(oxford).toBeInTheDocument();
    });
  });

  it('Should paginate universities and display correct page', async () => {
    mockedGetAllUniversities.mockResolvedValueOnce(paginatedMockUniversities);

    render(
      <MemoryRouter>
        <ResultsContainer />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Page 1 of 2/i)).toBeInTheDocument();
      const firstUniversity = screen.getByText(/University 0/i);
      const lastUniversityOnPage1 = screen.getByText(/University 14/i);
      expect(firstUniversity).toBeInTheDocument();
      expect(lastUniversityOnPage1).toBeInTheDocument();
    });

    const nextButton = screen.getByText(/Next/i);
    await act(async () => {
      nextButton.click();
    });

    await waitFor(() => {
      expect(screen.getByText(/Page 2 of 2/i)).toBeInTheDocument();

      const firstUniversityOnPage2 = screen.getByText(/University 15/i);
      const lastUniversityOnPage2 = screen.getByText(/University 29/i);
      expect(firstUniversityOnPage2).toBeInTheDocument();
      expect(lastUniversityOnPage2).toBeInTheDocument();
    });
  });

  it('Should render fallback when there is no data', async () => {
    mockedGetAllUniversities.mockResolvedValueOnce([]);

    render(
      <MemoryRouter>
        <ResultsContainer />
      </MemoryRouter>
    );

    await waitFor(() => {
      const noDataMessage = screen.getByText(
        /No universities available to display/i
      );
      expect(noDataMessage).toBeInTheDocument();
    });

    const noDataImage = screen.getByAltText('no-data');
    expect(noDataImage).toBeInTheDocument();
  });

  it('Should update the URL when selecting a university for details', async () => {
    mockedGetAllUniversities.mockResolvedValueOnce(singleMockUniversity);

    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <ResultsContainer />
      </Router>
    );

    await waitFor(() => {
      const harvard = screen.getByText(/Harvard University/i);
      expect(harvard).toBeInTheDocument();
    });

    const harvardCard = screen.getByText(/Harvard University/i);
    await act(async () => {
      harvardCard.click();
    });

    expect(history.location.search).toContain('details=harvard.edu');
  });

  it('Should handle errors gracefully', async () => {
    const mockedError = new Error('Unexpected API Failure');
    mockedGetAllUniversities.mockRejectedValueOnce(mockedError);

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <MemoryRouter>
        <ResultsContainer />
      </MemoryRouter>
    );

    await waitFor(() => {
      const errorMessage = screen.getByText(/Unexpected API Failure/i);
      expect(errorMessage).toBeInTheDocument();
    });

    consoleErrorSpy.mockRestore();
  });
});
