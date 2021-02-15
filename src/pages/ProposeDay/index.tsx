import { FC } from 'react';
import { SimpleGrid, Box, PositionProps } from '@chakra-ui/react';
import { Banner, CardList } from '@src/components';
import BannerImg from '@src/assets/images/banner/proposeDay.jpg';
import ProposeDayMd from './proposeDay.md';
import { useMeasure, useRWD } from '@src/hooks';

type BottomVariants = PositionProps['bottom'];

const ProposeDay: FC = () => {
  const { ref, bounds } = useMeasure();
  const bottom = useRWD<BottomVariants>(['15px', '15px', '30px']);
  return (
    <SimpleGrid
      column={2}
      display="flex"
      flexDirection="column"
      spacing={[5, 5, 10]}
    >
      <Banner imgSrc={BannerImg} imgAlt="proposeDay" mdSrc={ProposeDayMd} />
      <Box height={`${bounds.height}px`} display="flex" justifyContent="center">
        <Box position="fixed" ref={ref} bottom={bottom}>
          <CardList delay={1} duration={1} />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default ProposeDay;
