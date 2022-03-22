import useLocalStorage from './hooks/useLocalStorage.js';
import CreateChallengePage from './pages/CreateChallengePage.js';
import ChallengeListPage from './pages/ChallengeListPage.js';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import styled from 'styled-components';

function App() {
  const [challengeData, setChallengeData] = useLocalStorage('challengeData', []);
  return (
    <AppGrid>
      <Header />
      <MainContainer>
        <Routes>
          <Route
            path="/"
            element={<ChallengeListPage handleCheckClick={handleCheckClick} challengeData={challengeData} />}
          />

          <Route path="/FormPage" element={<CreateChallengePage handleCreateCard={handleCreateCard} />} />
        </Routes>
      </MainContainer>
      <Navigation />
    </AppGrid>
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

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px 1 fr 48px;
`;

const MainContainer = styled.main`
  height: 100vh;
  padding: 3rem 1rem;
  overflow-y: scroll;
`;

export default App;
