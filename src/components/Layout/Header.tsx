import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Heading, Box, Button } from '@chakra-ui/react';
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
  justify-content: space-between;
  display: flex;
  box-shadow: ${({ showShadow, theme }) =>
    showShadow ? theme.shadows['md'] : 'none'};
`;

const Header: FC = () => {
  const history = useHistory();
  const { scrollY } = useMeasureScroll({ switchOn: true });
  const SHOW_HEADER_SHADOW = scrollY > 40;

  const handleRedirectToHome = () => {
    history.replace('/');
  };

  return (
    <Wrapper>
      <HeaderContent showShadow={SHOW_HEADER_SHADOW}>
        <Box display="flex" px={[10, 10, 20]}>
          <Heading>Memorial</Heading>
        </Box>
        <Box display="flex" mr={[10, 20, 20]}>
          <Button variant="link" onClick={handleRedirectToHome}>
            Back To Home
          </Button>
        </Box>
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
