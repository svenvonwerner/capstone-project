import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function Form({ handleCreateCard }) {
  const { register, handleSubmit } = useForm();

  // const onSubmit = data => console.log(data);

  function onSubmit(card) {
    handleCreateCard({
      id: nanoid(),
      headlineCard: card.headlineCard,
      descriptionCard: card.descriptionCard,
      checkedStatus: false,
      categoryCard: card.categoryCard,
      authorCard: card.authorCard,
    });
  }
  // console.log(watch('example')); // watch input value by passing the name of it

  return (
    <FormContainer>
      <FormBox onSubmit={handleSubmit(card => onSubmit(card))}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="title">Title</label>
        <Inputbox maxLength="30" id="title" {...register('headlineCard')} />

        <label htmlFor="category">Category</label>
        <Inputbox maxLength="30" id="category" {...register('categoryCard')} />

        <label htmlFor="author">Name</label>
        <Inputbox maxLength="30" id="author" {...register('authorCard')} />

        <label htmlFor="description">Description</label>
        <TextBox maxLength="300" id="description" {...register('descriptionCard')} />

        <ButtonSave type="submit">Save</ButtonSave>
      </FormBox>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormBox = styled.form`
  width: 33%;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Inputbox = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 3px;
  border: 1px solid black;
`;

const TextBox = styled.textarea`
  width: 100%;
`;
const ButtonSave = styled.button`
  width: 100%;
  border-radius: 3px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 1rem;
  padding: 12px;
  margin-top: 4px;
`;
