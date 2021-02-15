import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { Avatar, ThemeTypings } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { useRWD } from '@src/hooks';

const cardVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type WrapperProps = {
  isActive: boolean;
  enableActiveMode: boolean;
};

type AvatarSizeVariants = ThemeTypings['components']['Avatar']['sizes'];

const Wrapper = styled(motion.div)<WrapperProps>`
  ${({ isActive, enableActiveMode }) =>
    enableActiveMode && !isActive && `filter: blur(2px);`}
  &:hover {
    filter: none;
  }
`;

type Props = {
  src: string;
  alt: string;
  isActive?: boolean;
  redirectTo?: string;
  duration?: number;
  delay?: number;
  enableActiveMode?: boolean;
};

const People: FC<Props> = ({
  src,
  alt,
  redirectTo,
  duration = 0,
  delay = 0,
  isActive = true,
  enableActiveMode = false,
}) => {
  const history = useHistory();
  const handleRedirectToPeople = () => {
    if (redirectTo) {
      history.push(redirectTo);
    }
  };

  const avatarSize = useRWD<AvatarSizeVariants>(['md', 'lg', '2xl']);

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration, delay }}
      isActive={isActive}
      enableActiveMode={enableActiveMode}
    >
      <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.2 }}
        onClick={handleRedirectToPeople}
      >
        <Avatar src={src} name={alt} size={avatarSize} cursor="pointer" />
      </motion.div>
    </Wrapper>
  );
};

export default People;
