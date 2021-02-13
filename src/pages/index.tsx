import { FC, Fragment } from 'react';
import { Banner, CardList } from '@src/components';

const Home: FC = () => {
  return (
    <Fragment>
      <Banner />
      <CardList delay={1} duration={1} />
    </Fragment>
  );
};

export default Home;
