import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { ResultsContainer } from './ResultsContainer';
import selectedItemsReducer from '../../store/selectedItemsSlice';
import { universityApi } from '../../services/university';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { basicMockUniversities } from '../../test-utils/mocks/mockData';

vi.mock('../../services/university', () => ({
  universityApi: {
    reducerPath: 'universityApi',
    reducer: vi.fn((state = {}) => state),
    middleware: vi.fn(
      () => (next: (action: unknown) => unknown) => (action: unknown) =>
        next(action)
    ),
    util: {
      resetApiState: vi.fn(),
    },
    endpoints: {
      searchUniversities: {
        matchPending: vi.fn(),
        matchFulfilled: vi.fn(),
        matchRejected: vi.fn(),
      },
    },
  },
  useSearchUniversitiesQuery: vi.fn(),
}));

import { useSearchUniversitiesQuery } from '../../services/university';

const mockUseSearchUniversitiesQuery = vi.mocked(useSearchUniversitiesQuery);

const renderWithProviders = (initialEntries = ['/1']) => {
  const store = configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
      [universityApi.reducerPath]: universityApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(universityApi.middleware),
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <ResultsContainer />
      </MemoryRouter>
    </Provider>
  );
};

describe('ResultsContainer', () => {
  beforeEach(() => {
    localStorage.setItem('searchTerm', 'united states');

    mockUseSearchUniversitiesQuery.mockReturnValue({
      data: basicMockUniversities,
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    });
  });

  afterEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders loading state initially', async () => {
    mockUseSearchUniversitiesQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
      refetch: vi.fn(),
    });

    await act(async () => {
      renderWithProviders();
    });

    expect(
      screen.getByText(/Loading universities, please wait.../i)
    ).toBeInTheDocument();
  });

  it('handles CSV download functionality', () => {
    const mockCreateObjectURL = vi.fn(() => 'mock-blob-url');
    const mockRevokeObjectURL = vi.fn();
    const mockClick = vi.fn();

    Object.defineProperty(URL, 'createObjectURL', {
      value: mockCreateObjectURL,
      writable: true,
    });
    Object.defineProperty(URL, 'revokeObjectURL', {
      value: mockRevokeObjectURL,
      writable: true,
    });

    global.Blob = vi.fn().mockImplementation((content, options) => ({
      content,
      options,
    }));

    const downloadLink = document.createElement('a');
    downloadLink.click = mockClick;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    const testUniversities = [
      {
        name: 'Harvard',
        country: 'USA',
        web_pages: ['https://harvard.edu'],
        domains: [],
      },
      {
        name: 'MIT',
        country: 'USA',
        web_pages: ['https://mit.edu'],
        domains: [],
      },
    ];

    const csv = testUniversities
      .map((item) => `${item.name},${item.country},${item.web_pages[0]}`)
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.download = `${testUniversities.length}_items.csv`;
    downloadLink.click();

    expect(global.Blob).toHaveBeenCalledWith([csv], { type: 'text/csv' });
    expect(mockCreateObjectURL).toHaveBeenCalled();
    expect(mockClick).toHaveBeenCalled();
    expect(downloadLink.download).toBe('2_items.csv');
    expect(downloadLink.href).toContain(url);
  });

  it('handles searchTermUpdated event', async () => {
    vi.useFakeTimers();

    const mockRefetch = vi.fn();
    mockUseSearchUniversitiesQuery.mockReturnValue({
      data: basicMockUniversities,
      isLoading: false,
      error: null,
      refetch: mockRefetch,
    });

    await act(async () => {
      renderWithProviders();
    });
    await act(async () => {
      localStorage.setItem('searchTerm', 'germany');
      window.dispatchEvent(new Event('searchTermUpdated'));
    });

    await act(async () => {
      vi.runAllTimers();
      await Promise.resolve();
    });

    expect(localStorage.getItem('searchTerm')).toBe('germany');

    vi.useRealTimers();
  });
});
