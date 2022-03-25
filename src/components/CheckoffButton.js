import styled from 'styled-components';
import CheckoffActive from '../images/checkoffActive.svg';
import CheckoffNotActive from '../images/checkoffNotActive.svg';

export default function CheckoffButton({ checkedStatus, onCheckClick, id }) {
  return (
    <CheckButton type="button" onClick={handleCheck}>
      {checkedStatus ? (
        <CheckIcon src={CheckoffActive} alt="Challenge is done" />
      ) : (
        <CheckIcon src={CheckoffNotActive} alt="Challenge is not done" />
      )}
    </CheckButton>
  );

  function handleCheck() {
    onCheckClick(id);
  }
}

const CheckButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const CheckIcon = styled.img`
  width: 20px;
`;
