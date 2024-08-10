import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser');

describe('ContactForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the form correctly', () => {
        render(<ContactForm />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
    });

    it('displays success message after successful form submission', async () => {
        emailjs.sendForm.mockResolvedValueOnce({ status: 200 });

        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, this is a test message!' } });

        fireEvent.click(screen.getByRole('button', { name: /Send/i }));

        const successMessage = await screen.findByText(/Message sent!/i);
        expect(successMessage).toBeInTheDocument();
    });

    it('displays error message on failed submission', async () => {
        emailjs.sendForm.mockRejectedValueOnce(new Error('Failed to send'));

        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, this is a test message!' } });

        fireEvent.click(screen.getByRole('button', { name: /Send/i }));

        const errorMessage = await screen.findByText(/Something went wrong, please try again later/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
