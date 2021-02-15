import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { peopleListData } from '../data';
import { PeopleList, PeopleItem } from '@src/components';
import { useMeasure } from '@src/hooks';

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
      path: `/proposeData/thanksList/${item.name}/`,
      isActive: item.name === name,
    };
  });

  return (
    <Box>
      <Box
        mb={[5, 5, 10]}
        height={`${bounds.height}px`}
        display="flex"
        justifyContent="center"
      >
        <Box position="fixed" ref={ref}>
          <PeopleList duration={1} enableActiveMode data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default ThanksList;
