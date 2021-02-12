import { FC } from 'react';
import { theme as defaultTheme, ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider as EmotionThemeProvider, Theme } from '@emotion/react';

// TODO: add more theme
const theme = defaultTheme;

const ThemeProvider: FC = ({ children }) => {
  return (
    <ChakraProvider>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ChakraProvider>
  );
};

export { ThemeProvider, theme };
export type { Theme };
