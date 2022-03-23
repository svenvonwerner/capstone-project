import ListCard from '../components/ChallengeCardList.js';
import styled from 'styled-components';

export default function ChallengeListPage({ onCheckClick, challengeData }) {
  return (
    <>
      <Subheadline>My Challenge Photo List</Subheadline>
      <ListCard onCheckClick={onCheckClick} challengeData={challengeData} />
    </>
  );
}

const Subheadline = styled.h1`
  margin: 3rem 0 3rem;
  text-align: center;
`;
