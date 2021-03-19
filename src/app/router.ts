import { lazy, LazyExoticComponent, FunctionComponent } from 'react';

const Home = lazy(() => import('@src/pages'));
const ProposeDay = lazy(() => import('@src/pages/ProposeDay'));
const ThanksList = lazy(() => import('@src/pages/ProposeDay/ThanksList'));

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
    component: ProposeDay,
    path: '/proposeDay',
    exact: true,
    name: 'proposeDay',
  },

  {
    component: ThanksList,
    path: '/proposeDay/thanksList/:name',
    exact: false,
    name: 'proposeDay-thanksList',
  },
];

export { routes };
export type { Routes };
