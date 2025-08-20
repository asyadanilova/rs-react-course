import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Form component", () => {
    const onSubmitSuccess = vi.fn();

    beforeEach(() => {
        onSubmitSuccess.mockClear();
    });

    it("renders all form fields", () => {
        render(<Form onSubmitSuccess={onSubmitSuccess} />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Age$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^Password$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/I accept the terms and conditions/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Upload Image/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
    });

    it("shows validation errors on submit with empty fields", async () => {
        render(<Form onSubmitSuccess={onSubmitSuccess} />);
        fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

        await waitFor(() => {
            expect(screen.getAllByText(/required/i).length).toBeGreaterThan(0);
        });
        expect(onSubmitSuccess).not.toHaveBeenCalled();
    });

    it("submits valid form data", async () => {
        render(<Form onSubmitSuccess={onSubmitSuccess} />);

        fireEvent.change(screen.getByLabelText(/^Name$/i), { target: { value: "John" } });
        fireEvent.change(screen.getByLabelText(/^Age$/i), { target: { value: "30" } });
        fireEvent.change(screen.getByLabelText(/^Email$/i), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByLabelText(/^Password$/i), { target: { value: "Password123!" } });
        fireEvent.change(screen.getByLabelText(/^Confirm Password$/i), { target: { value: "Password123!" } });
        fireEvent.change(screen.getByLabelText(/^Gender$/i), { target: { value: "male" } });
        fireEvent.click(screen.getByLabelText(/I accept the terms and conditions/i));
        fireEvent.change(screen.getByLabelText(/^Country$/i), { target: { value: "United States" } });

        fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

        await waitFor(() => {
            expect(onSubmitSuccess).toHaveBeenCalled();
        });
    });

    it("resets the form when reset button is clicked", async () => {
        render(<Form onSubmitSuccess={onSubmitSuccess} />);
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "Jane" } });
        fireEvent.click(screen.getByRole("button", { name: /Reset/i }));
        await waitFor(() => {
            expect(screen.getByLabelText(/Name/i)).toHaveValue("");
        });
    });

    it("shows error if passwords do not match", async () => {
        render(<Form onSubmitSuccess={onSubmitSuccess} />);
        fireEvent.change(screen.getByLabelText(/^Password$/i), { target: { value: "abc123" } });
        fireEvent.change(screen.getByLabelText(/^Confirm Password$/i), { target: { value: "xyz789" } });
        fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

        await waitFor(() => {
            expect(screen.getByText(/Passwords don't match/i)).toBeInTheDocument();
        });
        expect(onSubmitSuccess).not.toHaveBeenCalled();
    });

    it("shows error if terms are not accepted", async () => {
        render(<Form onSubmitSuccess={onSubmitSuccess} />);
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByLabelText(/^Age$/i), { target: { value: "25" } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByLabelText(/^Password$/i), { target: { value: "password123" } });
        fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: "password123" } });
        fireEvent.change(screen.getByLabelText(/Country/i), { target: { value: "USA" } });
        fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

        await waitFor(() => {
            expect(screen.getByText(/terms/i)).toBeInTheDocument();
        });
        expect(onSubmitSuccess).not.toHaveBeenCalled();
    });
});