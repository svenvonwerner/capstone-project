import styled from 'styled-components';
import CheckoffButton from './CheckoffButton.js';

export default function Card({
  headlineCard,
  descriptionCard,
  checkedStatus,
  onCheckClick,
  categoryCard,
  authorCard,
  ...props
}) {
  return (
    <Wrapper>
      <Content>
        <h2>{headlineCard}</h2>
        <Description>{descriptionCard}</Description>
      </Content>
      <CheckoffButton
        checkedStatus={checkedStatus}
        onCheckClick={onCheckClick}
        cardHeadline={headlineCard}
        description={descriptionCard}
        categoryCard={categoryCard}
        authorCard={authorCard}
        {...props}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: white;
  border-radius: 5px;
  height: 10rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 70% auto;
`;

const Content = styled.li`
  line-height: 1.5rem;
  list-style: none;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
