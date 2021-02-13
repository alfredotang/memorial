import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { PeopleListEntity } from '@src/data/people';

const cardVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Props = Omit<PeopleListEntity, 'name'> & {
  redirectTo?: string;
};

const Card: FC<Props> = ({ src, alt, redirectTo }) => {
  const history = useHistory();
  const handleRedirectToPeople = () => {
    if (redirectTo) {
      history.push(redirectTo);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.2 }}
        onClick={handleRedirectToPeople}
      >
        <Avatar src={src} name={alt} size="2xl" cursor="pointer" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
