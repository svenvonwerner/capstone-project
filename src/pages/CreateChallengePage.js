import Form from '../components/Form.js';
import styled from 'styled-components';

export default function CreateChallengePage({ handleCreateCard }) {
  return (
    <div>
      <Subheadline>Create a Photo Challenge</Subheadline>
      <Form handleCreateCard={handleCreateCard} />
      {/* <Navigation /> */}
    </div>
  );
}

const Subheadline = styled.h1`
  margin: 3rem 0 3rem;
  text-align: center;
`;
