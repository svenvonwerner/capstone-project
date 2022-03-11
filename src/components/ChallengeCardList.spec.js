import { render, screen } from '@testing-library/react';
import ListCard from './ChallengeCardList.js';

describe('Listcard', () => {
  it('Render a list of challenge-cards', () => {
    render(<ListCard />);
    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
