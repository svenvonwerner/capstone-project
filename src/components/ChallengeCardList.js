import styled from 'styled-components';
import Card from './ChallengeCard.js';
import cards from './ChallengeData.js';
import useLocalStorage from '../hooks/useLocalStorage.js';

export default function ListCard() {
  const [challengeData, setChallengeData] = useLocalStorage('challangeData', cards);

  function sorting(cardArray) {
    console.log(cardArray);
    const sortArray = type => {
      const types = {
        id: 'id',
      };
      const sortProperty = types[type];
      const sortedCards = [...cardArray].sort((a, b) => a[sortProperty] - b[sortProperty]);
      console.log(sortedCards);
      setChallengeData(sortedCards);
    };
    sortArray('id');
  }

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
          />
        ))}
      </Wrapper>
    </>
  );

  function handleCheckClick(cardObject) {
    if (challengeData === cards) {
      const otherCards = cards.filter(card => card.id !== cardObject.id);
      const cardArray = [cardObject, ...otherCards];
      sorting(cardArray);
    } else {
      const otherCards = challengeData.filter(card => card.id !== cardObject.id);
      const cardArray = [cardObject, ...otherCards];
      sorting(cardArray);
    }
  }
}

const Wrapper = styled.ul`
  list-style: none;
  display: grid;
  gap: 30px;
  padding-left: 0;
`;
