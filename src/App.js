import useLocalStorage from './hooks/useLocalStorage.js';
import LandingPage from './pages/StartPage.js';
import CreateChallengePage from './pages/CreateChallengePage.js';
import ChallengeListPage from './pages/ChallengeListPage.js';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const [challengeData, setChallengeData] = useLocalStorage('challengeData', []);
  const [image, setImage] = useState([]);
  function handleSetImage(value) {
    setImage(value);
  }
  return (
    <AppGrid>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/ListPage"
            element={
              <ChallengeListPage
                onCheckClick={onCheckClick}
                challengeData={challengeData}
                onDeleteCard={deleteCard}
                image={image}
                handleSetImage={handleSetImage}
                handlePhotoUpload={handlePhotoUpload}
              />
            }
          />

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

  //Function for deleting a card (SVW)
  function deleteCard(cardid) {
    setChallengeData(challengeData.filter(card => card.id !== cardid));
  }

  //Function for uploading photos (SVW)
  function handlePhotoUpload(id, newPhoto) {
    setChallengeData(
      challengeData.map(item => {
        if (item.id === id) {
          return { ...item, photo: [...item.photo, newPhoto] };
        } else {
          return item;
        }
      })
    );
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 48px;
`;

const MainContainer = styled.main`
  height: 100vh;
  padding: 3rem 0;
  overflow-y: auto;
`;

export default App;
