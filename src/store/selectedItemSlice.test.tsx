import { describe, expect, it } from 'vitest';
import selectedItemsReducer, {
  selectItem,
  unselectItem,
  unselectAll,
} from './selectedItemsSlice';

describe('selectedItemsSlice reducer', () => {
  const mockUniversity: University = {
    domains: ['harvard.edu'],
    country: 'USA',
    stateProvince: null,
    name: 'Harvard University',
    web_pages: ['https://www.harvard.edu'],
    alpha_two_code: 'US',
  };

  it('should handle selectItem', () => {
    const initialState = { items: [] };
    const newState = selectedItemsReducer(
      initialState,
      selectItem(mockUniversity)
    );

    expect(newState.items).toEqual([mockUniversity]);
  });

  it('should handle unselectItem', () => {
    const initialState = { items: [mockUniversity] };
    const newState = selectedItemsReducer(
      initialState,
      unselectItem('harvard.edu')
    );

    expect(newState.items).toEqual([]);
  });

  it('should handle unselectAll', () => {
    const initialState = { items: [mockUniversity] };
    const newState = selectedItemsReducer(initialState, unselectAll());

    expect(newState.items).toEqual([]);
  });
});
