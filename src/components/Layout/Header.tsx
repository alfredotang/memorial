import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Heading, Box, Button, ThemeTypings } from '@chakra-ui/react';
import { theme } from '@src/theme';
import { useMeasureScroll, useRWD } from '@src/hooks';

type HeadingSizeVariants = ThemeTypings['components']['Heading']['sizes'];

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
  const { pathname } = useLocation();
  const { scrollY } = useMeasureScroll({ switchOn: true });
  const SHOW_HEADER_SHADOW = scrollY > 40;

  const headingSize = useRWD<HeadingSizeVariants>(['sm', 'lg', 'xl']);

  const handleRedirectToHome = () => {
    history.replace('/');
  };

  const handleHistoryBack = () => {
    const pathMatch = pathname.split('/');
    if (pathMatch.length > 2) {
      history.replace(`/${pathMatch[1]}`);
    } else {
      handleRedirectToHome();
    }
  };

  return (
    <Wrapper>
      <HeaderContent showShadow={SHOW_HEADER_SHADOW}>
        <Box display="flex" px={[5, 10, 20]}>
          <Heading
            cursor="pointer"
            onClick={handleRedirectToHome}
            size={headingSize}
          >
            Memorial
          </Heading>
        </Box>
        {pathname !== '/' && (
          <Box display="flex" mr={[5, 10, 20]}>
            <Button variant="link" onClick={handleHistoryBack}>
              Back
            </Button>
          </Box>
        )}
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
