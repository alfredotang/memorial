import { FC } from 'react';
import { SimpleGrid, Box, PositionProps } from '@chakra-ui/react';
import { PhotoAlbum, PeopleList, PeopleItem } from '@src/components';
import BannerImg from '@src/assets/images/banner/proposeDay.jpg';
import ProposeDayMd from './contents/md/proposeDay.md';
import { useMeasure, useRWD } from '@src/hooks';
import { peopleListData } from './contents/data';

type BottomVariants = PositionProps['bottom'];

const ProposeDay: FC = () => {
  const { ref, bounds } = useMeasure();
  const bottom = useRWD<BottomVariants>(['15px', '15px', '30px']);

  const data: PeopleItem[] = peopleListData.map((item) => {
    return {
      name: item.name,
      src: item.src,
      alt: item.alt,
      path: `/proposeDay/thanksList/${item.name}/`,
      isActive: false,
    };
  });

  return (
    <SimpleGrid
      column={2}
      display="flex"
      flexDirection="column"
      spacing={[5, 5, 10]}
    >
      <PhotoAlbum imgSrc={BannerImg} imgAlt="proposeDay" mdSrc={ProposeDayMd} />
      <Box height={`${bounds.height}px`} display="flex" justifyContent="center">
        <Box position="fixed" ref={ref} bottom={bottom}>
          <PeopleList delay={1} duration={1} data={data} />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default ProposeDay;
