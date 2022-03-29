import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function Form({ onCreateCard }) {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const categories = {
    other: 'Other',
    nature: 'Nature',
    architecture: 'Architecture',
    human: 'Human',
    animals: 'Animals',
  };

  function onSubmit(card) {
    onCreateCard({
      id: nanoid(),
      headlineCard: card.headlineCard,
      descriptionCard: card.descriptionCard,
      checkedStatus: false,
      categoryCard: card.categoryCard,
      authorCard: card.authorCard,
      photo: ['a', 'b', 'c'],
    });
    navigate('/ListPage');
  }

  return (
    <FormContainer>
      <FormBox onSubmit={handleSubmit(card => onSubmit(card))}>
        {/* register your input into the hook by invoking the "register" function */}
        <InputLabel htmlFor="title">Title</InputLabel>
        <Inputbox maxLength="30" id="title" {...register('headlineCard', { required: true })} />
        {errors.headlineCard && <p>This field is required</p>}

        {/* <InputLabel htmlFor="category">Category</InputLabel>
        <Inputbox maxLength="30" id="category" {...register('categoryCard', { required: true })} />
        {errors.categoryCard && <p>Please check the First Name</p>} */}

        <InputLabel htmlFor="category">Category</InputLabel>
        <InputSelect id="category" {...register('categoryCard', { required: true })}>
          {Object.entries(categories).map(([value, text], index) => {
            return (
              <option key={index} value={value}>
                {text}
              </option>
            );
          })}
        </InputSelect>

        <InputLabel htmlFor="author">Name</InputLabel>
        <Inputbox maxLength="30" id="author" {...register('authorCard', { required: true })} />
        {errors.authorCard && <p>This field is required</p>}

        <InputLabel htmlFor="description">Description</InputLabel>
        <TextBox maxLength="300" id="description" {...register('descriptionCard', { required: true })} />
        {errors.descriptionCard && <p>This field is required</p>}

        <ButtonSave type="submit">SAVE</ButtonSave>
      </FormBox>
    </FormContainer>
  );
}

const InputLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormBox = styled.form`
  width: 100%;
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

const InputSelect = styled.select`
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: white;
`;

const TextBox = styled.textarea`
  width: 100%;
  min-height: 10rem;
  margin-top: 4px;
  border: 1px solid black;
  border-radius: 3px;
`;
const ButtonSave = styled.button`
  width: 100%;
  border-radius: 3px;
  border: 1px solid black;
  font-weight: normal;
  font-size: 1rem;
  padding: 12px;
  margin-top: 5rem;
`;
