import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ViewPost from './pages/ViewPost';
import About from './pages/About';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Logout from './pages/Logout';

import Main from './components/Main';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticate = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />

    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/:id" component={ViewPost} />
    <Route exact path="/about" component={About} />

    <Route path="/dashboard" component={Main} />
  </Switch>
);

export const PrivateRoutes = ({ userObjectData }: any) => (
  <>
    {userObjectData['type_user'] === 'admin' && (
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    )}
  </>
);

export default Routes;
