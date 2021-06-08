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

  export interface FlexSetProps {
    justifyContent: string;
    alignItems: string;
  }
}
