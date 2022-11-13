import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    fint-size: 14px;
    background-color: #2E3F7F;

  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;