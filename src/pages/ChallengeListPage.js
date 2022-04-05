import ChallengeCardList from '../components/ChallengeCardList.js';
import styled from 'styled-components';

export default function ChallengeListPage({
  onCheckClick,
  challengeData,
  onDeleteCard,
  handleSetImage,
  image,
  handlePhotoUpload,
}) {
  return (
    <WrapperDiv>
      <Subheadline>My Challenge Photo List</Subheadline>
      <ChallengeCardList
        onCheckClick={onCheckClick}
        challengeData={challengeData}
        onDeleteCard={onDeleteCard}
        handleSetImage={handleSetImage}
        image={image}
        handlePhotoUpload={handlePhotoUpload}
      />
    </WrapperDiv>
  );
}

const Subheadline = styled.h1`
  margin: 3rem 0 3rem;
  text-align: center;
`;

const WrapperDiv = styled.div`
  margin: 0 2rem 0 2rem;
`;
