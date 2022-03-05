import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import ViewPost from './pages/ViewPost';
import About from './pages/About';
import Posts from './pages/Posts';
import Login from './pages/Login';

import { fakeAuth } from './services/fakeApi';

import Admin from './pages/Dashboards/Admin';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={ViewPost} />
      <Route exact path="/about" component={About} />

      <PrivateRoute path="/dashboard">
        <Admin />
      </PrivateRoute>
    </Switch>
  );
};

function PrivateRoute({ children, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Routes;
