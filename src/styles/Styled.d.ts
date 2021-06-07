import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      black: string;
      white: string;
      red: string;
      ivory: string;
    };
  }
}
