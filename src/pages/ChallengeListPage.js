import ChallengeCardList from '../components/ChallengeCardList.js';
import styled from 'styled-components';

export default function ChallengeListPage({ onCheckClick, challengeData, onDeleteCard }) {
  return (
    <>
      <Subheadline>My Challenge Photo List</Subheadline>
      <ChallengeCardList onCheckClick={onCheckClick} challengeData={challengeData} onDeleteCard={onDeleteCard} />
    </>
  );
}

const Subheadline = styled.h1`
  margin: 3rem 0 3rem;
  text-align: center;
`;
