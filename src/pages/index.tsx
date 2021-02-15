import { FC, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Fragment>
      <Redirect to="/proposeDay" />
      <div>Home</div>
    </Fragment>
  );
};

export default Home;
