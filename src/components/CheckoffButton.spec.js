import { render, screen } from '@testing-library/react';
import CheckoffButton from './CheckoffButton.js';

describe('CheckoffButton', () => {
  it('renders an image as icon', () => {
    render(<CheckoffButton />);
    const imgIcon = screen.getByRole('img');
    expect(imgIcon).toBeInTheDocument();
  });
});
