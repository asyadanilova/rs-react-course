import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi, expect, afterEach } from 'vitest';

vi.mock('./components/MainContainer/MainContainer', () => ({
  MainContainer: () => <div data-testid="main-container">Mocked Container</div>,
}));
vi.mock('./components/Header/Header', () => ({
  Header: () => <div role="heading">Mocked Header</div>,
}));
vi.mock('./components/Footer/Footer', () => ({
  Footer: () => <div role="contentinfo">Mocked Footer</div>,
}));
vi.mock('./components/About/About', () => ({
  About: () => <div data-testid="about-page">Mocked About Page</div>,
}));
vi.mock('./components/NotFoundPage/NotFoundPage', () => ({
  NotFoundPage: () => (
    <div data-testid="not-found-page">Mocked Not Found Page</div>
  ),
}));

describe('App Component', () => {
  afterEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('renders Header, MainContainer, and Footer without errors', async () => {
    const { default: App } = await import('./App');
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading').textContent).toBe('Mocked Header');
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo').textContent).toBe('Mocked Footer');
  });

  it('renders fallback UI when an error is thrown in MainContainer', async () => {
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

  it('reloads correctly if fallback UI handles multiple errors', async () => {
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
        throw new Error('Mocked MainContainer Error');
      };
      return { MainContainer: ThrowError };
    });

    vi.doMock('./components/Header/Header', () => {
      const ThrowError = () => {
        throw new Error('Mocked Header Error');
      };
      return { Header: ThrowError };
    });

    const { default: App } = await import('./App');
    render(<App />);
    expect(
      screen.getByText('Something went wrong in your application!')
    ).toBeInTheDocument();

    const reloadButton = screen.getByRole('button', { name: /reload app/i });
    fireEvent.click(reloadButton);

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
