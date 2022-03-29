import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyle>
      <Headline>CHAPP</Headline>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  margin: 0px;
  justify-content: center;
  width: 100%;
  margin-top: 0px;
  position: fixed;
  top: 0;
`;

const Headline = styled.p`
  font-family: 'Georgia', serif;
  color: #404040;
  letter-spacing: 0.1rem;
`;
