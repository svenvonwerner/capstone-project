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

    const formIcon = screen.getByAltText('Switch to Form');
    const listIcon = screen.getByAltText('Switch to List');

    expect(formIcon).toBeInTheDocument();
    expect(listIcon).toBeInTheDocument();
  });
});
