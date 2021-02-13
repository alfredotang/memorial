import { lazy, LazyExoticComponent, FunctionComponent } from 'react';

const Home = lazy(() => import('@src/pages'));
const People = lazy(() => import('@src/pages/People'));

interface Routes {
  component: LazyExoticComponent<FunctionComponent>;
  path: string;
  exact: boolean;
  name: string;
}

const routes: Routes[] = [
  {
    component: Home,
    path: '/',
    exact: true,
    name: 'home',
  },

  {
    component: People,
    path: '/people/:name',
    exact: false,
    name: 'people',
  },
];

export { routes };
export type { Routes };
