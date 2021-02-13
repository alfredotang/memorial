import { FC } from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
