import ListCard from './components/ChallengeCardList.js';
import Form from './components/Form.js';
import useLocalStorage from './hooks/useLocalStorage.js';

function App() {
  const [challengeData, setChallengeData] = useLocalStorage('challengeData', []);
  return (
    <>
      <h1>Photo Challenge List</h1>
      <>
        <Form handleCreateCard={handleCreateCard} />
        <ListCard handleCheckClick={handleCheckClick} challengeData={challengeData} />
      </>
    </>
  );
  function handleCheckClick(cardObject) {
    const otherCards = challengeData.filter(card => card.id !== cardObject.id);
    const cardArray = [cardObject, ...otherCards];
    sorting(cardArray);
  }

  function sorting(cardArray) {
    const sortArray = type => {
      const types = {
        id: 'id',
      };
      const sortProperty = types[type];
      const sortedCards = [...cardArray].sort((a, b) => a[sortProperty] - b[sortProperty]);

      setChallengeData(sortedCards);
    };
    sortArray('id');
  }

  function handleCreateCard(createdCard) {
    setChallengeData([createdCard, ...challengeData]);
  }
}

export default App;
