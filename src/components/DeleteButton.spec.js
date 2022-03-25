import { render, screen } from '@testing-library/react';
import DeleteButton from './DeleteButton.js';

describe('DeleteButton', () => {
  it('renders an image as icon', () => {
    render(<DeleteButton />);
    const imgIcon = screen.getByRole('img');
    expect(imgIcon).toBeInTheDocument();
  });
});
