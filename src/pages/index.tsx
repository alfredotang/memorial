import { FC, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Fragment>
      {/* TODO: 待 home page 開發完成 ， 先 redirect 到 proposeDay*/}
      <Redirect to="/proposeDay" />
      <div>Home</div>
    </Fragment>
  );
};

export default Home;
