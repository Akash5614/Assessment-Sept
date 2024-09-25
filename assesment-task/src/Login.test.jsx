import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays error when email is missing', () => {
  render(<App />);

  // Fill the password but leave the email empty
  fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
    target: { value: 'password123' },
  });

  // Submit form
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  // Check if email error is displayed
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});

test('displays error when password is missing', () => {
  render(<App />);

  // Fill the email but leave the password empty
  fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: 'test@example.com' },
  });

  // Submit form
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  // Check if password error is displayed
  expect(screen.getByText(/password is required/i)).toBeInTheDocument();
});

test('displays success message when both fields are filled', () => {
  render(<App />);

  // Fill in both email and password
  fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
    target: { value: 'password123' },
  });

  // Submit form
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  // Check if success message is displayed
  expect(screen.getByText(/successfully logged in/i)).toBeInTheDocument();
});

