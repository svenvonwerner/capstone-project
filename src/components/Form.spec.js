import { render, screen } from '@testing-library/react';
import Form from './Form.js';
import { MemoryRouter } from 'react-router-dom';

describe('Form', () => {
  it('renders four input fields and submit-button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const input1 = screen.getByLabelText('Title');
    const input2 = screen.getByLabelText('Category');
    const input3 = screen.getByLabelText('Name');
    const input4 = screen.getByLabelText('Description');
    const saveButton = screen.getByRole('button');

    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});
