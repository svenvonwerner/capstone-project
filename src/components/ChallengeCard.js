import styled from 'styled-components';
import CheckoffButton from './CheckoffButton.js';
import DeleteButton from './DeleteButton.js';

export default function ChallengeCard({ headlineCard, descriptionCard, onCheckClick, onDeleteCard, ...props }) {
  return (
    <Wrapper>
      <Content>
        <h2>{headlineCard}</h2>
        <Description>{descriptionCard}</Description>
      </Content>
      <IconSection>
        <DeleteButton onDeleteCard={onDeleteCard} {...props} />
        <CheckoffButton onCheckClick={onCheckClick} {...props} />
      </IconSection>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-height: 10rem;
  padding: 1rem;
`;

const IconSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.li`
  line-height: 1.5rem;
  list-style: none;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
