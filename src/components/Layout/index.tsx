import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Box p={[5, 5, 10]}>{children}</Box>
    </div>
  );
};

export default Layout;
