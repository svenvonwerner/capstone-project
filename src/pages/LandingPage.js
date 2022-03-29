import styled from 'styled-components';
import LandingpageImg from '../images/chappLandingpage.jpg';

export default function LandingPage() {
  return (
    <BackgroundDiv>
      <Headline>CHAPP</Headline>
      <p>Deine Challenge App für Fotorgrafie</p>
    </BackgroundDiv>
  );
}

const BackgroundDiv = styled.div`
  height: 100vh;
  background-image: url(${LandingpageImg});
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  color: white;
`;

const Headline = styled.h1`
  font-family: 'Georgia', sans-serif;
  font-size: 2.8rem;
  margin-top: 8rem;
  text-align: center;
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 0.3rem;
  text-underline-offset: 0.2em;
  letter-spacing: 0.2rem;
`;
