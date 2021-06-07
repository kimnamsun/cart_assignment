import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  input {
    border-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button {
    border-style: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
