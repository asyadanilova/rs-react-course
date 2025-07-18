import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { SearchContainer } from './SearchContainer';

describe('SearchContainer Component', () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('renders the search input with correct placeholder', () => {
    render(<SearchContainer />);

    const input = screen.getByPlaceholderText('Enter your request...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('search-input');
  });

  it('renders the search button', () => {
    render(<SearchContainer />);

    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
  });

  it('renders the ErrorButton component', () => {
    render(<SearchContainer />);

    const errorButton = screen.getByRole('button', { name: /error button/i });
    expect(errorButton).toBeInTheDocument();
  });

  it('updates localStorage when typing into the input', () => {
    render(<SearchContainer />);
    const input = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Harvard' } });

    expect(localStorage.getItem('searchTerm')).toBe('harvard');
  });

  it('dispatches the searchTermUpdated event when search button is clicked', () => {
    const dispatchEventSpy = vi.spyOn(window, 'dispatchEvent');

    render(<SearchContainer />);
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.click(button);

    expect(dispatchEventSpy).toHaveBeenCalledWith(expect.any(Event));
    expect(dispatchEventSpy.mock.calls[0][0].type).toBe('searchTermUpdated');
  });

  it('populates the input with localStorage value on initial render', () => {
    localStorage.setItem('searchTerm', 'oxford');

    render(<SearchContainer />);
    const input = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;

    expect(input.value).toBe('oxford');
  });
});
