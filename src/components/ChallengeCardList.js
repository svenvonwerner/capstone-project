import styled from 'styled-components';
import ChallengeCard from './ChallengeCard.js';

export default function ChallengeCardList({ onCheckClick, challengeData, onDeleteCard }) {
  return (
    <>
      <Wrapper role="list" aria-label="challenges">
        {challengeData.map(card => (
          <ChallengeCard
            key={card.id}
            id={card.id}
            headlineCard={card.headlineCard}
            descriptionCard={card.descriptionCard}
            checkedStatus={card.checkedStatus}
            onCheckClick={onCheckClick}
            categoryCard={card.categoryCard}
            authorCard={card.authorCard}
            onDeleteCard={onDeleteCard}
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
