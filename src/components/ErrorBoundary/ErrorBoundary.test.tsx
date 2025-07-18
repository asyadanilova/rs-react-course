import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';

const ThrowError = () => {
  throw new Error('Testing error for ErrorBoundary');
};
const TestChild = () => <div>Test Child</div>;

describe('ErrorBoundary', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('Should log error to the console', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('ErrorBoundary caught an error:'),
      expect.any(Error),
      expect.anything()
    );
    consoleErrorSpy.mockRestore();
  });

  it('Should render children when no error', () => {
    render(
      <ErrorBoundary>
        <TestChild />
      </ErrorBoundary>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('Should render fallback UI when error occurs', () => {
    const testFallback = (
      <div className="fallback">
        <h1>Test Error</h1>
        <button>Go back</button>
      </div>
    );
    render(
      <ErrorBoundary fallbackUI={testFallback}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.queryByText('Test Child')).not.toBeInTheDocument();
  });

  it('renders default fallbackUI if no custom fallbackUI is provided', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /reload the page/i })
    ).toBeInTheDocument();
  });
});
