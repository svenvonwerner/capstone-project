import styled from 'styled-components';
import LandingpageImg from '../images/chappLandingpage.jpg';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <BackgroundDiv to="/ListPage">
      <BorderDiv>
        <div>
          <Headline>CHAPP</Headline>
          <SubHeadline>
            With photo challenges <br />
            for more quality and fun in your life!
          </SubHeadline>
        </div>
      </BorderDiv>
    </BackgroundDiv>
  );
}

const BackgroundDiv = styled(Link)`
  height: 90vh;
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
  padding-top: 1.2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;

const BorderDiv = styled.div`
  width: 100%;
  height: 79vh;
  border-style: solid;
  border-color: white;
  border-width: 1px;
`;

const Headline = styled.h1`
  font-family: 'Georgia', sans-serif;
  font-size: 2.8rem;
  margin-top: 4.1rem;
  text-align: center;
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 0.3rem;
  text-underline-offset: 0.2em;
  letter-spacing: 0.2rem;
`;

const SubHeadline = styled.p`
  text-align: center;
`;
