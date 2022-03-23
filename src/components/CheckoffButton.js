import styled from 'styled-components';
import CheckoffActive from '../images/checkoffActive.svg';
import CheckoffNotActive from '../images/checkoffNotActive.svg';

export default function CheckoffButton({ checkedStatus, onCheckClick, id }) {
  return (
    <Checkicon type="button" onClick={handleCheck}>
      {checkedStatus ? (
        <img src={CheckoffActive} alt="Challenge is done" />
      ) : (
        <img src={CheckoffNotActive} alt="Challenge is not done" />
      )}
    </Checkicon>
  );

  function handleCheck() {
    onCheckClick(id);
  }
}

const Checkicon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
