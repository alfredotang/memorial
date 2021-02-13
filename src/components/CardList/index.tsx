import { FC } from 'react';
import Card from '../Card';
import { SimpleGrid } from '@chakra-ui/react';
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
          isActive={activeItem ? item.name === activeItem : true}
          enableActiveMode={enableActiveMode}
          duration={duration}
          delay={delay}
        />
      ))}
    </SimpleGrid>
  );
};

export default CardList;
