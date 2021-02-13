import { lazy, LazyExoticComponent, FunctionComponent } from 'react';

interface Routes {
  component: LazyExoticComponent<FunctionComponent>;
  path: string;
  exact: boolean;
  name: string;
}

const routes: Routes[] = [];

export { routes };
export type { Routes };
