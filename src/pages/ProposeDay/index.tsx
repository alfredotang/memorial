import { FC, Fragment } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Banner, CardList } from '@src/components';

const ProposeDay: FC = () => {
  return (
    <SimpleGrid
      column={2}
      display="flex"
      flexDirection="column"
      spacing={[5, 5, 10]}
    >
      <Banner />
      <CardList delay={1} duration={1} />
    </SimpleGrid>
  );
};

export default ProposeDay;
