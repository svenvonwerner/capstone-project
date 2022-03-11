import styled from 'styled-components';

export default function Card({ headlineCard, descriptionCard }) {
  return (
    <Wrapper>
      <h2>{headlineCard}</h2>
      <Description>{descriptionCard}</Description>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  background-color: white;
  height: 10rem;
  padding: 1rem;
  border-radius: 5px;
  line-height: 1.5rem;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
