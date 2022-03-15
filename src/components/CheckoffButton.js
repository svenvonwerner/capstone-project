import { useState } from 'react';
import styled from 'styled-components';
import CheckoffActive from '../images/checkoffActive.svg';
import CheckoffNotActive from '../images/checkoffNotActive.svg';

export default function CheckoffButton({ checkedStatus, onCheckClick, id, cardHeadline, description }) {
  const [isCheckedOff, setIsCheckedOff] = useState(false);
  return (
    <Checkicon type="button" onClick={handleCheck}>
      {checkedStatus ? (
        <img src={CheckoffActive} alt="Challenge is done" />
      ) : (
        <img src={CheckoffNotActive} alt="Challenge is not done" />
      )}
    </Checkicon>
  );

  // function onCheckClick() {
  //   setIsCheckedOff(!isCheckedOff);
  // }

  function handleCheck() {
    onCheckClick({ id: id, headlineCard: cardHeadline, descriptionCard: description, checkedStatus: !checkedStatus });
    setIsCheckedOff(!isCheckedOff);
  }
}

const Checkicon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
