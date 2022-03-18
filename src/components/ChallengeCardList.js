import styled from 'styled-components';
import Card from './ChallengeCard.js';

export default function ListCard({ handleCheckClick, challengeData }) {
  return (
    <>
      <Wrapper role="list" aria-label="challenges">
        {challengeData.map(card => (
          <Card
            key={card.id}
            id={card.id}
            headlineCard={card.headlineCard}
            descriptionCard={card.descriptionCard}
            checkedStatus={card.checkedStatus}
            onCheckClick={handleCheckClick}
            categoryCard={card.categoryCard}
            authorCard={card.authorCard}
          />
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
