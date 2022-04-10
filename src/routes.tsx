import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import ViewPost from './pages/ViewPost';
import About from './pages/About';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

import Main from './components/Main';
import Profile from './pages/Profile';
import Overview from './pages/AdminArea/Overview';
import PostsList from './pages/AdminArea/Posts/List';
import PostsNew from './pages/AdminArea/Posts/New';
import PostsEdit from './pages/AdminArea/Posts/Edit';
import NotFound from './pages/NotFound';
import ProfileOther from './pages/ProfileOther';

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
    <Route exact path="/register" component={Register} />
    <Route exact path="/logout" component={Logout} />

    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/:id" component={ViewPost} />
    <Route exact path="/about" component={About} />

    <Route exact path="/profile/:username" component={ProfileOther} />

    {/* Rotas privadas */}
    <PrivateRoute path="/profile" component={Main} />
    <PrivateRoute path="/admin" component={Main} />

    <Route component={NotFound} />
  </Switch>
);

export const PrivateRoutes = ({ userObjectData }: any) => (
  <>
    {userObjectData['type_user'] === 'admin' && (
      <>
        <PrivateRoute exact path="/admin" component={Overview} />
        <PrivateRoute exact path="/admin/posts" component={PostsList} />
        <PrivateRoute exact path="/admin/posts/new" component={PostsNew} />
        <PrivateRoute exact path="/admin/posts/edit/:postId" component={PostsEdit} />
      </>
    )}
    <PrivateRoute exact path="/profile" component={Profile} />
  </>
);

export default Routes;
