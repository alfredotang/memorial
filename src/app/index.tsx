import { FC, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@src/theme';
import { Layout } from '@src/components';
import { useAutoScrollToTop } from '@src/hooks';
import { routes } from './router';

const App: FC = () => {
  useAutoScrollToTop();
  return (
    <ThemeProvider>
      <Switch>
        <Layout>
          <Suspense fallback="">
            {routes.map((route) => (
              <Route
                key={route.name}
                component={route.component}
                exact={route.exact}
                path={route.path}
              />
            ))}
            <Route>
              <Redirect to="/" />
            </Route>
          </Suspense>
        </Layout>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
