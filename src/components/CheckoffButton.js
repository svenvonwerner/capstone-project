import { useState } from 'react';
import styled from 'styled-components';
import CheckoffActive from '../images/checkoffActive.svg';
import CheckoffNotActive from '../images/checkoffNotActive.svg';

export default function CheckoffButton() {
  const [isCheckedOff, setIsCheckedOff] = useState(false);
  return (
    <Checkicon type="button" onClick={onCheckClick}>
      {isCheckedOff ? (
        <img src={CheckoffActive} alt="Challenge is done" />
      ) : (
        <img src={CheckoffNotActive} alt="Challenge is not done" />
      )}
    </Checkicon>
  );

  function onCheckClick() {
    setIsCheckedOff(!isCheckedOff);
  }
}

const Checkicon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
