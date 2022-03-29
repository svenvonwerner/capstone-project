import styled from 'styled-components';
import CheckoffButton from './CheckoffButton.js';
import DeleteButton from './DeleteButton.js';
import ChallengeCardGallery from './ChallengeCardGallery.js';

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

  ...props
}) {
  console.log(photo);
  return (
    <Wrapper>
      {/* {photo.map(image => {
        return <img key={image} src={image} alt="" style={{ width: '200px' }} />;
      })} */}
      <Content>
        <h2>{headlineCard}</h2>
        <Description>{descriptionCard}</Description>
      </Content>
      <IconSection>
        <DeleteButton onDeleteCard={() => onDeleteCard(id)} {...props} />
        <CheckoffButton onCheckClick={() => onCheckClick(id)} {...props} />
      </IconSection>
      <ChallengeCardGallery
        image={image}
        handleSetImage={handleSetImage}
        id={id}
        handlePhotoUpload={handlePhotoUpload}
      />
      <button onClick={() => handlePhotoUpload(id)}>AddButton</button>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-height: 10rem;
  padding: 1rem;
  list-style: none;
`;

const IconSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.section`
  line-height: 1.5rem;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
