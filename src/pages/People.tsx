import { FC } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { peopleListData } from '@src/data/people';

function findPeople(name: string) {
  return peopleListData.find((item) => item.name === name);
}

const People: FC = () => {
  const { name } = useParams<{ name: string }>();
  const people = findPeople(name);
  return <div>{people?.name || 'Not found'}</div>;
};

export default People;
