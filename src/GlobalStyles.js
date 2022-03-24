import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }

  body {
    margin: 0;
    padding:0;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    /* background-color: #EDEFF4; */
  }



  h1 {
    font-size: 1.1rem;
    font-weight: 100;
    text-transform: uppercase ;
  }

  h2 {
    font-size: 1.0rem;
    text-transform: uppercase ;
  }
  `;

export default GlobalStyle;
