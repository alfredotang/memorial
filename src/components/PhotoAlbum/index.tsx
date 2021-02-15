import { FC } from 'react';
import styled from '@emotion/styled';
import { Image, Box } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { MDProvider } from '@src/components';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const bannerImageVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const bannerTextVariants: Variants = {
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
      <Box display="flex" flexBasis={['100%', '100%', '50%']} maxWidth="580px">
        <motion.div variants={bannerImageVariants}>
          <Image src={imgSrc} alt={imgAlt} borderRadius="lg" />
        </motion.div>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexBasis={['100%', '100%', '50%']}
        maxWidth="580px"
        padding="10"
      >
        <motion.div variants={bannerTextVariants}>
          <MDProvider src={mdSrc} />
        </motion.div>
      </Box>
    </Wrapper>
  );
};

export default PhotoAlbum;
