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
          <Route path="/" element={<ChallengeListPage onCheckClick={onCheckClick} challengeData={challengeData} />} />

          <Route path="/FormPage" element={<CreateChallengePage onCreateCard={onCreateCard} />} />
        </Routes>
      </MainContainer>
      <Navigation />
    </AppGrid>
  );
  //Function for listing cards (SVW)
  function onCheckClick(cardid) {
    const updatedChallengeData = [...challengeData];
    const cardIndex = updatedChallengeData.findIndex(card => card.id === cardid);
    updatedChallengeData[cardIndex].checkedStatus = !updatedChallengeData[cardIndex].checkedStatus;
    setChallengeData(updatedChallengeData);
  }

  //Function for creating a card via form (SVW)
  function onCreateCard(createdCard) {
    setChallengeData([createdCard, ...challengeData]);
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 48px;
`;

const MainContainer = styled.main`
  height: 100vh;
  padding: 3rem 1rem;
  overflow-y: auto;
`;

export default App;
