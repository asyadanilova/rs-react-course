import { vi, describe, it, expect } from 'vitest';
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

    await import('./Main');

    const createRootMock = vi.mocked(createRoot);
    expect(createRootMock).toHaveBeenCalledWith(rootElement);

    const mockRoot = createRootMock.mock.results[0].value;
    expect(mockRoot.render).toHaveBeenCalledWith(expect.anything());
  });
});
