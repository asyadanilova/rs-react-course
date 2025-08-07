import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { render } from '@testing-library/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

vi.mock('./App', () => ({
  default: () => <div data-testid="app">Mock App</div>,
}));
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

describe('main.tsx', () => {
  let originalGetElementById: typeof document.getElementById;
  beforeEach(() => {
    vi.clearAllMocks();
    originalGetElementById = document.getElementById;
    const existingRoot = document.getElementById('root');
    if (existingRoot) {
      existingRoot.remove();
    }
  });

  afterEach(() => {
    document.getElementById = originalGetElementById;
    document.body.innerHTML = '';
  });

  it('renders the App component wrapped in BrowserRouter and StrictMode', () => {
    const { getByTestId } = render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );

    expect(getByTestId('app')).toBeInTheDocument();
  });

  it('calls createRoot with the correct element and renders the app', async () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    await import('./main');

    const createRootMock = vi.mocked(createRoot);
    expect(createRootMock).toHaveBeenCalledWith(rootElement);

    const mockRoot = createRootMock.mock.results[0].value;
    expect(mockRoot.render).toHaveBeenCalledWith(expect.anything());
  });

  it('does not render anything when root element is null', async () => {
    document.getElementById = vi.fn().mockReturnValue(null);

    await import('./main');

    expect(createRoot).not.toHaveBeenCalled();
  });
});
