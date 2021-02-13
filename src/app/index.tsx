import { FC, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@src/theme';
import { Layout } from '@src/components';
import { routes } from './router';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Router basename="memorial">
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
      </Router>
    </ThemeProvider>
  );
};

export default App;
