import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import { ResultsContainer } from './ResultsContainer';
import { getAllUniversities } from '../../api/getAllUniversities';

const mockedGetAllUniversities = getAllUniversities as Mock;
const mockedSearchUniversities = getAllUniversities as Mock;

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
    render(<ResultsContainer />);
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
    const mockUniversities: University[] = [
      {
        domains: ['harvard.edu'],
        country: 'USA',
        stateProvince: null,
        name: 'Harvard University',
        web_pages: ['https://www.harvard.edu'],
        alpha_two_code: 'US',
      },
      {
        domains: ['ox.ac.uk'],
        country: 'United Kingdom',
        stateProvince: null,
        name: 'Oxford University',
        web_pages: ['https://www.ox.ac.uk'],
        alpha_two_code: 'UK',
      },
    ];
    mockedGetAllUniversities.mockResolvedValueOnce(mockUniversities);

    await act(async () => {
      render(<ResultsContainer />);
    });

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

  it('Should render fallback when there is no data', async () => {
    mockedGetAllUniversities.mockResolvedValueOnce([]);

    render(<ResultsContainer />);
    await waitFor(() => {
      const noDataMessage = screen.getByText(
        /No universities available to display/i
      );
      expect(noDataMessage).toBeInTheDocument();
    });
    const noDataImage = screen.getByAltText('no-data');
    expect(noDataImage).toBeInTheDocument();
  });

  it('Calls fetchUniversities when searchTermUpdated is triggered', async () => {
    const fetchUniversitiesSpy = vi.spyOn(
      ResultsContainer.prototype,
      'fetchUniversities'
    );

    render(<ResultsContainer />);
    const event = new Event('searchTermUpdated');
    window.dispatchEvent(event);
    expect(fetchUniversitiesSpy).toHaveBeenCalled();

    fetchUniversitiesSpy.mockRestore();
  });

  it('Should set error and throw when getAllUniversities fails', async () => {
    const mockedError = new Error('Test error for getAllUniversities');
    mockedGetAllUniversities.mockRejectedValueOnce(mockedError);

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await act(async () => {
      render(<ResultsContainer />);
    });

    await waitFor(() => {
      expect(
        screen.getByText('Error: Test error for getAllUniversities')
      ).toBeInTheDocument();
    });
    consoleErrorSpy.mockRestore();
  });

  it('Should handle failure in searchUniversities', async () => {
    global.localStorage.setItem('searchTerm', 'test search term');

    const mockedError = new Error('SearchTerm Fetch Error');
    mockedSearchUniversities.mockRejectedValueOnce(mockedError);

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await act(async () => {
      render(<ResultsContainer />);
    });
    expect(
      screen.getByText(/No universities available to display/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText('no-data')).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });
});
