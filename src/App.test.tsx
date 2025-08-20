import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

vi.mock('react-dom', async () => {
    const actual = await vi.importActual<any>('react-dom');
    return {
        ...actual,
        createPortal: (node: any) => node,
    };
});

vi.mock('./components/Form/Form', () => ({
    default: ({ onSubmitSuccess }: any) => (
        <div>
            <h1>Controlled</h1>
            <button onClick={() => onSubmitSuccess({ name: 'Test', email: 'test@example.com' })}>
                Submit Mock Form
            </button>
        </div>
    ),
}));

vi.mock('./components/UncontrolledForm/UncontrolledForm', () => ({
    default: ({ onSubmitSuccess }: any) => (
        <div>
            <h1>Uncontrolled</h1>
            <button onClick={() => onSubmitSuccess({ name: 'Uncontrolled', email: 'uncontrolled@example.com' })}>
                Submit Mock Uncontrolled Form
            </button>
        </div>
    ),
}));

describe('App', () => {
    beforeEach(() => {
        const modalRoot = document.createElement('div');
        modalRoot.setAttribute('id', 'modal-root');
        document.body.appendChild(modalRoot);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders title and buttons', () => {
        render(<App />);
        expect(screen.getByText(/Complete Forms/i)).toBeInTheDocument();
        expect(screen.getByText(/Open Uncontrolled Form/i)).toBeInTheDocument();
        expect(screen.getByText(/Open Controlled Form/i)).toBeInTheDocument();
    });

    it('opens uncontrolled form modal when button is clicked', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Open Uncontrolled Form/i));
        expect(screen.getByText(/^Uncontrolled$/i)).toBeInTheDocument();
    });

    it('opens controlled form modal when button is clicked', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Open Controlled Form/i));
        expect(screen.getByText(/^Controlled$/i)).toBeInTheDocument();
    });

    it('closes modal when close button is clicked', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Open Controlled Form/i));
        const closeBtn = screen.getAllByRole('button').find(btn => btn.querySelector('.bi-x-circle'));
        expect(closeBtn).toBeInTheDocument();
        if (closeBtn) {
            fireEvent.click(closeBtn.parentElement!);
        }
        expect(screen.queryByText(/Name/i)).not.toBeInTheDocument();
    });

    it('shows Results after form submission', async () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Open Controlled Form/i));

        fireEvent.click(screen.getByText(/Submit Mock Form/i));

        await waitFor(() => {
            expect(screen.getByText(/Form Results/i)).toBeInTheDocument();
            expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
        });
    });

    it('shows Results after uncontrolled form submission', async () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Open Uncontrolled Form/i));
        fireEvent.click(screen.getByText(/Submit Mock Uncontrolled Form/i));

        await waitFor(() => {
            expect(screen.getByText(/Form Results/i)).toBeInTheDocument();
            expect(screen.getByText(/uncontrolled@example.com/i)).toBeInTheDocument();
        });
    });
});