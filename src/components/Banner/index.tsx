import { FC } from 'react';
import styled from '@emotion/styled';
import { Flex, Image, Box } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import BannerImg from '@src/assets/images/banner/banner.jpg';

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

const Banner: FC = () => {
  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={wrapperVariants}
      transition={{ duration: 2 }}
    >
      <Box display="flex" flexBasis={['100%', '100%', '50%']}>
        <motion.div variants={bannerImageVariants}>
          <Image src={BannerImg} alt="banner" borderRadius="lg" />
        </motion.div>
      </Box>
      <Box display="flex" flexBasis={['100%', '100%', '50%']} padding="10">
        <motion.div variants={bannerTextVariants}>hello 各位</motion.div>
      </Box>
    </Wrapper>
  );
};

export default Banner;