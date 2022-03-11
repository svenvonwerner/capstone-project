import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 1rem;
    font-family: 'Lato', sans-serif;
    background-color: #EDEFF4;
  }

  h1 {
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;

  }
  h2 {
    font-size: 1.0rem;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase ;

  }
  `;

export default GlobalStyle;
