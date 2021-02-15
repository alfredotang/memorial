import { FC } from 'react';
import { Card } from '@src/components';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { peopleListData } from '@src/data/people';

type Props = {
  activeItem?: string;
  enableActiveMode?: boolean;
  duration?: number;
  delay?: number;
};

const CardList: FC<Props> = ({
  duration,
  delay,
  activeItem,
  enableActiveMode = false,
}) => {
  return (
    <Box display="flex" justifyContent="center">
      <SimpleGrid
        spacing={[5, 5, 10]}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {peopleListData.map((item) => (
          <Card
            key={item.alt}
            src={item.src}
            alt={item.alt}
            redirectTo={`/proposeDay/thanksList/${item.name}/`}
            isActive={activeItem ? item.name === activeItem : true}
            enableActiveMode={enableActiveMode}
            duration={duration}
            delay={delay}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CardList;
