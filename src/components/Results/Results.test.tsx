import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Results from './Results';
import type { IForm } from '../../utils/types';

const baseData: IForm = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    password: 'password123',
    confirmPassword: 'password123',
    gender: 'male',
    terms: true,
    uploadImage: undefined,
    country: 'United States'
};

describe('Results Component', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('renders all form fields correctly', () => {
        render(<Results data={baseData} />);
        expect(screen.getByText(/Name:/i).closest('li')).toHaveTextContent('Name: John Doe');
        expect(screen.getByText(/Age:/i).closest('li')).toHaveTextContent('Age: 30');
        expect(screen.getByText(/Email:/i).closest('li')).toHaveTextContent('Email: john@example.com');
        expect(screen.getByText(/^Password:$/i).closest('li')).toHaveTextContent('Password: password123');
        expect(screen.getByText(/Confirm Password:/i).closest('li')).toHaveTextContent('Confirm Password: password123');
        expect(screen.getByText(/Gender:/i).closest('li')).toHaveTextContent('Gender: male');
        expect(screen.getByText(/Terms:/i).closest('li')).toHaveTextContent('Terms: Agreed');
    });

    it('shows "No age provided" if age is not a number', () => {
        render(<Results data={{ ...baseData, age: undefined }} />);
        expect(screen.getByText(/Age:/i).closest('li')).toHaveTextContent('Age: No age provided');
    });

    it('shows "Not Agreed" if terms is false', () => {
        render(<Results data={{ ...baseData, terms: false }} />);
        expect(screen.getByText(/Terms:/i).closest('li')).toHaveTextContent('Terms: Not Agreed');
    });

    it('shows "No file uploaded" if uploadImage is undefined', () => {
        render(<Results data={{ ...baseData, uploadImage: undefined }} />);
        expect(screen.getByText(/Image Preview:/i).closest('li')).toHaveTextContent('Image Preview:No file uploaded');
    });

    it('renders image preview if uploadImage is a File', () => {
        const file = new File(['dummy'], 'test.png', { type: 'image/png' });
        const createObjectURLMock = vi.fn(() => 'blob:test-url');
        const revokeObjectURLMock = vi.fn();
        vi.stubGlobal('URL', { createObjectURL: createObjectURLMock, revokeObjectURL: revokeObjectURLMock });

        render(<Results data={{ ...baseData, uploadImage: file }} />);
        expect(screen.getByAltText('Uploaded preview')).toHaveAttribute('src', 'blob:test-url');
        expect(createObjectURLMock).toHaveBeenCalledWith(file);
    });
});