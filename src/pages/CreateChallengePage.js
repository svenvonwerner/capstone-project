import Form from '../components/Form.js';
import styled from 'styled-components';

export default function CreateChallengePage({ onCreateCard }) {
  return (
    <WrapperDiv>
      <Headline>Create a Photo Challenge</Headline>
      <Form onCreateCard={onCreateCard} />
    </WrapperDiv>
  );
}

const Headline = styled.h1`
  margin: 3rem 0 3rem;
  text-align: center;
`;

const WrapperDiv = styled.div`
  margin: 0 2rem 0 2rem;
`;
