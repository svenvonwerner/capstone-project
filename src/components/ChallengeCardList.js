import styled from 'styled-components';
import Card from './ChallengeCard.js';
import { nanoid } from 'nanoid';

const cards = [
  {
    id: nanoid(),
    headlineCard: 'This is a Challenge',
    descriptionCard: 'A photography challenge is a way to push your photography skills.',
  },
  {
    id: nanoid(),
    headlineCard: 'This is a Challenge',
    descriptionCard: 'A photography challenge is a way to push your photography skills.',
  },
  {
    id: nanoid(),
    headlineCard: 'This is a Challenge',
    descriptionCard: 'A photography challenge is a way to push your photography skills.',
  },
  {
    id: nanoid(),
    headlineCard: 'This is a Challenge',
    descriptionCard: 'A photography challenge is a way to push your photography skills.',
  },
];

export default function ListCard() {
  return (
    <>
      <Wrapper role="list" aria-label="challenges">
        {cards.map(card => (
          <Card key={card.id} headlineCard={card.headlineCard} descriptionCard={card.descriptionCard} />
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul`
  list-style: none;
  display: grid;
  gap: 30px;
  padding-left: 0;
`;
