import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import ViewPost from './pages/ViewPost';
import About from './pages/About';
import Posts from './pages/Posts';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={ViewPost} />
        <Route exact path="/about" component={About}/>
    </Switch>
  );
}

export default Routes;
