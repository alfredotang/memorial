import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';
import { MDProvider } from '@src/components';
import { theme } from '@src/theme';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BlockBaseStyled = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 580px;
  flex-basis: 100%;
`;

// TODO: use theme media query
const ImgBlock = styled(motion.div)`
  ${BlockBaseStyled}
  position: relative;
  overflow: hidden;
  padding-bottom: 72%;

  @media screen and (min-width: 960px) {
    padding-bottom: 36%;
  }
`;

const Image = styled.img`
  border-radius: ${(props) => props.theme.radii['lg']};
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TextBlock = styled(motion.div)`
  ${BlockBaseStyled}
  align-items: center;
  background-color: ${(props) => props.theme.colors.paper};
  padding: ${(props) => props.theme.space[10]};
  border-radius: ${(props) => props.theme.radii['lg']};
`;

const wrapperVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const textVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

type Props = {
  imgSrc: string;
  imgAlt: string;
  mdSrc: string;
};

const PhotoAlbum: FC<Props> = ({ imgSrc, imgAlt, mdSrc }) => {
  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={wrapperVariants}
      transition={{ duration: 2 }}
    >
      <ImgBlock variants={imageVariants}>
        <Image src={imgSrc} alt={imgAlt} />
      </ImgBlock>
      <TextBlock variants={textVariants}>
        <MDProvider src={mdSrc} />
      </TextBlock>
    </Wrapper>
  );
};

export default PhotoAlbum;
