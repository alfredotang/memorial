import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { PeopleList, PeopleItem, MDProvider } from '@src/components';
import { motion, Variants } from 'framer-motion';
import { useMeasure } from '@src/hooks';
import { peopleListData } from '../contents/data';

const textVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

function findPeople(name: string) {
  return peopleListData.find((item) => item.name === name);
}

const ThanksList: FC = () => {
  const { name } = useParams<{ name: string }>();
  const people = findPeople(name);
  const { ref, bounds } = useMeasure();
  const data: PeopleItem[] = peopleListData.map((item) => {
    return {
      name: item.name,
      src: item.src,
      alt: item.alt,
      path: `/proposeDay/thanksList/${item.name}/`,
      isActive: item.name === name,
    };
  });

  return (
    <Fragment>
      <Box
        mb={[5, 5, 10]}
        height={`${bounds.height}px`}
        display="flex"
        justifyContent="center"
      >
        <Box position="fixed" ref={ref} bg="transparent">
          <PeopleList duration={1} enableActiveMode data={data} />
        </Box>
      </Box>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1, delay: 1 }}
      >
        <Box
          display="flex"
          justifyContent="center"
          p={[10, 10, 20]}
          background="paper"
          borderRadius="lg"
        >
          {people?.md && <MDProvider src={people?.md} />}
        </Box>
      </motion.div>
    </Fragment>
  );
};

export default ThanksList;
