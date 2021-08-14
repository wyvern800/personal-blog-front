import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './views/Home';
import Article from './views/Article';
import About from './views/About';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/articles/:id" exact component={Article} />
        <Route path="/about" component={About}/>
        {/**<Route path="/characters" exact component={Character} />**/}
    </Switch>
  );
}
