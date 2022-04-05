import styled from 'styled-components';
import iconToogle from '../images/iconToggleDown.svg';

export default function ToggleButton({ onToggleClick }) {
  return (
    <ToogleButton type="button" onClick={() => onToggleClick()}>
      <ToggleImg src={iconToogle} alt="Delete card" />
    </ToogleButton>
  );
}
const ToogleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ToggleImg = styled.img`
  width: 20px;
`;
