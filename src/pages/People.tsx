import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { peopleListData } from '@src/data/people';
import { CardList } from '@src/components';

function findPeople(name: string) {
  return peopleListData.find((item) => item.name === name);
}

const People: FC = () => {
  const { name } = useParams<{ name: string }>();
  const people = findPeople(name);

  return (
    <Fragment>
      <div>{people?.name || 'Not found'}</div>
      <CardList duration={1} activeItem={name} enableActiveMode />
    </Fragment>
  );
};

export default People;
