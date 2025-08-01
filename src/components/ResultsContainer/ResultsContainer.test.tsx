import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import { ResultsContainer } from './ResultsContainer';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import * as useLocalStorageModule from '../../hooks/useLocalStorage';
import {
  basicMockUniversities,
  paginatedMockUniversities,
  singleMockUniversity,
} from '../../test-utils/mocks/mockData';
import { getAllUniversities } from '../../api/getAllUniversities';

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
const mockedUseLocalStorage = vi.spyOn(
  useLocalStorageModule,
  'useLocalStorage'
);

describe('ResultsContainer', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should render loader initially', async () => {
    mockedUseLocalStorage.mockReturnValue(['', vi.fn()]);
    mockedGetAllUniversities.mockResolvedValueOnce([]);

    render(
      <MemoryRouter initialEntries={['/1']}>
        <ResultsContainer />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Loading universities, please wait/i)
    ).toBeInTheDocument();
  });
});

it('Should render universities if data is provided', async () => {
  mockedUseLocalStorage.mockReturnValue(['', vi.fn()]);
  mockedGetAllUniversities.mockResolvedValue(basicMockUniversities);

  render(
    <MemoryRouter initialEntries={['/1']}>
      <ResultsContainer />
    </MemoryRouter>
  );

  await waitFor(() => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings[0]).toHaveTextContent(/Harvard University/i);
  });
});

it('Should paginate universities and display correct page', async () => {
  mockedUseLocalStorage.mockReturnValue(['', vi.fn()]);
  mockedGetAllUniversities.mockResolvedValue(paginatedMockUniversities);

  const history = createMemoryHistory({ initialEntries: ['/1'] });
  render(
    <Router location={history.location} navigator={history}>
      <ResultsContainer />
    </Router>
  );

  await waitFor(() => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBeGreaterThan(0);
    headings.forEach((h, index) =>
      expect(h).toHaveTextContent(`University ${index}`)
    );
    expect(
      screen.getByText((content) => content.includes('Page'))
    ).toHaveTextContent('Page 1 of 2');
  });

  const nextButton = screen.getByRole('button', { name: /next/i });
  await act(async () => {
    nextButton.click();
  });

  expect(history.location.pathname).toBe('/2');
});

it('Should render fallback when there is no data', async () => {
  mockedUseLocalStorage.mockReturnValue(['', vi.fn()]);
  mockedGetAllUniversities.mockResolvedValue([]);

  render(
    <MemoryRouter initialEntries={['/1']}>
      <ResultsContainer />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(
      screen.getByText(/No universities available to display/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/no-data/i)).toBeInTheDocument();
  });
});

it('Should update the URL when selecting a university for details', async () => {
  mockedUseLocalStorage.mockReturnValue(['', vi.fn()]);
  mockedGetAllUniversities.mockResolvedValue(singleMockUniversity);

  const history = createMemoryHistory({ initialEntries: ['/1'] });
  render(
    <Router location={history.location} navigator={history}>
      <ResultsContainer />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText(/Harvard University/i)).toBeInTheDocument();
  });

  await act(async () => {
    screen.getByText(/Harvard University/i).click();
  });

  expect(history.location.pathname).toBe('/1/harvard.edu');
});

it('Should handle errors gracefully', async () => {
  mockedUseLocalStorage.mockReturnValue(['', vi.fn()]);
  const error = new Error('API Error');
  mockedGetAllUniversities.mockRejectedValue(error);

  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  render(
    <MemoryRouter initialEntries={['/1']}>
      <ResultsContainer />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(
      screen.getByText((content) => content.includes('API Error'))
    ).toBeInTheDocument();
  });

  consoleSpy.mockRestore();
});
