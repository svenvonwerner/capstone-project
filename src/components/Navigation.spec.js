import { render, screen } from '@testing-library/react';
import Navigation from './Navigation.js';
import { MemoryRouter } from 'react-router-dom';

describe('Form', () => {
  it('renders two navigation buttons', () => {
    render(
      <MemoryRouter>
        {' '}
        <Navigation />
      </MemoryRouter>
    );

    const button1 = screen.getByAltText('Switch to Form');
    const button2 = screen.getByAltText('Switch to List');

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
