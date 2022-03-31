import styled from 'styled-components';
import CheckoffButton from './CheckoffButton.js';
import DeleteButton from './DeleteButton.js';
import ChallengeCardGallery from './ChallengeCardGallery.js';
import ToggleButton from './ToggleButton.js';
import { useState } from 'react';

export default function ChallengeCard({
  id,
  headlineCard,
  descriptionCard,
  onCheckClick,
  onDeleteCard,
  image,
  handleSetImage,
  handlePhotoUpload,
  photo,
  // handleDeletePhoto,

  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  function handleToggleClick() {
    setIsActive(!isActive);
  }
  return (
    <Wrapper>
      <HeaderCard img={photo[0]}></HeaderCard>
      {/* <img src={photo[2]} alt="1" width="100%" /> */}

      <Content>
        <h2>{headlineCard}</h2>
        <Description>{descriptionCard}</Description>
      </Content>
      <IconSection>
        <ToggleButton onToggleClick={handleToggleClick} />
        <DeleteButton onDeleteCard={() => onDeleteCard(id)} {...props} />
        <CheckoffButton onCheckClick={() => onCheckClick(id)} {...props} />
      </IconSection>
      {isActive ? (
        <>
          <LineHr />
          <ChallengeCardGallery
            image={image}
            handleSetImage={handleSetImage}
            id={id}
            handlePhotoUpload={handlePhotoUpload}
            photo={photo}
            // handleDeletePhoto={handleDeletePhoto}
          />
        </>
      ) : null}

      {/* <LineHr />
      <ChallengeCardGallery
        image={image}
        handleSetImage={handleSetImage}
        id={id}
        handlePhotoUpload={handlePhotoUpload}
        photo={photo}
      /> */}
      {/* <button onClick={() => handlePhotoUpload(id)}>AddButton</button> */}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-height: 15rem;

  list-style: none;
`;

const IconSection = styled.section`
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`;

const Content = styled.section`
  line-height: 1.5rem;
  padding: 1rem;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeaderCard = styled.div`
  height: 150px;
  background-color: #d9d9d9;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
`;

const LineHr = styled.hr`
  width: 100%;
  border: thin dashed grey;
`;
