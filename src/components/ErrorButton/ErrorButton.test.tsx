import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorButton } from './ErrorButton';
import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = () => <div role="alert">Something went wrong!</div>;

describe('ErrorButton', () => {
  it('Should render the button with correct text', () => {
    render(<ErrorButton />);
    const button = screen.getByRole('button', { name: /Error Button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
  });

  it('Should throw an error when the button is clicked', () => {
    render(
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <ErrorButton />
      </ErrorBoundary>
    );
    const button = screen.getByRole('button', { name: /Error Button/i });
    fireEvent.click(button);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Something went wrong!');
  });
});
