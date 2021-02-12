import { ChakraTheme } from '@chakra-ui/react';
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ChakraTheme {
    version: '0.0.1';
  }
}
