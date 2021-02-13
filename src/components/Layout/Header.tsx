import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@src/theme';
import { useMeasureScroll } from '@src/hooks';

const HeaderBaseStyled = css`
  width: 100%;
  height: ${theme.space['20']};
  box-sizing: border-box;
`;

const Wrapper = styled.header`
  ${HeaderBaseStyled}
`;

// TODO: add background-color by theme
const HeaderContent = styled.div<{ showShadow: boolean }>`
  ${HeaderBaseStyled}
  position: fixed;
  top: 0px;
  align-items: center;
  display: flex;
  box-shadow: ${({ showShadow, theme }) =>
    showShadow ? theme.shadows['md'] : 'none'};
`;

const Header: FC = () => {
  const { scrollY } = useMeasureScroll({ switchOn: true });
  const SHOW_HEADER_SHADOW = scrollY > 40;
  return (
    <Wrapper>
      <HeaderContent showShadow={SHOW_HEADER_SHADOW}>header</HeaderContent>
    </Wrapper>
  );
};

export default Header;
