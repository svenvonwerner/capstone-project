import { render, screen } from '@testing-library/react';
import ChallengeCardList from './ChallengeCardList.js';

describe('Listcard', () => {
  it('Render a list of challenge-cards', () => {
    render(
      <ChallengeCardList
        challengeData={[
          {
            key: '123',
            id: '1234',
            headlineCard: 'Katzen haben Personal',
            descriptionCard: 'asdfdfadsf',
            checkedStatus: false,
            categoryCard: 'Tiere',
            authorCard: 'Jane',
          },
        ]}
      />
    );
    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
  });
});
