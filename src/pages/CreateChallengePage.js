import Form from '../components/Form.js';
import styled from 'styled-components';

export default function CreateChallengePage({ onCreateCard }) {
  return (
    <div>
      <Headline>Create a Photo Challenge</Headline>
      <Form onCreateCard={onCreateCard} />
    </div>
  );
}

const Headline = styled.h1`
  margin: 3rem 0 3rem;
  text-align: center;
`;
