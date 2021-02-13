import { lazy, LazyExoticComponent, FunctionComponent } from 'react';

const Home = lazy(() => import('@src/pages'));

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
];

export { routes };
export type { Routes };
