// src/components/Form.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './components/Form';

describe('Form Component', () => {
  it('should render the form fields', () => {
    const { getByLabelText } = render(<Form onSubmit={() => {}} />);
    const emailInput = getByLabelText('Email');
    const nameInput = getByLabelText('Name');
    const schoolInput = getByLabelText('School');

    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(schoolInput).toBeInTheDocument();
  });

  it('should display an error message for invalid email', () => {
    const { getByLabelText, getByText } = render(<Form onSubmit={() => {}} />);
    const emailInput = getByLabelText('Email');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Invalid email address');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should not display an error message for valid email', () => {
    const { getByLabelText, queryByText, getByText } = render(<Form onSubmit={() => {}} />);
    const emailInput = getByLabelText('Email');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.click(submitButton);

    const errorMessage = queryByText('Invalid email address');
    expect(errorMessage).toBeNull();
  });

  it('should call onSubmit when the form is submitted with valid data', () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Form onSubmit={mockSubmit} />);
    const emailInput = getByLabelText('Email');
    const nameInput = getByLabelText('Name');
    const schoolInput = getByLabelText('School');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(schoolInput, { target: { value: 'Example School' } });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'valid-email@example.com',
      name: 'John Doe',
      school: 'Example School',
    });
  });
});
