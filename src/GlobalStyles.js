import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    margin: 1rem;
    font-family: 'Lato', sans-serif;
    background-color: #EDEFF4;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 300;
  }
  h2 {
    font-size: 1.0rem;
    text-transform: uppercase ;
  }
  `;

export default GlobalStyle;
