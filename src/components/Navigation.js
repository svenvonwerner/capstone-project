import styled from 'styled-components';
import iconAddItem from '../images/iconAddItem.svg';
import iconChecklist from '../images/iconChecklist.svg';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <NavLink
        to="/FormPage"
        style={({ isActive }) =>
          isActive
            ? {
                opacity: 1.0,
              }
            : { opacity: 0.5 }
        }
      >
        <ImgIcon src={iconAddItem} alt="Switch to Form" />
      </NavLink>
      <NavLink
        to="/ListPage"
        style={({ isActive }) =>
          isActive
            ? {
                opacity: 1.0,
              }
            : { opacity: 0.5 }
        }
      >
        <ImgIcon src={iconChecklist} alt="Switch to List" />
      </NavLink>
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
  box-shadow: 0px -2px 4px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ImgIcon = styled.img`
  width: 25px;
`;
