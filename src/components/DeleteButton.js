import styled from 'styled-components';
import iconDeleteItem from '../images/iconDeleteItem.svg';

export default function DeleteButton({ onDeleteCard, id }) {
  return (
    <RemoveButton type="button" onClick={handleDelete}>
      <DeleteImg src={iconDeleteItem} alt="Delete card" />
    </RemoveButton>
  );

  function handleDelete() {
    onDeleteCard(id);
  }
}
const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DeleteImg = styled.img`
  width: 20px;
`;
