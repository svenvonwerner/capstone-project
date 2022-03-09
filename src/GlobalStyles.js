import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  
  body {
    margin:1rem;
    font-family: 'Lato', sans-serif;
    background-color:#EDEFF4;
  }

  h1 {
   font-size: 1.5rem;
   font-weight:normal;

  }
  h2 {
    font-size: 1.0rem;
  }
  
`;

export default GlobalStyle;
