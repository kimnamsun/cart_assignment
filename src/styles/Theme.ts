import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  basicWidth: '1000px',

  color: {
    black: '#000',
    white: '#fff',
    red: '#E82C23',
    ivory: '#FFFEF9',
  },
};

const flexSet = (justifyContent: string, alignItems: string) => {
  return `display: flex; justify-content: ${justifyContent}; align-items: ${alignItems};`;
};

export { theme, flexSet };
