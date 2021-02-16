import { FC, Fragment } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  ThemeProvider as EmotionThemeProvider,
  Theme,
  Global,
  css,
} from '@emotion/react';

// https://materialpalettes.com/
const themeColors = {
  primary: {
    '50': '#e1f2f4',
    '100': '#b3dee2',
    '200': '#7fcacf',
    '300': '#47b5bb',
    '400': '#0da5ab',
    '500': '#009599',
    '600': '#00898b',
    '700': '#007979',
    '800': '#006969',
    '900': '#004d4a',
  },
  secondary: {
    '50': '#f9e6ec',
    '100': '#f2c1d0',
    '200': '#ea9ab2',
    '300': '#e57494',
    '400': '#e3587e',
    '500': '#e14369',
    '600': '#d03f65',
    '700': '#ba3a5f',
    '800': '#a5345a',
    '900': '#812b50',
  },
  text: '#454f5b',
  background: '#F2EEE4',
  paper: '#fff',
};

const theme = extendTheme({
  colors: {
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    background: themeColors.background,
    paper: themeColors.paper,
    text: themeColors.text,
  },
});

const GlobalStyle: FC = () => {
  return (
    <Global
      styles={css`
        * {
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
};

const ThemeProvider: FC = ({ children }) => {
  return (
    <ChakraProvider>
      <EmotionThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          {children}
        </Fragment>
      </EmotionThemeProvider>
    </ChakraProvider>
  );
};

export { ThemeProvider, theme };
export type { Theme };
