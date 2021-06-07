import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyle from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/Theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
