import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/about" component={About}/>
    </Switch>
  );
}

export default Routes;
