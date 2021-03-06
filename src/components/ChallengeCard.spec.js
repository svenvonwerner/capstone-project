import { render, screen } from '@testing-library/react';
import ChallengeCard from './ChallengeCard.js';

describe('ChallengeCard', () => {
  it('renders a subheadline and a description', () => {
    render(
      <ChallengeCard
        headlineCard="1000 Schritte"
        descriptionCard="Gehe 1000 Schritte von Deiner Haustür und mache ein Foto"
      />
    );
    const headlineCard = screen.getByText('1000 Schritte');
    const descriptionCard = screen.getByText('Gehe 1000 Schritte von Deiner Haustür und mache ein Foto');
    expect(headlineCard).toBeInTheDocument();
    expect(descriptionCard).toBeInTheDocument();
  });
});
