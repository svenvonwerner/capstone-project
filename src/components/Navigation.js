import styled from 'styled-components';
import iconAddItem from '../images/iconAddItem.svg';
import iconChecklist from '../images/iconChecklist.svg';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <NavButton to="/FormPage">
        <ImgIcon src={iconAddItem} alt="Switch to Form" />
      </NavButton>
      <NavButton to="/">
        <ImgIcon src={iconChecklist} alt="Switch to List" />
      </NavButton>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  list-style: none;
  height: 50px;
  background-color: white;
  color: white;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavButton = styled(NavLink)``;

const ImgIcon = styled.img`
  width: 25px;
`;
