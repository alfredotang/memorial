import { FC } from 'react';
import { People } from '@src/components';
import { SimpleGrid, Box } from '@chakra-ui/react';

export interface PeopleItem {
  src: string;
  alt: string;
  path?: string;
  isActive: boolean;
}

type Props = {
  enableActiveMode?: boolean;
  duration?: number;
  delay?: number;
  data: PeopleItem[];
};

const PeopleList: FC<Props> = ({
  duration,
  delay,
  enableActiveMode = false,
  data,
}) => {
  return (
    <Box display="flex" justifyContent="center" bg="transparent">
      <SimpleGrid
        spacing={[5, 5, 10]}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        bg="transparent"
      >
        {data.map((item) => (
          <People
            key={item.alt}
            src={item.src}
            alt={item.alt}
            redirectTo={item.path}
            isActive={item.isActive}
            enableActiveMode={enableActiveMode}
            duration={duration}
            delay={delay}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PeopleList;
