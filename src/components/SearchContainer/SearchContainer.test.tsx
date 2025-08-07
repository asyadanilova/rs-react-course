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

  it('updates input value when user types', () => {
    render(<SearchContainer />);
    const input = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'harvard' } });

    expect(input.value).toBe('harvard');
  });

  it('saves normalized search term to localStorage when search button is clicked', () => {
    render(<SearchContainer />);
    const input = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: '  UNITED STATES  ' } });
    fireEvent.click(button);

    expect(localStorage.getItem('searchTerm')).toBe('united states');
  });

  it('preserves localStorage value after search when component re-renders', () => {
    const { rerender } = render(<SearchContainer />);
    const input = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'germany' } });
    fireEvent.click(button);

    rerender(<SearchContainer />);

    const newInput = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;
    expect(newInput.value).toBe('germany');
    expect(localStorage.getItem('searchTerm')).toBe('germany');
  });

  it('handles empty search term correctly', () => {
    render(<SearchContainer />);
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.click(button);

    expect(localStorage.getItem('searchTerm')).toBe('');
  });

  it('trims whitespace from search term before saving', () => {
    render(<SearchContainer />);
    const input = screen.getByPlaceholderText(
      'Enter your request...'
    ) as HTMLInputElement;
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: '   france   ' } });
    fireEvent.click(button);

    expect(localStorage.getItem('searchTerm')).toBe('france');
  });
});
