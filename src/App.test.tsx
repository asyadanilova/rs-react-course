import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';

vi.mock('./components/MainContainer/MainContainer', () => ({
  MainContainer: () => <div data-testid="main-container">Mocked Container</div>,
}));
vi.mock('./components/Header/Header', () => ({
  Header: () => <div role="heading"></div>,
}));
vi.mock('./components/Footer/Footer', () => ({
  Footer: () => <div role="contentinfo"></div>,
}));

describe('App Component', () => {
  it('renders Header, MainContainer, and Footer without errors', async () => {
    const { default: App } = await import('./App');
    render(<App />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders fallback UI when an error is thrown', async () => {
    vi.resetModules();
    vi.doMock('./components/MainContainer/MainContainer', () => {
      const ThrowError = () => {
        throw new Error('Testing ErrorBoundary');
      };
      return { MainContainer: ThrowError };
    });

    const { default: App } = await import('./App');
    render(<App />);

    expect(
      screen.getByText('Something went wrong in your application!')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /reload app/i })
    ).toBeInTheDocument();
  });

  it('reloads the page when clicking the reload button in fallback UI', async () => {
    vi.resetModules();

    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        reload: vi.fn(),
      },
    });

    vi.doMock('./components/MainContainer/MainContainer', () => {
      const ThrowError = () => {
        throw new Error('Testing ErrorBoundary');
      };
      return { MainContainer: ThrowError };
    });

    const { default: App } = await import('./App');
    render(<App />);

    const reloadButton = screen.getByRole('button', { name: /reload app/i });
    fireEvent.click(reloadButton);

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
