import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { peopleListData } from '@src/data/people';
import { CardList } from '@src/components';
import { useMeasure } from '@src/hooks';

function findPeople(name: string) {
  return peopleListData.find((item) => item.name === name);
}

const ThanksList: FC = () => {
  const { name } = useParams<{ name: string }>();
  const people = findPeople(name);
  const { ref, bounds } = useMeasure();

  return (
    <Box>
      <Box mb={[5, 5, 10]} height={`${bounds.height}px`}>
        <Box position="fixed" ref={ref}>
          <CardList duration={1} activeItem={name} enableActiveMode />
        </Box>
      </Box>
    </Box>
  );
};

export default ThanksList;
