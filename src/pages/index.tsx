import { FC } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Banner, Card } from '@src/components';
import { peopleListData } from '@src/data/people';

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <SimpleGrid
        column={4}
        spacing={10}
        display="flex"
        flexWrap="wrap"
        margin="auto"
      >
        {peopleListData.map((item) => (
          <Card
            key={item.alt}
            src={item.src}
            alt={item.alt}
            redirectTo={`/people/${item.name}`}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
