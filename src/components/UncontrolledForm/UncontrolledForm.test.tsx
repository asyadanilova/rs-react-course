import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UncontrolledForm from './UncontrolledForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../utils/types', () => ({
    schema: {
        safeParse: vi.fn((data) => {
            if (!data.name) {
                return {
                    success: false,
                    error: {
                        issues: [{ path: ['name'], message: 'Name is required' }]
                    }
                };
            }
            if (!data.country) {
                return {
                    success: false,
                    error: {
                        issues: [{ path: ['country'], message: 'Country is required' }]
                    }
                };
            }
            return { success: true, data };
        }
        )
    },
    IForm: {}
}));

const mockStore = configureStore([]);
const countries = ['USA', 'Canada', 'Mexico', 'Germany'];

function renderWithStore(onSubmitSuccess = vi.fn()) {
    const store = mockStore({
        countries: { countries }
    });
    return render(
        <Provider store={store}>
            <UncontrolledForm onSubmitSuccess={onSubmitSuccess} />
        </Provider>
    );
}

describe('UncontrolledForm', () => {
    it('renders all form fields', () => {
        renderWithStore();
        expect(screen.getByText(/Uncontrolled Form/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Age:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Password:$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirm Password:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Gender:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/I agree to the terms and conditions/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Country:/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    });

    it('shows country autocomplete dropdown when typing', () => {
        renderWithStore();
        const countryInput = screen.getByPlaceholderText(/Type to search/i);
        fireEvent.change(countryInput, { target: { value: 'ca' } });
        expect(screen.getByText('Canada')).toBeInTheDocument();
    });

    it('selects country from dropdown', () => {
        renderWithStore();
        const countryInput = screen.getByPlaceholderText(/Type to search/i);
        fireEvent.change(countryInput, { target: { value: 'mex' } });
        const option = screen.getByText('Mexico');
        fireEvent.click(option);
        expect(countryInput).toHaveValue('Mexico');
    });

    it('shows validation errors on submit', async () => {
        renderWithStore();
        fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
        });
    });

    it('calls onSubmitSuccess with valid data', async () => {
        const onSubmitSuccess = vi.fn();
        renderWithStore(onSubmitSuccess);
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText(/Type to search/i), { target: { value: 'USA' } });
        fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
        await waitFor(() => {
            expect(onSubmitSuccess).toHaveBeenCalledWith(
                expect.objectContaining({ name: 'John', country: 'USA' })
            );
        });
    });

    it('resets form fields and errors on reset', async () => {
        renderWithStore();
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: '' } });
        fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
        });
        fireEvent.click(screen.getByRole('button', { name: /Reset/i }));
        expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
        expect(screen.getByLabelText(/Name:/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Type to search/i)).toHaveValue('');
    });
});