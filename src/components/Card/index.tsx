import { FC } from 'react';
import { Avatar } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Props = {
  src: string;
  alt: string;
};

const Card: FC<Props> = ({ src, alt }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.div whileHover={{ scale: 1.5 }}>
        <Avatar src={src} name={alt} size="2xl" cursor="pointer" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
