import { FC } from 'react';
import { ThemeProvider } from '@src/theme';
import { Layout } from '@src/components';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Layout>Hello</Layout>
    </ThemeProvider>
  );
};

export default App;
